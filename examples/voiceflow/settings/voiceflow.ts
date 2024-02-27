import { mainRequester as makeRequest } from "speedybot";
import { $Magic } from "speedybot";
// todo: tidy types up
// https://www.voiceflow.com/api/dialog-manager

export class VFHelper {
  private BASE_URL = "https://general-runtime.voiceflow.com"; // <<-- Change this if using a private instance
  private API_PREFIX = "https://api.voiceflow.com/v3alpha";
  public static submitLabel = "VF_TAP_BUTTON";
  public static fallbackText =
    "Sorry, it appears your client does not support Adaptive Cards";
  constructor(
    public apiKey: string,
    private config: VF_HELPER_CONFIG = {
      throwOnError: true,
      version: "production",
    }
  ) {}

  public async req<T = any>(payload: {
    url: string;
    data?: T;
    method?: string;
  }) {
    try {
      const { url, data } = payload;
      const res = await makeRequest(`${this.BASE_URL}${url}`, data || {}, {
        headers: { Authorization: this.apiKey, versionId: this.config.version },
        method: (payload.method || "POST") as
          | "POST"
          | "PUT"
          | "GET"
          | "DELETE"
          | "HEAD"
          | "PATCH"
          | undefined,
      });
      if (!res.ok) {
        const json = await res.json();
        if (typeof json === "object" && "name" in json) {
          if (json.name === "verror") {
            throw new Error(json.message);
          }
        }
      } else {
        return res;
      }
    } catch (e) {
      throw e;
    }
  }

  public async launch(sessionId: string) {
    try {
      const response = (await this.req({
        url: `/state/user/${sessionId}/interact`,
        data: { action: { type: "launch" } },
      })) as Response;
      const data = await response.json();
      return data;
    } catch (err) {
      return this.handleErr(err);
    }
  }

  public async saveTheData(
    sessionId: string,
    data: {
      [key: string]: string | number | boolean;
    }
  ) {
    try {
      const response = (await this.req({
        url: `/state/user/${sessionId}/variables`,
        data,
        method: "PATCH",
      })) as Response;
      const json = await response.json();
      return json;
    } catch (err) {
      return this.handleErr(err);
    }
  }

  public async send(text: string, sessionId: string) {
    try {
      const response = (await this.req({
        url: `/state/user/${sessionId}/interact`,
        data: { action: { type: "text", payload: text } },
      })) as Response;

      const data = await response.json();
      return data;
    } catch (err) {
      return this.handleErr(err);
    }
  }

  public async clickButton(sessionId: string, pathOrButtonId: string) {
    const data = {
      action: {
        type: pathOrButtonId,
      },
    };

    try {
      const response = (await this.req({
        url: `/state/user/${sessionId}/interact`,
        data,
      })) as Response;
      const json = await response.json();
      return json;
    } catch (err) {
      return this.handleErr(err);
    }
  }

  public async clickIntent(sessionId: string, intent: string) {
    // action/no action
    // change intent into name format
    const data = {
      action: {
        type: "intent",
        payload: {
          intent: {
            name: intent,
          },
        },
      },
    };
    try {
      const response = (await this.req({
        url: `/state/user/${sessionId}/interact`,
        data,
      })) as Response;
      const json = await response.json();
      return json;
    } catch (err) {
      return this.handleErr(err);
    }
  }

  public simplifyText(textPayload: VF_TEXT): SimpleText {
    const contentNodes = textPayload.payload.slate.content;
    const text: string[] = [];
    contentNodes.forEach((node) => {
      const { children } = node;
      children.forEach((child) => {
        if (child.url) {
          let label = child.url;
          if (child.children) {
            const [firstSubChild] = child.children;
            if (firstSubChild.text) {
              label = firstSubChild.text;
            }
          }
          text.push(`<a href="${child.url}">${label}</a>`);
        } else if (child.text) {
          if (child.text.includes("\n")) {
            const extractNewlines = (text: string) => {
              const lines = text.split("\n");
              return lines.join("\n");
            };
            text.push(extractNewlines(child.text));
          } else {
            text.push(child.text);
          }
        }
      });
    });

    return {
      // text: text.join(' ')
      text: text.join(`

`),
    };
  }

  public simplifyImage(image: VF_IMAGE) {
    return {
      url: image.payload.image,
    };
  }

  public simplifyResponse(
    payload: (
      | VF_TEXT
      | VF_CARD_ENVELOPE
      | VF_CHOICES
      | VF_IMAGE
      | VF_CAROUSEL
    )[]
  ): SimplifiedResponse {
    const text: SimpleText[] = [];
    const images: SimpleImage[] = [];
    const cards: SimpleCard[] = [];
    const choices: SimpleChoice[] = [];
    let hasEnd = false;
    payload.forEach((trace) => {
      if (trace.type === "text") {
        text.push(this.simplifyText(trace as VF_TEXT));
      }

      if (trace.type === "visual") {
        images.push(this.simplifyImage(trace as VF_IMAGE));
      }

      if (trace.type === "cardV2") {
        cards.push(this.simplifyCard(trace.payload as VF_CARD));
      }

      if (trace.type === "carousel") {
        const carouselCards = this.simplifyCarousel(trace as VF_CAROUSEL);
        cards.push(...carouselCards);
      }

      if (trace.type === "choice") {
        choices.push(this.simplifyChoice(trace as VF_CHOICES));
      }

      if (trace.type === "end") {
        hasEnd = true;
      }
    });
    return {
      text,
      cards,
      choices,
      images,
      hasEnd,
    };
  }

  public simplifyChoice(choice: VF_CHOICES): SimpleChoice {
    const { buttons } = choice.payload;
    return {
      buttons: buttons.map((button) => this.simplifyButton(button)),
    };
  }

  public simplifyCarousel(carousel: VF_CAROUSEL) {
    return carousel.payload.cards.map((card) => this.simplifyCard(card));
  }

  public simplifyCard(card: VF_CARD): SimpleCard {
    return {
      title: card.title,
      description: card.description?.text,
      image: card.imageUrl,
      buttons: card.buttons?.map((button) => this.simplifyButton(button)),
    };
  }

  public simplifyButton(button: VF_BUTTON): SimpleButton {
    const { payload } = button.request;
    const urlData = {
      hasUrl: false,
      url: "",
    };

    const intentData = {
      hasIntent: false,
      intent: "",
    };

    if (payload.intent) {
      intentData.hasIntent = true;
      intentData.intent = payload.intent.name;
    }

    // NOTE: only accepting/processing open_url from actions for now
    if (payload.actions.length) {
      payload.actions.forEach((action) => {
        const { type, payload: actionPayload } = action;
        if (type === "open_url") {
          urlData.hasUrl = true;
          urlData.url = actionPayload.url;
        }
      });
    }
    return {
      label: payload.label,
      ...(intentData.hasIntent && { id: intentData.intent }),
      id: intentData.hasIntent ? intentData.intent : button.request.type,
      ...(urlData.hasUrl && { url: urlData.url }),
      ...(intentData.hasIntent && { intent: intentData.intent }),
    };
  }

  handleErr(err: any) {
    console.log("errz", err);
    const shouldThrow = this.config.throwOnError;
    let msg = err;
    if (err.response?.status === 500) {
      msg = `It appears your Voiceflow API token is not set or is expired. See settings/voiceflow.json`;
      // Or for not deployed to prod
    }
    if (err.response?.status === 400) {
      msg = err.response.data.message;
    }
    if (shouldThrow) {
      throw new Error(msg);
    } else {
      console.log("Error", msg);
    }
  }

  /**
   * We may not even need these helpers
   * @param candidate
   * @returns
   */
  public isPath(candidate: string) {
    return candidate.includes("path-");
  }

  public isButton(candidate: string) {
    return candidate.includes("button-");
  }

  public isClickable(candidate: string) {
    return this.isPath(candidate) || this.isButton(candidate);
  }

  // url, pdf, txt, docx, all

  public async kbListDocs(options?: {
    page?: number;
    limit?: number;
    documentType?: "url" | "pdf" | "txt" | "docx" | "all";
  }): Promise<KBDocRes | undefined> {
    try {
      const baseUrl = `${this.API_PREFIX}/knowledge-base/docs`;
      let url = `${baseUrl}`;

      if (options) {
        const queryParams = new URLSearchParams();

        if (options.page) {
          queryParams.append("Pagination", `page=${options.page}`);
        }

        if (options.limit) {
          queryParams.append("limit", String(options.limit));
        }

        if (options.documentType) {
          queryParams.append("documentType", options.documentType);
        }
        // const url = `${baseUrl}?${queryParams.toString()}`;
        url = `${baseUrl}?${queryParams.toString()}`;
      }

      const response = await fetch(url, {
        method: "GET",
        headers: {
          authorization: this.apiKey,
        },
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }
      const json = await response.json();
      return json as unknown as KBDocRes;
    } catch (error) {
      this.handleErr(error);
    }
  }

  private detector(fileName: string): string {
    const parts = fileName.split(".");
    const extension = parts[parts.length - 1];

    // Convert the extension to lowercase for case-insensitive comparison.
    const lowercasedExtension = extension.toLowerCase();

    // Check the extension to determine the file type.
    if (lowercasedExtension === "pdf") {
      return "application/pdf";
    } else if (lowercasedExtension === "txt") {
      return "text/plain";
    } else if (
      lowercasedExtension === "doc" ||
      lowercasedExtension === "docx"
    ) {
      return "application/msword";
    } else {
      // If the extension doesn't match any of the expected types, you can return a default value or handle it as needed.
      return "unknown";
    }
  }

  public async kbUploadURL(
    url: string,
    name: string,
    tags?: string[]
  ): Promise<KbDocument> {
    let targetURL = `${this.API_PREFIX}/knowledge-base/docs/upload`;

    if (tags?.length) {
      targetURL = `${targetURL}?tags=${JSON.stringify(tags)}`;
    }
    const headers = {
      Authorization: `${this.apiKey}`,
      "content-type": "application/json",
    };

    const response = await fetch(targetURL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        data: {
          type: "url",
          url,
          name: url,
        },
      }),
      // body: JSON.stringify({
      //   type: "url",
      //   url,
      //   name,
      // }),
    });

    console.log("Rawdawg", response);

    if (!response.ok) {
      // const text = await response.text();
      const json = await response.json();
      console.log("Rawdeag", json);
      throw new Error(`File upload failed with status ${response.status}`);
    }

    const json = await response.json();
    console.log("#", json);
    return json as unknown as KbDocument;
  }

  public async kbUploadDoc(
    fileName: string,
    fileData: Uint8Array | Buffer,
    tags?: string[]
  ): Promise<KbDocument> {
    let url = `${this.API_PREFIX}/knowledge-base/docs/upload`;

    if (tags?.length) {
      url = `${url}?tags=${JSON.stringify(tags)}`;
    }
    const queryParams = new URLSearchParams({
      maxChunkSize: "1000",
      overwrite: "false",
    });

    const headers = {
      Authorization: `${this.apiKey}`,
    };

    const formData = new FormData();

    const blob = new Blob([fileData], {
      type: this.detector(fileName),
    });

    formData.append("file", blob, fileName);
    const response = await fetch(`${url}?${queryParams}`, {
      method: "POST",
      headers: headers,
      body: formData,
    });

    if (!response.ok) {
      const json = await response.json();
      console.log("Error:", json);
      throw new Error(`File upload failed with status ${response.status}`);
    }
    const json = await response.json();
    return json as unknown as KbDocument;
  }

  public async kbDeleteDoc(documentId: string): Promise<boolean> {
    const url = `${this.API_PREFIX}/knowledge-base/docs/${documentId}`;
    const headers = {
      Authorization: this.apiKey,
    };
    const response = await fetch(url, {
      method: "DELETE",
      headers: headers,
    });

    if (!response.ok) {
      throw new Error(
        `File delete failed with status ${response.status} (${response.text})`
      );
    }
    if (response.status === 200) {
      return true;
    } else {
      return false;
    }
  }

  public async transactData<T = any>(
    sessionId: string,
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH" = "POST",
    payload?: T
  ) {
    try {
      const config = {
        headers: {
          Authorization: this.apiKey,
          versionId: this.config.version,
        },
        method,
      };
      const response = await fetch(`${this.BASE_URL}/state/user/${sessionId}`, {
        ...config,
        ...(payload && { body: JSON.stringify(payload) }),
      });
      const data = await response.json();
      return data;
    } catch (err) {
      return this.handleErr(err);
    }
  }

  public async saveData<T = any>(key: string, value: T, sessionId: string) {
    // This is not ready for serious use yet
    // Bummer-- we'll need to do 2 transactions since stack/variables required
    // https://www.voiceflow.com/api/dialog-manager#tag/API-Reference/operation/postState
    // Otherwise it can destroy conversational state :/
    // Note: no access to stack/variables
    type rawConversation = {
      stack: any[];
      storage: any;
      variables: any;
    };
    type VFError = {
      name: string;
      message: string;
      requestID: string;
    };
    const res = await this.getData<rawConversation | VFError>("*", sessionId);

    if (res && "message" in res) {
      if (
        res.message?.toLowerCase().includes("was not published to production")
      ) {
        throw new Error("You need to publish project to production");
      }
    }
    if (res && "stack" in res) {
      const { stack, storage, variables } = res;
      const [, second] = stack;
      const payload = {
        storage: {
          ...storage,
          [key]: value,
        },
        stack: [second],
        variables,
      };
      return await this.transactData(sessionId, "PUT", payload);
    }
  }

  public async deleteData(key: string, sessionId: string) {
    return this.saveData(key, null, sessionId);
  }

  public async getData<T = any>(
    key: string,
    sessionId: string
  ): Promise<T | null> {
    const data = await this.transactData(sessionId, "GET");
    if (key === "*") {
      return data;
    } else {
      return data.variables ? data.variables[key] || null : null;
    }
  }
}

// Helpers for VF
export const VF_SUBMIT_LABEL = VFHelper.submitLabel;
export const VF_SUBMIT_LABEL_INTENT = VF_SUBMIT_LABEL + "__INTENT";
export const FALLBACK_TEXT = VFHelper.fallbackText;

export const choiceHandler = async (
  bot: $Magic,
  simpleChoices: SimpleChoice
) => {
  cardHandler(bot, { buttons: simpleChoices.buttons });
};
export const cardHandler = async ($bot: $Magic, simpleCard: SimpleCard) => {
  const { title, description, image, buttons = [] } = simpleCard;
  const card = $bot.card({
    ...(title && { title }),
    ...(description && { subTitle: description }),
    ...(image && { image }),
  });
  buttons.forEach((button) => {
    if ("url" in button && typeof button.url === "string") {
      const { url, label } = button;
      card.addText($bot.buildLink(url, label || url));
    } else {
      const { id, label, intent } = button;
      card.addChip(
        { title: label, value: id },
        intent ? VF_SUBMIT_LABEL_INTENT : VF_SUBMIT_LABEL
      );
    }
  });
  await $bot.send(card);
};

export async function processResponse(
  $bot: $Magic,
  payload: SimplifiedResponse
): Promise<boolean> {
  const { text, cards, choices, images } = payload;
  // Text first
  for (const textObj of text) {
    await $bot.send(textObj.text);
  }

  for (const imageObj of images) {
    await $bot.send($bot.card().addImage(imageObj.url));
  }

  for (const cardObj of cards) {
    await cardHandler($bot, cardObj);
  }

  for (const choiceObj of choices) {
    await choiceHandler($bot, choiceObj);
  }

  return true;
}

export type VF_TEXT<T = any> = {
  type: string; // "text"
  message: string;
  payload: {
    slate: {
      id: string;
      content: {
        children: {
          text: string;
          url?: string;
          children?: {
            text: string;
            color: {
              r: number;
              g: number;
              b: number;
              a: 1;
            };
            underline: boolean;
          }[];
        }[];
      }[];
    };
    message: string;
  };
};

export type SimpleText = {
  text: string;
};

export type VF_IMAGE = {
  type: string; // "visual";
  payload: {
    visualType: "image";
    image: string;
    dimensions: {
      width: number;
      height: number;
    };
    canvasVisibility: boolean;
  };
};
export type SimpleImage = {
  url: string;
};

export type VF_PATH<T = any> = {
  name: string;
  request: {
    type: string; // ex. path-aabbcdd
    payload: {
      label: string;
      actions: T[];
    };
  };
};

export type VF_URL = {
  type: "open_url";
  payload: {
    url: string;
  };
};

export type VF_BUTTON<T = any> = {
  request: {
    payload: {
      actions: (VF_ACTION_URL | T)[];
      label: string;
      intent?: {
        name: string;
      };
    };
    type: string; // 'button-a-7rcx3h4m' | 'action' | 'path-aaabbcc' | 'intent'
  };
  name?: string;
};

export type VF_ACTION_URL = {
  type: "open_url";
  payload: {
    url: string;
  };
};
export type SimpleButton = {
  label: string;
  id: string;
  url?: string;
  intent?: string;
};

export type VF_CARD = Partial<{
  imageUrl: string;
  description: {
    text: string;
  };
  title: string;
  buttons: VF_BUTTON[];
}>;
export type VF_CARD_ENVELOPE = {
  type: "cardV2";
  payload: VF_CARD;
};

export type SimpleCard = Partial<{
  title: string | undefined;
  description: string | undefined;
  image: string | undefined;
  buttons: SimpleButton[] | undefined;
}>;

export type VF_CAROUSEL = {
  type: string; // "carousel"
  payload: {
    cards: VF_CARD[];
  };
};

export type VF_CHOICES = {
  type: string; // "choice"
  payload: {
    buttons: VF_BUTTON[];
  };
};

export type VF_END = {
  type: "end";
};
export type SimpleChoice = {
  buttons: SimpleButton[];
};

// export type TypeKeys = "url" | "text_chips" | "image" | "text" | "path_button";

// export type SimplifiedResponse = {
//   type: TypeKeys;
//   value: string | string[] | { label: string; pathId: string }[];
// };

export type SimplifiedResponse = {
  text: SimpleText[];
  choices: SimpleChoice[];
  cards: SimpleCard[];
  images: SimpleImage[];
  hasEnd?: boolean;
};

export type VF_HELPER_CONFIG = {
  throwOnError: boolean;
  version: string; // 'production' | 'development'
};

export type KbDocument = {
  documentID: string;
  tags: string[];
  data: {
    type: KBDocTypes;
    name: string;
    updatedAt: string;
    status: {
      type: string; // PENDING |
      data: unknown;
    };
  };
};

// export type KB

export type KBDocTypes = "url" | "pdf" | "text" | "docx"; // not txt

export type KBDocRes = {
  total: number;
  data: KbDocument[];
};

export type KbDocumentWithUrl = KbDocument & {
  data: KbDocument["data"] & {
    url: string;
  };
};

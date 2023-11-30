import { CONSTANTS, Card } from "./index";
import { AttachedData } from "./types";
export type AbbreviatedSpeedyCard = {
  title: string;
  subTitle: string;
  image: string;
  url: string;
  urlLabel: string;
  data: AttachedData;
  chips: (string | { title: string; value?: string })[];
  table: string[][] | { [key: string]: string };
  choices: (string | number)[];
  backgroundImage: string;
};
export const checkers = {
  isSpeedyCard(input: SpeedyCard | object): boolean {
    return (
      typeof input === "object" &&
      "build" in input &&
      typeof input.build === "function"
    );
  },
  isCard(cardCandidate: any | SpeedyCard): boolean {
    if (this.isSpeedyCard(cardCandidate)) {
      return true;
    }
    return (
      "$schema" in cardCandidate &&
      "type" in cardCandidate &&
      "version" in cardCandidate
    );
  },
  isEmail(candidate: string) {
    // Only really care about joe@joe.com joe@joe.joe.com joe@a.io
    // Should probably get a Regex @ some point... // https://fightingforalostcause.net/content/misc/2006/compare-email-regex.php
    const res = candidate.includes("@") && candidate.includes(".");
    return res;
  },
};

export type SurveyQuestionType =
  | "text"
  | "single-select"
  | "multi-select"
  | "picker-dropdown"
  | "picker-date"
  | "picker-time"
  | "textarea";

export type SurveyQuestion = {
  type: SurveyQuestionType;
  question: string;
  choices?: (string | number)[]; // Relevant for 'single-select', 'multi-select', 'picker-dropdown'
  id?: string;
};

export interface BaseConfig {
  title?: string;
  titleConfig?: Partial<TextBlock>;
  choices?: string[];
  buttons?: string[];
}

export interface BaseOpts {
  horizontalAlignment?: AlignmentChoices;
  size?: SizeChoices;
}

export interface ChoiceOption {
  title: string;
  value: string | number;
}

export interface ChoiceBlock {
  type?: string; // "Input.ChoiceSet"
  id?: string;
  value?: string;
  isMultiSelect?: boolean;
  isVisible?: boolean;
  choices?: ChoiceOption[];
}

export interface TextBlock extends BaseOpts {
  type: "TextBlock";
  text: string;
  color?: ColorChoices;
  fontType?: string;
  isSubtle?: boolean;
  weight: "Lighter" | "Default" | "Bolder";
  wrap?: boolean;
}

export interface ImageBlock extends BaseOpts {
  type: "Image";
  url: string;
  selectAction?: {
    type: string;
    style?: string;
    isPrimary?: boolean;
    url: string;
  };
}

export interface LinkButton {
  type: "Action.OpenUrl";
  title: string;
  url: string;
  style?: "positive" | "destructive";
}

export interface inputConfig {
  id?: string;
  placeholder?: string;
  isMultiline?: boolean;
}

export interface Fact {
  title: string;
  value: string;
}
export interface FactSet {
  type: "FactSet";
  facts: Fact[];
}

export type HeaderConfig = {
  iconURL?: string;
  backgroundColor?: ColorChoices;
  rtl?: boolean;
  iconAlignment?: AlignmentChoices;
  iconWidth?: number;
  iconRound?: boolean;
  textSize?: SizeChoices;
  textAlign?: AlignmentChoices;
  textColor?: ColorChoices;
};

// export type SelectOpts = (string | number)[] | { title: string; value: string };

type LazyCardSpec = {
  $schema: string;
  type: string;
  version: string;
  body: unknown[];
  actions?: any[];
  backgroundImage?: string;
};

type TextBlockConfig = {
  type: "TextBlock";
  color: ColorChoices;
  fontType: string;
  isSubtle: boolean;
  size: SizeChoices;
  weight: "Lighter" | "Default" | "Bolder";
  wrap: boolean;
};

export type SizeChoices =
  | "Small"
  | "Default"
  | "Medium"
  | "Large"
  | "ExtraLarge"
  | "Stretch";

export type AlignmentChoices = "Left" | "Center" | "Right";

export type BaseColors =
  | "Default"
  | "Dark"
  | "Light"
  | "Accent"
  | "Good"
  | "Warning"
  | "Attention";
export type SimpleColor = "blue" | "red" | "green" | "yellow"; // subject to change :/
export type ColorChoices =
  | "Default"
  | "Dark"
  | "Light"
  | "Accent"
  | "Good"
  | "Warning"
  | "Attention"
  | "blue"
  | "red"
  | "green"
  | "yellow";
export type VAlignChoices = "Bottom" | "Center" | "Top";

export const SpeedyCardId = {
  dropdown: "addPickerDropdown_result",
};
/**
 * Card Builder
 *
 * This is a utility that makes it convenient to build + pass data to Adaptive Cards
 *
 * Note: This extends Adaptive Card functionality to include "chips" which when tapped will trigger your text handling logic
 *
 * You can add "pickers" for date, time, select (and multi-select)
 *
 *
 */
export class SpeedyCard {
  /**
   * @hidden
   */
  public json: LazyCardSpec = {
    $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
    type: "AdaptiveCard",
    version: "1.0",
    body: [],
  };

  public tools = {
    checkColor(candidate: string) {
      const colorMapping: Record<string, BaseColors> = {
        default: "Default",
        dark: "Dark",
        light: "Light",
        accent: "Accent",
        good: "Good",
        warning: "Warning",
        attention: "Attention",
        blue: "Accent",
        red: "Attention",
        green: "Good",
        yellow: "Warning",
      };

      const lowerCaseInput = candidate.toLowerCase();
      return colorMapping[lowerCaseInput] || "Default";
    },
  };

  /**
   * @hidden
   */
  private _stash: {
    needsSubmit: boolean;
    title: string;
    subTitle: string;
    chips: string[];
    data: AttachedData;
    submitLabel: string;
    header?: { type: string; columns: unknown[] };
  } = {
    needsSubmit: false,
    title: "",
    subTitle: "",
    chips: [],
    data: {},
    submitLabel: "Submit",
  };

  /**
   * @hidden
   */
  private id: { [key: string]: number } = {};

  needsSubmit(): boolean {
    return Boolean(this._stash.needsSubmit);
  }
  /**
   * @hidden
   */
  private checkId(id: string = ""): string {
    if (id in this.id) {
      this.id[id]++;
      const num = this.id[id];
      const modifiedId = `${id}_${num}`;
      return modifiedId;
    } else {
      this.id[id] = 1;
      return id;
    }
  }

  constructor() {}

  addTitle(title: string) {
    this._stash.title = title;
    return this;
  }

  addSubtitle(subTitle: string) {
    this._stash.subTitle = subTitle;
    return this;
  }

  addTable(
    input: (string | number)[][] | { [key: string]: string | number },
    separator = false
  ) {
    const payload: {
      type: "FactSet";
      separator: boolean;
      facts: { title: string | number; value: string | number }[];
    } = {
      type: "FactSet",
      separator,
      facts: Array.isArray(input)
        ? input.map(([label, value]) => ({ title: label, value }))
        : Object.entries(input).map(([label, value]) => ({
            title: label,
            value,
          })),
    };
    this.json.body.push(payload);
    return this;
  }

  addChip(
    payload: string | { title: string; value?: string },
    id = CONSTANTS.CHIP_LABEL
  ) {
    return this.addChips([payload], id);
  }

  addChips(
    chips: (string | { title: string; value?: string })[],
    id = CONSTANTS.CHIP_LABEL
  ) {
    const chipPayload = chips.map((chip) => {
      let chipLabel = "";
      let chipAction = "";
      if (typeof chip === "string") {
        chipLabel = chip;
        chipAction = chip;
      } else {
        const { title, value = "" } = chip;
        chipLabel = title;
        if (value) {
          chipAction = value;
        } else {
          chipAction = title;
        }
      }

      const payload = {
        type: "Action.Submit",
        title: chipLabel,
        data: {
          [id]: chipAction,
        },
      };
      return payload;
    });

    this.json.actions = this.json.actions
      ? this.json.actions.concat(chipPayload)
      : chipPayload;
    return this;
  }

  addImage(
    url: string,
    config: {
      size?: SizeChoices;
      align?: AlignmentChoices;
      targetURL?: string;
    } = {}
  ) {
    if (url) {
      const payload: ImageBlock = {
        horizontalAlignment: config.align ?? "Center",
        size: config.size ?? "ExtraLarge",
        type: "Image",
        url,
      };

      if (config.targetURL) {
        const linkPayload = {
          type: "Action.OpenUrl",
          style: "positive",
          isPrimary: true,
          url: config.targetURL,
        };
        payload.selectAction = linkPayload;
      }
      this.json.body.push(payload);
    }
    return this;
  }

  addLink(url: string, label?: string) {
    return this.addText(`**[${label || url}](${url})**`);
  }

  addLinkButton(url: string, label?: string) {
    const id = String(Math.random()).slice(3);
    const cleanId = this.checkId(id);

    const payload = {
      type: "Action.OpenUrl",
      id: cleanId,
      title: label ?? url,
      url: url,
    };
    this.addAction(payload);
    return this;
  }

  addText(
    text: string,
    config: {
      bold?: boolean;
      size?: SizeChoices;
      align?: AlignmentChoices;
      color?: ColorChoices;
      backgroundColor?: ColorChoices;
      vertAlign?: VAlignChoices;
    } = {}
  ) {
    const {
      bold = false,
      size = "Medium",
      align = "Left",
      color,
      backgroundColor,
      vertAlign,
    } = config;
    const payload = {
      type: "TextBlock",
      text: text,
      wrap: true,
      size,
      horizontalAlignment: align,
      ...(color && { color: this.tools.checkColor(color) }),
      ...(bold && { weight: "Bolder" }),
    };

    if (backgroundColor || vertAlign) {
      const containerPayload = {
        type: "Container",
        height: "stretch",
        items: [payload],
        ...(backgroundColor && {
          style: this.tools.checkColor(backgroundColor),
        }),
        ...(color && { color: this.tools.checkColor(color) }),
        ...(vertAlign && {
          verticalContentAlignment: vertAlign,
        }),
      };
      this.json.body.push(containerPayload);
    } else {
      this.json.body.push(payload);
    }
    return this;
  }

  addHeader(text: string, config: HeaderConfig = {}) {
    const textPayload = {
      width: "stretch",
      items: [
        {
          type: "TextBlock",
          text: text,
          wrap: true,
          size: config.textSize || "Large",
          horizontalAlignment:
            config.textAlign ?? config.rtl ? "Right" : "Left",
          ...(config.textColor && {
            color: this.tools.checkColor(config.textColor),
          }),
          verticalContentAlignment: "Center",
          ...(config.backgroundColor && {
            style: this.tools.checkColor(config.backgroundColor),
          }),
        },
      ],
    };

    const iconPayload = config.iconURL
      ? {
          width: "32px",
          items: [
            {
              type: "Image",
              horizontalAlignment: config.iconAlignment ?? "Left",
              url: config.iconURL,
              ...(config.iconRound && { style: "person" }),
              width: `${config.iconWidth ?? "16"}px`,
            },
          ],
        }
      : null;

    const headerPayload: {
      type: string;
      columns: (typeof textPayload | typeof iconPayload)[];
    } = {
      type: "ColumnSet",
      columns: config.rtl
        ? [textPayload, iconPayload].filter(Boolean)
        : [iconPayload, textPayload].filter(Boolean),
    };

    this._stash.header = headerPayload;

    return this;
  }

  addBlock(
    content: string | SpeedyCard,
    config: {
      backgroundColor?: ColorChoices;
      vertAlign?: VAlignChoices;
      separator?: boolean;
    } = {}
  ) {
    if (typeof content === "string") {
      return this.addText(content, config);
    }

    if (content instanceof SpeedyCard) {
      const { backgroundColor, vertAlign } = config;
      const { body } = content.build();

      const containerPayload = {
        ...(config.separator && { separator: config.separator }),
        type: "Container",
        height: "stretch",
        items: body,
        ...(backgroundColor && {
          style: this.tools.checkColor(backgroundColor),
        }),
        ...(vertAlign && {
          verticalContentAlignment: vertAlign,
        }),
      };

      this._stash.needsSubmit = !this._stash.needsSubmit
        ? content.needsSubmit()
        : this._stash.needsSubmit;

      this.json.body.push(containerPayload);
    }

    return this;
  }

  // Add sub card
  addSubcard(card: SpeedyCard | Card, textLabel: string = "") {
    const subCard = {
      type: "Action.ShowCard",
      title: textLabel,
      card:
        "build" in card && typeof card.build === "function"
          ? card.build()
          : card,
    };
    this.addAction(subCard);
    return this;
  }

  // "Pickers"
  addPickerDropdown(
    choices: (string | number | { title: string; value: number | string })[],
    id: string = SpeedyCardId.dropdown
  ) {
    const cleanId = this.checkId(id);
    this._stash.needsSubmit = true;
    const formattedChoices = choices.map((choice, idx) => {
      if (typeof choice === "object") {
        return choice; // {title, val}
      }
      return {
        title: String(choice),
        value: String(choice),
      };
    });
    const payload: ChoiceBlock = {
      type: "Input.ChoiceSet",
      id: cleanId,
      value: "0", // Pick 1st one?
      isMultiSelect: false,
      isVisible: true,
      choices: formattedChoices,
    };
    this.json.body.push(payload);
    return this;
  }

  addSingleSelect(
    choices: (string | number)[] | { title: string; value: string }[],
    id: string = "addSingleSelectresult"
  ) {
    return this.addSelect(choices, id, {
      isMultiSelect: false,
      style: "expanded",
    });
  }

  addMultiSelect(
    choices: (string | number)[] | { title: string; value: string }[],
    id: string = "addMultiSelect_result"
  ) {
    return this.addSelect(choices, id, { isMultiSelect: true });
  }

  /**
   * @hidden
   */
  private addSelect(
    choices: (string | number)[] | { title: string; value: string }[],
    id: string,
    config: {
      isMultiSelect?: boolean;
      style?: string;
    } = {}
  ) {
    this._stash.needsSubmit = true;
    const cleanId = this.checkId(id);

    // Define formattedChoices with a more specific type
    let formattedChoices: { title: string; value: string }[];

    if (Array.isArray(choices) && typeof choices[0] === "string") {
      formattedChoices = (choices as (string | number)[]).map((choice) => ({
        title: String(choice),
        value: String(choice),
      }));
    } else {
      formattedChoices = choices as { title: string; value: string }[];
    }

    const payload: ChoiceBlock & { style?: string } = {
      type: "Input.ChoiceSet",
      id: cleanId,
      value: "0",
      isMultiSelect: Boolean(config.isMultiSelect),
      isVisible: true,
      ...(config.style && { style: "expanded" }),
      choices: formattedChoices,
      style: "expanded",
    };

    this.json.body.push(payload);
    return this;
  }

  addPickerDate(textLabel: string, id: string = "addPickerDate_result") {
    this._stash.needsSubmit = true;
    const cleanId = this.checkId(id);
    const textPayload = this.buildTextPayload(textLabel);
    const datePicker = {
      type: "Input.Date",
      id: cleanId,
    };
    this.json.body.push(textPayload, datePicker);
    return this;
  }

  addPickerTime(textLabel: string, id: string = "addPickerTime_result") {
    this._stash.needsSubmit = true;

    const cleanId = this.checkId(id);
    const textPayload = this.buildTextPayload(textLabel);
    const timePicker = {
      type: "Input.Time",
      id: cleanId,
    };
    this.json.body.push(textPayload, timePicker);
    return this;
  }

  addTextInput(placeholder: string, id = "addTextInput_result") {
    this._stash.needsSubmit = true;

    const cleanId = this.checkId(id);
    const payload = {
      id: cleanId,
      placeholder,
      type: "Input.Text",
    };
    this.json.body.push(payload);
    return this;
  }

  addTextarea(placeholder: string, id = "addTextarea_result") {
    this._stash.needsSubmit = true;
    const cleanId = this.checkId(id);
    const payload = {
      id: cleanId,
      placeholder,
      type: "Input.Text",
      isMultiline: true,
    };
    this.json.body.push(payload);
    return this;
  }

  // Setters
  setBackgroundImage(url: string) {
    this.json.backgroundImage = url;
    return this;
  }

  setSubmitButtonTitle(label: string) {
    this._stash.submitLabel = label;
    return this;
  }

  // Attach "fixed"/static data to go along with the card
  attachData(payload: AttachedData) {
    this._stash.needsSubmit = true;
    this._stash.data = payload;
    return this;
  }

  /**
   * @hidden
   */
  private buildTextPayload(
    text: string,
    textConfig: Partial<TextBlockConfig> = {}
  ) {
    const payload: TextBlock = {
      type: "TextBlock",
      text,
      size: "Medium",
      isSubtle: true,
      wrap: true,
      weight: "Lighter",
      ...textConfig,
    };
    return payload;
  }

  private addAction(a: any) {
    if (!this.json.actions) {
      this.json.actions = [];
    }
    this.json.actions.push(a);
  }

  addDeleteButton(label = CONSTANTS.destroyLabel) {
    return this.addButton(
      label,
      CONSTANTS.submitToken,
      CONSTANTS.action_delete
    );
  }

  addButton(
    label: string,
    id = "button_result",
    attachedData: string | { [key: string]: number | string | boolean } = {}
  ): SpeedyCard {
    const payload = {
      type: "Action.Submit",
      title: label,
      data: {
        [id]: attachedData,
      },
    };
    this.addAction(payload);
    return this;
  }

  survey(questions: SurveyQuestion[], title = "📝 Survey") {
    const card = new SpeedyCard();
    card.addHeader(title);

    questions.forEach((question, idx) => {
      let id = question.id || `question_${idx + 1}`;

      switch (question.type) {
        case "text":
          card.addTextInput(question.question, id);
          break;
        case "single-select":
          card.addText(question.question);
          card.addSingleSelect(question.choices || [], id);
          break;
        case "multi-select":
          card.addText(question.question);
          card.addMultiSelect(question.choices || [], id);
          break;
        case "picker-dropdown":
          card.addText(question.question);
          card.addPickerDropdown(question.choices || [], id);
          break;
        case "picker-date":
          card.addPickerDate(question.question, id);
          break;
        case "picker-time":
          card.addPickerTime(question.question, id);
          break;
        case "textarea":
          card.addTextarea(question.question, id);
          break;
      }
    });

    return card;
  }

  build() {
    // Building shouldn't mutate card itself
    const json = JSON.parse(JSON.stringify(this.json));
    const needsSubmit = this._stash.needsSubmit;
    if (this._stash.subTitle) {
      json.body.unshift(this.buildTextPayload(this._stash.subTitle));
    }
    if (this._stash.title) {
      json.body.unshift(
        this.buildTextPayload(this._stash.title, {
          weight: "Bolder",
          size: "ExtraLarge",
        })
      );
    }
    if (needsSubmit) {
      const payload: { type: string; title: string; data?: any } = {
        type: "Action.Submit",
        title: this._stash.submitLabel,
      };
      if (this._stash.data && Object.keys(this._stash.data).length > 0) {
        payload.data = this._stash.data;
      }
      if (!json.actions) {
        json.actions = [];
      }
      json.actions.push(payload);
    }
    const hasHeader = Boolean(this._stash.header);
    if (hasHeader) {
      json.body = [
        this._stash.header,
        {
          separator: true,
          type: "Container",
          items: json.body,
        },
      ];
    }
    return json;
  }
}

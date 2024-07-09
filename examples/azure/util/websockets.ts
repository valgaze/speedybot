// Author: @valgaze
// Websockets are super useful but painful to use sometimes
// use bun or install Websocket with:
// $ npm install ws
import WebSocket from "ws"; // optional

import {
  type AA_Envelope,
  type File_Details,
  type MessageEnvelope,
  type Message_Details,
  type Submit_Details,
  type SelfData,
  SpeedyBot,
} from "speedybot";

import { logoRoll } from "speedybot";

// all the things that can go wrong :(
enum ErrorType {
  HTTP_REQUEST_FAILED = "HTTP_REQUEST_FAILED",
  WEBSOCKET_ERROR = "WEBSOCKET_ERROR",
  INVALID_TOKEN = "INVALID_TOKEN", // 401
  EXCESSIVE_DEVICE = "EXCESSIVE_DEVICE",
  UNKNOWN_ERROR = "UNKNOWN_ERROR",
  FORBIDDEN_ERROR = "ERROR_FORBIDDEN",
}

export type AbbeviatedDevice = {
  url: string;
  webSocketUrl: string;
  services: unknown;
  deviceType: string;
  name: string;
  model: string;
  localizedModel: string;
  systemName: string;
  systemVersion: string;
  capabilities: unknown;
  features: unknown;
  creationTime: string;
  modificationTime: string;
  deviceSettings: unknown;
  deviceSettingsString: string;
  showSupportText: boolean;
  reportingSiteUrl: string;
  reportingSiteDesc: string;
  isDeviceManaged: boolean;
  trainSiteNames: unknown[];
  clientSecurityPolicy: string;
  intranetInactivityCheckUrl: string;
  serviceHostMap: unknown;
  blockExternalCommunications: boolean;
  desktopFileShareControl: string;
  mobileFileShareControl: string;
  webFileShareControl: string;
  botFileShareControl: string;
  whiteboardFileShareControl: string;
  clientMessagingGiphy: string;
  clientMessagingLinkPreview: string;
  ecmEnabledForAllUsers: boolean;
  ecmSupportedStorageProviders: string[];
  defaultEcmMicrosoftCloud: string;
  ecmMicrosoftTenant: string;
  ecmScreenCaptureFeatureAllowed: boolean;
  ecmWhiteboardFileDataAllowed: boolean;
  callingBehavior: string;
  onPremisePairingEnabled: boolean;
  peopleInsightsEnabled: boolean;
  allowSelfSignedCertificate: boolean;
  webexCrossLaunch: boolean;
  webexAppHubEnabled: boolean;
  embeddedAppsEnabled: boolean;
  settings: unknown;
  selfSignupOrg: boolean;
  userId: string;
  orgId: string;
  orgName: string;
};

export type Events = "text" | "card";

export type Data = {
  [key: string]: any;
};
export type BaseEnvelope = {
  id: string;
  name: string;
  targetUrl: string;
  resource: string;
  event: string;
  orgId: string;
  createdBy: string;
  appId: string;
  ownedBy: string;
  status: string;
  created: Date;
  actorId: string;
  data: Data;
};
export type MessagePayload = {
  id: string;
  timestamp: string | number;
  data: {
    eventType:
      | "status.start_typing" // for first-press situations
      | "conversation.activity"
      | "conversation.highlight";
    activity?: {
      id: string;
      verb: "cardAction" | "post" | "acknowledge" | "update" | "share";
      actor: {
        id: string; // email
        objectType: string;
        displayName: string;
        orgId: string;
        emailAddress: string;
        entryUUID: string;
        type: string;
      };
      target: {
        id: string;
        objectType: string;
        url: string;
        published: string;
        participants: {
          items: any[];
        };
        activities: {
          items: any[];
        };
        deletedActivityIds: any[];
        tags: string[];
        globalId: string;
      };
    };
  };
};
export type SocketConfig = { debug: boolean; force?: boolean };

/**
 * config:
 *  debug: show logs (noisy)
 *  force: force a new websocket connection each time (might cause excessive device registration)
 */
export class LocalSockets {
  private submitFcn!: (AAEnv: AA_Envelope) => Promise<void> | void;
  onSubmit(cb: (AAEnv: AA_Envelope) => Promise<void> | void) {
    this.submitFcn = cb;
  }

  private msgFcn!: (MsgEnv: MessageEnvelope) => Promise<void> | void;
  onText(cb: (MsgEnv: MessageEnvelope) => Promise<void> | void) {
    this.msgFcn = cb;
  }

  private ws!: WebSocket;
  constructor(
    private _token: string,
    private config: SocketConfig = {
      debug: false,
      force: false,
    }
  ) {
    this.root = {
      DEVICES_URL: "https://wdm-a.wbx2.com/wdm/api/v1/devices",
      DEVICE_DATA: {
        deviceName: "SpeedyBot-websockets",
        deviceType: "DESKTOP",
        localizedModel: "SpeedyBot",
        model: "SpeedyBot",
        name: this.config.force
          ? `speedy-webex-${Math.random().toString(36).slice(2, 7)}`
          : "speedybot-webex-reusable-websocket",
        systemName: "SpeedyBot",
        systemVersion: "1.0",
      },
    };
  }

  private root: {
    DEVICES_URL: string;
    DEVICE_DATA: {
      deviceName: string;
      deviceType: string;
      localizedModel: string;
      model: string;
      name: string;
      systemName: string;
      systemVersion: string;
    };
  };

  public log(...payload: any): void {
    if (this.config.debug)
      console.log.apply(console, [
        "[Speedy-Debug]",
        ...(payload as [any?, ...any[]]),
      ]);
  }

  async start(): Promise<boolean> {
    this.log(`Getting device info...`);
    this.log(this.root.DEVICE_DATA.name);
    let device = await this.getDeviceInfo();
    if (!device || this.config.force) {
      this.log(
        `${
          this.config.force
            ? "Force new device creation..."
            : "Empty device refetching..."
        }`
      );
      device = await this.createDevice();
      this.log(`Device set`);
    }

    if (this.ws) {
      this.log(`Attempting socket disconnect`);
      await this.disconnect();
    }

    if (device && "webSocketUrl" in device) {
      this.log(`Registering websockets with
  ${device.webSocketUrl}`);
      this.log(`Device name: ${device.name}`);
      await this.registerWebsockets(device.webSocketUrl);
      this.log(`✅  websockets success`);
      return true;
    } else {
      this.log(`🛑 websockets failure`);
      return false;
    }
  }

  private buildUUID() {
    return Math.random().toString(36).slice(2);
  }

  handleApplicationError(error: any, errorType: ErrorType, message?: string) {
    switch (errorType) {
      case ErrorType.HTTP_REQUEST_FAILED:
        console.error("HTTP request failed:", message, error);
        break;
      case ErrorType.WEBSOCKET_ERROR:
        console.error("WebSocket error:", message, error);
        break;
      case ErrorType.INVALID_TOKEN:
        console.error("Invalid token error:", message, error);
        break;
      case ErrorType.EXCESSIVE_DEVICE:
        console.error("Excessive device registration error:", message, error);
        break;
      default:
        console.error("Unknown error:", message, error);
        break;
    }
  }

  private async createDevice(): Promise<AbbeviatedDevice | void> {
    try {
      const response = await fetch(this.root.DEVICES_URL, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${this._token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.root.DEVICE_DATA),
      });

      if (!response.ok) {
        if (response.status === 429 || response.status === 403) {
          /**
           *
           * 
  {
  message: "User has excessive device registrations",
  errors: [
    {
      description: "User has excessive device registrations",
    }
  ],
  trackingId: "xxxxx",
}
           * 
           */

          throw new Error(ErrorType.EXCESSIVE_DEVICE);
        } else {
          throw new Error(ErrorType.UNKNOWN_ERROR);
        }
      }
      const device = (await response.json()) as AbbeviatedDevice;
      return device;
    } catch (error: unknown) {
      if (typeof error === "object" && error && "message" in error) {
        if (error.message === ErrorType.EXCESSIVE_DEVICE) {
          this.handleApplicationError(
            error,
            ErrorType.EXCESSIVE_DEVICE,
            "WebSocket connection error"
          );
        } else if (error.message === ErrorType.FORBIDDEN_ERROR) {
          this.handleApplicationError(
            error,
            ErrorType.FORBIDDEN_ERROR,
            "403 forbidden"
          );
        } else {
          this.handleApplicationError(
            error,
            ErrorType.UNKNOWN_ERROR,
            "Unknown error on creation"
          );
        }
      }
    }
  }

  private async getDeviceInfo(): Promise<AbbeviatedDevice | void> {
    try {
      const response = await fetch(this.root.DEVICES_URL, {
        headers: {
          Authorization: `Bearer ${this._token}`,
        },
      });

      if (!response.ok && response.status === 401) {
        throw new Error(ErrorType.INVALID_TOKEN);
      }

      const data = (await response.json()) as
        | { devices: AbbeviatedDevice[] }
        | {
            message: string;
            errors: { description: string }[];
            trackingId: string;
          };
      if ("devices" in data) {
        this.log(`Total devices: ${data.devices.length}`);
        const device = data.devices.find(
          (device: any) => device.name === this.root.DEVICE_DATA.name
        );
        return device;
      }
    } catch (error) {
      if (typeof error === "object" && error && "message" in error) {
        this.handleApplicationError(
          error,
          ErrorType.INVALID_TOKEN,
          `[❌ SpeedyBot] Token invalid-- double check the token is correct or you can regenerate a new one here: 
https://developer.webex.com/my-apps

`
        );
      }
    }
  }

  public async resetDevices() {
    type Device = {
      url: string;
      webSocketUrl: string;
      services: unknown;
    };

    try {
      const deviceListResponse = await fetch(
        "https://wdm-a.wbx2.com/wdm/api/v1/devices",
        {
          headers: {
            Authorization: `Bearer ${this._token}`,
          },
        }
      );

      if (!deviceListResponse.ok) {
        if (deviceListResponse.status === 401) {
          this.log(`Reset devices invalid token`);
          throw new Error(ErrorType.INVALID_TOKEN);
        }
        throw new Error(ErrorType.HTTP_REQUEST_FAILED);
      }

      const { devices = [] }: { devices: Device[] } =
        (await deviceListResponse.json()) as { devices: Device[] };

      for (const device of devices) {
        const { url } = device;
        if (url) {
          const deleteResponse = await fetch(url, {
            method: "DELETE",
            headers: {
              Authorization: `Bearer ${this._token}`,
            },
          });

          if (!deleteResponse.ok) {
            throw new Error(ErrorType.HTTP_REQUEST_FAILED);
          }
        }
      }

      return true;
    } catch (error) {
      if (error instanceof Error) {
        if (error.message === ErrorType.HTTP_REQUEST_FAILED) {
          this.handleApplicationError(
            error,
            ErrorType.HTTP_REQUEST_FAILED,
            "Failed to reset devices"
          );
        } else if (error.message === ErrorType.INVALID_TOKEN) {
          this.handleApplicationError(
            error,
            ErrorType.INVALID_TOKEN,
            `[❌ SpeedyBot] Token invalid-- double check the token is correct or you can regenerate a new one here: 
https://developer.webex.com/my-apps
            
          `
          );
        } else {
          this.handleApplicationError(
            error,
            ErrorType.UNKNOWN_ERROR,
            "Unknown error while resetting devices"
          );
        }
      }
      return false;
    }
  }

  public registerWebsockets(webSocketUrl: string) {
    this.ws = new WebSocket(webSocketUrl);
    this.ws.on("open", async () => {
      this.log("🎸 Websocket open");
      const msg = {
        // id: this.buildUUID(),
        id: "myrando1243",
        type: "authorization",
        data: {
          token: `Bearer ${this._token}`,
        },
      };
      this.ws.send(JSON.stringify(msg));
    });

    this.ws.on("message", async (message: string) => {
      try {
        const msg = JSON.parse(message);
        this.log(`📬 raw message received ${JSON.stringify(msg)}\n`);
        await this.processMessage(msg);
      } catch (error: unknown) {
        if (typeof error === "object" && error && "message" in error) {
          this.handleApplicationError(
            error,
            ErrorType.WEBSOCKET_ERROR,
            "WebSocket error on message"
          );
        }
      }
    });

    this.ws.on("error", (error) => {
      this.handleApplicationError(
        error,
        ErrorType.WEBSOCKET_ERROR,
        "WebSocket connection error"
      );
    });
  }

  public disconnect() {
    if (this.ws) {
      return this.ws.close();
    }
  }

  private async checkEmail(email: string) {
    const emailRes = await fetch("https://webexapis.com/v1/people/me", {
      headers: {
        Authorization: `Bearer ${this._token}`,
      },
    });
    const { emails } = (await emailRes.json()) as SelfData;
    const [myEmail] = emails;
    return email !== myEmail;
  }

  private async fetchMessagePayload(id: string): Promise<Message_Details> {
    const messageId = id.includes("-")
      ? Buffer.from(`ciscospark://us/MESSAGE/${id}`).toString("base64")
      : id;

    const response = await fetch(
      `https://webexapis.com/v1/messages/${messageId}`,
      {
        headers: {
          Authorization: `Bearer ${this._token}`,
        },
      }
    );
    const data = (await response.json()) as Message_Details;
    return data;
  }

  private async fetchCardPayload(id: string): Promise<Submit_Details> {
    const attachmentActionId = id.includes("-")
      ? Buffer.from(`ciscospark://us/ATTACHMENT_ACTION/${id}`).toString(
          "base64"
        )
      : id;
    const response = await fetch(
      `https://webexapis.com/v1/attachment/actions/${attachmentActionId}`,
      {
        headers: {
          Authorization: `Bearer ${this._token}`,
        },
      }
    );
    const data = (await response.json()) as Promise<Submit_Details>;
    return data;
  }

  async processMessage(msg: MessagePayload): Promise<boolean> {
    if (
      msg.data.eventType === "conversation.activity" &&
      "activity" in msg.data &&
      msg.data.activity
    ) {
      const { id, verb, actor } = msg.data.activity;
      const { emailAddress } = actor;
      const proceed = await this.checkEmail(emailAddress);
      if (!proceed) return false; // filter out mesages from agent

      // text [post] or file [share] message
      if (verb === "post" || verb === "share") {
        if (this.msgFcn) {
          const payload = await this.fetchMessagePayload(id);
          this.log(`[${verb}]`, id, payload);
          const env = this.buildText(payload);
          await this.msgFcn(env);
        }
      }

      // if adaptive card/attachmentAction submission [cardAction]
      if (verb === "cardAction") {
        if (this.submitFcn) {
          const payload = await this.fetchCardPayload(id);
          this.log("[cardAction]", payload);
          const env = this.buildCard(payload);
          await this.submitFcn(env);
        }
      }
    }

    return true;
  }

  setToken(token: string) {
    this._token = token;
  }

  getToken(): string {
    return this._token;
  }

  private buildText(payload: Message_Details | File_Details): MessageEnvelope {
    return {
      id: "__websocket_id",
      name: "__websocket_name",
      targetUrl: "__websocket_targetUrl",
      resource: "messages",
      event: "created",
      orgId: "__websocket_orgId",
      createdBy: "__websocket_createdBy",
      appId: "__websocket_appId",
      ownedBy: "creator",
      status: "active",
      created: new Date().toISOString(),
      actorId: "__websocket_actorId",
      data: payload,
    };
  }

  private buildCard(payload: Submit_Details): AA_Envelope {
    return {
      id: "__websocket_id",
      name: "__websocket_name",
      targetUrl: "__websocket_targetUrl",
      resource: "attachmentActions",
      event: "created",
      orgId: "__websocket_orgId",
      createdBy: "__websocket_createdBy",
      appId: "__websocket_appId",
      ownedBy: "creator",
      status: "active",
      created: new Date().toISOString(),
      actorId: "__websocket_actorId",
      data: payload,
    };
  }
}

export const announceWebsockets = (email: string, name = "Your bot") => {
  const isColorSupported = process.stdout.isTTY;
  console.log(logoRoll());
  if (isColorSupported) {
    const WEBSOCKETS_READY = `\x1b[1m\x1b[7m\x1b[32m 🌐 CONNECTED \x1b[0m\x1b[32m Websockets active, listening...\x1b[0m`;
    process.stdout.write(WEBSOCKETS_READY + "\n");
  } else {
    console.log("Websockets Registered. Listening...");
  }
  console.log(`You can reach ${name} here: ${email}`);
};

/**
 * Helper to surround SpeedyBot instance with websockets
 *
 */
export async function SpeedySockets(
  BotRef: SpeedyBot,
  config: SocketConfig = {
    debug: false,
    force: false,
  },
  cb?: (data?: { email: string; name?: string }) => any
): Promise<void> {
  try {
    const token = BotRef.getToken();
    if (!token) {
      throw new Error("No token provided (try Bot.setToken('__REPLACE__ME__')");
    }
    const inst = new LocalSockets(token, config);

    inst.onSubmit(async (payload) => {
      BotRef.runMiddleware(payload);
    });

    inst.onText((payload) => {
      BotRef.runMiddleware(payload);
    });

    await inst.start();
    const data = await BotRef.getSelf();
    const { displayName } = data;
    const [email] = data.emails;

    if (!cb) {
      announceWebsockets(email, displayName);
    } else {
      return cb({ email, name: displayName });
    }
  } catch (e) {
    console.log(e);
    throw e;
  }
}

import { init } from "webex";

export class Websocket {
  public webexRef!: StubbedWebEx;
  public me: any;
  public listeners: Listeners = {};
  constructor(public token: string) {}
  on(eventName: Events, handler: Function) {
    this.listeners[eventName] = handler;
  }

  async getSelf() {
    const { id } = await this.webexRef.people.get("me");
    this.me = id;
  }

  async init() {
    const config = {
      credentials: {
        access_token: this.token,
      },
    };
    try {
      this.webexRef = await init(config);
    } catch (e) {
      throw e;
    }
  }

  async start() {
    try {
      await this.init();
      await Promise.all([
        this.getSelf(),
        this.webexRef.messages.listen(),
        this.webexRef.attachmentActions.listen(),
      ]);

      // messages
      this.webexRef.messages.on("created", (event: any) => {
        if (event.data.personId !== this.me) {
          this.onMessage({ ...event, targetUrl: "websocket" });
        }
      });

      this.webexRef.attachmentActions.on("created", (event: any) => {
        this.onSubmit({ ...event, targetUrl: "websocket" });
      });
    } catch (e) {
      throw e;
    }
  }

  onMessage(event: any) {
    if (this.listeners.message) {
      this.listeners.message(event);
    }
  }

  onSubmit(event: any) {
    if (this.listeners.submit) {
      this.listeners.submit(event);
    }
  }

  async stop() {
    await this.webexRef.internal.device.unregister();
    await this.webexRef.messages.stopListening();
  }

  async resetDevices() {
    return resetDevices(this.token);
  }
}

export const resetDevices = async (token: string) => {
  type Device = {
    url: string;
    webSocketUrl: string;
    services: unknown;
  };
  // Get devices
  const deviceList: Response = await fetch(
    "https://wdm-a.wbx2.com/wdm/api/v1/devices",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!deviceList.ok) {
    if (deviceList.status === 401) {
      console.log(
        `[❌ SpeedyBot] Token invalid-- double check the token is correct or you can regenerate a new one here: https://developer.webex.com/my-apps
        `
      );
      process.exit(1);
    }
  }
  const { devices = [] }: { devices: Device[] } = await deviceList.json();

  for (const device of devices) {
    const { url } = device;
    if (url) {
      await fetch(url, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
  }
  return true;
};
export type Listeners = {
  [key: string]: Function;
};

export type AbbreviatedEvent = {
  data: {
    personId: string;
  };
};

export type EventCb = (evt: AbbreviatedEvent) => any;
export type StubbedWebEx = {
  internal: {
    services: { waitForService(...args): Promise<string> };
    device: { unregister(...args): Promise<unknown> };
  };
  request(...args): void;
  people: {
    get(id: string): Promise<{ id: string }>;
  };
  messages: {
    stopListening(): Promise<void>;
    listen(): Promise<void>;
    on(event: string, callback: EventCb): any;
  };
  attachmentActions: {
    listen(): Promise<void>;
    on(event: string, callback: EventCb): any;
  };
};
export type Events = "message" | "submit" | "file" | "camera";

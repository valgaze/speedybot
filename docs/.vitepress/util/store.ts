import { inject, provide, InjectionKey, reactive, ref } from "vue";
import { SpeedyBot } from "./../../../src/speedybot";
import { ElLoading } from "element-plus";
import { Webhook } from "../../../src";

interface UserData {
  username: string;
  type: string;
  emails: string[];
}

interface Store {
  roomList: { type: string; title: string; id: string }[];
  token: string;
  webhooks: Webhook[];
  tokenValid: null | boolean;
  userData: UserData;
}

const BotInst = new SpeedyBot() as SpeedyBot;

const store: Store = reactive({
  roomList: [],
  token: "",
  webhooks: [],
  tokenValid: null,
  userData: {
    username: "",
    type: "",
    emails: [],
  },
});

async function getRecentRooms(): Promise<
  { type: string; title: string; id: string }[]
> {
  const list = await BotInst.getRecentRooms();
  return list;
}

async function setRecentRooms() {
  const list = await BotInst.getRecentRooms();
  store.roomList = list;
}

function setToken(newToken: string) {
  store.token = newToken;
}

function addWebhook(webhook: Webhook) {
  store.webhooks.push(webhook);
}

async function validateToken(tokenCandidate: string): Promise<void | boolean> {
  const loading = ElLoading.service({
    lock: true,
    text: "Loading",
    background: "rgba(0, 0, 0, 0.7)",
  });

  try {
    const isValid = await BotInst.getSelf(tokenCandidate.trim()); // trim bc lots of people have newlines/spaces
    if (isValid.id) {
      store.tokenValid = true;
      if (store.tokenValid) {
        store.token = tokenCandidate;
        store.userData.username = isValid.displayName;
        store.userData.type = isValid.type;
        store.userData.emails = isValid.emails;
        BotInst.setToken(tokenCandidate);

        // Get a headstart on rooms list
        await setRecentRooms();
      }
    } else {
      store.tokenValid = false;
    }
    loading.close();
  } catch (_) {
    loading.close();
    store.tokenValid = false;
    return false;
  }
}

function cycle(index?: number) {
  const colors = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "violet",
  ];

  const color = colors[Math.floor(Math.random() * colors.length - 1)];

  const content = `
    ███████╗██████╗ ███████╗███████╗██████╗ ██╗   ██╗██████╗  ██████╗ ████████╗
    ██╔════╝██╔══██╗██╔════╝██╔════╝██╔══██╗╚██╗ ██╔╝██╔══██╗██╔═══██╗╚══██╔══╝
    ███████╗██████╔╝█████╗  █████╗  ██║  ██║ ╚████╔╝ ██████╔╝██║   ██║   ██║   
    ╚════██║██╔═══╝ ██╔══╝  ██╔══╝  ██║  ██║  ╚██╔╝  ██╔══██╗██║   ██║   ██║   
    ███████║██║     ███████╗███████╗██████╔╝   ██║   ██████╔╝╚██████╔╝   ██║   
    ╚══════╝╚═╝     ╚══════╝╚══════╝╚═════╝    ╚═╝   ╚═════╝  ╚═════╝    ╚═╝https://speedybot.js.org
  `;

  console.log(`%c${content}`, `color: ${color}`);
}

export const storeHelper = {
  Bot: BotInst,
  state: store,
  getRecentRooms,
  setRecentRooms,
  setToken,
  addWebhook,
  validateToken,
  cycle,
};

const storeSymbol: InjectionKey<typeof storeHelper> = Symbol("customStore");

export function provideCustomStore(appRef) {
  appRef.provide(storeSymbol, storeHelper);
}

export function useCustomStore() {
  const customStore = inject(storeSymbol);
  if (!customStore) {
    throw new Error(
      "useCustomStore() must be used within a component that provides the custom store"
    );
  }
  return customStore;
}

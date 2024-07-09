import { inject, provide, InjectionKey, reactive, ref, nextTick } from "vue";
import { SpeedyBot } from "./../../../src/speedybot";
import { RoomConfig } from "../../../src";
import { ElLoading } from "element-plus";
import { Room_Details, Webhook } from "../../../src";
import { de, el, tr } from "element-plus/es/locale/index.mjs";

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
  deepSearch: boolean;
  roomFilters: Partial<RoomConfig>;
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
  deepSearch: false,
  roomFilters: {},
});

async function getRooms(
  config?: { full?: boolean } & Partial<RoomConfig>
): Promise<{ type: string; title: string; id: string }[]> {
  const { full, ...options } = config || {};
  const list = full
    ? await BotInst.getAllRooms(options)
    : await BotInst.getRecentRooms();
  return list;
}

function setRooms(
  rooms: {
    type: string;
    title: string;
    id: string;
  }[]
) {
  store.roomList = rooms;
}

function setSearchlevel(deep: boolean) {
  store.deepSearch = deep;
}

function setToken(newToken: string) {
  store.token = newToken;
}

function addWebhook(webhook: Webhook) {
  store.webhooks.push(webhook);
}

async function invalidateToken() {
  store.tokenValid = false;
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
      store.token = tokenCandidate;
      store.userData.username = isValid.displayName;
      store.userData.type = isValid.type;
      store.userData.emails = isValid.emails;
      BotInst.setToken(tokenCandidate);
      nextTick(async () => {
        const rooms = await getRooms(
          store.deepSearch
            ? { full: true, ...store.roomFilters }
            : { full: false, ...store.roomFilters }
        );
        setRooms(rooms);
        nextTick(async () => {
          loading.close();
        });
      });
    }
  } catch (_) {
    console.log(_);
    nextTick(() => {
      loading.close();
    });
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
  getRooms,
  setRooms,
  // setRecentRooms,
  setToken,
  addWebhook,
  validateToken,
  invalidateToken,
  cycle,
  setSearchlevel,
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

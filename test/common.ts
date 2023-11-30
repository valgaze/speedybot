export const token =
  "2kD2rqamZqbmphaulqYrV5amVqu9WOq11Re6bWR9YiW5N9ybFkPnkaeRl5O7mRfIncSe6jaFNsKf6UJEoOZS6lnFJDOU25R3mrrq5uo";
import { RequestOps } from "../src/types";

// mock data

export const getData = async (url: string, method) => {
  const hash = {
    "https://webexapis.com/v1/messages": BotData,
    "https://webexapis.com/v1/messages/": BotData,
    "https://webexapis.com/v1/attachment/actions:": BotData,
    "https://webexapis.com/v1/people/me": BotData,
    "https://webexapis.com/v1/people": BotData, // add id
    "https://webexapis.com/v1/rooms": BotData,
    "https://webexapis.com/v1/rooms/": BotData, // get details of specific room
    "https://webexapis.com/v1/webhooks": BotData,
  };
  Object.keys(hash).forEach((key) => {
    if (url.includes(key)) {
      // [x] https://webexapis.com/v1/rooms/1234, GET
      // [x] https://webexapis.com/v1/people/1234,
      // https://webexapis.com/v1/messages/1234
    }
  });
  return hash;
};
export const createMockRequest = () => {
  const requestDetails = {
    method: "",
    url: "",
    body: {} as any,
    token: "",
    history: [] as string[],
    rawInit: {
      body: new FormData(),
      headers: {},
    },
  };

  const makeRequestMock = async (
    url: string,
    body: unknown,
    opts: RequestOps
  ) => {
    // todo: make pretty w/ handlers and more elegant
    const isMsg = url.includes(`https://webexapis.com/v1/messages`); //
    const isAA = url.includes(`https://webexapis.com/v1/attachment/actions`); //
    const isPeopleData = url.includes(`https://webexapis.com/v1/people`); //
    const isMeData = url.includes(`https://webexapis.com/v1/people/me`); // tough
    const isRoom = url.includes(`https://webexapis.com/v1/rooms`); //
    const isWebhook = url.includes(`https://webexapis.com/v1/webhooks`);

    let method = opts.method?.toLowerCase() ?? "get";
    let TheData: any = {
      url,
      body,
      items: [{ type: "", title: "_", id: "_" }],
    };
    if (isMsg) {
      if (method === "put") {
        TheData = message_details;
      }
      if (method === "get") {
        TheData = message_details;
      }
      if (method === "post") {
        TheData = MsgRes;
      }
      if (method === "delete") {
        TheData = {};
      }
    }

    if (isAA) {
      TheData = aa_details;
    }

    if (isPeopleData) {
      TheData = PeopleData;
    }

    if (isMeData) {
      TheData = BotData; // should be a bot?
    }

    if (isRoom) {
      TheData = {
        items: [
          {
            type: "direct",
            title: "The room",
            id: "the room id",
          },
        ],
      };
    }

    if (isWebhook) {
      if (method === "post") {
        TheData = webhookRes;
      }

      if (method === "get") {
        TheData = { items: [webhookRes] };
      }

      if (method === "delete") {
        TheData = {};
      }
    }
    requestDetails.method = opts.method || "POST";
    requestDetails.token = opts.token;
    requestDetails.url = url;
    requestDetails.body = body;
    requestDetails.history.push(url);
    requestDetails.rawInit = opts.rawInit;
    // const $default = { url, body, items: [{ type: "", title: "_", id: "_" }] };

    return {
      json() {
        return {
          ...TheData,
          // ...$default,
        };
      },
    };
  };

  return { makeRequestMock, requestDetails };
};

// Helper types/placeholder
import { MessageEnvelope, Message_Details } from "../src/types";

export const MsgRes = {
  id: "idPlaceholder1234",
  roomId: "roomId_placeholder",
  roomType: "direct",
  text: "sample message",
  markdown: "sample message",
  personId: "personIdPlacheholder",
  personEmail: "joe@joe.com",
  created: "1997-0219T23:37:26.474Z",
};

export const aa_envelope = {
  id: "idPlaceholder1234",
  name: "1997-0219T23:37:26.396Z_attachmentActions",
  targetUrl: "https://speedybot-hub.valgaze.workers.dev",
  resource: "attachmentActions",
  event: "created",
  orgId: "orgId_placeholder",
  createdBy: "createdBy_placeholder",
  appId: "appId_placeholder",
  ownedBy: "creator",
  status: "active",
  created: "1997-0219T23:37:26.474Z",
  actorId: "personId_placeholder",
  data: {
    id: "aaId_placeholder",
    type: "submit",
    messageId: "messageIdAA_placeholder",
    personId: "personId_placeholder",
    roomId: "roomId_placeholder",
    created: "2022-10-17T05:08:21.128Z",
  },
};

export const aa_details = {
  id: "aaId_placeholder",
  type: "submit",
  messageId: "messageIdAA_placeholder",
  inputs: {
    chip_action: "ping",
  },
  personId: "personId_placeholder",
  roomId: "roomId_placeholder",
  created: "2022-10-17T05:08:21.128Z",
};

export const file_envelope = {
  id: "file_idPlaceholder1234",
  name: "1997-0219T23:37:26.396Z_firehose",
  targetUrl: "https://speedybot-hub.valgaze.workers.dev",
  resource: "messages",
  event: "created",
  orgId: "orgId_placeholder",
  createdBy: "createdBy_placeholder",
  appId: "appId_placeholder",
  ownedBy: "creator",
  status: "active",
  created: "1997-0219T23:37:26.468Z",
  actorId: "personId_placeholder",
  data: {
    id: "fileId_placeholder",
    roomId: "roomId_placeholder",
    roomType: "direct",
    files: ["https://webexapis.com/v1/contents/fileId_placeholder"],
    personId: "personId_placeholder",
    personEmail: "person@organization.com",
    created: "2022-10-17T05:07:39.115Z",
    isVoiceClip: false,
  },
};

export const file_details = {
  id: "fileId_placeholder",
  roomId: "roomId_placeholder",
  roomType: "direct",
  text: "aaa",
  files: ["https://webexapis.com/v1/contents/fileId_placeholder"],
  personId: "personId_placeholder",
  personEmail: "person@organization.com",
  created: "2022-10-17T05:07:39.115Z",
  isVoiceClip: false,
};

export const message_envelope = {
  id: "Y2lzY29zcGFyazovL3VybjpURUFNOnVzLXdlc3QtMl9yL1dFQkhPT0svYWI1YTljNGEtMGE2My00OGIyLThhN2QtNDc4YzY3MzY4Yzcx",
  name: "1997-0219T23:37:26.396Z_firehose",
  targetUrl: "https://speedybot-hub.valgaze.workers.dev",
  resource: "messages",
  event: "created",
  orgId: "orgId_placeholder",
  createdBy: "createdBy_placeholder",
  appId: "appId_placeholder",
  ownedBy: "creator",
  status: "active",
  created: "1997-0219T23:37:26.468Z",
  actorId: "personId_placeholder",
  data: {
    id: "messagePayloadId_placeholder",
    roomId: "roomId_placeholder",
    roomType: "direct",
    personId: "personId_placeholder",
    personEmail: "person@organization.com",
    created: "2022-10-17T05:23:03.900Z",
  },
};

export const message_details = {
  id: "messagePayloadId_placeholder",
  roomId: "roomId_placeholder",
  roomType: "direct",
  text: "ping",
  personId: "personId_placeholder",
  personEmail: "person@organization.com",
  created: "2022-10-17T05:23:03.900Z",
};

export const BotData = {
  id: "idPlaceholder",
  emails: ["speedybot@webex.bot"],
  phoneNumbers: [],
  displayName: "speedybot",
  nickName: "speedybot",
  userName: "speedybot",
  avatar: "https://avatar-prod-us-east-2.webexcontent.com/aaabbbccc",
  orgId: "orgIdPlaceholder",
  created: "1997-07-17T00:25:21.532Z",
  status: "unknown",
  type: "bot",
};

export const PeopleData = {
  id: "idPlaceholder",
  emails: ["person@person.bot"],
  phoneNumbers: [],
  displayName: "thePerson",
  nickName: "thePerson",
  userName: "thePerson",
  avatar: "https://avatar-prod-us-east-2.webexcontent.com/aaabbbccc",
  orgId: "orgIdPlaceholder",
  created: "1997-07-17T00:25:21.532Z",
  status: "unknown",
  type: "person",
};

export const RoomDeets = {
  id: "idPlacdeholder13456",
  title: "Room Title",
  type: "direct",
  isLocked: false,
  lastActivity: "1997-07-17T00:25:21.532Z",
  creatorId: "creatorId1234",
  created: "1996-07-17T00:25:21.532Z",
  ownerId: "ownerIdPlaceholder1345",
  isPublic: false,
  isReadOnly: false,
};

export const webhookRes = {
  id: "idPlaceholder",
  name: "Anonymized_Firehose",
  targetUrl: "https://fake-url.example",
  resource: "messages",
  event: "created",
  orgId: "orgPlaceholder",
  createdBy: "creatorPlaceholder",
  appId: "appPlaceholder",
  ownedBy: "anonymized",
  status: "active",
  created: "1998-10-30T00:00:00.000Z",
};

export const APIMapper = (url, method: "GET" | "POST") => {
  const map = { "https://webexapis.com/v1/people/me": BotData };
  return map[url];
};

export const makeMessage = (
  text: string
): { envelope: MessageEnvelope; details: Message_Details } => {
  return {
    envelope: message_envelope as MessageEnvelope,
    details: { ...message_details, text },
  };
};

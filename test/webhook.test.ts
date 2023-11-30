import { describe, expect, it } from "vitest";
import { SpeedyBot } from "../src/speedybot";
import { createMockRequest, token } from "./common";

describe("Webhooks", () => {
  it("Get webhooks", async () => {
    const { makeRequestMock, requestDetails } = createMockRequest();
    const inst = new SpeedyBot(token, makeRequestMock);
    await inst.getWebhooks();
    expect(requestDetails.url).toBe("https://webexapis.com/v1/webhooks");
    expect(requestDetails.method).toEqual("GET");
  });

  it("Get webhooks", async () => {
    const { makeRequestMock, requestDetails } = createMockRequest();
    const inst = new SpeedyBot(token, makeRequestMock);
    await inst.getWebhooks();
    expect(requestDetails.url).toBe("https://webexapis.com/v1/webhooks");
    expect(requestDetails.method).toEqual("GET");
  });

  it("Webhooks createAttachmentActionsWebhook [no secret]", async () => {
    const { makeRequestMock, requestDetails } = createMockRequest();
    const inst = new SpeedyBot(token, makeRequestMock);
    const url = "https://www.phonyurl.com";
    await inst.createAttachmentActionsWebhook(url);
    expect(requestDetails.url).toBe("https://webexapis.com/v1/webhooks");
    expect(requestDetails.method).toEqual("POST");
    expect(requestDetails.body.targetUrl).toEqual(url);
    expect(requestDetails.body.resource).toEqual("attachmentActions");
    expect(requestDetails.body.secret).toEqual(undefined);
  });

  it("Webhooks createAttachmentActionsWebhook [w/ secret]", async () => {
    const { makeRequestMock, requestDetails } = createMockRequest();
    const inst = new SpeedyBot(token, makeRequestMock);
    const url = "https://www.phonyurl.com";
    const secret = "TheSecret";
    await inst.createAttachmentActionsWebhook(url, secret);
    expect(requestDetails.url).toBe("https://webexapis.com/v1/webhooks");
    expect(requestDetails.method).toEqual("POST");
    expect(requestDetails.body.targetUrl).toEqual(url);
    expect(requestDetails.body.resource).toEqual("attachmentActions");
    expect(requestDetails.body.secret).toEqual(secret);
  });

  it("Webhooks createFirehose [w/ secret]", async () => {
    const { makeRequestMock, requestDetails } = createMockRequest();
    const inst = new SpeedyBot(token, makeRequestMock);
    const url = "https://www.phonyurl.com";
    const secret = "TheSecret";
    const event = "created";
    await inst.createFirehose(url, secret);
    expect(requestDetails.url).toBe("https://webexapis.com/v1/webhooks");
    expect(requestDetails.method).toEqual("POST");
    expect(requestDetails.body.targetUrl).toEqual(url);
    expect(requestDetails.body.resource).toEqual("messages");
    expect(requestDetails.body.secret).toEqual(secret);
    expect(requestDetails.body.event).toEqual(event);
  });

  it("Webhooks fetchWebhooks", async () => {
    const { makeRequestMock, requestDetails } = createMockRequest();
    const inst = new SpeedyBot(token, makeRequestMock);
    await inst.fetchWebhooks();
    expect(requestDetails.url).toBe("https://webexapis.com/v1/webhooks");
    expect(requestDetails.method).toEqual("GET");
  });

  it("Webhooks destroy webhooks", async () => {
    const { makeRequestMock, requestDetails } = createMockRequest();
    const inst = new SpeedyBot(token, makeRequestMock);
    await inst.deleteWebhook("a");
    expect(requestDetails.url).toBe("https://webexapis.com/v1/webhooks/a");
    expect(requestDetails.method).toEqual("DELETE");
  });
});

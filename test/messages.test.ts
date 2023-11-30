import { describe, expect, it } from "vitest";
import { SpeedyBot } from "../src/speedybot";
import { createMockRequest, token } from "./common";

describe("Various Messages", () => {
  it("Sends a message to a roomId", async () => {
    const { makeRequestMock, requestDetails } = createMockRequest();
    const inst = new SpeedyBot(token, makeRequestMock);
    await inst.sendTo("roomId", "message message");
    expect(requestDetails.url).toBe("https://webexapis.com/v1/messages");
    expect(requestDetails.body).toEqual({
      markdown: "message message",
      roomId: "roomId",
    });
    expect(requestDetails.method).toEqual("POST");
  });

  it("Sends a message to an email", async () => {
    const { makeRequestMock, requestDetails } = createMockRequest();
    const inst = new SpeedyBot(token, makeRequestMock);
    await inst.sendTo("joe@joe.com", "message message");
    expect(requestDetails.url).toBe("https://webexapis.com/v1/messages");
    expect(requestDetails.body).toEqual({
      markdown: "message message",
      toPersonEmail: "joe@joe.com",
    });
    expect(requestDetails.method).toEqual("POST");
  });

  it("Sends a message when provided a personId", async () => {
    const { makeRequestMock, requestDetails } = createMockRequest();
    const inst = new SpeedyBot(token, makeRequestMock);
    await inst.sendTo({ personId: "aaabbbccc" }, "message message");
    expect(requestDetails.url).toBe("https://webexapis.com/v1/messages");
    expect(requestDetails.body).toEqual({
      markdown: "message message",
      toPersonId: "aaabbbccc",
    });
    expect(requestDetails.method).toEqual("POST");
  });

  it("Edits a message", async () => {
    const { makeRequestMock, requestDetails } = createMockRequest();
    const inst = new SpeedyBot(token, makeRequestMock);
    await inst.editMessage("roomId", "mesageId", "message");
    expect(requestDetails.url).toBe(
      "https://webexapis.com/v1/messages/mesageId"
    );
    expect(requestDetails.body).toEqual({
      markdown: "message",
      roomId: "roomId",
    });
    expect(requestDetails.method).toEqual("PUT");
  });

  it("Replies to a message", async () => {
    const { makeRequestMock, requestDetails } = createMockRequest();
    const inst = new SpeedyBot(token, makeRequestMock);
    await inst.replyTo("roomId", "mesageId", "message");
    expect(requestDetails.url).toBe("https://webexapis.com/v1/messages");
    expect(requestDetails.body).toEqual({
      text: "message",
      markdown: "message",
      parentId: "mesageId",
      roomId: "roomId",
    });
    expect(requestDetails.method).toEqual("POST");
  });

  it("Deletes a message", async () => {
    const { makeRequestMock, requestDetails } = createMockRequest();
    const inst = new SpeedyBot(token, makeRequestMock);
    await inst.deleteMessage("mesageId");
    expect(requestDetails.url).toBe(
      "https://webexapis.com/v1/messages/mesageId"
    );
    expect(requestDetails.body).toEqual({});
    expect(requestDetails.method).toEqual("DELETE");
  });
});

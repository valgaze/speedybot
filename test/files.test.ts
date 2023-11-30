import { describe, expect, it } from "vitest";
import { SpeedyBot } from "../src/speedybot";
import { createMockRequest, token } from "./common";

describe("Various Messages", () => {
  it("Sends a json as a file to an email", async () => {
    const { makeRequestMock, requestDetails } = createMockRequest();
    const inst = new SpeedyBot(token, makeRequestMock);
    await inst.sendFileTo("joe@joe.com", { a: 1, b: 2, c: 3 }, "json");
    expect(requestDetails.url).toBe("https://webexapis.com/v1/messages");
    expect(requestDetails.method).toEqual("POST");
    expect(requestDetails.rawInit.body.get("toPersonEmail")).toEqual(
      "joe@joe.com"
    );
  });
});

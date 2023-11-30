import { describe, expect, it } from "vitest";
import { SpeedyBot } from "../src/speedybot";
import { createMockRequest, token, message_envelope } from "./common";
import { ENVELOPES } from "../src";

describe("Various Messages", () => {
  it("Handles an incoming message", async () => {
    const { makeRequestMock, requestDetails } = createMockRequest();
    const inst = new SpeedyBot(token, makeRequestMock);

    // text passes through
    inst.addStep(async ($) => {
      console.log("beer");
      expect($.text).toBe("beer");
      return $.next;
    });
    await inst.runMiddleware(message_envelope as ENVELOPES);
  });
});

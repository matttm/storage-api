const messageService = require("../../../src/shared/services/message.service");

describe("MessageService", () => {
  describe("getDedupeId", () => {
    describe("when theres no id", () => {
      it("should stringify non-nested objects", () => {
        const object = {
          k1: "v1",
          k2: "v2",
        };
        expect(
          messageService.constructMessage("TEST", object)
            ?.MessageDeduplicationId
        ).toEqual("v1-v2");
      });
      it("should stringify nested objects", () => {
        const object = {
          k1: "v1",
          k2: {
            k2sk1: "v2sv2",
          },
        };
        expect(
          messageService.constructMessage("TEST", object)
            ?.MessageDeduplicationId
        ).toEqual("v1-v2sv2");
      });
      it("should stringify nested objects", () => {
        const object = {
          donor: { fname: "Emily", lname: "Maloney", bloodType: "O" },
        };
        expect(
          messageService.constructMessage("TEST", object)
            ?.MessageDeduplicationId
        ).toEqual("Emily-Maloney-O");
      });
    });
    describe("when there is an id", () => {
      it("should be event with is", () => {
        const object = {
          id: 1,
          k1: "v1",
          k2: "v2",
        };
        expect(
          messageService.constructMessage("TEST", object)
            ?.MessageDeduplicationId
        ).toEqual("TEST-1");
      });
    });
  });
});

const utilityService = require("../../../src/shared/services/utility.service");

describe("UtilityService", () => {
  describe("cleanObject", () => {
    it("should return object with only specified fields", () => {
      const fields = ["key1", "key2", "key3"];
      const cleaned = utilityService.cleanObject(fields, {
        key1: "a",
        key2: "b",
        key3: "c",
        key4: "d",
      });
      expect(cleaned).toEqual({
        key1: "a",
        key2: "b",
        key3: "c",
      });
    });
  });
});

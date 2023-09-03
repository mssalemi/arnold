import { Progression } from "../../models";

describe("Progression", () => {
  test("should be able to create a progression", () => {
    const progression = new Progression("linear", 5);
    expect(progression).toBeDefined();
    expect(progression.type).toBe("linear");
    expect(progression.increment).toBe(5);
  });
});

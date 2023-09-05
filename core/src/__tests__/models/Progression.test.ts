import { Progression } from "../../models";

describe("Progression", () => {
  test("should be able to create a progression", () => {
    const progression = new Progression("linear");
    expect(progression).toBeDefined();
    expect(progression.type).toBe("linear");
    expect(progression.increment).toBe(5);
    expect(progression.oneRepMax).toBe(100);
  });
});

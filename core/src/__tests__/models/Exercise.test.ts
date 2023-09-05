import { Exercise, Progression } from "../../models";

describe("Exercise", () => {
  const benchPress = new Exercise("Bench Press");
  const pushUps = new Exercise("Push Ups");

  it("should be able to create an exercise", () => {
    expect(benchPress).toBeDefined();
    expect(benchPress.name).toBe("Bench Press");
    expect(benchPress.type).toBe("accessory");

    expect(pushUps).toBeDefined();
    expect(pushUps.name).toBe("Push Ups");
    expect(pushUps.type).toBe("accessory");
  });
  it("should be able to edit an exercise", () => {
    // TODO:
  });
});

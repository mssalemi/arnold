import { Exercise, Progression } from "../../models";

describe("Exercise", () => {
  const benchPress = new Exercise("Bench Press");
  const pushUps = new Exercise("Push Ups");

  it("should be able to create an exercise", () => {
    expect(benchPress).toBeDefined();
    expect(benchPress.name).toBe("Bench Press");
    expect(benchPress.config.sets).toBe(0);
    expect(benchPress.config.reps).toBe(0);
    expect(benchPress.config.weight).toBe(0);
    expect(benchPress.config.rest).toBe(0);
    expect(benchPress.type).toBe("accessory");

    expect(pushUps).toBeDefined();
    expect(pushUps.name).toBe("Push Ups");
    expect(pushUps.config.sets).toBe(0);
    expect(pushUps.config.reps).toBe(0);
    expect(pushUps.config.weight).toBe(0);
    expect(pushUps.config.rest).toBe(0);
    expect(pushUps.type).toBe("accessory");
  });
  it("should calculate correct progression for different weeks", () => {
    const linearProgression = new Progression("linear");

    const benchPressProgressionWeek1 = benchPress.calculateProgression(
      1,
      linearProgression
    );
    expect(benchPressProgressionWeek1).toEqual({
      reps: 0,
      sets: 0,
      weight: 0,
    });

    const benchPressProgressionWeek16 = benchPress.calculateProgression(
      18,
      linearProgression
    );
    expect(benchPressProgressionWeek16).toEqual({
      reps: 0,
      sets: 0,
      weight: 0,
    });

    const pushUpsProgressionWeek1 = pushUps.calculateProgression(
      1,
      linearProgression
    );
    expect(pushUpsProgressionWeek1).toEqual({
      reps: 0,
      sets: 0,
      weight: 0,
    });
  });
  it("should be able to edit an exercise", () => {
    // TODO:
  });
});

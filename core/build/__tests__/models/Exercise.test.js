"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
describe("Exercise", () => {
    const benchPress = new models_1.Exercise("Bench Press", 3, 5, 225, 60, "compound");
    const pushUps = new models_1.Exercise("Push Ups", 3, 10, 0, 60, "accessory");
    it("should be able to create an exercise", () => {
        expect(benchPress).toBeDefined();
        expect(benchPress.name).toBe("Bench Press");
        expect(benchPress.sets).toBe(3);
        expect(benchPress.reps).toBe(5);
        expect(benchPress.weight).toBe(225);
        expect(benchPress.rest).toBe(60);
        expect(benchPress.type).toBe("compound");
        expect(pushUps).toBeDefined();
        expect(pushUps.name).toBe("Push Ups");
        expect(pushUps.sets).toBe(3);
        expect(pushUps.reps).toBe(10);
        expect(pushUps.weight).toBe(0);
        expect(pushUps.rest).toBe(60);
        expect(pushUps.type).toBe("accessory");
    });
    it("should calculate correct progression for different weeks", () => {
        const linearProgression = new models_1.Progression("linear", 5);
        const benchPressProgressionWeek1 = benchPress.calculateProgression(1, linearProgression);
        expect(benchPressProgressionWeek1).toEqual({
            reps: 5,
            sets: 3,
            weight: 230,
        });
        const benchPressProgressionWeek16 = benchPress.calculateProgression(18, linearProgression);
        expect(benchPressProgressionWeek16).toEqual({
            reps: 5,
            sets: 3,
            weight: 315,
        });
        const pushUpsProgressionWeek1 = pushUps.calculateProgression(1, linearProgression);
        expect(pushUpsProgressionWeek1).toEqual({
            reps: 10,
            sets: 3,
            weight: 0,
        });
    });
    it("should be able to edit an exercise", () => {
        benchPress.editExercise({ weight: 235 });
        expect(benchPress.weight).toBe(235);
        pushUps.editExercise({ reps: 15 });
        expect(pushUps.reps).toBe(15);
    });
});

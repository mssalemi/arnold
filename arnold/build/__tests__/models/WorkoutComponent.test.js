"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
describe("WorkoutComponent", () => {
    const benchPress = new models_1.Exercise("Bench Press", 3, 5, 100, 120, "compound");
    const pushUps = new models_1.Exercise("Push Ups", 3, 5, 0);
    it("should be able to create a workout component", () => {
        const workoutComponent = new models_1.WorkoutComponent();
        expect(workoutComponent).toBeDefined();
        expect(workoutComponent.exercises).toEqual([]);
    });
    it("should be able to add an exercise", () => {
        const workoutComponent = new models_1.WorkoutComponent();
        workoutComponent.addExercise(benchPress);
        expect(workoutComponent.exercises).toEqual([benchPress]);
    });
    it("should be able to reorder an exercise", () => {
        const workoutComponent = new models_1.WorkoutComponent();
        const pushUps = new models_1.Exercise("Push Ups", 3, 5, 0);
        workoutComponent.addExercise(benchPress);
        workoutComponent.addExercise(pushUps);
        expect(workoutComponent.exercises).toEqual([benchPress, pushUps]);
        workoutComponent.reorderExercise(pushUps, 0);
        expect(workoutComponent.exercises).toEqual([pushUps, benchPress]);
    });
    it("should be able to remove an exercise", () => {
        const workoutComponent = new models_1.WorkoutComponent();
        workoutComponent.addExercise(benchPress);
        workoutComponent.addExercise(pushUps);
        expect(workoutComponent.exercises).toEqual([benchPress, pushUps]);
        workoutComponent.removeExercise(benchPress);
        expect(workoutComponent.exercises).toEqual([pushUps]);
    });
});

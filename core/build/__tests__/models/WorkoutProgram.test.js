"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
describe("WorkoutProgram", () => {
    const benchPress = new models_1.Exercise("Bench Press", 3, 5, 100, 120, "compound");
    const pushUp = new models_1.Exercise("Push Up", 3, 5, 0, 0, "compound");
    const chestFly = new models_1.Exercise("Chest Fly", 3, 5, 20, 20, "isolation");
    const tricepExtension = new models_1.Exercise("Tricep Extension", 3, 5, 20, 20, "isolation");
    const workoutComponentA = new models_1.WorkoutComponent([benchPress]);
    const workoutComponentB = new models_1.WorkoutComponent([chestFly]);
    const workoutComponentC = new models_1.WorkoutComponent([benchPress, pushUp]);
    const workoutComponentD = new models_1.WorkoutComponent([chestFly]);
    const workoutComponentE = new models_1.WorkoutComponent([benchPress, pushUp]);
    const workoutComponentF = new models_1.WorkoutComponent([chestFly, tricepExtension]);
    const workoutComponentG = new models_1.WorkoutComponent([benchPress]);
    const workoutComponentH = new models_1.WorkoutComponent([chestFly]);
    const workoutA = new models_1.Workout("Workout A");
    workoutA.addWorkoutComponent(workoutComponentA);
    workoutA.addWorkoutComponent(workoutComponentB);
    workoutA.addWorkoutComponent(workoutComponentC);
    const workoutB = new models_1.Workout("Workout B");
    workoutB.addWorkoutComponent(workoutComponentD);
    workoutB.addWorkoutComponent(workoutComponentE);
    workoutB.addWorkoutComponent(workoutComponentF);
    const workoutC = new models_1.Workout("Workout C");
    workoutC.addWorkoutComponent(workoutComponentG);
    const workoutProgram = new models_1.WorkoutProgram(new models_1.Progression("linear", 2.5));
    workoutProgram.addWorkout(workoutA);
    workoutProgram.addWorkout(workoutB);
    workoutProgram.addWorkout(workoutC);
    test("should be able to create a workout program", () => {
        expect(workoutProgram).toBeDefined();
        expect(workoutProgram.progression).toBeDefined();
        expect(workoutProgram.progression.type).toBe("linear");
        expect(workoutProgram.progression.increment).toBe(2.5);
        expect(workoutProgram.workouts.length).toBe(3);
    });
    test("should be able to add a workout", () => {
        const workoutD = new models_1.Workout("Workout D");
        workoutProgram.addWorkout(workoutD);
        expect(workoutProgram.workouts.length).toBe(4);
    });
    test("should be able to remove a workout", () => {
        expect(workoutProgram.workouts.length).toBe(4);
        workoutProgram.removeWorkout(workoutProgram.workouts[3]);
        expect(workoutProgram.workouts.length).toBe(3);
    });
    test("should be able to reorder a workout", () => {
        expect(workoutProgram.workouts).toEqual([workoutA, workoutB, workoutC]);
        workoutProgram.reorderWorkout(workoutC, 0);
        expect(workoutProgram.workouts).toEqual([workoutC, workoutA, workoutB]);
        workoutProgram.reorderWorkout(workoutC, 2);
        expect(workoutProgram.workouts).toEqual([workoutA, workoutB, workoutC]);
    });
    test("should be able to generate a workout program for 1 weeks", () => {
        const workoutProgramData = workoutProgram.generateWorkoutProgram(1);
        expect(workoutProgramData[0].workouts.length).toBe(3);
        expect(workoutProgramData[0].workouts[0].components.length).toBe(3);
        expect(workoutProgramData[0].workouts[0].components[0].type).toBe("Single Set");
        expect(workoutProgramData[0].workouts[0].components[0].exercises.length).toBe(1);
        expect(workoutProgramData[0].workouts[0].components[0].exercises[0].name).toBe("Bench Press");
        expect(workoutProgramData[0].workouts[0].components[0].exercises[0].sets).toBe(3);
    });
    test("should be able to generate a workout program for 8 weeks", () => { });
});

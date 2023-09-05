"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
console.log("[WorkoutProgram] booting...");
// Example usage:
const bencPress = new models_1.Exercise(
  "Bench Press",
  3,
  10,
  185,
  undefined,
  "compound"
);
const chestFly = new models_1.Exercise("DB Fly", 3, 12, 20);
const pushUp = new models_1.Exercise("Push Ups", 3, 15, 0);
const triExt = new models_1.Exercise("Tricep Extension", 3, 10, 20);
const benchPressComponent = new models_1.WorkoutComponent();
benchPressComponent.addExercise(bencPress);
const chestFlyComponent = new models_1.WorkoutComponent([chestFly]);
const supersetChestTricep = new models_1.WorkoutComponent([pushUp, triExt]);
const linearProgression = new models_1.Progression("linear", 5);
const workout = new models_1.Workout("Workout 1", linearProgression, 60);
workout.addWorkoutComponent(benchPressComponent);
workout.addWorkoutComponent(chestFlyComponent);
workout.addWorkoutComponent(supersetChestTricep);
// console.log("[Add workout components to workouts] ....");
// console.log(workout);
const program = new models_1.WorkoutProgram(linearProgression);
program.addWorkout(workout);
// console.log(program);
program.generateWorkoutProgram();

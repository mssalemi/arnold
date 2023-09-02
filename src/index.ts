import {
  Exercise,
  WorkoutComponent,
  Progression,
  Workout,
  WorkoutProgram,
} from "./workout_v2";

console.log("[WorkoutProgram] booting...");

// Example usage:
const bencPress = new Exercise("Bench Press", 3, 10, 185);
const chestFly = new Exercise("DB Fly", 3, 12, 20);
const pushUp = new Exercise("Push Ups", 3, 15, 0);
const triExt = new Exercise("Tricep Extension", 3, 10, 20);

const benchPressComponent = new WorkoutComponent();
benchPressComponent.addExercise(bencPress);
const chestFlyComponent = new WorkoutComponent([chestFly]);
const supersetChestTricep = new WorkoutComponent([pushUp, triExt]);

const linearProgression = new Progression("linear", 5);

const workout = new Workout("Workout 1", linearProgression, 60);

workout.addWorkoutComponent(benchPressComponent);
workout.addWorkoutComponent(chestFlyComponent);
workout.addWorkoutComponent(supersetChestTricep);

// console.log("[Add workout components to workouts] ....");
// console.log(workout);

const program = new WorkoutProgram(linearProgression);
program.addWorkout(workout);
// console.log(program);

program.generateWorkoutProgram();

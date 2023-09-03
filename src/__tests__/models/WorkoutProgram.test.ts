import {
  Workout,
  WorkoutComponent,
  WorkoutProgram,
  Exercise,
  Progression,
  WorkoutData,
  WeeklyWorkoutData,
} from "../../models";

describe("WorkoutProgram", () => {
  const benchPress = new Exercise("Bench Press", 3, 5, 100, 120, "compound");
  const pushUp = new Exercise("Push Up", 3, 5, 0, 0, "compound");
  const chestFly = new Exercise("Chest Fly", 3, 5, 20, 20, "isolation");
  const tricepExtension = new Exercise(
    "Tricep Extension",
    3,
    5,
    20,
    20,
    "isolation"
  );

  const workoutComponentA = new WorkoutComponent([benchPress]);
  const workoutComponentB = new WorkoutComponent([chestFly]);
  const workoutComponentC = new WorkoutComponent([benchPress, pushUp]);
  const workoutComponentD = new WorkoutComponent([chestFly]);
  const workoutComponentE = new WorkoutComponent([benchPress, pushUp]);
  const workoutComponentF = new WorkoutComponent([chestFly, tricepExtension]);
  const workoutComponentG = new WorkoutComponent([benchPress]);
  const workoutComponentH = new WorkoutComponent([chestFly]);

  const workoutA = new Workout("Workout A");
  workoutA.addWorkoutComponent(workoutComponentA);
  workoutA.addWorkoutComponent(workoutComponentB);
  workoutA.addWorkoutComponent(workoutComponentC);

  const workoutB = new Workout("Workout B");
  workoutB.addWorkoutComponent(workoutComponentD);
  workoutB.addWorkoutComponent(workoutComponentE);
  workoutB.addWorkoutComponent(workoutComponentF);

  const workoutC = new Workout("Workout C");
  workoutC.addWorkoutComponent(workoutComponentG);

  const workoutProgram = new WorkoutProgram(new Progression("linear", 2.5));
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
    const workoutD = new Workout("Workout D");
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
    expect(workoutProgramData[0].workouts[0].components[0].type).toBe(
      "Single Set"
    );
    expect(
      workoutProgramData[0].workouts[0].components[0].exercises.length
    ).toBe(1);
    expect(
      workoutProgramData[0].workouts[0].components[0].exercises[0].name
    ).toBe("Bench Press");
    expect(
      workoutProgramData[0].workouts[0].components[0].exercises[0].sets
    ).toBe(3);
  });
  test("should be able to generate a workout program for 8 weeks", () => {});
});

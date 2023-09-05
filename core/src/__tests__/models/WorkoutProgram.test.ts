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
  const benchPress = new Exercise("Bench Press", "compound");
  const pushUp = new Exercise("Push Up");
  const chestFly = new Exercise("Chest Fly");
  const tricepExtension = new Exercise("Tricep Extension");

  const workoutComponentA = new WorkoutComponent([benchPress]);
  const workoutComponentB = new WorkoutComponent([chestFly]);
  const workoutComponentC = new WorkoutComponent([benchPress, pushUp]);
  const workoutComponentD = new WorkoutComponent([chestFly]);
  const workoutComponentE = new WorkoutComponent([benchPress, pushUp]);
  const workoutComponentF = new WorkoutComponent([chestFly, tricepExtension]);
  const workoutComponentG = new WorkoutComponent([benchPress]);

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

  const workoutProgram = new WorkoutProgram(new Progression("linear"));
  workoutProgram.addWorkout(workoutA);
  workoutProgram.addWorkout(workoutB);
  workoutProgram.addWorkout(workoutC);

  test("should be able to create a workout program", () => {
    expect(workoutProgram).toBeDefined();
    expect(workoutProgram.progression).toBeDefined();
    expect(workoutProgram.progression.type).toBe("linear");
    expect(workoutProgram.progression.increment).toBe(5);
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
    expect(
      workoutProgramData[0].workouts[0].components[0].exercises[0].reps
    ).toBe(5);
    expect(
      workoutProgramData[0].workouts[0].components[0].exercises[0].weight
    ).toBe(70);
  });
  test("should be able to generate a workout program for 9 weeks", () => {
    const workoutProgramData = workoutProgram.generateWorkoutProgram(9);
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
    expect(
      workoutProgramData[0].workouts[0].components[0].exercises[0].reps
    ).toBe(5);
    expect(
      workoutProgramData[0].workouts[0].components[0].exercises[0].weight
    ).toBe(70);

    expect(
      workoutProgramData[8].workouts[0].components[0].exercises[0].name
    ).toBe("Bench Press");
    expect(
      workoutProgramData[8].workouts[0].components[0].exercises[0].sets
    ).toBe(1);
    expect(
      workoutProgramData[8].workouts[0].components[0].exercises[0].reps
    ).toBe(100);
    expect(
      workoutProgramData[8].workouts[0].components[0].exercises[0].weight
    ).toBe(80);
  });
});

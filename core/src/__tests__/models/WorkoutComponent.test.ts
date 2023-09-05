import { WorkoutComponent, Exercise } from "../../models";

describe("WorkoutComponent", () => {
  const benchPress = new Exercise("Bench Press");
  const pushUps = new Exercise("Push Ups");

  it("should be able to create a workout component", () => {
    const workoutComponent = new WorkoutComponent();
    expect(workoutComponent).toBeDefined();
    expect(workoutComponent.exercises).toEqual([]);
  });

  it("should be able to add an exercise", () => {
    const workoutComponent = new WorkoutComponent();
    workoutComponent.addExercise(benchPress);
    expect(workoutComponent.exercises).toEqual([benchPress]);
  });

  it("should be able to reorder an exercise", () => {
    const workoutComponent = new WorkoutComponent();
    const pushUps = new Exercise("Push Ups");
    workoutComponent.addExercise(benchPress);
    workoutComponent.addExercise(pushUps);
    expect(workoutComponent.exercises).toEqual([benchPress, pushUps]);
    workoutComponent.reorderExercise(pushUps, 0);
    expect(workoutComponent.exercises).toEqual([pushUps, benchPress]);
  });

  it("should be able to remove an exercise", () => {
    const workoutComponent = new WorkoutComponent();
    workoutComponent.addExercise(benchPress);
    workoutComponent.addExercise(pushUps);
    expect(workoutComponent.exercises).toEqual([benchPress, pushUps]);
    workoutComponent.removeExercise(benchPress);
    expect(workoutComponent.exercises).toEqual([pushUps]);
  });
});

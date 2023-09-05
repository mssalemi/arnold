import { Workout, Exercise, WorkoutComponent } from "../../models";

describe("Workout", () => {
  const benchPress = new Exercise("Bench Press");
  const workoutComponent = new WorkoutComponent([benchPress]);

  it("should be able to create a workout", () => {
    const workout = new Workout("Workout A");
    expect(workout).toBeDefined();
    expect(workout.name).toBe("Workout A");
    expect(workout.progression).toBeDefined();
    expect(workout.progression.type).toBe("linear");
    expect(workout.progression.increment).toBe(5);
    expect(workout.restBetweenSets).toBe(60);
  });

  it("should be able to add a workout component", () => {
    const workout = new Workout("Workout A");
    expect(workout.workoutComponents).toEqual([]);

    workout.addWorkoutComponent(workoutComponent);
    expect(workout.workoutComponents.length).toBe(1);
  });

  it("should be able to remove a workout component", () => {
    const workout = new Workout("Workout A");
    workout.addWorkoutComponent(workoutComponent);
    expect(workout.workoutComponents.length).toBe(1);

    workout.removeWorkoutComponent(workoutComponent);
    expect(workout.workoutComponents.length).toBe(0);
  });
  it("should be able to reorder a workout component", () => {
    const workout = new Workout("Workout A");
    const workoutComponentB = new WorkoutComponent([benchPress]);
    workout.addWorkoutComponent(workoutComponent);
    workout.addWorkoutComponent(workoutComponentB);
    expect(workout.workoutComponents).toEqual([
      workoutComponent,
      workoutComponentB,
    ]);

    workout.reorderWorkoutComponent(workoutComponentB, 0);
    expect(workout.workoutComponents).toEqual([
      workoutComponentB,
      workoutComponent,
    ]);
  });
  it("should be able to generate a workout", () => {
    const workout = new Workout("Workout A");
    workout.addWorkoutComponent(workoutComponent);
    const workoutData = workout.generateWorkout(0);
    expect(workoutData.components.length).toBe(1);
    expect(workoutData.components[0].type).toBe("Single Set");
    expect(workoutData.components[0].exercises.length).toBe(1);
    expect(workoutData.components[0].exercises[0].name).toBe("Bench Press");
    expect(workoutData.components[0].exercises[0].sets).toBe(3);
    expect(workoutData.components[0].exercises[0].reps).toBe(5);
    expect(workoutData.components[0].exercises[0].weight).toBe(70);
  });
});

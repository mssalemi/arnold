import { Progression, WorkoutComponent } from ".";

import { WorkoutData } from "./types";

export class Workout {
  workoutComponents: WorkoutComponent[] = [];

  constructor(
    public name: string,
    public progression: Progression = new Progression("linear"),
    public restBetweenSets: number = 60
  ) {}

  addWorkoutComponent(workoutComponent: WorkoutComponent): void {
    this.workoutComponents.push(workoutComponent);
  }

  removeWorkoutComponent(workoutComponent: WorkoutComponent): void {
    this.workoutComponents = this.workoutComponents.filter(
      (c) => c !== workoutComponent
    );
  }

  reorderWorkoutComponent(
    workoutComponent: WorkoutComponent,
    newIndex: number
  ): void {
    const oldIndex = this.workoutComponents.findIndex(
      (c) => c === workoutComponent
    );
    this.workoutComponents.splice(
      newIndex,
      0,
      this.workoutComponents.splice(oldIndex, 1)[0]
    );
  }

  generateWorkout(week: number): WorkoutData {
    const workout = this.workoutComponents.map((component) => {
      const type = component.exercises.length > 1 ? "Superset" : "Single Set";

      return {
        type,
        exercises: component.exercises.map((excercise) => {
          const { sets, reps, weight } = excercise.calculateProgression(
            week,
            this.progression
          );
          return {
            name: excercise.name,
            sets: sets,
            reps: reps,
            weight: weight,
          };
        }),
      };
    });

    return { components: workout };
  }
}

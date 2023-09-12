import { Exercise, Progression, WorkoutComponent } from ".";
import { RepsSetsWeightMetadata } from "./types";

import { WorkoutData } from "./types";

// This represents a workout
// A workout can be either 1 or more workout components
// Workouts have a name the user can set, the user can also
export interface WorkoutApi {
  name: string;
  workoutComponents: WorkoutComponent[];
  addWorkoutComponent?: (workoutComponent: WorkoutComponent) => void;
  removeWorkoutComponen?: (workoutComponent: WorkoutComponent) => void;
  reorderWorkoutComponent?: (
    workoutComponent: WorkoutComponent,
    newIndex: number
  ) => void;
  // This method is used to return data for the front end client to use
  generateWorkout?: (week: number) => WorkoutData;
}

export class Workout {
  workoutComponents: WorkoutComponent[] = [];

  constructor(public name: string, public restBetweenSets: number = 60) {}

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
          const { sets, reps, weight } =
            excercise.progression!.createMetadataForWeek(week);
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

import { Exercise } from "./Exercise";

// This represents a workout component
// A workout component can be either 1 or more exercises
// For example, a workout component can be a superset, a triset, or a giant set
// This is one portion of the workout. Workouts can have multiple workout components
export interface WorkoutComponentApi {
  exercises: Exercise[];
  name?: string;
  addExercise?: (exercise: Exercise) => void;
  removeExercise?: (exercise: Exercise) => void;
  reorderExercise?: (exercise: Exercise, newIndex: number) => void;
}

export class WorkoutComponent {
  exercises: Exercise[];
  name?: string;

  constructor(exercises: Exercise[] = [], name?: string) {
    this.exercises = exercises;
    if (name) this.name = name;
  }

  addExercise(exercise: Exercise): void {
    this.exercises.push(exercise);
  }

  removeExercise(exercise: Exercise): void {
    this.exercises = this.exercises.filter((e) => e.name !== exercise.name);
  }

  reorderExercise(exercise: Exercise, newIndex: number): void {
    const oldIndex = this.exercises.findIndex((e) => e.name === exercise.name);
    this.exercises.splice(newIndex, 0, this.exercises.splice(oldIndex, 1)[0]);
  }
}

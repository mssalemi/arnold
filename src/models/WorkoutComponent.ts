import { Exercise } from "./Exercise";

export class WorkoutComponent {
  exercises: Exercise[];

  constructor(exercises: Exercise[] = []) {
    this.exercises = exercises;
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

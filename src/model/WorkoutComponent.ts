import { Exercise } from "./Exercise";

export class WorkoutComponent {
  excercises: Exercise[];

  constructor(excercises: Exercise[] = []) {
    this.excercises = excercises;
  }

  addExercise(exercise: Exercise): void {
    this.excercises.push(exercise);
  }

  removeExercise(exercise: Exercise): void {
    this.excercises = this.excercises.filter((e) => e.name !== exercise.name);
  }

  reorderExercise(exercise: Exercise, newIndex: number): void {
    const oldIndex = this.excercises.findIndex((e) => e.name === exercise.name);
    this.excercises.splice(newIndex, 0, this.excercises.splice(oldIndex, 1)[0]);
  }
}

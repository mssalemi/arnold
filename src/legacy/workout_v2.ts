interface ExcerciseV2 {
  // TODO: Make me a class
  name: string;
  sets: number;
  reps: number;
  weight: number;
  rest?: number;
  editExcercise: (opts: any) => void;
}

class WorkoutComponent {
  excercises: ExcerciseV2[];
  // length = 1 means regular excerise
  // length > 0 indicates a superset

  constructor(excercises: ExcerciseV2[] = []) {
    this.excercises = excercises;
  }

  // methods to add, remove, and reorder excercises from a WorkoutComponent
  // AKA the way to update individual excercises
  addExcercise(excercise: ExcerciseV2): void {
    this.excercises.push(excercise);
  }

  removeExcercise(excercise: ExcerciseV2): void {
    this.excercises = this.excercises.filter((e) => e.name !== excercise.name);
  }

  reorderExcercise(excercise: ExcerciseV2, newIndex: number): void {
    const oldIndex = this.excercises.findIndex(
      (e) => e.name === excercise.name
    );
    this.excercises.splice(newIndex, 0, this.excercises.splice(oldIndex, 1)[0]);
  }
}

class Workout {}

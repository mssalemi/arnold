import { Progression } from "./Progression";

// This represents an excercise
export interface ExerciseApi {
  id: number;
  name: string;
  type: string;
  progression: {
    type: "linear" | "rep";
    increment: number;
    oneRepMax: number;
  };
  restBetweenSets: number;
  editExercise?: (opts: Partial<ExerciseApi>) => void;
}

type ExerciseType = "compound" | "accessory";

export class Exercise {
  name: string;
  type: string;
  progression: Progression;

  constructor(name: string, type: ExerciseType, progression: Progression) {
    this.name = name;
    this.type = type;
    this.progression = progression;
  }

  editExercise(opts: Partial<Exercise>): void {
    Object.assign(this, opts);
  }
}

import { Progression } from "./Progression";

export interface ExerciseApi {
  name: string;
  type: string;
  progression: Progression;
  restBetweenSets: number;
  editExercise: (opts: Partial<ExerciseApi>) => void;
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

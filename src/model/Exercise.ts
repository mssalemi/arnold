import { RepsSetsWeightWithProgression, RepsSetsWeight, Progression } from "./";

export class Exercise implements RepsSetsWeightWithProgression {
  name: string;
  sets: number;
  reps: number;
  weight: number;
  rest?: number;
  type?: string;

  constructor(
    name: string,
    sets: number,
    reps: number,
    weight: number,
    rest?: number,
    type?: string
  ) {
    this.name = name;
    this.sets = sets;
    this.reps = reps;
    this.weight = weight;
    this.rest = rest || 60;
    this.type = type || "accessory";
  }

  editExercise(opts: Partial<Exercise>): void {
    Object.assign(this, opts);
  }

  calculateProgression(
    week: number,
    progression?: Progression
  ): RepsSetsWeight {
    if (!progression || this.type !== "compound") {
      return {
        reps: this.reps,
        sets: this.sets,
        weight: this.weight,
      };
    }

    if (progression.type == "linear") {
      return {
        reps: this.reps,
        sets: this.sets,
        weight: this.weight + progression.increment * week,
      };
    } else if (progression.type == "rep") {
      return {
        reps: this.reps + progression.increment * week,
        sets: this.sets,
        weight: this.weight,
      };
    } else {
      throw new Error("Invalid progression type");
    }
  }
}

import { RepsSetsWeightMetadata, Progression } from ".";

export class Exercise {
  name: string;
  type?: string;
  config: {
    sets: number;
    reps: number;
    weight: number;
    rest: number;
  };

  constructor(name: string, rest?: number, type?: string) {
    this.name = name;
    this.type = type || "accessory";
    this.config = {
      sets: 0,
      reps: 0,
      weight: 0,
      rest: 0,
    };
  }

  editExercise(opts: Partial<Exercise>): void {
    Object.assign(this, opts);
  }

  calculateProgression(
    week: number,
    progression?: Progression
  ): RepsSetsWeightMetadata {
    if (!progression || this.type !== "compound") {
      return {
        reps: this.config.reps,
        sets: this.config.sets,
        weight: this.config.weight,
      };
    }
    return progression.metadata(week);
  }
}

import { RepsSetsWeightMetadata, Progression } from ".";

export class Exercise {
  name: string;
  type?: string;

  constructor(name: string, type?: string) {
    this.name = name;
    this.type = type || "accessory";
  }

  editExercise(opts: Partial<Exercise>): void {
    Object.assign(this, opts);
  }
}

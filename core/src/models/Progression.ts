import { RepsSetsWeightMetadata } from "./types";

export interface ProgressionApi {
  type: "linear" | "rep";
  increment: number;
  oneRepMax: number;
  createMetadataForWeek: (week: number) => RepsSetsWeightMetadata;
}

export class Progression {
  // This needs updating
  type: "linear" | "rep";
  increment: number = 2.5;
  oneRepMax: number = 100;

  // Linear Model
  // Weeks 1-3: 3x5 @ 70%, 70%+(increment*weekNumber) ....
  // Weeks 4-6: 3x8 @ 60%, 60%+(increment*weekNumber) ....
  // Weeks 7-8: 5x5 @ 70%+(increment) ....
  // Week 9: 1xAMRAP @80% 1xAMRAP @ 70% 1xAMRAP @ 60%
  // Repeat

  constructor(type: "linear" | "rep", oneRepMax: number, increment?: number) {
    this.type = type;
    this.oneRepMax;
    if (oneRepMax) this.oneRepMax = oneRepMax;
  }

  createMetadataForWeek(week: number): RepsSetsWeightMetadata {
    return this.calculateWorkoutMetadata(week);
  }

  private calculateWorkoutMetadata(week: number): RepsSetsWeightMetadata {
    if (this.type !== "linear") {
      throw new Error("Invalid progression type");
    }

    const weekWithinCycle = week % 9;

    switch (true) {
      case weekWithinCycle < 3:
        return {
          reps: 5,
          sets: 3,
          weight: 0.7 * this.oneRepMax + this.increment * week,
        };
      case weekWithinCycle < 6:
        return {
          reps: 8,
          sets: 3,
          weight: 0.6 * this.oneRepMax + this.increment * week,
        };
      case weekWithinCycle < 8:
        return {
          reps: 5,
          sets: 5,
          weight: 0.7 * this.oneRepMax + this.increment,
        };
      default:
        return {
          reps: 100,
          sets: 1,
          weight: 0.8 * this.oneRepMax,
        };
    }
  }
}

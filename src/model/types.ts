import { Progression } from "./Progression";

export interface RepsSetsWeight {
  reps: number;
  sets: number;
  weight: number;
}

export interface RepsSetsWeightWithProgression {
  calculateProgression(week: number, progression?: Progression): RepsSetsWeight;
}

interface WorkoutComponentData {
  type: string;
  excercises: {
    name: string;
    sets: number;
    reps: number;
    weight: number;
  }[];
}

export interface WorkoutData {
  components: WorkoutComponentData[];
}

export interface WeeklyWorkoutData {
  workouts: WorkoutData[];
}

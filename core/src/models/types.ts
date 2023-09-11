export interface RepsSetsWeightMetadata {
  reps: number;
  sets: number;
  weight: number;
}

interface WorkoutComponentData {
  type: string;
  exercises: {
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

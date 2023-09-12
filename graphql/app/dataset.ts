// Copied from core/src/models/Exercise.ts
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

export const exercises: ExerciseApi[] = [
  {
    id: 1,
    name: "Bench Press",
    type: "compound",
    progression: {
      type: "linear",
      increment: 5,
      oneRepMax: 200,
    },
    restBetweenSets: 2,
  },
  {
    id: 2,
    name: "Deadlift",
    type: "compound",
    progression: {
      type: "rep",
      increment: 1,
      oneRepMax: 300,
    },
    restBetweenSets: 3,
  },
  {
    id: 3,
    name: "Barbell Squat",
    type: "compound",
    progression: {
      type: "linear",
      increment: 10,
      oneRepMax: 250,
    },
    restBetweenSets: 2,
  },
  {
    id: 4,
    name: "Pull-Ups",
    type: "compound",
    progression: {
      type: "rep",
      increment: 1,
      oneRepMax: 220,
    },
    restBetweenSets: 2,
  },
  {
    id: 5,
    name: "Dips",
    type: "compound",
    progression: {
      type: "linear",
      increment: 5,
      oneRepMax: 150,
    },
    restBetweenSets: 2,
  },
  {
    id: 6,
    name: "Standing Military Press",
    type: "compound",
    progression: {
      type: "linear",
      increment: 5,
      oneRepMax: 180,
    },
    restBetweenSets: 2,
  },
  {
    id: 7,
    name: "Bent-Over Rows",
    type: "compound",
    progression: {
      type: "linear",
      increment: 5,
      oneRepMax: 200,
    },
    restBetweenSets: 2,
  },
  {
    id: 8,
    name: "Lunges",
    type: "compound",
    progression: {
      type: "rep",
      increment: 1,
      oneRepMax: 160,
    },
    restBetweenSets: 2,
  },
  {
    id: 9,
    name: "Bicep Curls",
    type: "accessory",
    progression: {
      type: "linear",
      increment: 2.5,
      oneRepMax: 80,
    },
    restBetweenSets: 1,
  },
  {
    id: 10,
    name: "Tricep Extensions",
    type: "accessory",
    progression: {
      type: "linear",
      increment: 2.5,
      oneRepMax: 90,
    },
    restBetweenSets: 1,
  },
  {
    id: 11,
    name: "Leg Press",
    type: "accessory",
    progression: {
      type: "linear",
      increment: 10,
      oneRepMax: 300,
    },
    restBetweenSets: 2,
  },
  {
    id: 12,
    name: "Lat Pulldowns",
    type: "accessory",
    progression: {
      type: "rep",
      increment: 1,
      oneRepMax: 180,
    },
    restBetweenSets: 2,
  },
  {
    id: 13,
    name: "Seated Shoulder Press",
    type: "accessory",
    progression: {
      type: "linear",
      increment: 2.5,
      oneRepMax: 100,
    },
    restBetweenSets: 1,
  },
  {
    id: 14,
    name: "Calf Raises",
    type: "accessory",
    progression: {
      type: "linear",
      increment: 5,
      oneRepMax: 120,
    },
    restBetweenSets: 1,
  },
  {
    id: 15,
    name: "Hamstring Curls",
    type: "accessory",
    progression: {
      type: "rep",
      increment: 1,
      oneRepMax: 140,
    },
    restBetweenSets: 1,
  },
  {
    id: 16,
    name: "Planks",
    type: "accessory",
    progression: {
      type: "linear",
      increment: 5,
      oneRepMax: 0,
    },
    restBetweenSets: 1,
  },
];

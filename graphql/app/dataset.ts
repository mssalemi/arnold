export interface Exercise {
  id: number;
  name: string;
  type: string;
  bodyPart: "upper" | "lower" | "full";
}

let exercises: Exercise[] = [
  {
    id: 1,
    name: "Bench Press",
    type: "compound",
    bodyPart: "upper",
  },
  {
    id: 2,
    name: "Deadlift",
    type: "compound",
    bodyPart: "lower",
  },
  {
    id: 3,
    name: "Barbell Squat",
    type: "compound",
    bodyPart: "lower",
  },
  {
    id: 4,
    name: "Pull-Ups",
    type: "compound",
    bodyPart: "upper",
  },
  {
    id: 5,
    name: "Dips",
    type: "compound",
    bodyPart: "upper",
  },
  {
    id: 6,
    name: "Standing Military Press",
    type: "compound",
    bodyPart: "upper",
  },
  {
    id: 7,
    name: "Bent-Over Rows",
    type: "compound",
    bodyPart: "upper",
  },
  {
    id: 8,
    name: "Lunges",
    type: "compound",
    bodyPart: "lower",
  },
  {
    id: 9,
    name: "Bicep Curls",
    type: "accessory",
    bodyPart: "upper",
  },
  {
    id: 10,
    name: "Tricep Extensions",
    type: "accessory",
    bodyPart: "upper",
  },
  {
    id: 11,
    name: "Leg Press",
    type: "accessory",
    bodyPart: "lower",
  },
  {
    id: 12,
    name: "Lat Pulldowns",
    type: "accessory",
    bodyPart: "upper",
  },
  {
    id: 13,
    name: "Seated Shoulder Press",
    type: "accessory",
    bodyPart: "upper",
  },
  {
    id: 14,
    name: "Calf Raises",
    type: "accessory",
    bodyPart: "lower",
  },
  {
    id: 15,
    name: "Hamstring Curls",
    type: "accessory",
    bodyPart: "lower",
  },
  {
    id: 16,
    name: "Planks",
    type: "accessory",
    bodyPart: "full",
  },
];

// You now have the updated dataset with "upper," "lower," or "full" for the bodyPart property.

export default exercises;

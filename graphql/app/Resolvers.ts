import { exercises } from "./dataset";

const Resolvers = {
  Query: {
    getAllExercise: () => exercises,
    getExercise: (parent: any, args: any) => {
      return exercises.find((exercise) => exercise.id === args.id);
    },
    getExerciseByName: (parent: any, args: any) => {
      return exercises.find((exercise) => exercise.name === args.name);
    },
    getAllExerciseByType: (parent: any, args: any) => {
      return exercises.filter((exercise) => exercise.type === args.type);
    },
  },
};

export default Resolvers;

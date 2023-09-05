import exercise from "./dataset";

const Resolvers = {
  Query: {
    getAllExercise: () => exercise,
    getExercise: (parent: any, args: any) => {
      return exercise.find((exercise) => exercise.id === args.id);
    },
    getExerciseByName: (parent: any, args: any) => {
      return exercise.find((exercise) => exercise.name === args.name);
    },
    getAllExerciseByType: (parent: any, args: any) => {
      return exercise.filter((exercise) => exercise.type === args.type);
    },
  },
};

export default Resolvers;

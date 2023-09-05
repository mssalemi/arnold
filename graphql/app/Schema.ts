import { gql } from "apollo-server-express";

const Schema = gql`
  type Exercise {
    id: ID
    name: String
    type: String
    bodyPart: String
  }
  type Query {
    getAllExercise: [Exercise]
    getExercise(id: Int): Exercise
    getExerciseByName(name: String): Exercise
    getAllExerciseByType(type: String): [Exercise]
  }
`;
export default Schema;

import { gql } from "apollo-server-express";

const Schema = gql`
  type ProgressionType {
    type: String!
    increment: Float!
    oneRepMax: Float!
  }
  type ProgressionTypeInput {
    type: String
    increment: Float
    oneRepMax: Float
  }
  type ExerciseType {
    id: Int!
    name: String!
    type: String!
    progression: ProgressionType!
    restBetweenSets: Int!
  }
  type WorkoutComponentType {
    exercises: [ExerciseType!]!
    name: String
  }
  type WorkoutType {
    name: String!
    workoutComponents: [WorkoutComponentType!]!
  }
  type WorkoutProgramType {
    name: String!
    workouts: [WorkoutType!]!
  }
  type Query {
    ## Exercise Queries
    getAllExercise: [ExerciseType]
    getExercise(id: Int): ExerciseType
    getExerciseByName(name: String): ExerciseType
    getAllExerciseByType(type: String): [ExerciseType]

    ## Workout Queries
    getWorkout(id: Int!): WorkoutType
    getWorkoutByDay(week: Int!, day: Int!): WorkoutType
    getWorkoutsByProgram(id: Int!): WorkoutProgramType
    getWorkoutPrograms: [WorkoutProgramType!]!
  }
  type ExerciseQuery {
    getAllExercise: [ExerciseType]
    getExercise(id: Int): ExerciseType
    getExerciseByName(name: String): ExerciseType
    getAllExerciseByType(type: String): [ExerciseType]
  }
  type Mutation {
    #############################
    # Workout Program Managment #
    #############################
    ## Create Workout Program
    createWorkoutProgram(name: String!): WorkoutProgramType
    addWorkoutToProgram(programId: Int!, name: String!): WorkoutProgramType
    removeWorkoutFromProgram(
      programId: Int!
      workoutId: Int!
    ): WorkoutProgramType
    reorderWorkoutInProgram(
      programId: Int!
      workoutId: Int!
      newIndex: Int!
    ): WorkoutProgramType
    editWorkoutName(
      programId: Int!
      workoutId: Int!
      newName: String!
    ): WorkoutProgramType
    ##############################
    ##############################
    ##############################
    #### Workout Managment
    ##############################
    addWorkoutComponentToWorkout(
      programId: Int!
      workoutId: Int!
      name: String!
    ): WorkoutType
    removeWorkoutComponentFromWorkout(
      programId: Int!
      workoutId: Int!
      workoutComponentId: Int!
    ): WorkoutType
    reorderWorkoutComponentInWorkout(
      programId: Int!
      workoutId: Int!
      workoutComponentId: Int!
      newIndex: Int!
    ): WorkoutType
    ##############################
    ##############################
    ##############################
    #### Wokrout Component Managment
    ##############################
    createWorkoutComponent(
      programId: Int!
      workoutId: Int!
      name: String!
    ): WorkoutType
    editWorkoutComponentName(
      programId: Int!
      workoutId: Int!
      workoutComponentId: Int!
      newName: String!
    ): WorkoutType
    addExerciseToWorkoutComponent(
      programId: Int!
      workoutId: Int!
      workoutComponentId: Int!
      exerciseId: Int!
    ): WorkoutType
    removeExerciseFromWorkoutComponent(
      programId: Int!
      workoutId: Int!
      workoutComponentId: Int!
      exerciseId: Int!
    ): WorkoutType
    reorderWorkoutComponent(
      programId: Int!
      workoutId: Int!
      workoutComponentId: Int!
      exerciseId: Int!
      newIndex: Int!
    ): WorkoutType
    ##############################
    ##############################
    ##############################
    #### Exercise Managment
    ##############################
    ## You get what you get and you dont get update...
    ##############################
    ##############################
    ##############################
  }
`;
export default Schema;

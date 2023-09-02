import chalk from "chalk";

import { Progression, Workout, WeeklyWorkoutData } from "./";

export class WorkoutProgram {
  constructor(
    public progression: Progression,
    public name: string = "TEST PROGRAM",
    public workouts: Workout[] = []
  ) {}

  addWorkout(workout: Workout): void {
    this.workouts.push(workout);
  }

  removeWorkout(workout: Workout): void {
    this.workouts = this.workouts.filter((c) => c !== workout);
  }

  reorderWorkout(workout: Workout, newIndex: number): void {
    const oldIndex = this.workouts.findIndex((c) => c.name === workout.name);
    this.workouts.splice(newIndex, 0, this.workouts.splice(oldIndex, 1)[0]);
  }

  // TODO: Numerical/Alphabetical ordering
  generateWorkoutProgram(weeks: number = 2): WeeklyWorkoutData[] {
    console.log("Workout Program: ", this.name);
    console.log("Total Weeks:", weeks);

    console.log("Workouts per Week: ", this.workouts.length);

    const workoutProgram: WeeklyWorkoutData[] = [];

    for (let i = 0; i < weeks; i++) {
      const week = i;
      const workouts = this.workouts.map((workout, index) => {
        return workout.generateWorkout(index + week);
      });
      workoutProgram[i] = { workouts };
    }

    console.log(chalk.black.bgCyan("  Weekly Workouts  "));
    console.dir(workoutProgram, { depth: 20 });
    return workoutProgram;
  }
}

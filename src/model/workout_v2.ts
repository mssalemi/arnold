import chalk from "chalk";

interface RepsSetsWeight {
  reps: number;
  sets: number;
  weight: number;
}

interface RepsSetsWeightWithProgression {
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

interface WorkoutData {
  components: WorkoutComponentData[];
}

interface WeeklyWorkoutData {
  workouts: WorkoutData[];
}

export class Exercise implements RepsSetsWeightWithProgression {
  name: string;
  sets: number;
  reps: number;
  weight: number;
  rest?: number;

  constructor(
    name: string,
    sets: number,
    reps: number,
    weight: number,
    rest?: number
  ) {
    this.name = name;
    this.sets = sets;
    this.reps = reps;
    this.weight = weight;
    this.rest = rest;
  }

  editExercise(opts: Partial<Exercise>): void {
    Object.assign(this, opts);
  }

  calculateProgression(
    week: number,
    progression?: Progression
  ): RepsSetsWeight {
    if (!progression) {
      return {
        reps: this.reps,
        sets: this.sets,
        weight: this.weight,
      };
    }

    if (progression.type == "linear") {
      return {
        reps: this.reps,
        sets: this.sets,
        weight: this.weight + progression.increment * week,
      };
    } else if (progression.type == "rep") {
      return {
        reps: this.reps + progression.increment * week,
        sets: this.sets,
        weight: this.weight,
      };
    } else {
      throw new Error("Invalid progression type");
    }
  }
}

export class Progression {
  // This needs updating
  type: "linear" | "rep";
  increment: number;

  constructor(type: "linear" | "rep", increment: number) {
    this.type = type;
    this.increment = increment;
  }
}

export class WorkoutComponent {
  excercises: Exercise[];

  constructor(excercises: Exercise[] = []) {
    this.excercises = excercises;
  }

  addExercise(exercise: Exercise): void {
    this.excercises.push(exercise);
  }

  removeExercise(exercise: Exercise): void {
    this.excercises = this.excercises.filter((e) => e.name !== exercise.name);
  }

  reorderExercise(exercise: Exercise, newIndex: number): void {
    const oldIndex = this.excercises.findIndex((e) => e.name === exercise.name);
    this.excercises.splice(newIndex, 0, this.excercises.splice(oldIndex, 1)[0]);
  }
}

export class Workout {
  workoutComponents: WorkoutComponent[] = [];

  constructor(
    public name: string,
    public progression: Progression = new Progression("linear", 5),
    public restBetweenSets: number = 60
  ) {}

  addWorkoutComponent(workoutComponent: WorkoutComponent): void {
    this.workoutComponents.push(workoutComponent);
  }

  removeWorkoutComponent(workoutComponent: WorkoutComponent): void {
    this.workoutComponents = this.workoutComponents.filter(
      (c) => c !== workoutComponent
    );
  }

  reorderWorkoutComponent(
    workoutComponent: WorkoutComponent,
    newIndex: number
  ): void {
    const oldIndex = this.workoutComponents.findIndex(
      (c) => c === workoutComponent
    );
    this.workoutComponents.splice(
      newIndex,
      0,
      this.workoutComponents.splice(oldIndex, 1)[0]
    );
  }

  generateWorkout(week: number = 1): WorkoutData {
    console.log("Workout: ", this.name);
    console.log("Week: ", week);

    const workout = this.workoutComponents.map((component) => {
      const type = component.excercises.length > 1 ? "Superset" : "Single Set";

      return {
        type,
        excercises: component.excercises.map((excercise) => {
          const { sets, reps, weight } = excercise.calculateProgression(
            week,
            this.progression
          );
          return {
            name: excercise.name,
            sets: sets,
            reps: reps,
            weight: weight,
          };
        }),
      };
    });

    return { components: workout };
  }
}

export class WorkoutProgram {
  constructor(
    public progression: Progression,
    public days: number = 3,
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

  calculateProgression(currentWeight: number, currentReps: number): void {
    if (this.progression.type === "linear") {
      // Implement linear progression logic here
      // Example: Add 'this.progression.increment' to the weight each week
    } else if (this.progression.type === "rep") {
      // Implement rep progression logic here
      // Example: Increase reps by 'this.progression.increment' while keeping weight constant
    }
  }
}

// Class is a Blueprint of sorts

// <WithPeriodization>

interface Excercises {
  excercises: Excercise[];
  restBetweenSets: number;
}

// Excercise - an individual excercise
interface Excercise {
  name: string;
  sets: number;
  reps: number;
  weight: number;
  rest: number;
}

// Workout - an individual workout
interface Workout {
  name: string;
  excercises: Excercise[];
}

class WithPeriodization {
  increment: number;

  constructor(increment: number = 5) {
    this.increment = increment;
  }
}

// WorkoutProgram - a collection of workouts
class WorkoutProgram extends WithPeriodization {
  name: string;
  workouts: Workout[];
  draft: boolean = true;

  constructor(name: string, workouts: Workout[] = []) {
    super(10);
    this.name = name;
    this.workouts = workouts;
  }

  addWorkout(workout: Workout): void {
    this.workouts.push(workout);
  }

  removeWorkout(workout: Workout): void {
    this.workouts = this.workouts.filter((w) => w.name !== workout.name);
  }

  publish(): void {
    this.draft = false;
  }
}

// Test
const workoutProgram = new WorkoutProgram("Workout 1");

const workout: Workout = {
  name: "Workout 1",
  excercises: [],
};

workoutProgram.addWorkout(workout);

console.log("workoutProgram: ", workoutProgram);

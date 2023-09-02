"use strict";
// Class is a Blueprint of sorts
class WithPeriodization {
    constructor(increment = 5) {
        this.increment = increment;
    }
}
// WorkoutProgram - a collection of workouts
class WorkoutProgram extends WithPeriodization {
    constructor(name, workouts = []) {
        super(10);
        this.draft = true;
        this.name = name;
        this.workouts = workouts;
    }
    addWorkout(workout) {
        this.workouts.push(workout);
    }
    removeWorkout(workout) {
        this.workouts = this.workouts.filter((w) => w.name !== workout.name);
    }
    publish() {
        this.draft = false;
    }
}
// Test
const workoutProgram = new WorkoutProgram("Workout 1");
const workout = {
    name: "Workout 1",
    excercises: [],
};
workoutProgram.addWorkout(workout);
console.log("workoutProgram: ", workoutProgram);

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutProgram = exports.Workout = exports.WorkoutComponent = exports.Progression = exports.Exercise = void 0;
class Exercise {
    constructor(name, sets, reps, weight, rest) {
        this.name = name;
        this.sets = sets;
        this.reps = reps;
        this.weight = weight;
        this.rest = rest;
    }
    editExercise(opts) {
        Object.assign(this, opts);
    }
    calculateProgression(week, progression) {
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
        }
        else if (progression.type == "rep") {
            return {
                reps: this.reps + progression.increment * week,
                sets: this.sets,
                weight: this.weight,
            };
        }
        else {
            throw new Error("Invalid progression type");
        }
    }
}
exports.Exercise = Exercise;
class Progression {
    constructor(type, increment) {
        this.type = type;
        this.increment = increment;
    }
}
exports.Progression = Progression;
class WorkoutComponent {
    constructor(excercises = []) {
        this.excercises = excercises;
    }
    addExercise(exercise) {
        this.excercises.push(exercise);
    }
    removeExercise(exercise) {
        this.excercises = this.excercises.filter((e) => e.name !== exercise.name);
    }
    reorderExercise(exercise, newIndex) {
        const oldIndex = this.excercises.findIndex((e) => e.name === exercise.name);
        this.excercises.splice(newIndex, 0, this.excercises.splice(oldIndex, 1)[0]);
    }
}
exports.WorkoutComponent = WorkoutComponent;
class Workout {
    constructor(name, progression = new Progression("linear", 5), restBetweenSets = 60) {
        this.name = name;
        this.progression = progression;
        this.restBetweenSets = restBetweenSets;
        this.workoutComponents = [];
    }
    addWorkoutComponent(workoutComponent) {
        this.workoutComponents.push(workoutComponent);
    }
    removeWorkoutComponent(workoutComponent) {
        this.workoutComponents = this.workoutComponents.filter((c) => c !== workoutComponent);
    }
    reorderWorkoutComponent(workoutComponent, newIndex) {
        const oldIndex = this.workoutComponents.findIndex((c) => c === workoutComponent);
        this.workoutComponents.splice(newIndex, 0, this.workoutComponents.splice(oldIndex, 1)[0]);
    }
}
exports.Workout = Workout;
const chalk_1 = __importDefault(require("chalk"));
class WorkoutProgram {
    constructor(progression, days = 3, name = "TEST PROGRAM", workouts = []) {
        this.progression = progression;
        this.days = days;
        this.name = name;
        this.workouts = workouts;
    }
    addWorkout(workout) {
        this.workouts.push(workout);
    }
    removeWorkout(workout) {
        this.workouts = this.workouts.filter((c) => c !== workout);
    }
    reorderWorkout(workout, newIndex) {
        const oldIndex = this.workouts.findIndex((c) => c.name === workout.name);
        this.workouts.splice(newIndex, 0, this.workouts.splice(oldIndex, 1)[0]);
    }
    // TODO: Numerical/Alphabetical ordering
    generateWorkoutProgram(weeks = 2) {
        console.log("Workout Program: ", this.name);
        console.log("Total Weeks:", weeks);
        console.log("Workouts per Week: ", this.workouts.length);
        const data = this.workouts.map((workout, index) => {
            return {
                name: workout.name,
                components: workout.workoutComponents.map((component) => {
                    console.log("component: ", index, " -> ", component.excercises.length > 1 ? "Superset" : "Single Set");
                    // Right now we are mapping over workoutComponents in a workout
                    // For each workout components, we should return the:
                    // type = Excercise or SuperSet
                    return {
                        type: component.excercises.length > 1 ? "Superset" : "Single Set",
                        excercises: component.excercises.map((excercise) => {
                            const { sets, reps, weight } = excercise.calculateProgression(index, this.progression);
                            return {
                                name: excercise.name,
                                sets: sets,
                                reps: reps,
                                weight: weight,
                            };
                        }),
                    };
                }),
            };
        });
        console.log(chalk_1.default.black.bgCyan("  Weekly Workouts  "));
        console.dir(data, { depth: 20 });
        return data;
    }
    calculateProgression(currentWeight, currentReps) {
        if (this.progression.type === "linear") {
            // Implement linear progression logic here
            // Example: Add 'this.progression.increment' to the weight each week
        }
        else if (this.progression.type === "rep") {
            // Implement rep progression logic here
            // Example: Increase reps by 'this.progression.increment' while keeping weight constant
        }
    }
}
exports.WorkoutProgram = WorkoutProgram;

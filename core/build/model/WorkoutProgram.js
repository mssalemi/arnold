"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutProgram = void 0;
const chalk_1 = __importDefault(require("chalk"));
class WorkoutProgram {
    constructor(progression, name = "TEST PROGRAM", workouts = []) {
        this.progression = progression;
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
        const workoutProgram = [];
        for (let i = 0; i < weeks; i++) {
            const week = i;
            const workouts = this.workouts.map((workout, index) => {
                return workout.generateWorkout(index + week);
            });
            workoutProgram[i] = { workouts };
        }
        console.log(chalk_1.default.black.bgCyan("  Weekly Workouts  "));
        console.dir(workoutProgram, { depth: 20 });
        return workoutProgram;
    }
}
exports.WorkoutProgram = WorkoutProgram;

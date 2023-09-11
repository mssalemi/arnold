"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutProgram = void 0;
class WorkoutProgram {
    constructor(name = "TEST PROGRAM", workouts = []) {
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
        const workoutProgram = [];
        for (let i = 0; i < weeks; i++) {
            const week = i;
            const workouts = this.workouts.map((workout, index) => {
                return workout.generateWorkout(index + week);
            });
            workoutProgram[i] = { workouts };
        }
        // console.dir(workoutProgram, { depth: 20 });
        return workoutProgram;
    }
}
exports.WorkoutProgram = WorkoutProgram;

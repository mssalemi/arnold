"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutComponent = void 0;
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

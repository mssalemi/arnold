"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkoutComponent = void 0;
class WorkoutComponent {
    constructor(exercises = [], name) {
        this.exercises = exercises;
        if (name)
            this.name = name;
    }
    addExercise(exercise) {
        this.exercises.push(exercise);
    }
    removeExercise(exercise) {
        this.exercises = this.exercises.filter((e) => e.name !== exercise.name);
    }
    reorderExercise(exercise, newIndex) {
        const oldIndex = this.exercises.findIndex((e) => e.name === exercise.name);
        this.exercises.splice(newIndex, 0, this.exercises.splice(oldIndex, 1)[0]);
    }
}
exports.WorkoutComponent = WorkoutComponent;

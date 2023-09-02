"use strict";
class WorkoutComponent {
    // length = 1 means regular excerise
    // length > 0 indicates a superset
    constructor(excercises = []) {
        this.excercises = excercises;
    }
    // methods to add, remove, and reorder excercises from a WorkoutComponent
    // AKA the way to update individual excercises
    addExcercise(excercise) {
        this.excercises.push(excercise);
    }
    removeExcercise(excercise) {
        this.excercises = this.excercises.filter((e) => e.name !== excercise.name);
    }
    reorderExcercise(excercise, newIndex) {
        const oldIndex = this.excercises.findIndex((e) => e.name === excercise.name);
        this.excercises.splice(newIndex, 0, this.excercises.splice(oldIndex, 1)[0]);
    }
}
class Workout {
}

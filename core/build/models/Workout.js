"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Workout = void 0;
class Workout {
    constructor(name, restBetweenSets = 60) {
        this.name = name;
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
    generateWorkout(week) {
        const workout = this.workoutComponents.map((component) => {
            const type = component.exercises.length > 1 ? "Superset" : "Single Set";
            return {
                type,
                exercises: component.exercises.map((excercise) => {
                    const { sets, reps, weight } = excercise.progression.createMetadataForWeek(week);
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
exports.Workout = Workout;

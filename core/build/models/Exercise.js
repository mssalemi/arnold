"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercise = void 0;
class Exercise {
    constructor(name, sets, reps, weight, rest, type) {
        this.name = name;
        this.sets = sets;
        this.reps = reps;
        this.weight = weight;
        this.rest = rest || 60;
        this.type = type || "accessory";
    }
    editExercise(opts) {
        Object.assign(this, opts);
    }
    calculateProgression(week, progression) {
        if (!progression || this.type !== "compound") {
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
        else {
            throw new Error("Invalid progression type");
        }
    }
}
exports.Exercise = Exercise;

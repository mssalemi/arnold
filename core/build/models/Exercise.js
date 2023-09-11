"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercise = void 0;
class Exercise {
    constructor(name, type, progression) {
        this.name = name;
        this.type = type;
        this.progression = progression;
    }
    editExercise(opts) {
        Object.assign(this, opts);
    }
}
exports.Exercise = Exercise;

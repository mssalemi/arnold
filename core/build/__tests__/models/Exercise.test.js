"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
describe("Exercise", () => {
    const benchPress = new models_1.Exercise("Bench Press");
    const pushUps = new models_1.Exercise("Push Ups");
    it("should be able to create an exercise", () => {
        expect(benchPress).toBeDefined();
        expect(benchPress.name).toBe("Bench Press");
        expect(benchPress.type).toBe("accessory");
        expect(pushUps).toBeDefined();
        expect(pushUps.name).toBe("Push Ups");
        expect(pushUps.type).toBe("accessory");
    });
    it("should be able to edit an exercise", () => {
        // TODO:
    });
});

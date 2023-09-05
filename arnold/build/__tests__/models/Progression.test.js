"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
describe("Progression", () => {
    test("should be able to create a progression", () => {
        const progression = new models_1.Progression("linear", 5);
        expect(progression).toBeDefined();
        expect(progression.type).toBe("linear");
        expect(progression.increment).toBe(5);
    });
});

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../../models");
describe("Progression", () => {
    test("should be able to create a progression", () => {
        const progression = new models_1.Progression("linear");
        expect(progression).toBeDefined();
        expect(progression.type).toBe("linear");
        expect(progression.increment).toBe(5);
        expect(progression.oneRepMax).toBe(100);
    });
});

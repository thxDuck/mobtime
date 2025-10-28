import { test, describe, expect, vi } from "vitest";
import { id } from "../../web/id";

describe("Id generator", () => {
  describe("Format validation", () => {
    test("should return a string", () => {
      const generatedId = id();
      expect(generatedId).toBeTypeOf("string");
    });

    test("should always generate IDs with exactly 20 characters", () => {
      const iterations = 100;
      const expectedLength = 20;

      for (let i = 0; i < iterations; i++) {
        const generatedId = id();
        expect(generatedId).toHaveLength(expectedLength);
      }
    });
  });

  describe("Uniqueness", () => {
    test("should generate unique IDs across multiple calls", () => {
      const iterations = 1000;
      const generatedIds = new Set<string>();

      for (let i = 0; i < iterations; i++) {
        const generatedId = id();

        expect(generatedIds.has(generatedId)).toBe(false);
        generatedIds.add(generatedId);
      }

      expect(generatedIds.size).toBe(iterations);
    });
  });

  describe("Security", () => {
    test("should use cryptographically secure random generation", () => {
      const mathRandomSpy = vi.spyOn(Math, "random");
      id();
      expect(mathRandomSpy).not.toHaveBeenCalled();
    });
  });
});

import { romanToNumber } from "./romanToNumber";
import { describe, test, expect } from "vitest";

describe("romanToNumber", () => {
  describe("正常系", () => {
    test("I => 1", () => {
      expect(romanToNumber("I")).toBe(1);
    });
    test("II => 2", () => {
      expect(romanToNumber("II")).toBe(2);
    });
    test("III => 3", () => {
      expect(romanToNumber("III")).toBe(3);
    });
    test("IV => 4", () => {
      expect(romanToNumber("IV")).toBe(4);
    });
    test("V => 5", () => {
      expect(romanToNumber("V")).toBe(5);
    });
    test("VI => 6", () => {
      expect(romanToNumber("VI")).toBe(6);
    });
    test("VII => 7", () => {
      expect(romanToNumber("VII")).toBe(7);
    });
    test("VIII => 8", () => {
      expect(romanToNumber("VIII")).toBe(8);
    });
    test("IX => 9", () => {
      expect(romanToNumber("IX")).toBe(9);
    });
    test("LVIII => 58", () => {
      expect(romanToNumber("LVIII")).toBe(58);
    });
    test("MCMXCIV => 1994", () => {
      expect(romanToNumber("MCMXCIV")).toBe(1994);
    });
  });
  describe("異常系", () => {
    test("空文字 => undefined", () => {
      expect(romanToNumber("")).toBeUndefined();
    });
    test("MAD => undefined", () => {
      expect(romanToNumber("MAD")).toBeUndefined();
    });
    test("I II => undefined", () => {
      expect(romanToNumber("I II")).toBeUndefined();
    });
  });
});

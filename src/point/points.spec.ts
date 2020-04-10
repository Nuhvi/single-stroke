import Point from "./index";
import { hypotenuseLength, deg2Radian } from "../utils";

let p1;
let randVal = Math.random();

describe("Point", () => {
  beforeEach(() => {
    p1 = Point();
    randVal = Math.random();
  });

  it("creates a p1 vector", () => {
    expect([p1.x, p1.y]).toEqual([0, 0]);
  });

  describe("#add", () => {
    it("returns this", () => {
      expect(p1.add(0)).toEqual(p1);
      expect(p1.add({ x: 0, y: 0 })).toEqual(p1);
    });

    it("adds a value to the p1 x and y params", () => {
      p1.add(randVal);
      expect([p1.x, p1.y]).toEqual([randVal, randVal]);
    });

    it("adds a value to the p1 x and y params", () => {
      const p2 = Point({ center: { x: randVal, y: randVal } });
      p1.add(p2);
      expect([p1.x, p1.y]).toEqual([randVal, randVal]);
    });
  });

  describe("#substract", () => {
    it("calls #add with the negative values of x and y in the vector", () => {
      p1.add = jest.fn();
      p1.subtract(randVal);
      expect(p1.add).toHaveBeenCalledWith({ x: -randVal, y: -randVal });
    });
  });

  describe("#multiply", () => {
    beforeEach(() => {
      p1 = Point({ center: { x: 5, y: 5 } });
    });

    it("returns this", () => {
      expect(p1.multiply(1)).toEqual(p1);
      expect(p1.multiply({ x: 1, y: 1 })).toEqual(p1);
    });

    it("multiplies x and y params by a value", () => {
      p1.multiply(randVal);
      expect([p1.x, p1.y]).toEqual([randVal * 5, randVal * 5]);
    });

    it("multiplies a value to the p1 x and y params", () => {
      const p2 = Point({ center: { x: randVal, y: randVal } });
      p1.multiply(p2);
      expect([p1.x, p1.y]).toEqual([randVal * 5, randVal * 5]);
    });
  });

  describe("#divide", () => {
    it("calls #multiply with the 1/values of x and y in the vector", () => {
      p1.multiply = jest.fn();
      p1.divide(randVal);
      expect(p1.multiply).toHaveBeenCalledWith({
        x: 1 / randVal,
        y: 1 / randVal,
      });
    });
  });

  describe("#clone", () => {
    it("returns an instance of Point with the same x and y parameters", () => {
      const p2 = p1.clone();
      expect(p2).not.toBe(p1);
      expect([p2.x, p2.y]).toEqual([p1.x, p1.y]);
    });
  });

  describe("#normalize", () => {
    beforeEach(() => {
      p1 = Point({ center: { x: randVal, y: randVal * 2 } });
    });

    it("returns a normalized vector", () => {
      const length = hypotenuseLength(p1.x, p1.y);
      const normalized = p1.divide(length);

      expect(p1.normalize()).toEqual(normalized);
    });

    it("returns the same vector if its length is zero", () => {
      const p = Point();
      expect(p.normalize()).toBe(p);
    });
  });

  describe("#rotate", () => {
    beforeEach(() => {
      p1 = Point({ center: { x: randVal, y: randVal * 2 } });
    });

    it("returns this if the angle === 0", () => {
      expect(p1.rotate({ angle: 0 })).toEqual(p1);
      expect(p1.clone().rotate({ angle: 90 })).not.toEqual(p1);
    });

    it("returns a rotated x and y parameters", () => {
      const angle = deg2Radian(Math.random());
      const center = { x: 1, y: 2 };

      let { x, y } = p1;

      x -= center.x;
      y -= center.y;

      const sin = Math.sin(angle);
      const cos = Math.cos(angle);

      const newX = x * cos - y * sin;
      const newY = x * sin + y * cos;

      x = newX + center.x;
      y = newY + center.y;

      const p2 = Point({ center: { x, y } });
      p1.rotate({ center, angle });

      expect(p1.x - p2.x).toBeLessThan(0.1);
      expect(p1.y - p2.y).toBeLessThan(0.1);
    });
  });
});

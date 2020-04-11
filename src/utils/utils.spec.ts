import { deg2Radian, sanitizeVector, hypotenuseLength, blur } from ".";

let randVal = Math.random();

describe("hypotenuseLength(x,y)", () => {
  it("converts degrees to radians", () => {
    expect(hypotenuseLength(randVal, randVal * 2)).toEqual(
      Math.sqrt(randVal ** 2 + (randVal * 2) ** 2)
    );
  });
});

describe("deg2Radian()", () => {
  it("converts degrees to radians", () => {
    expect(deg2Radian(randVal)).toEqual((randVal / 180) * Math.PI);
    expect(deg2Radian(0)).toEqual(0);
  });
});

describe("sanitizeVector()", () => {
  beforeEach(() => {
    randVal = Math.random();
  });

  describe("when given an object", () => {
    it("returns an object with the same x and y properties", () => {
      expect(sanitizeVector({ x: randVal, y: randVal * 2, g: 200 })).toEqual({
        x: randVal,
        y: randVal * 2,
      });
    });
  });

  describe("when given a number", () => {
    it("returns an object with x and y equal to the given value", () => {
      expect(sanitizeVector(randVal)).toEqual({ x: randVal, y: randVal });
    });
  });
});

describe("blur()", () => {
  let arr;
  beforeEach(() => {
    arr = [10, 0, 10, 0, 10, 0];
  });

  it("returns same array if power equal 0", () => {
    expect(blur(arr, 0)).toEqual([10, 0, 10, 0, 10, 0]);
  });

  it("returns a blurred array", () => {
    expect(blur(arr, 1)).toEqual([10, 10, 10, 10, 10, 10]);
  });

  it("returns a blurred array", () => {
    expect(blur(arr, 2)).toEqual([5, 10, 5, 10, 5, 5]);
  });
});

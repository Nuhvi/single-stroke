import { scaleNeeded } from './index';

describe('scaleNeeded(src, trgt)', () => {
  let w: number, h: number, s: number;
  const randomScale = () => Math.random() * 5 + 1;

  describe('when both src and target are squares', () => {
    beforeEach(() => {
      w = Math.random();
      h = w;
      s = randomScale();
    });
    test('it returns 1 when both have the same dimensions', () => {
      expect(scaleNeeded({ w, h }, { w, h })).toEqual(1);
    });
    test('it returns the needed scale if src is smaller than target', () => {
      expect(scaleNeeded({ w, h }, { w: w * s, h: h * s }).toFixed(2)).toEqual(
        s.toFixed(2)
      );
    });
    test('it returns the needed scale if src is larger than target', () => {
      expect(scaleNeeded({ w: w * s, h: h * s }, { w, h }).toFixed(2)).toEqual(
        (1 / s).toFixed(2)
      );
    });
  });
  describe('when either or both are not squares', () => {
    beforeEach(() => {
      w = Math.random();
      h = Math.random();
      s = randomScale();
    });
    test("it returns the needed if src's aspect ratio is bigger", () => {
      expect(scaleNeeded({ w: w * s, h }, { w, h }).toFixed(2)).toEqual(
        (1 / s).toFixed(2)
      );
    });
    test("it returns the needed if trgt's aspect ratio is bigger", () => {
      expect(scaleNeeded({ w, h: h * s }, { w, h }).toFixed(2)).toEqual(
        (1 / s).toFixed(2)
      );
    });
  });
});

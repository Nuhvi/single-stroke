import Path from "./index";
import Point from "../point/index";

let path;
const randomPoint = () =>
  Point({ center: { x: Math.random() + 1, y: Math.random() + 1 } });

describe("Path", () => {
  beforeEach(() => {
    path = Path();
  });

  it("creates a path objecy", () => {
    expect(path.points).toEqual([]);
  });

  describe("#computeNormalAt(index)", () => {
    let p1, p2, p3;

    beforeEach(() => {
      p1 = randomPoint();
      p2 = randomPoint();
      p3 = randomPoint();

      path = Path([p1, p2, p3]);
    });

    it("does not mutate the origional points", () => {
      path.calculateNormalAt(1);
      expect(p1).toEqual(p1);
    });

    it("returns a vector of the normalized normal at the middle point", () => {
      const expected = p1.clone().add(p3).divide(2).subtract(p2).normalize();
      const normal = path.calculateNormalAt(1);
      expect([normal.x, normal.y]).toEqual([expected.x, expected.y]);
    });

    it("returns a zero length vector at the first point", () => {
      expect(path.calculateNormalAt(0)).toEqual(Point());
    });

    it("returns a zero length vector at the last point", () => {
      expect(path.calculateNormalAt(2)).toEqual(Point());
    });
  });
});

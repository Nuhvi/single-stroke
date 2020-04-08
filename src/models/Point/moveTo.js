export default function moveTo(vector) {
  if (vector.x === 0 && vector.y === 0) return this;
  this.x += vector.x;
  this.y += vector.y;
  return this;
}

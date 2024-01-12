import { WaterJugAlgorithm } from "./WaterJugAlgorithm";

describe("WaterJugAlgorithm", () => {
  it("should return correct steps for Bucket X: 2, Bucket Y: 10, Amount wanted Z: 4", () => {
    const bucketX = 2;
    const bucketY = 10;
    const amountZ = 4;

    const result = WaterJugAlgorithm(bucketX, bucketY, amountZ, "x", "y");

    expect(result).toEqual([
      { x: 2, y: 0, explanation: "Fill bucket x" },
      { x: 0, y: 2, explanation: "Transfer bucket x to bucket y" },
      { x: 2, y: 2, explanation: "Fill bucket x" },
      { x: 0, y: 4, explanation: "Transfer bucket x to bucket y" },
      { x: 0, y: 0, explanation: "Solved" },
    ]);
  });

  it('should return "Solved" for Bucket X: 5, Bucket Y: 8, Amount wanted Z: 5', () => {
    const bucketX = 5;
    const bucketY = 8;
    const amountZ = 5;

    const result = WaterJugAlgorithm(bucketX, bucketY, amountZ, "x", "y");

    expect(result).toEqual([
      { explanation: "Fill bucket x", x: 5, y: 0 },
      { explanation: "Solved", x: 0, y: 0 },
    ]);
  });

  it('should return "The amount z quantity should not exceed the capacity of the buckets" for Bucket X: 2, Bucket Y: 5, Amount wanted Z: 7', () => {
    const bucketX = 2;
    const bucketY = 5;
    const amountZ = 7;

    const result = WaterJugAlgorithm(bucketX, bucketY, amountZ, "x", "y");

    expect(result).toEqual([
      {
        x: 0,
        y: 0,
        explanation:
          "The amount z quantity should not exceed the capacity of the buckets",
      },
    ]);
  });

  it('should return "no solution" for Bucket X: 3, Bucket Y: 9, Amount wanted Z: 7', () => {
    const bucketX = 3;
    const bucketY = 9;
    const amountZ = 7;

    const result = WaterJugAlgorithm(bucketX, bucketY, amountZ, "x", "y");

    expect(result).toEqual([{ x: 0, y: 0, explanation: "no solution" }]);
  });
});

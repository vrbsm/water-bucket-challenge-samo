import { StepItem } from "../components/Steps/Steps";

const gcd = (bucketX: number, bucketY: number): number => {
  if (bucketY === 0) return bucketX;
  return gcd(bucketY, bucketX % bucketY);
};
export const WaterJugAlgorithm = (
  bucketX: number,
  bucketY: number,
  amountZ: number,
  labelFrom: string,
  labelTo: string
): StepItem[] => {
  let bucketXCurrent = 0;
  let bucketYCurrent = 0;
  const steps = [];
  if (amountZ > bucketX && amountZ > bucketY) {
    return [
      {
        x: 0,
        y: 0,
        explanation:
          "The amount z quantity should not exceed the capacity of the buckets",
      },
    ];
  }
  // if z is not multiple of gcd x and y then doesn't have a solution
  if (amountZ % gcd(bucketX, bucketY) !== 0) {
    return [{ x: 0, y: 0, explanation: "no solution" }];
  }
  // main loop continues until bucketX or y reach the target
  while (bucketXCurrent !== amountZ && bucketYCurrent !== amountZ) {
    if (bucketXCurrent === 0) {
      bucketXCurrent = bucketX;
      steps.push({
        [labelFrom]: bucketXCurrent,
        [labelTo]: bucketYCurrent,
        explanation: `Fill bucket ${labelFrom}`,
      });
    } else {
      const pourLiquid = Math.min(bucketXCurrent, bucketY - bucketYCurrent);
      bucketXCurrent -= pourLiquid;
      bucketYCurrent += pourLiquid;
      steps.push({
        [labelFrom]: bucketXCurrent,
        [labelTo]: bucketYCurrent,
        explanation: `Transfer bucket ${labelFrom} to bucket ${labelTo}`,
      });
    }

    if (bucketXCurrent === amountZ || bucketYCurrent === amountZ) {
      steps.push({ [labelFrom]: 0, [labelTo]: 0, explanation: "Solved" });
      break;
    }
    if (bucketY === bucketYCurrent) {
      bucketYCurrent = 0;
      steps.push({
        [labelFrom]: bucketXCurrent,
        [labelTo]: bucketYCurrent,
        explanation: `Empty bucket ${labelTo}`,
      });
    }
  }
  return steps as any;
};

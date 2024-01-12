import { Button, InputNumber } from "antd";
import { useState } from "react";
import Steps, { StepItem } from "../Steps/Steps";
import { WaterJugAlgorithm } from "../../utils/WaterJugAlgorithm";
const WaterJugSolver = () => {
  const [bucketX, setBucketX] = useState<number>(1);
  const [bucketY, setBucketY] = useState<number>(1);
  const [amountZ, setAmountZ] = useState<number>(1);
  const [response, setResponse] = useState<StepItem[]>([]);

  const handleSubmit = () => {
    const responseFromX = WaterJugAlgorithm(
      bucketX,
      bucketY,
      amountZ,
      "x",
      "y"
    );
    const responseFromY = WaterJugAlgorithm(
      bucketY,
      bucketX,
      amountZ,
      "y",
      "x"
    );
    setResponse(
      responseFromX.length <= responseFromY.length
        ? responseFromX
        : responseFromY
    );
  };
  const handleParser = (value: any) => {
    return value.replace(/[^0-9]/g, "");
  };

  const handleChange = (value: number | null, id: number) => {
    switch (id) {
      case 1:
        setBucketX(value || 1);
        break;
      case 2:
        setBucketY(value || 1);
        break;
      case 3:
        setAmountZ(value || 1);
        break;
    }
  };

  return (
    <>
      <form className="m-2 flex flex-col items-center">
        <img className="w-72 h-72" src="./logo-water.jpeg" alt="Logo water" />
        <div className="flex p-6 w-full flex-col sm:flex-row sm:w-auto">
          <div className="pr-0 pb-3 sm:pr-3">
            <label className="pr-0 pb-3 sm:pr-3" htmlFor="bucketX">
              Bucket X
            </label>
            <InputNumber
              step={1}
              value={bucketX}
              onChange={(event) => handleChange(event, 1)}
              className="w-full sm:w-auto"
              parser={handleParser}
              id="bucketX"
              min={1}
            />
          </div>
          <div className="pr-0 pb-3 sm:pr-3">
            <label className="pr-0 pb-3 sm:pr-3" htmlFor="bucketY">
              Bucket Y
            </label>
            <InputNumber
              step={1}
              value={bucketY}
              onChange={(event) => handleChange(event, 2)}
              parser={handleParser}
              className="w-full sm:w-auto"
              id="bucketY"
              min={1}
            />
          </div>
          <div>
            <label className="pr-0 pb-3 sm:pr-3" htmlFor="amountZ">
              Amount Z
            </label>
            <InputNumber
              step={1}
              value={amountZ}
              onChange={(event) => handleChange(event, 3)}
              parser={handleParser}
              className="w-full sm:w-auto"
              id="amountZ"
              min={1}
            />
          </div>
        </div>
        <Button
          className="w-40 mb-4"
          type="primary"
          shape="round"
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </form>
      <Steps steps={response} />
    </>
  );
};
export default WaterJugSolver;

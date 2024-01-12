import { Table } from "antd";
export type StepItem = {
  x: number;
  y: number;
  explanation: string;
}
interface StepsProps {
  steps: StepItem[];
}
const Steps = ({ steps }: StepsProps) => {
  const columns = [
    {
      title: "Bucket X",
      dataIndex: "x",
      key: "x",
    },
    {
      title: "Bucket Y",
      dataIndex: "y",
      key: "y",
    },
    {
      title: "Explanation",
      dataIndex: "explanation",
      key: "explanation",
    },
  ];
  return (
    <div className="m-3">
      {steps.length > 0 && (
        <Table dataSource={steps} columns={columns} />
      )}
    </div>
  );
};
export default Steps;

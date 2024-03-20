import { GridLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div className="flex items-center justify-center h-40 text-center">
      <GridLoader color="#ec407a" />
    </div>
  );
};

export default Spinner;

import { Button } from "@mui/material";
import CustomInput from "../../Components/CustomInput/CustomInput";

const DashboardPage = () => {
  return (
    <div className="min-h-full">
      <div className="flex flex-col text-start">
        <h1 className="text-3xl font-semibold">My Dashboard</h1>
        <h3 className="text-base">Here's an overview of your weight</h3>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex flex-col">
          <h3>Current Weight</h3>
          <span>100 KG</span>
          {/* Icon of +/- of the initial weight */}
        </div>
        <div>
          <ul className="flex cursor-pointer">
            <li className="py-1 px-2 rounded-md">1 Week</li>
            <li className="py-1 px-2 rounded-md">1 Month</li>
            <li className="py-1 px-2 rounded-md">1 Quarter</li>
            <li className="py-1 px-2 rounded-md">1 Year</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-center text-center">
        Some Graph
      </div>

      <div className="flex justify-between">
        <div>
          <h2>Record Today's Weight</h2>
          <h3>Please enter today's weight and press Record to save.</h3>
          <div className="flex justify-around items-center">
            <div className="flex items-center gap-2">
              <CustomInput
                type="text"
                name="weight"
                value="100"
                classNames="w-20 text-center"
              />
              <span>KG</span>
            </div>

            <Button
              variant="contained"
              size="medium"
              sx={{ textTransform: "none" }}
            >
              Record
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

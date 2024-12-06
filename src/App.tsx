import { Outlet } from "react-router";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="p-7">
        <Outlet />
      </div>
    </div>
  );
};

export default App;

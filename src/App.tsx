import { Outlet } from "react-router";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
      {/* Footer */}
    </>
  );
};

export default App;

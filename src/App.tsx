import { Outlet } from "react-router";
import Sidebar from "./Components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="flex">
      <Sidebar
        firstName="Aviel"
        lastName="Ovadiya"
        mail="AvielMail@gmail.com"
      />
      <div className="p-7">
        <Outlet />
      </div>
    </div>
  );
};

export default App;

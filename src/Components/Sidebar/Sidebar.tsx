import { Link } from "react-router-dom";
import SidebarItem from "../SidebarItem/SidebarItem";
import { sidebarData } from "./sidebarData";

const Sidebar = () => {
  return (
    <div
      className={`bg-blue-300 h-screen p-5 pt-8 w-28 md:w-60 duration-300 relative flex flex-col`}
    >
      <div className="flex cursor-pointer justify-center md:justify-normal md:inline-flex gap-2">
        <img
          src="/assets/logo/textless-logo.png"
          className={`w-16 duration-300 md:rotate-[360deg]`}
          alt="AvlHealth Logo"
        />
        <h1
          className={`text-white origin-left font-medium text-2xl hidden scale-0 md:scale-100 md:inline-flex duration-300`}
        >
          AvlHealth
        </h1>
      </div>

      <ul className="pt-2 flex flex-col justify-center">
        {sidebarData.map((item, index) => (
          <Link to={item.title} key={index}>
            <SidebarItem title={item.title} Icon={item.icon} />
          </Link>
        ))}
      </ul>

      <div className="flex gap-2 justify-center md:justify-normal cursor-pointer mt-auto">
        <img
          src={`assets/items/fakeUser.jpg`}
          className="w-14 rounded-full"
          alt="User Picture"
        />
        <div className="text-white hidden md:inline-block scale-0 duration-300 origin-left md:scale-100">
          <h3 className="text-lg">Israel Israeli</h3>
          <h6 className="text-sm">fakeMail@gmail.com</h6>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

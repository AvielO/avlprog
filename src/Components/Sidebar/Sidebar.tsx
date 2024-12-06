import SidebarItem from "../SidebarItem/SidebarItem";
import { sidebarData } from "./sidebarData";

const Sidebar = () => {
  return (
    <div
      className={`bg-blue-300 h-screen p-5 pt-8 w-28 md:w-60 duration-300 relative`}
    >
      <div className="inline-flex cursor-pointer">
        <img
          src="/assets/logo/textless-logo.png"
          className={`w-16 mr-2 duration-300 md:rotate-[360deg]`}
          alt="AvlHealth Logo"
        />
        <h1
          className={`text-white origin-left font-medium text-2xl scale-0 md:scale-100 duration-300`}
        >
          AvlHealth
        </h1>
      </div>

      <ul className="pt-2 flex flex-col justify-center">
        {sidebarData.map((item, index) => (
          <SidebarItem key={index} title={item.title} Icon={item.icon} />
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

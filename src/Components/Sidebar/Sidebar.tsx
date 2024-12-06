import { useState } from "react";
import { BsArrowLeftShort } from "react-icons/bs";
import { RiDashboardFill } from "react-icons/ri";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const menus = [
    {
      title: "Dashboard",
      icon: <RiDashboardFill />,
    },
    { title: "Pages" },
    {
      title: "Media",
    },
  ];

  return (
    <div
      className={`bg-blue-300 h-screen p-5 pt-8 w-28 md:w-60 duration-300 relative`}
    >
      <div className="inline-flex cursor-pointer">
        <img
          src="/assets/logo/textless-logo.png"
          className={`w-16 mr-2 duration-300 ${open && "rotate-[360deg]"}`}
          alt="AvlHealth Logo"
        />
        <h1
          className={`text-white origin-left font-medium text-2xl scale-0 md:scale-100 duration-300`}
        >
          AvlHealth
        </h1>
      </div>

      <ul className="pt-2 flex flex-col justify-center">
        {menus.map((menu, index) => (
          <li
            key={index}
            className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 duration-300 hover:bg-blue-200 rounded-md my-1"
          >
            <span className="text-2xl block float-left">{menu.icon}</span>
            <span className={`text-base font-medium hidden md:block`}>
              {menu.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

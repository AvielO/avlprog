import { IconType } from "react-icons";

interface SidebarItemProps {
  title: string;
  Icon: IconType;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ title, Icon }) => {
  return (
    <li className="flex text-white gap-x-4 cursor-pointer p-2 duration-300 hover:bg-blue-200 rounded-md my-1">
      <Icon className="text-2xl" />
      <span className={`text-base font-medium hidden md:block`}>{title}</span>
    </li>
  );
};

export default SidebarItem;

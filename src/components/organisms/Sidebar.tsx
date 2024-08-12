import React from "react";

import SidebarItem, { SidebarItemProps } from "../molecules/SidebarItem";

// type ComponentProps = React.ComponentProps<typeof Component>;
interface SidebarProps {
  menus: Array<SidebarItemProps>;
}
const Sidebar = ({ menus }: SidebarProps) => {
  return (
    <div>
      {menus.map((menu, index) => (
        <SidebarItem {...menu} key={index} />
      ))}
    </div>
  );
};

export default Sidebar;

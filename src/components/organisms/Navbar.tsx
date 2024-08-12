import React, { ReactNode } from "react";
interface NavbarProps {
  leftNode: ReactNode;
  rightNode: ReactNode;
}
const Navbar = ({ leftNode, rightNode }: NavbarProps) => {
  return (
    <div className="bg-blue-500 flex justify-between p-4 items-center shadow h-[10%]">
      {leftNode}
      {rightNode}
    </div>
  );
};

export default Navbar;

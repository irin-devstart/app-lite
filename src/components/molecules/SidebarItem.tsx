import React, { ReactNode } from "react";
import { Typography } from "..";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { TColor } from "../atoms/Typography";

export interface SidebarItemProps {
  label: string;
  icon: ReactNode;
  isActive: boolean;
  link: string;
  className?: string;
  color?: TColor;
}
const SidebarItem = ({
  label,
  icon,
  isActive,
  link,
  className,
  color,
}: SidebarItemProps) => {
  return (
    <Link to={link}>
      <div
        className={clsx(
          className,
          "flex gap-2 items-center px-3 border-b-[1px] border-gray-300 py-2"
        )}
      >
        {icon}{" "}
        <Typography color={color} fontWeight={isActive ? "medium" : "normal"}>
          {label}
        </Typography>
      </div>
    </Link>
  );
};

export default SidebarItem;

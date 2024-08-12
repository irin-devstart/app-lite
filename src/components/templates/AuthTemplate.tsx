import React, { ReactNode } from "react";
import { Typography } from "..";

interface AuthTemplateProps {
  title: string;
  children: ReactNode;
}
const AuthTemplate = ({ title, children }: AuthTemplateProps) => {
  return (
    <div className="flex justify-center items-center flex-col w-full gap-4">
      <Typography fontSize="text-3xl" fontWeight="extrabold">
        {title}
      </Typography>
      <div className="min-h-[20em] min-w-[30em] bg-gray-300 border border-gray-50 shadow rounded-lg p-4">
        {children}
      </div>
    </div>
  );
};

export default AuthTemplate;

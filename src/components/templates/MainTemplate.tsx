import React, { ReactNode } from "react";
interface MainTemplateProps {
  header?: ReactNode;
  children?: ReactNode;
}
const MainTemplate = ({ header, children }: MainTemplateProps) => {
  return (
    <div className=" bg-slate-300 p-5 min-h-full overflow-y-auto">
      <div className="bg-white rounded-md shadow-md min-h-[82vh] p-3">
        {header}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default MainTemplate;

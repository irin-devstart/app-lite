import React, { LabelHTMLAttributes, ReactNode } from "react";

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
  children: ReactNode;
}
const Label = ({ children, required = false, ...props }: LabelProps) => {
  return (
    <label {...props} className="block mb-2 text-sm font-medium text-gray-900">
      {children}
      {required && <span>*</span>}
    </label>
  );
};

export default Label;

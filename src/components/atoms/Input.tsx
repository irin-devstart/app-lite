import clsx from "clsx";
import React, { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fullWidth?: boolean;
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const { fullWidth, error = false, ...args } = props;
  return (
    <input
      ref={ref}
      {...args}
      //       className="border-2 p-2 border-gray-400 rounded-sm focus:border-blue-400"
      className={clsx(
        "shadow bg-gray-50 border border-gray-30 text-sm rounded block p-2.5 outline-none",
        error
          ? "border-red-500 focus:ring-red-500 focus:border-red-500"
          : "focus:ring-blue-500 focus:border-blue-500",
        {
          "w-full": fullWidth,
        }
      )}
    />
  );
});

export default Input;

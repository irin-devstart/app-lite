import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";

type TVariant = "contained" | "outlined";

const variants: Record<TVariant, string> = {
  contained:
    "text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 ",
  outlined:
    " text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200",
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TVariant;
}

const Button = ({
  variant = "contained",
  className,
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        className,
        "font-medium rounded-lg text-sm px-8 py-2.5 mr-2 mb-2",
        variants[variant]
      )}
    >
      {children}
    </button>
  );
};

export default Button;

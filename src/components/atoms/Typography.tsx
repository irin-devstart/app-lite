import clsx from "clsx";
import React, { ReactNode } from "react";

type TVariant = "h6" | "h5" | "h4" | "h3" | "h2" | "h1";
type TFontWeight = "normal" | "medium" | "semibold" | "bold" | "extrabold";
type TFontSize =
  | "text-xs"
  | "text-sm"
  | "text-base"
  | "text-lg"
  | "text-xl"
  | "text-2xl"
  | "text-3xl"
  | "text-4xl"
  | "text-5xl"
  | "text-6xl";
export type TColor =
  | "primary"
  | "warning"
  | "default"
  | "error"
  | "success"
  | "inherit"
  | "secondary";

type TAlign = "center" | "start" | "justify" | "left" | "right" | "end";

export interface TypographyProps {
  className?: string;
  variant?: TVariant;
  fontWeight?: TFontWeight;
  color?: TColor;
  fontSize?: TFontSize;
  align?: TAlign;
  children: ReactNode;
}

const colors: Record<TColor, string> = {
  primary: "text-blue-500",
  warning: "text-yellow-600",
  default: "text-black",
  inherit: "text-white",
  secondary: "text-gray-500",
  error: "text-red-500",
  success: "text-green-500",
};

const Typography = ({
  className,
  variant = "h1",
  fontWeight = "normal",
  color = "default",
  fontSize = "text-sm",
  align = "left",
  children,
}: TypographyProps) => {
  const Element = variant;
  return (
    <Element
      className={clsx(
        className,
        colors[color],
        `font-${fontWeight}`,
        `text-${align}`,
        fontSize
      )}
    >
      {children}
    </Element>
  );
};

export default Typography;

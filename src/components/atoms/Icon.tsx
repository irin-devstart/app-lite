import clsx from "clsx";

type TColor =
  | "primary"
  | "warning"
  | "default"
  | "error"
  | "success"
  | "inherit"
  | "secondary";
interface IconsProps {
  color?: TColor;
  className?: string;
}

const colors: Record<TColor, string> = {
  primary: "fill-blue-500",
  warning: "fill-yellow-600",
  default: "fill-slate-500",
  inherit: "fill-white",
  secondary: "fill-gray-500",
  error: "fill-red-500",
  success: "fill-green-500",
};

export const Home = ({ color = "default", className }: IconsProps) => {
  return (
    <svg
      className={clsx(className, colors[color])}
      xmlns="http://www.w3.org/2000/svg"
      height="25"
      viewBox="0 -960 960 960"
      width="25"
    >
      <path d="M220-180h150v-250h220v250h150v-390L480-765 220-570v390Zm-60 60v-480l320-240 320 240v480H530v-250H430v250H160Zm320-353Z" />
    </svg>
  );
};

export const AddCircle = ({ color = "default", className }: IconsProps) => {
  return (
    <svg
      className={clsx(className, colors[color])}
      xmlns="http://www.w3.org/2000/svg"
      height="25"
      viewBox="0 -960 960 960"
      width="25"
    >
      <path d="M450-450H200v-60h250v-250h60v250h250v60H510v250h-60v-250Z" />
    </svg>
  );
};

export const LocalShipping = ({ color = "default", className }: IconsProps) => {
  return (
    <svg
      className={clsx(className, colors[color])}
      xmlns="http://www.w3.org/2000/svg"
      height="25"
      viewBox="0 -960 960 960"
      width="25"
    >
      <path d="M224.118-161Q175-161 140.5-195.417 106-229.833 106-279H40v-461q0-24 18-42t42-18h579v167h105l136 181v173h-71q0 49.167-34.382 83.583Q780.235-161 731.118-161 682-161 647.5-195.417 613-229.833 613-279H342q0 49-34.382 83.5-34.383 34.5-83.5 34.5ZM224-221q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17ZM100-339h22q17-27 43.041-43 26.041-16 58-16t58.459 16.5Q308-365 325-339h294v-401H100v401Zm631 118q24 0 41-17t17-41q0-24-17-41t-41-17q-24 0-41 17t-17 41q0 24 17 41t41 17Zm-52-204h186L754-573h-75v148ZM360-529Z" />
    </svg>
  );
};

export const Logout = ({ color = "default", className }: IconsProps) => {
  return (
    <svg
      className={clsx(className, colors[color])}
      xmlns="http://www.w3.org/2000/svg"
      height="25"
      viewBox="0 -960 960 960"
      width="25"
    >
      <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h299v60H180v600h299v60H180Zm486-185-43-43 102-102H360v-60h363L621-612l43-43 176 176-174 174Z" />
    </svg>
  );
};

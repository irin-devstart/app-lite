import React from "react";
import { MainTemplate, Typography } from "../components";
import { useSelector } from "react-redux";

const Dashboard = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userName = useSelector((state: any) => state.user.value);

  return (
    <MainTemplate
      header={
        <Typography fontSize="text-2xl" fontWeight="extrabold">
          Dashboard
        </Typography>
      }
    >
      <div className="flex justify-center items-center min-h-[70vh]">
        <div className="h-[20em] w-[80%] m-auto bg-gray-100 flex flex-col justify-center items-center gap-3 rounded-md">
          <Typography color="secondary" fontSize="text-4xl">
            Selamat datang
          </Typography>
          <Typography color="secondary">{userName}</Typography>
        </div>
      </div>
    </MainTemplate>
  );
};

export default Dashboard;

import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Typography } from "..";

const AuthLayout = () => {
  return (
    <div className=" h-[100vh]">
      <Navbar
        leftNode={
          <Typography fontSize="text-3xl" color="inherit">
            KLEDO TEST
          </Typography>
        }
        rightNode={
          <div className="flex gap-4 items-center ">
            <Typography
              fontWeight="extrabold"
              color="inherit"
              fontSize="text-lg"
            >
              Iren Saputra
            </Typography>
          </div>
        }
      />
      <div
        className="flex"
        style={{
          height: "90%",
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;

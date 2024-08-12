import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Sidebar, SidebarItem, Typography } from "..";
import { Home, LocalShipping, Logout } from "../atoms/Icon";
import { WebRoute } from "../../common/constants";
import { useSelector } from "react-redux";

const AppLayout = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const userName = useSelector((state: any) => state.user.value);

  return (
    <div className="h-[100vh]">
      <Navbar
        leftNode={
          <Typography fontSize="text-3xl" color="inherit">
            KLEDO TEST ADMIN
          </Typography>
        }
        rightNode={
          <div className="flex gap-4 items-center ">
            {/*Todo:  response after login = image profile = '' */}
            <img
              className="h-8 w-8 rounded-full ring-2 ring-white object-contain"
              src="https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcQi4a8NzG1ocCbgUUZxxDLocQwDQvhod4gHC3aRRg3juK0LDsZHECn7AwMJq8WUmPFLai9IJhY5YWNLRys"
              alt="User Profile"
            />
            <Typography
              fontWeight="extrabold"
              color="inherit"
              fontSize="text-lg"
            >
              {userName}
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
        <div className="basis-[20%] bg-gray-100 flex flex-col justify-between">
          <Sidebar
            menus={[
              {
                icon: <Home />,
                link: WebRoute.home,
                label: "Dashboard",
                isActive: false,
              },
              {
                icon: <LocalShipping />,
                link: WebRoute.shippingComps.index,
                label: "Shipping Comps",
                isActive: false,
              },
            ]}
          />
          <SidebarItem
            className="bg-blue-400"
            icon={<Logout color="inherit" />}
            link={WebRoute.auth.logout}
            label={"Shipping Comps"}
            isActive={false}
            color="inherit"
          />
        </div>
        <div className="basis-[80%]">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;

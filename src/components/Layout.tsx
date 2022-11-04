import React, { ReactNode } from "react";
import ProfileHeader from "./Header/ProfileHeader";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="flex">
        <div className=" min-w-[17.6rem] ">
          <Sidebar />
        </div>
        <div className="w-full">
          <ProfileHeader />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

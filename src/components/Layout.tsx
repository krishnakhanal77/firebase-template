import React, { ReactNode } from "react";
import ProfileHeader from "./Header/ProfileHeader";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <ProfileHeader />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

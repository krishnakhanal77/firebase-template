import React, { ReactNode } from "react";
import ProfileHeader from "./Header/ProfileHeader";
import Sidebar from "./Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import NavBar from "./Header/NavBar";

const Layout = () => {
  return (
    <div>
      <div className=" grid grid-cols-5">
        <div className="col-span-1">
          <Sidebar />
        </div>
        <div className="col-span-4">
          <ProfileHeader />
          <NavBar />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;

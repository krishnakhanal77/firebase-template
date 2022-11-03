import React from "react";
import { IoMdNotifications } from "react-icons/io";

const ProfileHeader = () => {
  return (
    <div className="bg-secondary px-6 py-2 w-full h-14  static z-50 ">
      <div className="flex items-center float-right space-x-6 ">
        <p className="text-grey-light hover:text-white font-normal text-base">
          Go to Docs
        </p>
        <span className="text-white">
          <IoMdNotifications className="text-2xl" />
        </span>
        <div className=" bg-white h-10 w-10 rounded-[50%] ">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;

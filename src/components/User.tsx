import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdRefresh } from "react-icons/md";

const User = () => {
  return (
    <div className=" shadow-lg mx-12  rounded-lg my-9">
      <div className="border rounded-t-lg bg-[#f5f5f5] px-6 py-2 flex justify-between">
        <FiSearch className="text-[#000000de] mt-3 text-lg font-bold" />
        <input
          className=" w-3/4 bg=[#f5f5f5] bg-transparent focus:outline-none"
          type="text"
          placeholder="Search by email address, phone number, or user UID"
        />
        <div className="space-x-4 flex">
          <button className="hover:bg-[#4436e1] hover:shadow-lg font-nedium px-4 py-2 bg-secondary text-white rounded-lg">
            Add User
          </button>
          <MdRefresh className=" cursor-pointer  text-[#000000de] mt-3 text-xl font-bold" />
        </div>
      </div>
      <div className=" min-h-[10rem] flex items-center justify-center ">
        <p className="text-[#000000ac]">No users for this project yet!</p>
      </div>
    </div>
  );
};

export default User;

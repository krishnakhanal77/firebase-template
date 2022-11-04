import React from "react";
import Tabs from "../../components/Tabs";
import { BsFillQuestionCircleFill } from "react-icons/bs";

const Authentication = () => {
  return (
    <>
      <div>
        <div className=" bg-secondary  flex justify-between items-center px-6 pt-4 w-full">
          <h2 className="text-white font-medium text-3xl">Authentication</h2>
          <div className="flex space-x-6">
            <button className="border hover:bg-[#006be576] border-grey-light rounded-lg text-base font-medium text-white px-2 py-1">
              Web setup
            </button>
            <span className="cursor-pointer mt-1">
              <BsFillQuestionCircleFill className="text-2xl text-white" />
            </span>
          </div>
        </div>
      </div>
      <div>
        <Tabs />
      </div>
    </>
  );
};

export default Authentication;

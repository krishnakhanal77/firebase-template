import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-[#081627] text-white max-w-[18rem] pb-4">
      <h2 className=" text-2xl py-3 px-6 font-normal ">Paperbase</h2>
      <hr />
      <div className="flex py-3 px-6  ">
        <span>..</span>
        <h3 className=" text-lg font-medium text-[#ffffffb3] ">
          Project Overview
        </h3>
      </div>
      <hr />
      <div className="bg-[#101F33] pb-4">
        <div>
          <h3 className="px-6 py-4">Build</h3>
          <hr />
          <ul>
            <li>Authencation </li>
            <li>Database</li>
            <li>Hosting</li>
          </ul>
        </div>
        <hr />
        <div>
          <h3>Quality</h3>
          <ul>
            <li>Analytic </li>
            <li>Performance</li>
            <li>Testlab</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

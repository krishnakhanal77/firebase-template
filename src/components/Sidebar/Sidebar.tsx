import React from "react";
import { HiHome, HiPhotograph } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import {
  FaDatabase,
  FaGlobeAsia,
  FaMobileAlt,
  FaStopwatch,
  FaUserFriends,
} from "react-icons/fa";
import { HiCode } from "react-icons/hi";
import { GiHeavyBullets } from "react-icons/gi";
import { AiTwotoneSetting } from "react-icons/ai";

const Sidebar = () => {
  const Links: Array<any> = [
    {
      title: "Build",
      link: [
        {
          name: "Authencation",
          icon: <FaUserFriends />,
          path: "/",
        },
        {
          name: "Database",
          icon: <FaDatabase />,
          path: "/database",
        },
        {
          name: "Storage",
          icon: <HiPhotograph />,
          path: "/storage",
        },

        {
          name: "Hosting",
          icon: <FaGlobeAsia />,
          path: "/hosting",
        },
        {
          name: "Functions",
          icon: <HiCode />,
          path: "/function",
        },
        {
          name: "Machine Learning",
          icon: <GiHeavyBullets />,
          path: "/ml",
        },
      ],
    },
    {
      title: "Quality",
      link: [
        {
          name: "Analytic",
          icon: <AiTwotoneSetting />,
          path: "/analytic",
        },
        {
          name: "Performance",
          icon: <FaStopwatch />,
          path: "/performance",
        },
        {
          name: "Test Labs",
          icon: <FaMobileAlt />,
          path: "/test-labs",
        },
      ],
    },
  ];

  // console.log(2121, Links);
  return (
    <div className="bg-primary text-white max-w-xs pb-4 static">
      <h2 className=" text-2xl py-5 px-6 font-medium ">Paperbase</h2>
      <hr className="opacity-25" />
      <div className="flex py-3 px-6 text-base font-medium text-grey-light ">
        <span className="mt-1">
          <HiHome className="text-xl text-grey-light " />
        </span>
        <h3 className=" ml-4 ">Project Overview</h3>
      </div>
      <hr className="opacity-25" />
      <div className="bg-[#101F33] ">
        {Links?.map((item: any) => {
          return (
            <div key={item}>
              <h3 className="px-6 py-6">{item.title}</h3>
              <div className="pb-6">
                {item.link.map((name: any) => {
                  return (
                    <NavLink
                      to={name.path}
                      key={name.name}
                      className=" hover:bg-[#009be514] hover:text-[#4fc3f7] flex px-6 cursor-pointer py-2 font-medium text-base text-[#ffffffb3]"
                    >
                      <span className="mr-4 mt-1 text-xl">{name.icon}</span>{" "}
                      <p className="hover:text-[ #4fc3f7]">{name.name}</p>
                    </NavLink>
                  );
                })}
              </div>
              <hr className=" opacity-25" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;

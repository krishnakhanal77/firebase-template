import React, { useState } from "react";
import { Link } from "react-router-dom";
import Users from "../pages/Authentication/Users";
import User from "./User";

export function Tabs() {
  const [tabs, setTabs] = useState([
    {
      id: "1",
      label: "User",
      selected: true,
    },
    {
      id: "2",
      label: "Sign-in method",
      selected: false,
    },
    {
      id: "3",
      label: "Template",
      selected: false,
    },
    {
      id: "4",
      label: "Usages",
      selected: false,
    },
  ]);
  return (
    <div>
      <ul className="flex space-x-3 bg-secondary px-6 leading-[4rem]">
        {tabs?.map((tab: any) => {
          return (
            <div>
              <button
                className={
                  tab.selected
                    ? "border-b-4 text-white"
                    : "border-transparent text-grey-light"
                }
                onClick={() => {
                  const temp = tabs.map((t) => {
                    return {
                      ...t,
                      selected: tab.id === t.id ? true : false,
                    };
                  });
                  setTabs(temp);
                }}
              >
                {tab.label}
              </button>
            </div>
          );
        })}
      </ul>
      <div>
        {tabs.map((td) => {
          return (
            <div>
              {td.selected === true && td.label === "User" ? <User /> : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Tabs;

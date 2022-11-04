import React, { useState } from "react";
import { Link } from "react-router-dom";
import Users from "../pages/Authentication/Users";

export function Tabs() {
  const [active, setActive] = useState(0);
  console.log(active);
  return (
    <>
      <div>
        <ul className="flex space-x-3 bg-secondary px-6 leading-[4rem]">
          <li>
            <button
              className={
                active === 1
                  ? "border-b-4 text-white"
                  : "border-transparent text-grey-light"
              }
              onClick={() => setActive(1)}
            >
              User
            </button>
          </li>
          <li>
            <button
              className={
                active === 2
                  ? "border-b-white text-white"
                  : "border-transparent text-grey-light"
              }
              onClick={() => setActive(2)}
            >
              Sign-in method
            </button>
          </li>
          <li>
            <button
              className={
                active === 3
                  ? "border-b-white text-white"
                  : "border-transparent text-grey-light"
              }
              onClick={() => setActive(3)}
            >
              Templates
            </button>
          </li>
          <li>
            <button
              className={
                active === 4
                  ? "border-b-white text-white"
                  : "border-transparent text-grey-light"
              }
              onClick={() => setActive(4)}
            >
              Usages
            </button>
          </li>
        </ul>
        <div>
          {active === 1 && <Users />}
          {active === 2 && ""}
          {active === 3 && ""}
          {active === 4 && ""}
        </div>

        {/* <div className="flex space-x-3 border-b bg-secondary">
          {tabsData.map((tab, idx) => {
            return (
              <button
                key={idx}
                className={`py-2 mx-6 border-b-4 leading-8 transition-colors duration-300 text-base font-medium ${
                  idx === activeTabIndex
                    ? "border-b-white text-white"
                    : "border-transparent text-grey-light"
                }`}
                // Change the active tab on click.
                onClick={() => setActiveTabIndex(idx)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <p>{tabsData[activeTabIndex].content}</p> */}
      </div>
    </>
  );
}

export default Tabs;

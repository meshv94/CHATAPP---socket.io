import React from "react";
import { SearchBar } from "./SearchBar";
import { User } from "./User";

export const SliderBar = () => {
  return (
    <>
      <div className="drawer lg:drawer-open w-1/5">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-active drawer-button lg:hidden w-15 h-16 place-self-start"
          >
            <img src="https://cdn-icons-png.flaticon.com/128/10890/10890008.png" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-100 min-h-full bg-base-200 text-base-content">
            <SearchBar />
            {/* Sidebar content here */}
            <li>
              <User />
            </li>
            <li>
              <User />
            </li>
          </ul>
          <button className="btn h-20 flex justify-center align-middle fixed bottom-0 left-0 p-4 m-5">
            <img
              src="https://cdn-icons-png.flaticon.com/128/1286/1286907.png"
              alt="logout"
              width={50}
              height={30}
              className="mx-5"
            />
            <p className="text-xl self-center"> Logout</p>
          </button>
        </div>
      </div>
    </>
  );
};

"use client";

import React, { useState } from "react";
import Image from "next/image";

import { dropdown } from "@/public";
import NAVLINK from "./navlinks";

const DROPDOWNPAGE = () => {
  const [dropDown, setDropDown] = useState(false);
  const handleDropDown = () => {
    setDropDown(!dropDown);
  };
  return (
    <>
      <div
        className="fixed right-[20px] -top-[20px]   duration-200 z-30"
        onClick={handleDropDown}
        style={dropDown === false ? { top: "10px" } : { top: "30px" }}
      >
        <Image src={dropdown} alt="dropdown" className="w-[30px] md:w-[40px]" />
      </div>
      <div
        className="fixed w-full h-fit bg-[#405656]  z-20 duration-200 p-[20px] rounded-b-[20px] shadow-lg  "
        style={dropDown ? { top: "30px" } : { top: "-100vh" }}
      >
        <div>
          <span onClick={handleDropDown}>
            <NAVLINK
              href="/"
              navlink="HOME"
              linkinfo="Pravah'24 Home."
              linkColor="#A2F1F4"
              linkInfoColor="#ffffff"
              lineColor="#ffffff"
            />
          </span>
        </div>
        <div className="w-full h-[0.5px] bg-[#838383] my-[10px]" />
        <div>
          <span onClick={handleDropDown}>
            <NAVLINK
              href="events"
              navlink="EVENTS"
              linkinfo="Variety of events from endless domains."
              linkColor="#A2F1F4"
              linkInfoColor="#ffffff"
              lineColor="#ffffff"
            />
          </span>
        </div>
        <div className="w-full h-[0.5px] bg-[#838383] my-[10px]" />
        <div>
          <span onClick={handleDropDown}>
            <NAVLINK
              href="aaveg"
              navlink="AAVEG"
              linkinfo="Sports Battle on real ground."
              linkColor="#A2F1F4"
              linkInfoColor="#ffffff"
              lineColor="#ffffff"
            />
          </span>
        </div>
        <div className="w-full h-[0.5px] bg-[#838383] my-[10px]" />
        <div>
          <span onClick={handleDropDown}>
            <NAVLINK
              href="about"
              navlink="ABOUT"
              linkinfo="Know more about SKIT, Jaipur."
              linkColor="#A2F1F4"
              linkInfoColor="#ffffff"
              lineColor="#ffffff"
            />
          </span>
        </div>
        <div className="w-full h-[0.5px] bg-[#838383] my-[10px]" />
        <div>
          <span onClick={handleDropDown}>
            <NAVLINK
              href="sponsor"
              navlink="SPONSORS"
              linkinfo="Supporters of Pravah'24."
              linkColor="#A2F1F4"
              linkInfoColor="#ffffff"
              lineColor="#ffffff"
            />
          </span>
        </div>
        <div className="w-full h-[0.5px] bg-[#838383] my-[10px]" />
        <div>
          <span onClick={handleDropDown}>
            <NAVLINK
              href="team"
              navlink="OUR TEAM"
              linkinfo="Members behind the curtains."
              linkColor="#A2F1F4"
              linkInfoColor="#ffffff"
              lineColor="#ffffff"
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default DROPDOWNPAGE;

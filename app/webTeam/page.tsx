"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import Marquee from "react-fast-marquee";

import TRANSITION_WRAPPER from "@/clientComponents/transition";
import { instagram, personOne, github, linkedin, contact_icon } from "@/assets";
import { pravahWebTeam } from "@/constant";

const WEBTEAM_CARD = ({ memberDetail, index }) => {
  const [showColor, setShowColor] = useState(true);

  return (
    <>
      <div key={index}>
        <div
          className={`  mt-[50px] sm:mt-[70px] max-[320px]:w-[300px] w-[350px] sm:w-[500px] md:w-[600px] 
                  lg:w-[800px]  rounded-t-[20px] rounded-[20px] duration-200  border border-black bg-white`}
          // onMouseEnter={() => {
          //   setShowColor(!showColor);
          // }}
          // onMouseLeave={() => {
          //   setShowColor(!showColor);
          // }}
          // onClick={() => {
          //   setShowColor(!showColor);
          // }}
        >
          <div
            className={`mt-[30px]  sm:mt-[50px] overflow-hidden bg-black duration-200 `}
          >
            <Marquee
              autoFill={true}
              speed={window.innerWidth > 650 ? 50 : 20}
              direction={index % 2 == 0 ? "right" : "left"}
            >
              <div className="px-[10px]  ">
                <span className="text-[50px] text-white sm:text-[40px]  md:text-[60px] lg:text-[80px]  font-black">
                  {memberDetail.memberIntroStack} &#x2022;
                </span>
              </div>
            </Marquee>
          </div>
          <div className="  w-[300px] h-[70px] sm:h-[100px]   rounded-[20px] ">
            <div className="absolute  rounded-[20px] max-[320px]:-mt-[120px]  -mt-[130px] sm:-mt-[130px] md:-mt-[180px] lg:-mt-[200px] z-20">
              <Image
                src={memberDetail.memberPhoto}
                alt={memberDetail.memberName}
                className={`  rounded-[20px]  max-[320px]:w-[180px] w-[190px] sm:w-[220px] md:w-[280px] lg:w-[300px] aspect-square object-cover object-top  duration-200 ${
                  showColor ? "grayscale-0" : "grayscale"
                }`}
              />
            </div>
          </div>
          <div
            className="text-right flex justify-end h-[70px] sm:h-[90px] md:h-[100px] -mt-[80px] sm:-mt-[100px]
                 p-[10px] sm:p-[15px] md:p-[20px]  "
          >
            <div>
              <div>
                <span className=" text-[14px] sm:text-[20px] font-bold">
                  {memberDetail.memberName}
                </span>
              </div>
              <div className="flex justify-end">
                <div className="bg-black px-[10px]  sm:px-[15px] py-[5px] sm:py-[8px] flex gap-2 sm:gap-3 w-fit rounded-full ">
                  <Link href={memberDetail.memberGithub}>
                    <Image
                      src={github}
                      alt="github"
                      className="w-[14px] sm:w-[18px] md:w-[25px]  aspect-square"
                    />
                  </Link>
                  <Link href={memberDetail.memberLinkedIn}>
                    <Image
                      src={linkedin}
                      alt="linkedin"
                      className="w-[14px] sm:w-[18px] md:w-[25px]  aspect-square"
                    />
                  </Link>
                  <Link href={memberDetail.memberPhone}>
                    <Image
                      src={contact_icon}
                      alt="contact_icon"
                      className="w-[14px] sm:w-[18px] md:w-[25px]  aspect-square"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const WEBTEAM_OBJECT = () => {
  return (
    <>
      <div className="w-full flex min-h-[80vh] justify-center text-center">
        <div>
          <div className="leading-none ">
            <span className="font-black text-[38px] sm:text-[48px] md:text-[64px]">
              Web Team Pravah
            </span>
          </div>
          <div className=" flex flex-wrap gap-x-[50px] justify-center">
            {pravahWebTeam.map((memberDetail, index) => (
              <WEBTEAM_CARD
                key={index}
                memberDetail={memberDetail}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

const WEBTEAM = () => {
  return TRANSITION_WRAPPER(WEBTEAM_OBJECT);
};

export default WEBTEAM;

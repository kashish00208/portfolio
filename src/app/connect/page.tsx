"use client";
import React from "react";
import ImpLinks from "@/components/Links/ImpLink";
import Intro from "@/components/about/Intro";

const page = () => {
  return (
    <>
      <div className="m-7 text-center flex flex-col lg:flex-row ">
        <div className="flex-1 md:ml-96 md:mt-20 md:text-start">
          <div className="md:ml-10 lg:ml-10">
            <p className="text-white text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold ">
            LET'S WORK
            </p>
            <p className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-7xl text-opacity-50">
            TOGETHER
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

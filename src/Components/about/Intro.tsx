"use client";
import React from "react";
import Image from "next/image";
import ImpLinks from "../Links/ImpLink";

const about = () => {
  return (
    <div className="md:w-1/4 bg-white bg-opacity-85 mt-36 md:mt-10 lg:mt-10 mx-9 md:ml-20 lg:ml-20 md:mr-20 lg:mr-20 h-auto rounded-xl md:fixed lg:fixed ">
      <div className="my-5 flex justify-center items-center flex-col p-6">
        <div className="">
          <Image
            src={"/img1.jpg"}
            width={250}
            height={250}
            alt="profile"
            className="rounded-xl"
          />
        </div>
        <h1 className="text-black text-3xl font-bold font-sans my-3">
          Kashish Gupta
        </h1>
        <p className="text-gray-600 text-xs text-center bold">
          A software developer driven by a desire to solve complex problems and
          build cutting-edge applications.
        </p>
      </div>
    </div>
  );
};

export default about;

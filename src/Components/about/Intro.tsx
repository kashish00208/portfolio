"use client";
import React from "react";
import Image from "next/image";
const about = () => {
  return (
    <div className="w-1/4 mx-auto bg-white fixed top-28 ml-20 mr-9 h-auto rounded-xl">
      <div className="my-5 flex justify-center items-center flex-col  p-3">
        <div className="">
          <Image
            src={"/img1.jpg"}
            width={200}
            height={200}
            alt="profile"
            className="rounded-xl"
          />
        </div>
        <h1 className="text-black text-4xl font-bold font-sans my-5">
          Kashish Gupta
        </h1>
        <p className="text-gray-700 text-sm text-center">
          A software engineer driven by a desire to solve complex problems and
          build cutting-edge applications
        </p>
      </div>
    </div>
  );
};

export default about;

"use client";
import React from "react";
import Image from "next/image";
const about = () => {
  return (
    <div className="md:w-1/4 bg-white bg-opacity-85 my-24 mx-9 fixed md:md:ml-20 md:mr-9 h-auto rounded-xl">
      <div className="my-5 flex justify-center items-center flex-col  p-3">
        <div className="">
          <Image
            src={"/img1.jpg"}
            width={250}
            height={250}
            alt="profile"
            className="rounded-xl "
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

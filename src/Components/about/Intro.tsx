"use client";
import React from "react";
import Image from "next/image";
import ImpLinks from "../Links/ImpLink";
const about = () => {
  return (
    <div className="md:w-1/4 bg-white bg-opacity-85 mt-24 mx-9  md:md:ml-20 md:mr-9 h-auto rounded-xl">
      <div className="my-5 flex justify-center items-center flex-col">
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
      <div className="icons flex justify-center gap-5 ">
              <ImpLinks
                description="Github"
                href="https://github.com/kashish00208"
                src="/github.jpeg"
              />
              <ImpLinks
                description="Leetcode"
                href="https://leetcode.com/u/kashish00208/"
                src="/leetcode.jpeg"
              />
              <ImpLinks
                description="Linkedin"
                href="https://www.linkedin.com/in/kashish00208/"
                src="/linkedin.png"
              />
            </div>
    </div>
  );
};

export default about;

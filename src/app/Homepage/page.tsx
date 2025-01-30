"use client";
import React from "react";
import ImpLinks from "@/components/Links/ImpLink";
import Project from "@/app/Project/page";
import tools from "@/app/Tools/page";
import Homepage from "@/app/Homepage/page";
import Connect from "@/app/Connect/page";
import Intro from "@/components/about/Intro";

const page = () => {
  return (
    <>
      <Intro />
      <div className="m-7 text-center">
        <p className="text-white text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold ">
          SOFTWARE
        </p>
        <p className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-7xl text-opacity-50 ">
          DEVELOPER
        </p>
        <p className="mt-7 max-w-96 text-white text-opacity-45 text-lg ">
          Driven by a love for building seamless and impactful user experiences.
          Focused on turning innovative concepts into well-executed,
          user-friendly solutions.
        </p>
        <div className="icons flex justify-center gap-5 p-5">
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
            src="/linkden.jpg"
          />
        </div>
      </div>
      <Project />
    </>
  );
};

export default page;

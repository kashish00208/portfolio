"use client";
import React from "react";
import Intro from "@/components/Intro"
import ImpLinks from "@/components/ImpLink";
import Contact from "@/components/Contact";

const page = () => {
  return (
    <>
    <Intro/>
      <div className="m-7 text-center flex flex-col lg:flex-row ">
        <div className="flex-1 md:ml-96 md:mt-20 md:text-start">
          <div className="md:ml-10 lg:ml-10">
            <p className="text-white text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold ">
              SOFTWARE
            </p>
            <p className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-7xl text-opacity-50">
              DEVELOPER
            </p>
            <p className="mt-7 max-w-96 text-white text-opacity-45 text-lg">
              Driven by a love for building seamless and impactful user
              experiences. Focused on turning innovative concepts into
              well-executed, user-friendly solutions.
            </p>

            <div className="icons flex justify-center md:justify-start gap-5 p-5">
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
        </div>
      </div>
      <div className="md:hidden lg:hidden">
        <Contact />
      </div>
    </>
  );
};

export default page;

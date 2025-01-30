'use client'
import React from "react";
import Image from "next/image";
import ImpLinks from "@/components/Links/ImpLink";

const page = () => {
  return (
    <div className="mt-10 mb-20 w-2/4 h-auto rounded-xl fixed top-20 left-96 ml-16 overflow-y-auto max-h-[calc(100vh-40px)]">
      <p className="text-white text-8xl font-semibold">SOFTWARE </p>
      <p className="text-white text-7xl text-opacity-50">DEVELOPER</p>
      <p className="mt-7 max-w-96 text-white text-opacity-45 text-lg">
        Driven by a love for building seamless and impactful user experiences.
        Focused on turning innovative concepts into well-executed, user-friendly
        solutions.
      </p>
      <div className="icons flex gap-8 mt-9">
        <ImpLinks description="Github" href="https://github.com/kashish00208" src="/github.jpeg" />
        <ImpLinks description="Leetcode" href="https://leetcode.com/u/kashish00208/" src="/leetcode.jpeg" />
        <ImpLinks description="Linkedin" href="https://www.linkedin.com/in/kashish00208/" src="/linkedin.png" />
      </div>
    </div>
  );
};

export default page;

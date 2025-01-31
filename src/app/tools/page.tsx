"use client";
import React from "react";
import Skill from "@/components/Links/Skill";

const page = () => {
  return (
    <>
      <div className="m-7 text-center flex flex-col lg:flex-row my-10">
        <div className="flex-1 md:ml-96 md:mt-20 md:text-start">
          <div className="md:ml-10 lg:ml-10">
            <p className="text-white text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold ">
              PREMIUM
            </p>
            <p className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-7xl text-opacity-50 mb-10">
              TOOLS
            </p>
            <div>
              <Skill title="NextJs" href="https://nextjs.org/" src="/sk1.jpg" />
              <Skill title="TypeScript" href="https://www.typescriptlang.org/" src="/sk2.jpg" />
              <Skill title="JavaScript" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" src="/sk3.png" />
              <Skill title="C++" href="https://www.w3schools.com/cpp/" src="/sk4.webp" />
              <Skill title="NodeJS" href="https://nodejs.org/en" src="/sk5.webp" />
              <Skill title="MongoDb" href="https://www.mongodb.com/" src="/sk6.webp" />
              <Skill title="Express" href="https://expressjs.com/" src="/sk7.webp" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;

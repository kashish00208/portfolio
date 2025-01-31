import React from "react";
import ProjectLinks from "@/components/Links/ProjectLinks";
import Intro from "@/components/about/Intro";
const page = () => {
  return (
    <>
      <div className="m-7 text-center flex flex-col lg:flex-row ">
        <div className="flex-1 md:ml-96 md:mt-20 md:text-start">
          <p className="text-white text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold md:ml-10 lg:ml-10">
            RECENT
          </p>
          <p className="text-white text-3xl lg:text-5xl text-opacity-50 md:ml-10 lg:ml-10">
            PROJECTS
          </p>
          <div className="icons flex flex-col justify-center md:justify-start gap-5 p-5">
            <div className="projectlinks "></div>
            <ProjectLinks
              title="WeatherWave"
              description="A realtime weather app"
              href="https://github.com/kashish00208/React-Projects/tree/main/weather-app"
              src="/project1.jpg"
            />
            <ProjectLinks
              title="Aconews"
              description="A news website"
              href="https://github.com/kashish00208/aconews"
              src="/project2.jpg"
            />
            <ProjectLinks
              title="helperBot"
              description="AI powered Chatbot"
              href="https://github.com/kashish00208/chatbot"
              src="/project3.jpg"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;


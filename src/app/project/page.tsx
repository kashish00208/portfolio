import React from "react";
import ProjectLinks from "@/components/Links/ProjectLinks";
import Intro from "@/components/about/Intro";
const page = () => {
  return (
    <>
      <div className="hidden md:block">
        <Intro />
      </div>
      <div className="m-7 text-center flex flex-col lg:flex-row mt-20">
        <div className="flex-1 md:ml-96 md:mt-20 md:text-start">
          <div className="md:ml-10 lg:ml-10">
            <p className="text-white text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold">
              RECENT
            </p>
            <p className="text-white text-3xl lg:text-5xl text-opacity-50">
              PROJECTS
            </p>
            <div className="icons flex flex-col justify-center md:justify-start my-10 gap-5">
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
              <ProjectLinks
                title="WeatherWave"
                description="A realtime weather app"
                href="https://github.com/kashish00208/React-Projects/tree/main/weather-app"
                src="/project1.jpg"
              />
              <ProjectLinks
                title="Portfolio"
                description="Portfolio Web"
                href="https://github.com/kashish00208/portfolio"
                src="/project4.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <Intro />
      </div>
    </>
  );
};

export default page;

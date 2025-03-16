import React from "react";
import ProjectLinks from "@/components/ProjectLinks";
import Intro from "@/components/Intro";
import Connect from "@/components/Connect";
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
            <div className="projects-container mt-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                {[
                  {
                    title: "TubeSave",
                    description: "Youtube video downloader",
                    href: "https://yt-extractor-gold.vercel.app/",
                    src: "/yte.jpeg",
                  },
                  {
                    title: "Aconews",
                    description: "A news website",
                    href: "https://github.com/kashish00208/aconews",
                    src: "/project2.jpg",
                  },
                  {
                    title: "HelperBot",
                    description: "AI powered Chatbot",
                    href: "https://github.com/kashish00208/chatbot",
                    src: "/project3.jpg",
                  },
                  {
                    title: "WeatherWave",
                    description: "A realtime weather app",
                    href: "https://github.com/kashish00208/React-Projects/tree/main/weather-app",
                    src: "/project1.jpg",
                  },
                  {
                    title: "Portfolio",
                    description: "Portfolio Web",
                    href: "https://github.com/kashish00208/portfolio",
                    src: "/project4.jpg",
                  },

                ].map((project, index) => (
                  <div
                    key={index}
                    className="transform transition duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
                  >
                    <ProjectLinks
                      title={project.title}
                      description={project.description}
                      href={project.href}
                      src={project.src}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="md:hidden lg:hidden">
        <Connect />
        <Intro />
      </div>
    </>
  );
};

export default page;

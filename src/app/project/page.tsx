import React from "react";
import ProjectLinks from "@/components/Links/ProjectLinks";
import Intro from "@/components/about/Intro";
const page = () => {
  return (
    <>
      <div className="m-7 text-center">
        <div className="apply-all hide-scrollbar">
          <div>
            <p className="text-white text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold ">RECENT</p>
            <p className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-7xl text-opacity-50">PROJECTS</p>
          </div>
          <div className="projectlinks "></div>
          <ProjectLinks
            title=""
            description="Youtube extractor"
            href="https://github.com/kashish00208/aconews"
            src="/img1.jpg"
          />
          <ProjectLinks
            title=""
            description="Youtube extractor"
            href="https://github.com/kashish00208/aconews"
            src="/img1.jpg"
          />
          <ProjectLinks
            title=""
            description="Youtube extractor"
            href="https://github.com/kashish00208/aconews"
            src="/img1.jpg"
          />
        </div>
      </div>
    </>
  );
};

export default page;

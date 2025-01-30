import React from "react";
import ProjectLinks from "@/components/Links/ProjectLinks";
import Intro from "@/components/about/Intro";
const page = () => {
  return (
    <>
      <div>
        <div className="apply-all hide-scrollbar">
          <div>
            <p className="text-white text-8xl font-semibold">RECENT</p>
            <p className="text-white text-7xl text-opacity-50">PROJECTS</p>
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

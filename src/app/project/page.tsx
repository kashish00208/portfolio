import React from "react";
import ProjectLinks from "@/components/Links/ProjectLinks";
const page = () => {
  return (
    <div className="mt-10 mb-20 w-2/4  top-20 left-96 ml-16 fixed h-auto rounded-xl">
      <div>
        <p className="text-white text-8xl font-semibold">RECENT</p>
        <p className="text-white text-7xl text-opacity-50">PROJECTS</p>
      </div>
      <div className="projectlinks "></div>
      <ProjectLinks
        title="YTExtractor"
        description="Youtube extractor"
        href="https://github.com/kashish00208/YTExtractor"
        src="/img1.jpg"
      />
    </div>
  );
};

export default page;

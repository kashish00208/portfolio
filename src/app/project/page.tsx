import React from "react";
import ProjectLinks from "@/components/Links/ProjectLinks";
const page = () => {
  return (
    <div className="mt-10 mb-20 w-2/4 h-auto rounded-xl fixed top-20 left-96 ml-16 overflow-y-auto max-h-[calc(100vh-40px)] hide-scrollbar">
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
      <ProjectLinks
        title=""
        description="Youtube extractor"
        href="https://github.com/kashish00208/aconews"
        src="/img1.jpg"
      />
    </div>
  );
};

export default page;

'use client'
import Project from "@/app/Project/page"
import tools from "@/app/Tools/page"
import Homepage from '@/app/Homepage/page'
import Connect from '@/app/Connect/page'
import Intro from '@/components/about/Intro'
export default function Home() {
  return (
    <>
      <div>
      <Intro />
      </div>
      <div className="w-2/4  top-20 left-96 ml-16 fixed h-auto rounded-xl">
      <Homepage/>
      </div>
    </>
  );
}

'use client'
import Project from "@/app/Project/page"
import tools from "@/app/Tools/page"
import Homepage from '@/app/Homepage/page'
import Connect from '@/app/Connect/page'
import Intro from '@/components/about/Intro'
export default function Home() {
  return (
    <>
      <div className="mt-10 mb-20 w-2/4 top-20 left-96 ml-16  h-auto rounded-xl">
      <Homepage/>
      </div>
    </>
  );
}

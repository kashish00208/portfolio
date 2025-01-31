import { div, hr } from "motion/react-client";
import Link from "next/link";
import Image from "next/image";
export const ProjectLinks = ({
  title,
  href,
  src,
}: {
  title: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href}>
      <div className="flex  hover:bg-slate-700 hover:bg-opacity-10 p-3 rounded-md w-full">
        <div className="mr-10">
          <Image
            src={src}
            alt={title}
            width={100}
            height={100}
            className="rounded-md"
            style={{ objectFit: "cover", width: "80px", height: "80px" }}
          />
        </div>
        <div className="flex flex-col justify-center gap-1 ">
          <p className="text-2xl font-bold text-white ">{title}</p>
        </div>
      </div>
    </Link>
  );
};
export default ProjectLinks;

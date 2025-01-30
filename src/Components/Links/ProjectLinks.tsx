import { div, hr } from "motion/react-client";
import Link from "next/link";
import Image from "next/image";
export const ProjectLinks = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href}>
      <div className="flex my-5 hover:bg-slate-700 hover:bg-opacity-10 p-3 rounded-md w-3/4">
        <div className="mr-10">
          <Image
            src={src}
            alt={title}
            width={100}
            height={100}
            className="rounded-md"
          />
        </div>
        <div className="flex flex-col justify-center gap-1 ">
          <p className="text-2xl font-bold text-white ">{title}</p>
          <p className="text-white text-opacity-50">{description}</p>
        </div>
      </div>
    </Link>
  );
};
export default ProjectLinks;

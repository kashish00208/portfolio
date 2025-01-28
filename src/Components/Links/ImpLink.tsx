"use client";
import Link from "next/link";
import Image from "next/image";
export const ImpLinks = ({
  description,
  href,
  src,
}: {
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="space-x-2 " >
      <Image src={src} width={30} height={30} alt={description} className="rounded-lg"/>
    </Link>
  );
};
export default ImpLinks;
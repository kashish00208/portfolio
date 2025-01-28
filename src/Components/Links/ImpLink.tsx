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
    <Link href={href} className="space-x-2">
      <Image src={src} width={40} height={40} alt={description} />
    </Link>
  );
};
export default ImpLinks;
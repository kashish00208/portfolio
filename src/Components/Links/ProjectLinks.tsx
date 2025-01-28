import { div, hr } from "motion/react-client";
import Link from "next/link";
import Image from "next/image";
export const projectLinks = ({
    title,
    description,
    href,
    src,
}:{
    title: string;
    description: string;
    href : string,
    src : string
})=>{
    return (
        <Link href={href}>
            <div>
                <Image src={src} alt={title}/>
                {title}
                {description}
            </div>
        </Link>
    )
}
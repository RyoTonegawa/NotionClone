import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils"; 

export const font =Poppins({
    subsets:['latin'],
    weight:["400","600"]
})
const Logo = () => {
    return ( 
    <div className="hidden md:flex items-center gap-x-2">
        <Image
            src="/next.svg"
            height="40"
            width="40"
            alt="plactice App Logo"
            className="dark:hidden"
        />
        <Image
            src="/next_dark.png"
            height="40"
            width="40"
            alt="plactice App Logo"
            className="hidden dark:block"
        />
    </div> );
}
 
export default Logo;
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer: React.FC = () => {
    return (  
        <footer className="flex gap-8 p-20 justify-center text-white">
            <Image src='/assets/logo1.png' width={30} height={30} alt="logo-footer"></Image>
            <Link href='/terms'>Terms</Link>
            <Link href='https://github.com/Saniou'>Github</Link>
            <Link href='/privacy'>Privacy</Link>
        </footer>
    );
}
 
export default Footer;
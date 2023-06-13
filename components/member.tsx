import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props{
    id: string,
    name: string,
    socialId: string,
    link: string,
}

const Member: React.FC<Props> = ({id, name, socialId, link}) => {
    return ( 
        <div>
        <div>
            <Image src={`/assets/members/margelo_faces_${name}.svg`} width={1366} height={1555} alt="members"/>
        </div>
        
        <div className="text-2xl xl:text-3xl">{name}</div>
        <div className="text-xl">
            <Link href={link} target="_blank">
                {socialId}
            </Link>
        </div>
        </div>
     );
}
 
export default Member;
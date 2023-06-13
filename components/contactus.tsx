import React, { useCallback, useState } from "react";
import Image from "next/image";

const ContactUs: React.FC = () => {
    return ( 
        <div className='text-white bg-black flex flex-col items-center justify-center pt-10 min-h-screen'>
            <div className="flex flex-col justify-center items-center pt-10 lg:pt-6">
            <div className="pb-10">
                <Image src='/assets/logo1.png' width={50} height={50} alt="contact us"></Image>
            </div>
            <h2 className="text-4xl font-bold">Contact Us</h2>
            <form className="mt-16 flex flex-col gap-4 px-10 lg:mt-20 min-w-full lg:min-w-[500px]">
                <input type="text" placeholder="Name" id="companyName" name="companyName" required maxLength={128} className="bg-black border-1 text-white outline-none border-2 border-white rounded-xl px-8 py-2" />
                <input type="email" placeholder="Email" id="email" name="companyName" required maxLength={128} className="bg-black border-1 text-white outline-none border-2 border-white rounded-xl px-8 py-2" />
                <textarea placeholder="Additional Information" id="message" name="message" required maxLength={104857} className="bg-black border-1 text-white outline-none border-2 border-white rounded-xl px-8 py-2 min-h-[16rem]" />
                <div className="text-center mt-10">
                    <button type="submit" className="rounded-xl border-2 p-4 text-[19px] hover:bg-white hover:text-black transition-[0.2s]">Submit</button>
                </div>
            </form>
            </div>
        </div>
     );
}
 
export default ContactUs;
import React from 'react';
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
const SocialLinks = () => {
    return (
        <div>
            <h2 className='font-bold my-4'>Finds us on</h2>
            <div className="flex flex-col border-2 border-red-100">
                <button className="btn btn-ghost justify-start">
                    <FaFacebookF size={26} className='p-1.5 bg-base-300 rounded-full '></FaFacebookF>
                    <span>Facebook</span>
                </button>
                <button className="btn btn-ghost justify-start ">
                    <IoLogoInstagram size={26} className='p-1.5 bg-base-300 rounded-full'></IoLogoInstagram>
                    <span>Instagram</span>
                </button>
                <button className="btn btn-ghost justify-start ">
                    <BsTwitterX size={26} className='p-1.5 bg-base-300 rounded-full'></BsTwitterX>
                    <span>TwitterX</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLinks;
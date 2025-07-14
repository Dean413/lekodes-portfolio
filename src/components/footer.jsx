import React from "react";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SectionWrapper } from "../hoc";

const Footer = () => {
  return (
    <footer className=" text-white text-center w-[100%] py-4 mt-10">
      <div className="flex gap-4 text-xl justify-center mb-2">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/olalekanbamigboye" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition text-[30px]"
        >
          <FaLinkedin />
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/2347039752831"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-green-400 transition text-[30px]">
          <FaWhatsapp /> 
        </a>

        {/* Email */}
        <a
          target="_blank"
          href="mailto:bamigboyeolalekan6@gmail.com"
          className="hover:text-red-400 transition text-[30px]"
        >
          <MdEmail />
        </a>
      </div>

     

      <p className="text-sm">
        &copy; {new Date().getFullYear()} All rights reserved — Olalekan Bamigboye
      </p>
    </footer>
    
  );
};

export default SectionWrapper (Footer, "footer")

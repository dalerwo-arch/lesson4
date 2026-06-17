import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const Section4 = () => {
  return (
    <div className="md:w-[80%] w-[90%] m-auto py-[100px]">

      {/* Top Banner */}
      <div className="bg-[#1C1C1C] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h1 className="text-white text-[24px] md:text-[36px] font-semibold">
            Start your Career with{" "}
            <span className="text-[#CAFF33]">YourBank today!</span>
          </h1>

          <p className="text-[#B3B3B3] mt-3">
            Learn more about our opportunities and become part of a team that
            values growth, innovation and success.
          </p>
        </div>

        <button className="bg-[#CAFF33] text-black px-6 py-3 rounded-full font-medium">
          Open Account
        </button>
      </div>

      {/* Footer */}
      <div className="mt-[100px] text-center">

        <h1 className="text-white text-[24px] font-bold">
          <span className="text-[#CAFF33]">Your</span>Bank
        </h1>

        <div className="flex justify-center gap-8 mt-8 text-[#B3B3B3]">
          <p>Home</p>
          <p>Careers</p>
          <p>About</p>
          <p>Security</p>
        </div>

        <div className="border-t border-b border-[#262626] py-6 mt-8 flex flex-col md:flex-row justify-center gap-6 text-[#B3B3B3]">
          <div className="flex items-center gap-2">
            <MdEmail className="text-[#CAFF33]" />
            <p>hello@skillbridge.com</p>
          </div>

          <div className="flex items-center gap-2">
            <IoCall className="text-[#CAFF33]" />
            <p>+91 91813 23 2309</p>
          </div>

          <div className="flex items-center gap-2">
            <FaLocationDot className="text-[#CAFF33]" />
            <p>Somewhere in the World</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-8 gap-5">

          <div className="flex gap-3">
            <div className="bg-[#CAFF33] p-3 rounded-full">
              <FaFacebookF />
            </div>

            <div className="bg-[#CAFF33] p-3 rounded-full">
              <FaTwitter />
            </div>

            <div className="bg-[#CAFF33] p-3 rounded-full">
              <FaLinkedinIn />
            </div>
          </div>

          <p className="text-[#B3B3B3] text-sm">
            YourBank All Rights Reserved
          </p>

          <div className="flex gap-4 text-[#B3B3B3] text-sm">
            <p>Privacy Policy</p>
            <p>|</p>
            <p>Terms of Service</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Section4;
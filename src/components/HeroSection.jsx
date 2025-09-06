import { Star } from "lucide-react";
import React from "react";
import Typography from "./Typography";

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#f2f0f1]">
        <div className="flex justify-center  w-[90%] mx-auto md:py-24 py-10">
          <div className=" flex flex-col gap-[32px] max-w-[600px]">
            {/* Big Tag */}
            <div className="md:text-[64px] lg:text-[64px] text-[38px]  text-left leading-8 md:text-left   font-[700] relative md:leading-16">
              <div>
                <Typography>FIND CLOTHES</Typography>
              </div>
              <div>
                <Typography>THAT MATCHES</Typography>
              </div>
              <div>
                <Typography>YOUR STYLE</Typography>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                className="absolute hidden md:block left-[-70px]"
                viewBox="0 0 104 104"
                fill="none"
              >
                <path
                  d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
                  fill="black"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="104"
                height="104"
                viewBox="0 0 104 104"
                fill="none"
                className="absolute hidden md:block -top-8 -right-[90px]"
              >
                <path
                  d="M52 0C53.7654 27.955 76.0448 50.2347 104 52C76.0448 53.7654 53.7654 76.0448 52 104C50.2347 76.0448 27.955 53.7654 0 52C27.955 50.2347 50.2347 27.955 52 0Z"
                  fill="black"
                ></path>
              </svg>
            </div>
            {/* Small text */}
            <div className="text-start md:text-center max-w-[545px] font-light  text-[#00000099]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </div>
            {/* Shop Now Button */}
            <div>
              <button className="px-14 w-full md:w-fit py-4 text-md font-medium cursor-pointer bg-black text-white rounded-4xl">
                Shop Now
              </button>
            </div>

            {/* Count Numbers */}
            <div className="grid grid-cols-2 md:gap-0 md:grid-cols-3  mt-4 divide-[#0000001A] text-start">
              <div className="px-6 border-r-[1px] border-gray-400">
                <div className="font-[700] text-2xl md:text-4xl">200+</div>
                <div className="font-[400] text-xs md:text-sm text-[#00000099] whitespace-nowrap">
                  International Brands
                </div>
              </div>
              <div className="px-6 md:border-r-[1px] md:border-gray-400">
                <div className="font-[700] text-2xl md:text-4xl">2000+</div>
                <div className="font-[400] text-xs md:text-sm text-[#00000099] whitespace-nowrap">
                  High-Quality Products
                </div>
              </div>
              <div className="px-6 py-6  col-span-3 justify-self-center md:col-span-1 md:py-0">
                <div className="font-[700] text-2xl md:text-4xl font-montserrat">
                  30,000+
                </div>
                <div className="font-[400] text-xs md:text-sm text-[#00000099] whitespace-nowrap">
                  Happy Customers
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

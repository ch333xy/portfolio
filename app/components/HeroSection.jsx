"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section id="hero" className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-7 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I'm{""}
            </span>
            <TypeAnimation
              sequence={[
                " David",
                1000,
                " a Web Developer",
                1000,
                " a UI/UX Designer",
                1000,
                " a Frontend Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            An aspiring developer, mainly frontend. But I am willing to learn
            and delve into backend and database systems. I mainly use React.js
            and Tailwind CSS for frontend work and have had some experience with
            MySQL
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full  mr-4 bg-gradient-to-br hover:bg-slate-500 from-blue-500 via-purple-500 to-pink-500 text-white">
              Hire me
            </button>
            <button className="px-5 py-3 w-full sm:w-fit rounded-full  bg-transparent border-2 hover:bg-slate-800 border-white text-white mt-3">
              Download CV
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-5 place-self-center mt-4 lg:mt-0"
        >
          <motion.div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              className=" rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/hero.png"
              alt="hero"
              width={300}
              height={300}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

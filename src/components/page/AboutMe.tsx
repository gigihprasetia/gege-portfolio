"use client";
import React from "react";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { FaJs } from "react-icons/fa6";
import { IoLogoVue } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { IconsInsta, IconsTS } from "../icons/Icons";
import { TbBrandGithub } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import MyImage from "../MyImage";
import Animates from "../Animates";

const AboutMe = () => {
  const linkingSites = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex  flex-col-reverse lg:flex-row  p-5 lg:p-10 gap-[50px] lg:gap-5">
        <div className=" w-12/12 lg:w-8/12 flex flex-col gap-10">
          <Animates
            transition={{
              duration: 0.3,
              delay: 0,
            }}
            type="fadeInRight"
          >
            <div>
              <div className="relative ">
                <p className="text-right text-3xl underline underline-offset-4">
                  WHO I AM
                </p>
                <p className="absolute top-[1px] right-0 blur-[3px] animate-pulse text-right text-3xl underline underline-offset-4">
                  WHO I AM
                </p>
              </div>
              <p className="text-right tracking-wider mt-4  lg:w-[80%] ml-auto">
                Hi! I&apos;m Gigih Prasetia, a passionate Front-End Developer
                with over 4 years of experience building modern, responsive, and
                user-focused interfaces. I specialize in technologies like
                React.js, Vue.js, and React Native to create seamless web and
                mobile experiences. I&apos;m a fast learner who loves staying
                up-to-date with the latest trends in front-end development.
                Whether working independently or as part of a collaborative
                team, I’m committed to delivering clean, efficient, and
                maintainable code that brings real value to users and
                businesses.
              </p>
            </div>
          </Animates>
          <Animates
            transition={{
              duration: 0.3,
              delay: 0.3,
            }}
            type="fadeInRight"
          >
            <div>
              <div className="relative">
                <p className="text-right text-3xl underline underline-offset-4">
                  SOCIAL MEDIA
                </p>
                <p className="absolute top-[1px] right-0 blur-[2px] animate-pulse text-right text-3xl underline underline-offset-4">
                  SOCIAL MEDIA
                </p>
              </div>
              <div className="flex gap-3 justify-end mt-4">
                <div
                  onClick={() =>
                    linkingSites("https://github.com/gigihprasetia")
                  }
                  className="p-2 rounded-sm border-[2px] border-white relative flex justify-center items-center hover:scale-105 duration-300"
                >
                  <TbBrandGithub size={50} className="text-white relative" />
                  <TbBrandGithub
                    size={70}
                    className="text-white absolute blur-[20px] opacity-0 hover:opacity-100 duration-100 "
                  />
                </div>
                <div
                  onClick={() =>
                    linkingSites("https://www.instagram.com/gigihprasetia18/#")
                  }
                  className="p-[1.5px] w-18  rounded-sm  bg-gradient-to-r to-pink-500 via-red-500 from-yellow-500 relative flex justify-center items-center hover:scale-105 duration-300 "
                >
                  <div className="bg-black rounded-sm h-full w-full flex justify-center items-center ">
                    <IconsInsta size={50} />
                    <IconsInsta
                      size={50}
                      className="absolute blur-[20px] opacity-0 hover:opacity-100 duration-100"
                    />
                  </div>
                </div>
                <div
                  onClick={() => linkingSites("https://x.com/gihh_666")}
                  className="p-2 rounded-sm border-[2px] border-white relative flex justify-center items-center hover:scale-105 duration-300 "
                >
                  <FaXTwitter size={50} className="text-white" />
                  <FaXTwitter
                    size={50}
                    className="text-white absolute blur-[20px] opacity-0 hover:opacity-100 duration-100"
                  />
                </div>
                <div
                  onClick={() =>
                    linkingSites("https://www.linkedin.com/in/gigihprasetia/")
                  }
                  className="p-2 rounded-sm border-[2px] border-blue-500 relative flex justify-center items-center hover:scale-105 duration-300 "
                >
                  <FaLinkedin size={50} className="text-blue-500" />
                  <FaLinkedin
                    size={50}
                    className="text-blue-500 absolute blur-[20px] opacity-0 hover:opacity-100 duration-100"
                  />
                </div>
              </div>
            </div>
          </Animates>
          <Animates
            transition={{
              duration: 0.3,
              delay: 0.6,
            }}
            type="fadeInRight"
          >
            <div>
              <div className="relative">
                <p className="text-right text-3xl underline underline-offset-4">
                  TECH STACK
                </p>
                <p className="absolute top-[1px] right-0 blur-[2px] animate-pulse text-right text-3xl underline underline-offset-4">
                  TECH STACK
                </p>
              </div>
              <div className="flex gap-3 flex-wrap justify-end mt-4">
                <div className="p-2 rounded-sm border-[2px] border-blue-300 relative flex justify-center items-center hover:scale-105 duration-300">
                  <FaReact size={50} className="text-blue-300 relative" />
                  <FaReact
                    size={70}
                    className="text-blue-300 absolute blur-[20px] opacity-0 hover:opacity-100 duration-100 "
                  />
                </div>
                <div className="p-2 rounded-sm border-[2px] border-green-400 relative flex justify-center items-center hover:scale-105 duration-300 ">
                  <IoLogoVue size={50} className="text-green-400" />
                  <IoLogoVue
                    size={70}
                    className="text-green-400 absolute blur-[20px] opacity-0 hover:opacity-100 duration-100"
                  />
                </div>
                <div className="p-2 rounded-sm border-[2px] border-blue-600 relative flex justify-center items-center hover:scale-105 duration-300 ">
                  <RiTailwindCssFill size={50} className="text-blue-500" />
                  <RiTailwindCssFill
                    size={70}
                    className="text-blue-500 absolute blur-[20px] opacity-0 hover:opacity-100 duration-100"
                  />
                </div>
                <div className="p-2 rounded-sm border-[2px] border-green-500 relative flex justify-center items-center hover:scale-105 duration-300 ">
                  <FaNodeJs size={50} className="text-green-500" />
                  <FaNodeJs
                    size={70}
                    className="text-green-500 absolute blur-[20px] opacity-0 hover:opacity-100 duration-100"
                  />
                </div>
                <div className="p-2 rounded-sm border-[2px] border-yellow-500 relative flex justify-center items-center hover:scale-105 duration-300 ">
                  <FaJs size={50} className="text-yellow-500" />
                  <FaJs
                    size={70}
                    className="text-yellow-500 absolute blur-[20px] opacity-0 hover:opacity-50 duration-100"
                  />
                </div>
                <div className="p-2 rounded-sm border-[2px] border-blue-500 relative flex justify-center items-center hover:scale-105 duration-300 ">
                  <IconsTS size={50} className="" />
                  <IconsTS
                    size={70}
                    className=" absolute blur-[20px] opacity-0 hover:opacity-50 duration-100"
                  />
                </div>
              </div>
            </div>
          </Animates>
        </div>
        <div className="w-12/12 mt-[500px] lg:mt-[0px] lg:w-4/12 flex justify-center items-center">
          <MyImage />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

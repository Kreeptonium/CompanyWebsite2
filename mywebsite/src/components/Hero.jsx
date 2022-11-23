import React from "react";
import {
  CubeTransparentIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import blockSmallImg from "../assets/Blockchain3.png";
import blockImg from "../assets/Blockchain2.png";

const Hero = () => {
  return (
    <div
      name="home"
      className="w-full bg-zinc-200 flex flex-col justify-between
      h-[25rem] sm:h-[25rem] md:h-[45rem] lg:h-[45rem] xl:h-[45rem]
      "
    >
      <div className="  grid md:grid-cols-2 w-[95%] sm:w-[90%] md:w-[90%] lg:w-[80%] xl:w-[90%] m-auto">
        <div className="flex flex-col justify-center md:items-start w-full px-2 py-8
        
        ">
          {/* <p className='text-1xl sm:text-2xl md:text-3xl'>Staff Augmentation</p> */}
          <h1 className="sm:py-3 md:py-5 lg:py-7 text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            Blockchain- dApps Specialist
          </h1>
          {/* <p className='text-1xl pb-3  sm:text-2xl md:text-3xl'>Web & Mobile App Development</p> */}
          <button className="py-2 px-4 text-xs md:text-base lg:text-lg xl:text-2xl w-[50%] sm:w-[50%] md:w-[70%] lg:w-[80%] xl:w-[90%] my-4 ">
            REQUEST A FREE CONSULTATION
          </button>
        </div>

        <div>
          {/* <img className="md:hidden w-[80%]" src={blockSmallImg} alt="/" /> */}
          <img className="hidden md:block w-full" src={blockImg} alt="/" />
        </div>

        <div
          // className="absolute flex flex-col py-8 sm:min-w-[481px] md:min-w-[760px] sm:bottom-[1%] md:bottom-[5%]
          //   mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
          //   border border-slate-300 rounded-xl text-center shadow-xl"

          // className="absolute flex flex-col ml-0 sm:ml-2 md:ml-4 px-0 sm:px-2 md:px-4 lg:px-6 xl:px-8  py-0 sm:py-0 md:py-8 lg:py-10 xl:py-12 md:min-w-[700px] bottom-[1%]
          //   mx-1  md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
          //   border border-slate-300 rounded-xl text-center shadow-xl"

          className="md:absolute flex flex-col py-0 md:py-4 lg:py-6 xl:py-8 text-sm md:text-base 
          lg:text-md xl:text-1xl w-[95%] sm:w-[95%] md:w-[95%] lg:w-[95%] xl:w-[95%] bottom-[5%]
           md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
           border border-slate-300 rounded-xl text-center shadow-xl 
           "
        >
          <p>Software Solutions</p>
          <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500">
              <CubeTransparentIcon className=" h-6 text-indigo-600" />
              Blockchain
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <DocumentTextIcon className=" h-6 text-indigo-600" /> Smart
              Contract
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <ComputerDesktopIcon className=" h-6 text-indigo-600" /> Web Apps
            </p>
            <p className="flex px-4 py-2 text-slate-500">
              <DevicePhoneMobileIcon className=" h-6 text-indigo-600" /> Mobile
              Apps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import logo from "../assets/logo.png";

// import { Container } from './styles';

const LandingHead = () => {
  const cssClasses = `head-class realative h-auto py-[4rem] w-[80%] px-[4rem] rounded-[2rem] flex flex-col gap-5 items-start max-sm:w-full max-sm:py-[2rem] max-sm:px-[5px]`;
  return (
    <main className={cssClasses}>
      <img className="w-[10rem]" src={logo} alt="" />
      <div className="flex gap-4 w-[20rem]">
        <input
          placeholder="Search anime..."
          type="text"
          className="rounded-xl h-10 pr-[100px] pl-[15px] text-[#3b3a52] text-[14px] font-[444] border-none outline-none w-auto"
        />
        <button className="px-[.8rem] rounded-xl bg-[#ffb3d6] text-stone-950">
          <i className="fa-solid fa-magnifying-glass text-stone-950 cursor-pointer"></i>
        </button>
      </div>
      <p className="bg-red w-[50%] h-[5rem] text-[11px] leading-4 text-stone-200 tracking-[2px] max-sm:w-auto md:w-[70%]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit optio
        hic veniam velit error quibusdam itaque explicabo doloremque odio
        nesciunt.ic veniam velit error quibusdam itaque explicabo doloremque
        odio
      </p>
      <button className="bg-[#ffb3d6] text-stone-800 font-semibold py-[.6rem] px-[1.5rem] rounded-md text-base flex justify-center items-center gap-4  max-sm:w-full">
        Watch anime <i className="fa-solid fa-arrow-right"></i>
      </button>
    </main>
  );
};

export default LandingHead;

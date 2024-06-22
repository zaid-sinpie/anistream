import React from "react";
import logo from "../assets/anistream.png"

const Header = () => {
  // bg-slate-900
  return (
    <header className="w-full h-16 flex justify-between items-center gap-12 bg-transparent fixed top-0 left-0">
      <ul className="flex items-center gap-8 justify-center ml-4 ">
        <i className="fa-solid fa-bars text-2xl text-stone-200 cursor-pointer"></i>
        <img className="h-10 cursor-pointer" src={logo} alt="" />
      </ul>
      <ul className="flex items-center gap-4 justify-center relative max-sm:hidden">
        <input
          placeholder="Search anime..."
          type="text"
          className="rounded-sm h-10 pr-[100px] pl-[15px] text-[#111] text-[16px] font-[444] border-none outline-none"
        />
        <div className="absolute flex gap-2 justify-center items-center right-[7px]">
          <i className="fa-solid fa-magnifying-glass text-slate-700 cursor-pointer"></i>
          <button className="h-[26px] text-slate-200 bg-black px-[6px] py-0 rounded-md hover:bg-primary hover:text-stone-900 cursor-pointer text-[14px]">
            Filter
          </button>
        </div>
      </ul>
      <nav className="max-sm:hidden">
        <div className="links flex gap-3 text-2xl text-stone-100">
          <a href="#">
            <i className="fa-brands fa-discord text-[#9077ff] cursor-pointer"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-telegram text-[#6dacff] cursor-pointer"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-reddit text-[#ff7f68] cursor-pointer"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter text-[#6dacff] cursor-pointer"></i>
          </a>
        </div>
      </nav>
      <nav className="links flex gap-3 text-2xl text-stone-100 max-sm:hidden">
        <span className="flex flex-col items-center cursor-pointer hover:text-primary">
          <a href="#" id="withFriends">
            <i className="fa-solid fa-user-group text-primary cursor-pointer text-xl"></i>
          </a>
          <label className="text-xs cursor-pointer" htmlFor="withFriends">
            WithFriends
          </label>
        </span>
        <span className="flex flex-col items-center cursor-pointer hover:text-primary">
          <a href="#" id="withFriends">
            <i className="fa-solid fa-shuffle text-primary cursor-pointer text-xl"></i>
          </a>
          <label className="text-xs cursor-pointer" htmlFor="withFriends">
            Random
          </label>
        </span>
        <span className="flex flex-col items-center cursor-pointer hover:text-primary">
          <a href="#" id="withFriends">
            <i className="fa-solid fa-comment text-primary cursor-pointer text-xl"></i>
          </a>
          <label className="text-xs cursor-pointer" htmlFor="withFriends">
            Community
          </label>
        </span>
        <span className="flex flex-col items-center cursor-pointer hover:text-primary">
          <a href="#" id="withFriends">
            <i className="fa-solid fa-globe text-primary cursor-pointer text-xl"></i>
          </a>
          <label className="text-xs cursor-pointer" htmlFor="withFriends">
            Translate
          </label>
        </span>
      </nav>
      <button className="bg-primary py-2 px-4 font-bold rounded-md text-stone-700 mr-4 max-sm:hidden">
        Login
      </button>
    </header>
  );
};

export default Header;

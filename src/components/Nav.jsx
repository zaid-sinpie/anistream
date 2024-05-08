import React from "react";
import { useState } from "react";

const Nav = () => {
  const classCSs = ` hover:text-[#FFB5CE]`;
  const [isClicked, setIdClicked] = useState("hidden");

  const handleClick = () => {
    setIdClicked((prev) => (prev === "hidden" ? "flex" : "hidden"));
  };

  const modalClasses = `absolute ${isClicked} flex-col items-center justify-around w-[23rem] bg-black top-6 left-0 gap-[2rem] rounded-3xl my-4 py-4 bg-[rgba(0,0,0,0.95)]`;
  return (
    <>
      <nav className="flex gap-6 font-semibold bg-transparent text-stone-200 text-[.8rem] max-sm:hidden">
        <a href="#" className={classCSs}>
          Home
        </a>

        <a href="#" className={classCSs}>
          Movies
        </a>

        <a href="#" className={classCSs}>
          Tv Series
        </a>

        <a href="#" className={classCSs}>
          Most Popular
        </a>

        <a href="#" className={classCSs}>
          Top Airing
        </a>
      </nav>
      <nav className="flex justify-center items-center gap-3 text-stone-50 sm:hidden ml-[1rem] relative">
        <div className="flex items-center justify-center gap-3 hover:text-[#FFB5CE]">
          <p onClick={handleClick}>
            <i className="fa-solid fa-bars"></i>
          </p>
          <p onClick={handleClick}>Menu</p>
        </div>
        <nav className={modalClasses}>
          <a href="#" className="hover:text-[#FFB5CE]">
            Home
          </a>

          <a href="#" className="hover:text-[#FFB5CE]">
            Movies
          </a>

          <a href="#" className="hover:text-[#FFB5CE]">
            Tv Series
          </a>

          <a href="#" className="hover:text-[#FFB5CE]">
            Most Popular
          </a>

          <a href="#" className="hover:text-[#FFB5CE]">
            Top Airing
          </a>
        </nav>
      </nav>
    </>
  );
};

export default Nav;

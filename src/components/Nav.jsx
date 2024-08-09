import { useState} from "react";

const Nav = () =>{
  const classCSs = ` hover:text-[#FFB5CE]`;
  const [isClicked, setIdClicked] = useState("hidden");

  const handleClick = () => {
    setIdClicked((prev) => (prev === "hidden" ? "flex" : "hidden"));
  };

  const modalClasses = `${isClicked} flex-col items-center justify-around w-screen bg-black top-[20%] left-0 gap-[2rem] rounded-3xl my-4 py-4 bg-[rgba(0,0,0,0.95)]`;
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
      <nav className="flex justify-center items-center gap-3 text-stone-50 sm:hidden ml-[1rem]">
        <div className="flex items-center justify-center gap-3 hover:text-primary">
          <p onClick={handleClick}>
            <i className="fa-solid fa-bars"></i>
          </p>
          <p onClick={handleClick}>Menu</p>
        </div>
        <dialog className={modalClasses}>
          <a href="#" className="text-[#fff] hover:text-primary">
            Home
          </a>

          <a href="#" className="text-[#fff] hover:text-primary">
            Movies
          </a>

          <a href="#" className="text-[#fff] hover:text-primary">
            Tv Series
          </a>

          <a href="#" className="text-[#fff] hover:text-primary">
            Most Popular
          </a>

          <a href="#" className="text-[#fff] hover:text-primary">
            Top Airing
          </a>
        </dialog>
      </nav>
    </>
  );
};

export default Nav;

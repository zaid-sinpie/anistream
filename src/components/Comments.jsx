import React from "react";
import { dummyComments } from "../data";

const Comments = () => {
  return (
    <>
      {dummyComments.map((item) => (
        <article
          key={item.id}
          className="px-[2rem] bg-[#2B2A3C] py-[1rem] rounded-xl flex flex-col gap-[.5rem] w-full md:w-[80%]"
        >
          <li className="flex w-full justify-between items-start">
            <span className="flex gap-[5rem] md:gap-2">
              <p className="text-stone-400 text-xs">{item.tags}</p>
              <p className="text-stone-500 text-xs">{item.timestamp}</p>
            </span>
            <span className="text-stone-400 flex gap-2 items-center">
              <i className="fa-solid fa-comment"></i>
              <p className="text-stone-400 text-xs">{item.replies}</p>
            </span>
          </li>
          <h1 className="text-stone-200 text-xl">{item.heading}</h1>
          <p className=" text-stone-400 text-xs">{item.comment}</p>
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-stone-600"></div>
            <h2 className=" text-stone-400">{item.author}</h2>
          </div>
        </article>
      ))}
      <button className="w-full bg-[#2B2A3C] py-1 rounded-full text-stone-300 md:w-[80%]">
        read more!
      </button>
    </>
  );
};

export default Comments;

import React from "react";
import { dummyData } from "../data.js";

const ContentBlock = () => {
  return (
    <li className="w-full flex flex-col gap-2 bg-transparent">
      {dummyData.map((item, index) => (
        <article
          key={index}
          className="w-full flex flex-col gap-2 bg-transparent px-2"
        >
          <h1 className="font-bold text-stone-200 w-full text-2xl max-sm:w-full max-sm:text-xl">
            {item.heading}
          </h1>
          <p className="font-semibold text-stone-400 w-[90%] text-justify max-sm:w-full md:w-full">
            {item.paragraph}
          </p>
        </article>
      ))}
    </li>
  );
};

export default ContentBlock;

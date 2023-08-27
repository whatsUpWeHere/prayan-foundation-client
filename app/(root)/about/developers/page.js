import React from "react";
import { developers_data } from "@/constants";
import DeveloperProfileCard from "@/components/cards/DeveloperProfileCard";
import SectionWrapper from "@/hoc/SectionWrapper";


const page = () => {
  return (
    <section className="m-5 border border-zinc-500">
      <div className=" flex items-center justify-center flex-col mx-auto">
        <h3 className="font-bold text-2xl text-[#fdbe33]">
          Developers
        </h3>
        <p className="text-[#4A4C70] text-4xl text-center letter-wider font-semibold py-2 ">
          We are a team of passionate developers and we built this
          site
        </p>
      </div>
      {/* justify-center items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 m-5 */}
      <section className="flex justify-center items-center mx-auto m-5 flex-wrap w-full md:w-[75vw]">
        {developers_data.map((card, index) => (
          <DeveloperProfileCard card={card} key={index} />
        ))}
      </section>
    </section>
  );
};

export default SectionWrapper(page);

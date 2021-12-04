import React from "react";

const Portfolio = () => {
  return (
    <div className="bg-black">
      <section className="bg-black max-w-[75rem] mx-auto py-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <img
            src="/1.jpeg"
            alt="pic"
            className="rounded-lg transform hover:scale-[1.02] transition duration-500 ease-in-out"
          />
          <img
            src="/2.jpeg"
            alt="pic"
            className="rounded-lg transform hover:scale-[1.02] transition duration-500 ease-in-out"
          />
          <img
            src="/3.jpeg"
            alt="pic"
            className="rounded-lg transform hover:scale-[1.02] transition duration-500 ease-in-out"
          />
          <img
            src="/4.jpeg"
            alt="pic"
            className="rounded-lg transform hover:scale-[1.02] transition duration-500 ease-in-out"
          />
          <img
            src="/5.jpeg"
            alt="pic"
            className="rounded-lg transform hover:scale-[1.02] transition duration-500 ease-in-out"
          />
          <img
            src="/6.jpeg"
            alt="pic"
            className="rounded-lg transform hover:scale-[1.02] transition duration-500 ease-in-out"
          />
        </div>
      </section>
    </div>
  );
};

export default Portfolio;

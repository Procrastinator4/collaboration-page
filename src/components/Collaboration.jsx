import React from "react";

const Collaboration = () => {
  return (
    //   Collaboration section
    <div className="bg-black ">
      <section className="grid grid-cols-1  lg:grid-cols-2  min-h-[30rem] py-[4rem]  bg-black mx-auto max-w-[70rem]">
        <div className="px-4">
          <h1 className="text-[3rem] max-w-[50rem] mx-auto lg:max-w-full text-[#f7d7c8] font-semibold leading-[3.2rem]">
            We collaborate with brands and agencies to create memorable
            experiences.
          </h1>
          <p className="text-white mx-auto max-w-sm lg:max-w-full">
            SAMPLE HEADLINE
          </p>
        </div>
        <div className="px-4">
          <h1
            className="text-[#f7d7c8] text-[1.5rem] font-[700]"
            style={{ fontFamily: "font-family: Ubuntu, sans-serif !important" }}
          >
            We dwelling elegance do shutters appetite yourself diverted.
          </h1>
          <p
            className="text-white leading-[2.2rem] text-[1.2rem]"
            style={{ fontFamily: "'Open Sans',sans-serif !important" }}
          >
            The principal reason we continue to adapt and evolve our business
            model is to ensure that we are meeting our customers’ expectations.
            One example of this has been to use modern technology and the
            introduction of the real time tracking our teams using GPS. This
            ensures our customers get the time they have paid for has been spent
            at our customers’ homes since this is the most common problem within
            our industry.
          </p>
        </div>
      </section>
      <div className="w-[40rem] h-[.1rem] bg-white mx-auto"></div>
    </div>
  );
};

export default Collaboration;

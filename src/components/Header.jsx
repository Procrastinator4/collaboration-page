import React from "react";

const Header = () => {
  return (
    <header className="w-full min-h-screen  bg-black">
      {/*   navbar  */}
      <nav className="w-[3rem] flex items-center justify-center h-[4rem] mx-auto  ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8 text-white cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </nav>
      {/* hero section  */}
      <section className="flex justify-center items-center ">
        <div className="flex flex-col items-center">
          <h1 className="text-[5.25rem] text-[#f7d7c8] my-4">biography</h1>
          <div className="my-4">
            <img
              src="/boy.jpg"
              alt="black boy"
              className="h-[25rem] w-[25rem] rounded-full "
            />
          </div>
          <h1 className="text-[#f7d7c8] text-[1.5rem] font-semibold mx-auto my-4">
            Jemma Larson
          </h1>
          <p className="w-[50rem] text-gray-500  text-[1.2rem] mb-8 mx-auto">
            Article evident arrived express highest men did boy. Mistress
            sensible entirely am so. Quick can manor smart money hopes worth
            too. Comfort produce husband boy her had hearing. Sit amet massa
            vitae tortor condimentum lacinia quis. Ornare arcu dui vivamus arcu
            felis bibendum ut. Consectetur adipiscing elit duis tristique
            sollicitudin. Volutpat lacus laoreet non curabitur. Magna fringilla
            urna porttitor rhoncus. Ultricies leo integer malesuada nunc vel
            risus commodo viverra. Ipsum a arcu cursus vitae congue. Imperdiet
            dui accumsan sit amet nulla facilisi. Tincidunt dui ut ornare lectus
            sit. Phasellus faucibus scelerisque eleifend donec pretium vulputate
            sapien nec. Eget gravida cum sociis natoque.
          </p>
          <div className="flex mx-auto my-4 space-x-12">
            <img
              className="h-8 w-8 cursor-pointer"
              src="/facebook-line.png"
              alt="facebook"
            />
            <img
              className="h-8 w-8 cursor-pointer"
              src="/twitter-line.png"
              alt="twitter"
            />
            <img
              className="h-8 w-8 cursor-pointer"
              src="/instagram-line.png"
              alt="instagram"
            />
          </div>
        </div>
      </section>
    </header>
  );
};

export default Header;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 py-8">
      <div className="flex justify-center items-center">
        <ul className="flex flex-col space-y-4 text-white">
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="flex justify-center items-center">
        <p className=" mx-auto text-white mb-12 list-disc">
          there is nothing but me copyright's.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";

const index = () => {
  return (
    <>
      <nav role="navigation" class="relative container mx-auto p-6">
        {/* <!-- Flex container --> */}
        <div class="flex items-center justify-between">
          {/* <!-- Logo --> */}
          <div class="pt-2 text-3xl font-bold pb-1">JASONBROOKS.IO</div>
          {/* <!-- Menu Items --> */}
          <div class="hidden space-x-6 md:flex">
            <a href="#about" class="hover:text-darkGrayishBlue">
              About Me
            </a>
            <a href="#" class="hover:text-darkGrayishBlue">
              Projects
            </a>
            <a href="#" class="hover:text-darkGrayishBlue">
              Contact
            </a>
          </div>
          {/* <!-- Hamburger Icon --> */}
          <button
            id="menu-btn"
            class="block hamburger md:hidden focus:outline-none"
          >
            <span class="hamburger-top"></span>
            <span class="hamburger-middle"></span>
            <span class="hamburger-bottom"></span>
          </button>
        </div>

        {/* <!-- Mobile Menu --> */}
        <div class="md:hidden">
          <div
            id="menu"
            class="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
          >
            <a href="#about">About Me</a>
            <a href="#">Projects</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </nav>
      <div class="container mx-auto my-40 p-8">
        <h1 class="text-8xl font-bold">Jason Brooks</h1>
        <p class="py-2 text-xl">Self-taught Developer</p>
        <div class="flex justify-center md:justify-start">
          <a
            href="#about"
            class="p-3 px-6 pt-2 text-white bg-veryDarkBlue rounded-full baseline hover:bg-darkGrayishBlue"
          >
            About Me
          </a>
        </div>
      </div>
    </>
  );
};

export default index;

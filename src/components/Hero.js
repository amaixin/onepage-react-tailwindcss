import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

function Hero() {
  // Create Ref element.
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["SOL", "REACT", "WEB3"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!",
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <div className="text-[#ffffff]">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <p className="text-[#00df9a] font-bold p-2">GROWING WITH TECH!</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          GROW WITH PRACTICE
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold">
            Patience, Endurance, Focus:
          </p>

          <span
            ref={el}
            className="md:text-5xl sm:text-4xl text-xl font-bold pl-2 text-[#464646]"
          ></span>
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500 pt-4">
          Never give up. When you stay with it you become it...
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;

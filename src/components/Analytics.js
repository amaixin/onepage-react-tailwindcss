import React from "react";
import Blokiso from "../assets/blokiso.png";

function Analytics() {
  return (
    // wrapper
    <div className="w-full bg-white py-16 px-4">
      {/* container */}
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <div>
          <img className="w-[500px] mx-auto my-4" src={Blokiso} alt="temp" />
        </div>
        <div className="text-black flex flex-col justify-center ">
          <p className="text-[#00df9a] font-bold ">ANALYTICS DASHBOARD</p>
          <h1 className="font-bold md:text-4xl sm:text-3xl text-2xl py-2">
            Manage and Grow Remotely
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
            nesciunt maiores, ducimus id animi esse! Qui voluptas eligendi
            magnam non officia libero aliquam incidunt modi. Repellat error ipsa
            alias obcaecati!
          </p>
          <button className="bg-[#000] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] md:mx-0">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Analytics;

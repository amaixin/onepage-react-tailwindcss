import React from "react";
import Devblue from "../assets/devblue.png";
import Devchart from "../assets/devchart.png";
import Devtrend from "../assets/devtrend.png";

function Cards() {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white "
            src={Devblue}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">DApp 1</h2>
          <p className="text-center text-4xl font-bold">$5000</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mt-8">Ethereum</p>
            <p className="py-2 border-b">Binance Smart Chain</p>
            <p className="py-2 border-b">Tron Chain DApp</p>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3   text-black">
              Start
            </button>
          </div>
        </div>
        <div className="w-full bg-[#00df9a] shadow-xl flex flex-col p-4 my-8 md:my-0 rounded-lg hover:scale-105 duration-500 border-b-[15px] border-[#c9c9c9]">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent "
            src={Devchart}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">DApp 2</h2>
          <p className="text-center text-4xl font-bold">$15000</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mt-8">Ethereum</p>
            <p className="py-2 border-b">Binance Smart Chain</p>
            <p className="py-2 border-b">Tron Chain DApp</p>
            <button className="bg-[#333] text-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3">
              Start
            </button>
          </div>
        </div>
        <div className="w-full  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-500">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white "
            src={Devtrend}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">DApp 3</h2>
          <p className="text-center text-4xl font-bold">$7500</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mt-8">Ethereum</p>
            <p className="py-2 border-b">Binance Smart Chain</p>
            <p className="py-2 border-b">Tron Chain DApp</p>
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3   text-black">
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

import React from "react";

function Newsletter() {
  return (
    <div className="px-4 w-full py-16 text-[#fff]">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 ">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-3 sm:pt-9">
            Want a DApp? Look no further...
          </h1>
          <p>
            Sign up to my newsletter and stay up to date with Latest happenings!
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              className="p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="Enter Email"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3   text-black">
              Send
            </button>
          </div>
          <p className="">
            We care about the privacy of your Data. Read our
            <span className="text-[#00df9a]">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;

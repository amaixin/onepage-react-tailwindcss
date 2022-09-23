import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
  return (
    <div className=" max-w-[1240px] py-16 px-4 mx-auto text-gray-300 grid lg:grid-cols-3 gap-8">
      <div>
        <h1 className="w-full font-bold text-3xl text-[#00df9a]">AMAXIN.</h1>
        <p className="py-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa aperiam
          delectus doloribus eum doloremque quam architecto explicabo, eligendi
          autem quo!
        </p>
        <div className="flex justify-between md:w-[65%] my-6">
          <FacebookOutlinedIcon size={30} />
          <GitHubIcon size={30} />
          <InstagramIcon size={30} />
          <TwitterIcon size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-around mt-6 ">
        <div>
          <h6 className="font-medium text-gray-400">Backend</h6>
          <ul>
            <li className="py-2 text-sm">Solidity</li>
            <li className="py-2 text-sm">Web3</li>
            <li className="py-2 text-sm">EVM</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Frontend</h6>
          <ul>
            <li className="py-2 text-sm">Javascript</li>
            <li className="py-2 text-sm">REACT</li>
            <li className="py-2 text-sm">Tailwind</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <li className="py-2 text-sm">Support</li>
            <li className="py-2 text-sm">Marketing</li>
            <li className="py-2 text-sm">Consutancy</li>
            <li className="py-2 text-sm">Audit</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;

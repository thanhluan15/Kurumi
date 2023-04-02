import React from "react";

import { GrHomeOption } from "react-icons/gr";
import { RiCupLine, RiMessage3Line } from "react-icons/ri";
import { BiSearchAlt, BiBookOpen, BiMessageAltAdd } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = () => (
  <div className="w-32 h-full flex flex-col items-center gap-20">
    <div className="mt-20 flex flex-col gap-5">
      <Link to={"/"}>
        <GrHomeOption size={30} />
      </Link>
      <Link to={"/reading"}>
        <BiBookOpen size={30} />
      </Link>
      <RiMessage3Line size={30} />
      <BiSearchAlt size={30} />
      <RiCupLine size={30} />
      <BiMessageAltAdd size={30} />
    </div>
    <img
      className="w-14 h-14 rounded-full border-4 border-black"
      src="https://i.pinimg.com/564x/7d/fe/5a/7dfe5a7570a2fadb319516e65153f4a2.jpg"
      alt=""
    />

  </div>
);

export default Navbar;

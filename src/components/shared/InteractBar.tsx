import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { GrFormAdd } from "react-icons/gr";
import Button from "./Button";

const InteractBar = () => {
  const interactBars = [
    { featuring: <AiOutlineHeart className="rounded-full" size={30} />, hover: "hover:bg-red-500" },
    { featuring: <GrFormAdd size={30} />, hover: "hover:bg-green-500" },
  ];

  return (
    <div className="w-full h-full">
      <div className="flex gap-5">
        {interactBars?.map((i) => (
          <Button
            className={`flex justify-center hover:scale-150 
          items-center border-2 border-black rounded-full w-10 h-10 ${i.hover}`}
          >
            {i.featuring}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default InteractBar;

import React from "react";

import NodeIcon from "../../../public/svg/node.svg";
import ReactIcon from "../../../public/svg/react.svg";
import ReduxIcon from "../../../public/svg/redux.svg";
import NextIcon from "../../../public/svg/next.js.svg";
import MongoDBIcon from "../../../public/svg/mongoDB.svg";

const Skills = () => {
  const firstRowSkillsIcons = [
    { icon: <NextIcon /> },
    { icon: <NodeIcon /> },
    { icon: <ReduxIcon /> },
    { icon: <ReactIcon /> },
    { icon: <MongoDBIcon /> },
  ];

  return (
    <>
      <div className="w-full mt-48 flex flex-col justify-center text-center">
        <p className="text-2xl text-white">
          I'm currently looking to join a{" "}
          <span className="text-[#A362FF]">cross-functional</span> team
        </p>
        <br />
        <p className="text-[17px] text-white">
          that values improving people's lives through accessible design
        </p>
      </div>
      <div className="mt-10 flex justify-center gap-2">
        {firstRowSkillsIcons.map(() => (
          <div className="h-11 w-11 rounded-full bg-[#251C31] flex justify-center items-center">
            <ReactIcon width={32} height={32} />
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-center gap-2">
        {firstRowSkillsIcons.map(() => (
          <div className="h-11 w-11 rounded-full bg-[#251C31] flex justify-center items-center">
            <ReactIcon width={32} height={32} />
          </div>
        ))}
      </div>
    </>
  );
};

export { Skills };

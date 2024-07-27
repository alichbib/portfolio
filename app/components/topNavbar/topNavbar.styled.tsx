import React from "react";
import Link from "next/link";

import LogoIcon from "../../../public/svg/logo.svg";

const StyledTopNavbar = () => {
  return (
    <div className="bg-[#1A0B2E] h-28 w-full flex justify-between items-center px-80">
      <LogoIcon width={50} height={50} />
      <div className="flex items-center gap-32">
        <Link href="/" className="text-white">
          Home
        </Link>
        <Link href="/" className="text-white">
          About
        </Link>
        <Link href="/" className="text-white">
          Skills
        </Link>
      </div>
    </div>
  );
};

export default StyledTopNavbar;

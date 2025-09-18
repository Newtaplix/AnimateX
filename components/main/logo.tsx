"use client";
import React from "react";
import Image from "next/image";

interface size {
  width?: number;
  height?: number;
}

const Logo = ({ width = 12, height = 12 }: size) => {
  return (
    <div className="cursor-pointer relative">
      {/* <div className="absolute w-full h-full bg-gray-800 blur-[10px]  md:blur-[10px]" /> */}
      <Image
        width={width}
        height={height}
        src="/myfav.ico"
        alt="Logo"
        className="h-full w-full"
      />
    </div>
  );
};

export default Logo;

import React from "react";

export default function BackgroundBlob() {
  return (
    <div className="absolute w-full h-full flex items-center justify-center z-0">
      <div
        className="w-[300px] h-[300px] bg-[#F51515] opacity-70 animate-blob"
      ></div>
    </div>
  );
}


// #F50D0D
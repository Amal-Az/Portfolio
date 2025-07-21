import React from "react";

export default function RedCircleBehind() {
  return (
    <div
  className="
    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
    w-[400px] h-[380px]   /* largeur = hauteur */
    rounded-full
    border-[50px] border-red-700
    opacity-80
    blur-sm
    z-0
    transition-all duration-500
    hover:scale-105 hover:blur-md
  "
  style={{ backgroundColor: "transparent" }}
></div>

  );
}

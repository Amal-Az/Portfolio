import wp from '../assets/wordpress.png';
import tailwind from '../assets/tailwind_css.png';
import react from '../assets/react.png';
import python from '../assets/py.png';
import node from '../assets/node-js.png';
import js from '../assets/js.png';
import html from '../assets/html.png';
import github from '../assets/github.png';
import express from '../assets/express.jpeg';
import css from '../assets/css.png';

const logos = [wp, tailwind, react, python, node, js, html, github, express, css];
const allLogos = [...logos, ...logos]; // duplication pour boucle infinie
export default function TechSlider() {
  return (
    <div className="overflow-hidden py-10 bg-[#0c0c3f]">
      <div className="relative flex w-max animate-marquee gap-12">
        {allLogos.map((logo, i) => (
          <div key={i} className="min-w-[64px] mx-6">
            <img
              src={logo}
              alt={`tech-${i}`}
              className="w-16 h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

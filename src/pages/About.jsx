import React from "react";
import SectionTitle from "../components/SectionTitle";
import RedCircleBehind from "../components/RedCircleBehind";
import profileImage from "../assets/amal.png";

const About = () => {
  return (
    <section id="about" className="py-20  bg-[#0D0B3C] text-white">
      {/* Titre au top, centré sur toute la largeur */}
      <div className="w-full">
        <SectionTitle />
      </div>

      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-center gap-12">

                
        {/* LEFT: Image with circle behind */}
        <div className="relative w-full lg:w-1/2 flex justify-center transform lg:-translate-x-20">
          <RedCircleBehind />
          <img
            src={profileImage}
            alt="Profile"
            className="relative z-10 w-[300px] h-auto object-cover"
          />
        </div>

        {/* RIGHT: Text content */}
        <div className="w-full lg:w-1/2 space-y-3 transform lg:-translate-x-10 animate-slide-in-right">

          <p className="mt-6 text-lg leading-relaxed">
            <strong>Geomatics Engineer and Full-Stack Developer</strong>, I design innovative solutions 
            for the analysis and visualization of both spatial and non-spatial data.
          </p>
          <p className="text-lg leading-relaxed">
            Passionate about innovation and projects with concrete impact, I master the entire data processing chain, 
            from data collection to interactive visualization.
          </p>
          <p className="text-lg leading-relaxed">
            Specialized in GIS (ArcGIS, QGIS), web mapping, and web/WordPress development (JavaScript, React, Node.js, PostgreSQL, MongoDB), 
            I also bring strong skills in machine learning (Python, Scikit-learn, XGBoost…) 
            and automated testing (Selenium, Postman) to ensure performance, quality, and reliability of the applications I build.
          </p>
          <p className="text-lg leading-relaxed">
            Independent, curious, and solution-oriented, my goal is to create useful, sustainable, 
            and efficient tools that address real-world challenges.
          </p>
          <p className="text-lg leading-relaxed">
            Looking for a versatile, proactive, and committed developer? Let’s talk
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

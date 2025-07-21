import React from 'react';
import AnimatedText from './AnimatedText';
import BackgroundBlob from './BackgroundBlob';
import profilePic from '../assets/amal.png';


const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/amal-azour-48b94a1ab/',
    bgColor: 'bg-blue-500',
    label: 'LinkedIn',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 7.5h5v14H0v-14zM7.5 7.5h4.67v2h.07c.65-1.23 2.24-2.53 4.6-2.53 4.93 0 5.84 3.25 5.84 7.47v8.06h-5v-7.13c0-1.7-.03-3.9-2.38-3.9-2.38 0-2.75 1.87-2.75 3.8v7.23h-5v-14z"/>
      </svg>
    ),
  },
  {
    href: 'https://github.com/tonprofil',
    bgColor: 'bg-gray-800',
    label: 'GitHub',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 17.07 3.633 16.7 3.633 16.7c-1.086-.743.084-.729.084-.729 1.205.084 1.838 1.234 1.838 1.234 1.07 1.835 2.807 1.305 3.495.997.108-.776.418-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.931 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.48 11.48 0 013.003-.404c1.02.005 2.045.138 3.003.404 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.63-5.475 5.92.42.36.81 1.096.81 2.21 0 1.596-.015 2.88-.015 3.276 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
  },
  {
    href: 'https://mail.google.com/mail/?view=cm&fs=1&to=amaleazour@gmail.com&su=Contact%20depuis%20ton%20portfolio&body=Bonjour%20Amal%2C%0AJe%20souhaite%20discuter%20avec%20toi%20concernant...',
    bgColor: 'bg-red-600',
    label: 'Email',
    svg: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" className="w-5 h-5">
        <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  }
];

export default function Hero() {
  return (
    <section className="relative flex flex-col lg:flex-row items-start justify-center min-h-screen pt-48 px-8 lg:px-24 bg-[#0c0c3f] gap-12">
      
      {/* Partie gauche : texte + icônes + bouton + toolbox */}
      <div className="flex-1 z-10 max-w-xl text-left animate-slide-in-right">
        <h3 className="text-lg font-semibold text-white mb-1">Hello It’s Me</h3>
        <h1 className="text-5xl font-bold text-white mb-2">Azour Amal</h1>
        <h2 className="text-2xl font-bold text-white mb-6 flex flex-wrap gap-2 items-center">
          And I’m <span className="text-red-600"><AnimatedText /></span>
        </h2>

        <p className="text-white text-lg leading-relaxed mb-8 w-full">
          GIS engineer with deep expertise in QGIS and ArcGIS, skilled in spatial and non-spatial data analysis and visualization. <br />
          Proficient in full-stack development (JavaScript, React, Node.js, PostgreSQL, MongoDB) and machine learning (Python).<br/>
          Passionate about building impactful, efficient data-driven solutions.
        </p>

        {/* Icônes sociales */}
        <div className="flex items-center gap-4 mb-8">
          {socialLinks.map(({ href, bgColor, label, svg }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className={`w-9 h-9 rounded-full ${bgColor} flex items-center justify-center text-white transition-transform duration-300 hover:translate-y-[-8px]`}
            >
              {svg}
            </a>
          ))}
        </div>

        {/* Bouton de téléchargement du CV */}
        <a
          href="/public/Mon CV.pdf" 
          download
          className="inline-flex bg-red-600 px-6 py-2 rounded-full text-white font-semibold items-center gap-2
             shadow-[0_0_10px_rgba(255,0,0,0.5)] hover:shadow-[0_0_20px_8px_rgba(255,0,0,0.7)]
             hover:scale-105 transition-all duration-300"
          aria-label="Download CV"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
          Download CV
        </a>

        {/* MY DEV TOOLBOX */}
        <div className="mt-32 overflow-x-auto max-w-full">
          <h3 className="text-xl font-bold text-red-600 mb-6">MY DEV TOOLBOX:</h3>
          {/* <TechSlider /> */}
        </div>
      </div>

      {/* Partie droite : photo + animation */}
      <div className="flex-1 flex justify-center items-center -mt-14">
        <div className="relative w-80 h-80 lg:w-96 lg:h-96">
          <div className="absolute inset-0 z-0">
            <BackgroundBlob />
          </div>
          <img
            src={profilePic}
            alt="Azour Amal"
            className="relative z-10 w-full h-full object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}

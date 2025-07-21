import GrotteProject from '../assets/GrotteProject.png';  
import LoungeProject from '../assets/LoungeProject.png';

export default function Projects() {
  return (
    <div className="Projects-container h-full px-8 py-4 bg-[#0D0B3C]">
      <h1 className="text-4xl font-bold flex justify-center mt-28 mb-12 text-white">Projects</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-24">
        {/* Project 1 */}
        <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <img
            className="rounded-t-lg w-full"
            src={GrotteProject}
            alt="Caves of Morocco Project"
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              Caves of Morocco
            </h5>
            <p className="mb-3 font-normal text-gray-700">
              Plateforme web pour la gestion et la valorisation des grottes marocaines, intégrant des cartes interactives avec localisation précise et centralisant les données du patrimoine souterrain.
            </p>
            <a
              href="https://mr-fannah.github.io/grottes.maroc/#Accueil"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Project 2 */}
        <div className="max-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <img
            className="rounded-t-lg w-full"
            src={LoungeProject}
            alt="LoungePilot Project"
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
              LoungePilot
            </h5>
            <p className="mb-3 font-normal text-gray-700">
              Application web pour gérer efficacement votre lounge, avec une interface intuitive et des fonctionnalités pratiques.
            </p>
            <a
              href="https://consofy.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

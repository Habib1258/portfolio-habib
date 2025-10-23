// src/components/DownloadCV.jsx
import React, { useState } from "react";
import { MdDownload } from 'react-icons/md'; 

const DownloadCV = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownload = (lang) => {
    const link = document.createElement("a");
    link.href =
      lang === "fr"
        ? "/assets/cv/abdesselem-cv-fr.pdf"
        : "/assets/cv/abdesselem-cv-en.pdf"; // add English version later
    link.download = lang === "fr" ? "abdesselem-cv-fr.pdf" : "abdesselem-cv-en.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(true)}
        className="py-2 ml-8 lg:ml-24 rounded-xl hover:text-lime-400 text-xl lg:text-2xl text-gray-50 transition-all duration-300 font-bebas"
      >
        download CV
        <MdDownload className="inline ml-2" />
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
        >
          <div className="bg-white text-gray-900 rounded-2xl shadow-lg p-8 w-80 text-center">
            <h2 className="text-xl font-bold mb-4">Choisissez la langue</h2>
            <div className="flex justify-around mt-4">
              <button
                onClick={() => handleDownload("fr")}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
              >
                🇫🇷 Français
              </button>
              <button
                onClick={() => handleDownload("en")}
                className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition"
              >
                🇬🇧 English
              </button>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="mt-6 text-sm text-gray-500 hover:text-gray-700"
            >
              Annuler
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DownloadCV;

import React from "react";


export default function Header() {
    return (
      <header className="flex justify-between items-center flex-wrap py-4 px-6 bg-white shadow-md fixed w-full z-50">
        <div className="text-2xl font-bold text-blue-600 flex items-center gap-2">
          🛠 Tool Hub
        </div>
  
        <nav className="flex gap-6 items-center text-sm sm:text-base">
          <a
            href="#about"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            About Developer
          </a>
          <a
            href="https://github.com/iamvis"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            GitHub
          </a>
          <a
            href="coders@gmail.con"
            className="text-gray-700 hover:text-blue-600 transition font-medium"
          >
            Contact
          </a>
        </nav>
      </header>
    );
  }
  
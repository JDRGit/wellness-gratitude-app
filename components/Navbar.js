// components/Navbar.js
import React from 'react';
import Link from 'next/link';

const Navbar = ({ setSelectedFeature }) => {
  return (
    <nav className="flex justify-center space-x-4 mb-8 ">
      <button
        onClick={() => setSelectedFeature("gratitude")}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
      >
        Home
      </button>
      <button
        onClick={() => setSelectedFeature("journaling")}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Journaling
      </button>
      <button
        onClick={() => setSelectedFeature("breathing")}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Breathing
      </button>
      <button
        onClick={() => setSelectedFeature("meditation")}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Meditation
      </button>
      <button
        onClick={() => setSelectedFeature("affirmations")}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Affirmations
      </button>
      <button
        onClick={() => setSelectedFeature("movement")}
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Movement
      </button>
    </nav>
  );
};

export default Navbar;

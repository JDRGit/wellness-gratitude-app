import React, { useState, useEffect } from "react";
import Image from "next/image";


const Layout = ({ children }) => {
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    fetch("https://picsum.photos/1920/1080")
      .then((response) => setBackgroundImage(response.url))
      .catch((error) => console.error("Error fetching image:", error));
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 font-sans">
      {/* Navigation */}
      <nav className="bg-teal-500 py-2">
        {/* Add your navigation menu items here */}
      </nav>

      {/* Hero */}
      <header
        className="relative w-full h-96 md:h-64 sm:h-48"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-opacity-50 bg-teal-500 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white font-bold uppercase">
            Website Title
          </h1>
          <p className="text-xl text-white mt-4">Tagline</p>
        </div>
      </header>

      {/* Main content */}
      <main className="container mx-auto py-8 px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Wider column for blog posts */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Heading</h2>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            {children}
          </div>

          {/* Narrower sidebar column */}
          <div className="w-1/3">
            {/* Supplementary information and widgets go here */}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-teal-500 text-white py-6">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-3 gap-4">
      {/* Column 1: Additional information */}
      <div>
        <h3 className="text-xl font-bold mb-2">About Us</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
          nec odio. Praesent libero. Sed cursus ante dapibus diam.
        </p>
      </div>

      {/* Column 2: Social media links */}
      <div>
        <h3 className="text-xl font-bold mb-2">Follow Us</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-white">
              Facebook
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Twitter
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              Instagram
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      {/* Column 3: Contact information */}
      <div>
        <h3 className="text-xl font-bold mb-2">Contact Us</h3>
        <p>
          1234 Wellness Street
          <br />
          City, State, Zip
          <br />
          Email: info@example.com
          <br />
          Phone: (123) 456-7890
        </p>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
};

export default Layout;

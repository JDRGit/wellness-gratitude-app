import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      

      <main className="container mx-auto px-4 flex-grow">
        <div className="mt-8">{children}</div>
      </main>

      <footer className="bg-white shadow py-4 mt-auto">
        <div className="container mx-auto px-4">
          <p className="text-gray-600 text-sm">&copy; Wellness Gratitude App. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;

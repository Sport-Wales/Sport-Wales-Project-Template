// src/components/layout/Layout.jsx
import React from 'react';
import Navbar from './layout/Navbar';
import Footer from './main/Footer';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
        <main className="flex-grow">
          {children}
        </main>
      <Footer />
    </div>
  );
};

export default Layout;
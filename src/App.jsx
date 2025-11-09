import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ScrollProgress from './components/ScrollProgress';
import { Portfolio, Services, WorkCTA, ContactAndLogin } from './components/Sections';

function App() {
  return (
    <div className="font-inter bg-white text-slate-900" id="home">
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Services />
        <WorkCTA />
        <ContactAndLogin />
      </main>
      <footer className="py-10 border-t border-slate-200 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500">© {new Date().getFullYear()} BlueFun Studio — All fun, all rights.</p>
          <div className="flex items-center gap-4 text-slate-600">
            <a href="#services" className="hover:text-blue-700">Services</a>
            <a href="#portfolio" className="hover:text-blue-700">Portfolio</a>
            <a href="#contact" className="hover:text-blue-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

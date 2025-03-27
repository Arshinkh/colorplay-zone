
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out px-4 md:px-6",
        scrolled 
          ? "py-3 bg-white/80 backdrop-blur-lg shadow-md" 
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-gray-900 transition-all duration-300 hover:scale-105">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-gradient">ColorPlay</span>
          <span>Zone</span>
        </a>
        
        <nav className="hidden md:flex space-x-10">
          <a href="#activities" className="text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105">Activities</a>
          <a href="#booking" className="text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105">Booking</a>
          <a href="#about" className="text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105">About</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900 transition-all duration-300 hover:scale-105">Contact</a>
        </nav>
        
        <div className="flex items-center space-x-4">
          <a href="#booking" className="hidden md:inline-flex px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
            Book Now
          </a>
          
          <button className="block md:hidden text-gray-900 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

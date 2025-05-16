import { useState } from "react";
import { Link } from "wouter";
import { scrollToElement } from "@/lib/utils";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle smooth scrolling with improved animation
  const handleNavClick = (elementId: string) => {
    setIsMenuOpen(false);
    scrollToElement(elementId);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-800/70 backdrop-blur-sm rounded-b-lg">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div 
              className="mr-3 cursor-pointer" 
              onClick={() => {
                if (window.location.pathname === '/startnow') {
                  window.location.href = '/';
                } else {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
            >
              <img 
                src="/assets/transparentstakepadslogo.png" 
                alt="Stakepads Logo" 
                className="h-16"
              />
            </div>
            <Link href="/">
              <span className="text-2xl font-bold text-white cursor-pointer sr-only">Stakepads</span>
            </Link>
          </div>
          
          <div className="md:hidden">
            <button 
              type="button" 
              className="block focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="hamburger">
                <span className="block w-6 h-0.5 bg-white my-1.5"></span>
                <span className="block w-6 h-0.5 bg-white my-1.5"></span>
                <span className="block w-6 h-0.5 bg-white my-1.5"></span>
              </div>
            </button>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <button 
              onClick={() => handleNavClick('how-it-works')} 
              className="text-white hover:text-gray-300 transition-smooth"
            >
              How it works
            </button>
            <button 
              onClick={() => handleNavClick('testimonials')} 
              className="text-white hover:text-gray-300 transition-smooth"
            >
              Testimonials
            </button>
            <button 
              onClick={() => handleNavClick('faq')} 
              className="text-white hover:text-gray-300 transition-smooth"
            >
              FAQ
            </button>
            <button 
              onClick={onOpenModal}
              className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-gray-800 transition-smooth">
              Try for free
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 pb-4`}>
          <button 
            onClick={() => handleNavClick('how-it-works')}
            className="block w-full text-left py-2 text-white hover:text-gray-300 transition-smooth"
          >
            How it works
          </button>
          <button 
            onClick={() => handleNavClick('testimonials')}
            className="block w-full text-left py-2 text-white hover:text-gray-300 transition-smooth"
          >
            Testimonials
          </button>
          <button
            onClick={() => handleNavClick('faq')}
            className="block w-full text-left py-2 text-white hover:text-gray-300 transition-smooth"
          >
            FAQ
          </button>
          <button 
            onClick={() => {
              setIsMenuOpen(false);
              onOpenModal();
            }}
            className="mt-2 px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-gray-800 transition-smooth">
            Try for free
          </button>
        </div>
      </div>
    </nav>
  );
}

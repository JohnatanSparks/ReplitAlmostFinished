import { useState } from "react";
import { Link } from "wouter";

interface NavbarProps {
  onOpenModal: () => void;
}

export default function Navbar({ onOpenModal }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-800/70 backdrop-blur-sm rounded-b-lg">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <div className="mr-3">
              <img 
                src="https://raw.githubusercontent.com/your-username/your-repo/main/secure-padlock-logo-for-fintech-company.png" 
                alt="Stakepads Logo" 
                className="h-16"
              />
            </div>
            <Link href="/">
              <span className="text-2xl font-bold text-white cursor-pointer">Stakepads</span>
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
            <a href="#how-it-works" className="text-white hover:text-gray-300 transition">How it works</a>
            <a href="#testimonials" className="text-white hover:text-gray-300 transition">Testimonials</a>
            <a href="#faq" className="text-white hover:text-gray-300 transition">FAQ</a>
            <button 
              onClick={onOpenModal}
              className="px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-gray-800 transition">
              Try for free
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden mt-4 pb-4`}>
          <a 
            href="#how-it-works" 
            className="block py-2 text-white hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            How it works
          </a>
          <a 
            href="#testimonials" 
            className="block py-2 text-white hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#faq" 
            className="block py-2 text-white hover:text-gray-300"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </a>
          <button 
            onClick={() => {
              setIsMenuOpen(false);
              onOpenModal();
            }}
            className="mt-2 px-4 py-2 border border-white text-white rounded-lg hover:bg-white hover:text-gray-800 transition">
            Try for free
          </button>
        </div>
      </div>
    </nav>
  );
}

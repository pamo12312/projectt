import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-bold text-blue-600">Kondičky Moravec</span>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-blue-600">Služby</button>
            <button onClick={() => scrollToSection('cars')} className="text-gray-600 hover:text-blue-600">Vozový Park</button>
            <button onClick={() => scrollToSection('why-us')} className="text-gray-600 hover:text-blue-600">Proč My</button>
            <button onClick={() => scrollToSection('reviews')} className="text-gray-600 hover:text-blue-600">Recenze</button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600">Kontakt</button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <button onClick={() => scrollToSection('services')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100">Služby</button>
            <button onClick={() => scrollToSection('cars')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100">Vozový Park</button>
            <button onClick={() => scrollToSection('why-us')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100">Proč My</button>
            <button onClick={() => scrollToSection('reviews')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100">Recenze</button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100">Kontakt</button>
          </div>
        )}
      </nav>
    </header>
  );
}
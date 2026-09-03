import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-surface shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary flex items-center">
          <span className="text-secondary mr-1">ASPL</span> Real Estate
        </Link>

        <nav className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="text-text hover:text-primary transition-colors">Home</Link>
          <Link to="/properties" className="text-text hover:text-primary transition-colors">Properties</Link>
          <Link to="/compare" className="text-text hover:text-primary transition-colors">Compare</Link>
          <Link to="/about" className="text-text hover:text-primary transition-colors">About Us</Link>
          <Link to="/contact" className="text-text hover:text-primary transition-colors">Contact</Link>
          <Link to="/properties" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary/90 transition-colors">
            Explore Projects
          </Link>
        </nav>

        <button className="md:hidden text-text" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-surface border-t border-border absolute w-full left-0 shadow-lg">
          <nav className="flex flex-col p-4 space-y-4">
            <Link to="/" className="text-text hover:text-primary" onClick={toggleMenu}>Home</Link>
            <Link to="/properties" className="text-text hover:text-primary" onClick={toggleMenu}>Properties</Link>
            <Link to="/compare" className="text-text hover:text-primary" onClick={toggleMenu}>Compare Projects</Link>
            <Link to="/about" className="text-text hover:text-primary" onClick={toggleMenu}>About Us</Link>
            <Link to="/contact" className="text-text hover:text-primary" onClick={toggleMenu}>Contact</Link>
            <Link to="/properties" className="bg-primary text-white px-4 py-2 rounded-md text-center" onClick={toggleMenu}>
              Explore Projects
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

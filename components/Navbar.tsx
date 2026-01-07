
import React, { useState } from 'react';

interface NavbarProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Why PetCare', href: '#why' },
    { name: 'My Pet', href: '#mypet' },
    { name: 'Health', href: '#health' },
    { name: 'Food', href: '#food' },
    { name: 'Grooming', href: '#grooming' },
    { name: 'Training', href: '#training' },
    { name: 'Emergency', href: '#emergency' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-white">
              <i className="fas fa-paw text-xl"></i>
            </div>
            <span className="text-2xl font-bold font-heading tracking-tight text-orange-500">PetCare</span>
          </div>

          <div className="hidden lg:flex space-x-4 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            >
              <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} text-orange-500`}></i>
            </button>
          </div>

          <div className="lg:hidden flex items-center gap-4">
            <button onClick={toggleDarkMode} className="p-2">
              <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'} text-orange-500`}></i>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 dark:text-slate-300 p-2"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-2xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 px-4 pt-2 pb-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className="block px-3 py-3 text-base font-medium text-slate-600 dark:text-slate-300 hover:text-orange-500 dark:hover:text-orange-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

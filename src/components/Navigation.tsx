import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

type Page = 'home' | 'about' | 'contact';

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const links: { key: Page; label: string }[] = [
    { key: 'home', label: 'Home' },
    { key: 'about', label: 'About' },
    { key: 'contact', label: 'Contact' },
  ];

  const handleNav = (page: Page) => {
    onNavigate(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <button
          onClick={() => handleNav('home')}
          className={`font-playfair font-semibold text-xl tracking-wide transition-colors duration-300 ${
            scrolled ? 'text-stone-900' : 'text-white'
          }`}
        >
          Lillian Zawadi
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => handleNav(key)}
              className={`font-inter text-sm font-medium tracking-widest uppercase transition-colors duration-300 relative group ${
                scrolled
                  ? currentPage === key
                    ? 'text-amber-700'
                    : 'text-stone-700 hover:text-amber-700'
                  : currentPage === key
                  ? 'text-amber-300'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              {label}

              <span
                className={`absolute -bottom-1 left-0 h-px bg-amber-600 transition-all duration-300 ${
                  currentPage === key ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </button>
          ))}

          <button
            onClick={() => handleNav('contact')}
            className={`font-inter text-sm font-medium px-5 py-2 rounded-full border transition-all duration-300 ${
              scrolled
                ? 'border-amber-700 text-amber-700 hover:bg-amber-700 hover:text-white'
                : 'border-white text-white hover:bg-white hover:text-stone-900'
            }`}
          >
            Let's Connect
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          className={`md:hidden transition-colors duration-300 ${
            scrolled ? 'text-stone-900' : 'text-white'
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-stone-100 shadow-lg">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4">
            {links.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => handleNav(key)}
                className={`font-inter text-sm font-medium tracking-widest uppercase text-left transition-colors ${
                  currentPage === key
                    ? 'text-amber-700'
                    : 'text-stone-700 hover:text-amber-700'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
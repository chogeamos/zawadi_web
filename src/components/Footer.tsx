import { Linkedin } from 'lucide-react';

type Page = 'home' | 'about' | 'contact';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const handleNav = (page: Page) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-playfair text-2xl font-semibold mb-4">Lillian Zawadi</h3>
            <p className="font-inter text-stone-400 text-sm leading-relaxed">
              Strategic Marketing Professional helping brands grow, connect, and thrive through purposeful
              marketing and compelling storytelling.
            </p>
          </div>

          <div>
            <h4 className="font-inter text-xs text-stone-400 uppercase tracking-widest font-medium mb-5">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { key: 'home', label: 'Home' },
                { key: 'about', label: 'About' },
                { key: 'contact', label: 'Contact' },
              ].map(({ key, label }) => (
                <li key={key}>
                  <button
                    onClick={() => handleNav(key)}
                    className="font-inter text-sm text-stone-400 hover:text-amber-400 transition-colors"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-inter text-xs text-stone-400 uppercase tracking-widest font-medium mb-5">
              Connect
            </h4>
            <p className="font-inter text-stone-400 text-sm leading-relaxed mb-5">
              Open to collaborations, partnerships, and marketing opportunities.
            </p>
            <a
              href="https://www.linkedin.com/in/lillian-zawadi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-stone-300 hover:text-amber-400 transition-colors font-inter text-sm"
            >
              <Linkedin size={18} />
              LinkedIn Profile
            </a>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-inter text-stone-500 text-xs">
            &copy; {new Date().getFullYear()} Lillian Zawadi. All rights reserved.
          </p>
          <p className="font-inter text-stone-500 text-xs italic font-playfair">
            Strategic Marketing Professional | Brand Growth | Digital Strategy
          </p>
        </div>
      </div>
    </footer>
  );
}
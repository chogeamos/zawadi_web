import { ArrowRight, Linkedin, TrendingUp, Layers, Globe, Users } from 'lucide-react';

type Page = 'home' | 'about' | 'contact';

interface HomePageProps {
  onNavigate: (page: Page) => void;
}

const expertise = [
  {
    icon: TrendingUp,
    title: 'Marketing Strategy',
    description:
      'Crafting data-driven marketing strategies that align with business objectives and deliver measurable growth.',
  },
  {
    icon: Layers,
    title: 'Brand Development',
    description:
      'Building distinctive brand identities that resonate deeply with target audiences and stand the test of time.',
  },
  {
    icon: Globe,
    title: 'Digital Marketing',
    description:
      'Leveraging digital channels — social media, SEO, content, and paid media — to amplify brand reach and impact.',
  },
  {
    icon: Users,
    title: 'Client Engagement',
    description:
      'Cultivating meaningful relationships that transform clients into loyal advocates and brand ambassadors.',
  },
];

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/hero.jpg"
            alt="Hero background"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/85 via-stone-900/60 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <p className="text-amber-400 text-sm font-medium tracking-[0.25em] uppercase mb-4">
              Welcome
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-4">
              Lillian <br />
              <span className="italic text-amber-300">Zawadi</span>
            </h1>

            <p className="text-white/80 text-base md:text-lg tracking-wider mb-6">
              Strategic Marketing Professional | Brand Growth | Digital Strategy
            </p>

            <p className="text-white/70 text-base leading-relaxed max-w-md mb-10">
              I help businesses build powerful brands and achieve sustainable growth through strategic marketing.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/lillian-zawadi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-medium text-sm px-7 py-3 rounded-full"
              >
                <Linkedin size={16} />
                Connect on LinkedIn
              </a>

              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 border border-white/60 text-white text-sm px-7 py-3 rounded-full"
              >
                Learn More
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section (shortened safe version) */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-semibold mb-6">
              Marketing That <span className="italic text-amber-700">Moves People</span>
            </h2>

            <p className="text-stone-600 leading-relaxed mb-6">
              Strategic marketing focused on authentic brand storytelling and measurable growth.
            </p>

            <button
              onClick={() => onNavigate('about')}
              className="text-amber-700 font-medium flex items-center gap-2"
            >
              Read My Story <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
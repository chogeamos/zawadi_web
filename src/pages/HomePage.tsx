import { ArrowRight, Linkedin, TrendingUp, Layers, Globe, Users } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
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
            src="/WhatsApp_Image_2026-04-19_at_12.32.48_PM_(2).jpeg"
            alt="Lillian Zawadi"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900/85 via-stone-900/60 to-transparent" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <p className="font-inter text-amber-400 text-sm font-medium tracking-[0.25em] uppercase mb-4">
              Welcome
            </p>
            <h1 className="font-playfair text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-4">
              Lillian
              <br />
              <span className="italic text-amber-300">Zawadi</span>
            </h1>
            <p className="font-inter text-white/80 text-base md:text-lg tracking-wider mb-6">
              Strategic Marketing Professional&nbsp;&nbsp;|&nbsp;&nbsp;Brand Growth&nbsp;&nbsp;|&nbsp;&nbsp;Digital Strategy
            </p>
            <p className="font-inter text-white/70 text-base leading-relaxed max-w-md mb-10">
              I help businesses build powerful brands, connect authentically with their audiences, and achieve
              sustainable growth through strategic marketing excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/lillian-zawadi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-inter font-medium text-sm px-7 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-amber-600/30"
              >
                <Linkedin size={16} />
                Connect on LinkedIn
              </a>
              <button
                onClick={() => onNavigate('about')}
                className="inline-flex items-center gap-2 border border-white/60 hover:border-white text-white font-inter font-medium text-sm px-7 py-3 rounded-full transition-all duration-300 hover:bg-white/10"
              >
                Learn More
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="font-inter text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-64 h-64 bg-amber-50 rounded-2xl -z-10" />
            <img
              src="/WhatsApp_Image_2026-04-19_at_12.32.49_PM_(1).jpeg"
              alt="Lillian Zawadi professional portrait"
              className="w-full max-w-sm mx-auto rounded-2xl shadow-xl object-cover object-top aspect-[3/4]"
            />
            <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-stone-100 rounded-2xl -z-10" />
          </div>

          <div>
            <p className="font-inter text-amber-700 text-sm font-medium tracking-[0.2em] uppercase mb-3">
              About Me
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-stone-900 leading-tight mb-6">
              Marketing That
              <br />
              <span className="italic text-amber-700">Moves People</span>
            </h2>
            <p className="font-inter text-stone-600 text-base leading-[1.8] mb-6">
              With a deep passion for brand storytelling and market dynamics, I bring a strategic yet human
              approach to every marketing challenge. My work bridges the gap between business goals and the
              authentic connections that drive real results.
            </p>
            <p className="font-inter text-stone-600 text-base leading-[1.8] mb-8">
              From crafting compelling brand narratives to executing data-informed digital campaigns, I am
              committed to delivering marketing that does not just reach audiences — it resonates with them.
            </p>
            <button
              onClick={() => onNavigate('about')}
              className="inline-flex items-center gap-2 font-inter text-sm font-medium text-amber-700 hover:text-amber-800 group transition-colors"
            >
              Read My Story
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Core Expertise */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-inter text-amber-700 text-sm font-medium tracking-[0.2em] uppercase mb-3">
              What I Do
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-stone-900">
              Core Expertise
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 group"
              >
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-amber-100 transition-colors">
                  <Icon size={22} className="text-amber-700" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-stone-900 mb-3">{title}</h3>
                <p className="font-inter text-stone-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Brand Statement */}
      <section className="py-24 bg-stone-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img
            src="/WhatsApp_Image_2026-04-19_at_12.32.48_PM_(3).jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <p className="font-inter text-amber-400 text-sm font-medium tracking-[0.2em] uppercase mb-6">
            My Philosophy
          </p>
          <blockquote className="font-playfair text-3xl md:text-4xl lg:text-5xl text-white font-medium leading-tight italic mb-8">
            "Great marketing is not about selling a product — it's about telling a story that people want to be
            part of."
          </blockquote>
          <p className="font-inter text-stone-400 text-base">— Lillian Zawadi</p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-inter text-amber-700 text-sm font-medium tracking-[0.2em] uppercase mb-3">
              Work With Me
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-stone-900 leading-tight mb-6">
              Let's build
              <br />
              <span className="italic text-amber-700">impactful brands</span>
              <br />
              together.
            </h2>
            <p className="font-inter text-stone-600 text-base leading-relaxed mb-8">
              Open to collaborations, partnerships, and marketing opportunities. If you are ready to elevate your
              brand and connect with your audience on a deeper level, let's start the conversation.
            </p>
            <button
              onClick={() => onNavigate('contact')}
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-800 text-white font-inter font-medium text-sm px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Start a Conversation
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute top-0 right-0 w-72 h-72 bg-amber-50 rounded-full -z-10" />
            <img
              src="/WhatsApp_Image_2026-04-19_at_12.32.48_PM_(4).jpeg"
              alt="Lillian Zawadi"
              className="w-full max-w-sm ml-auto rounded-2xl shadow-xl object-cover object-top aspect-[3/4]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

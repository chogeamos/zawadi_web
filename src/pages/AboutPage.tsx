import {
  Brain,
  Target,
  BarChart2,
  MessageSquare,
  Shield,
  Lightbulb,
  Zap,
  Award,
} from 'lucide-react';

const strengths = [
  {
    icon: Brain,
    title: 'Strategic Thinking',
    description:
      'Connecting the dots between market insights, consumer behaviour, and business objectives to develop marketing strategies that create lasting competitive advantage.',
  },
  {
    icon: Target,
    title: 'Market Positioning',
    description:
      'Identifying and owning the unique space a brand occupies in the minds of its audience — crafting positioning that differentiates and resonates.',
  },
  {
    icon: BarChart2,
    title: 'Digital Campaign Management',
    description:
      'End-to-end planning, execution, and optimisation of digital campaigns across social media, email, content, and paid channels to maximise ROI.',
  },
  {
    icon: MessageSquare,
    title: 'Brand Communication',
    description:
      'Developing clear, consistent, and compelling brand voices that cut through the noise and build genuine emotional connections with audiences.',
  },
];

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description:
      'Honesty and transparency are the foundation of every client relationship and marketing decision I make.',
  },
  {
    icon: Lightbulb,
    title: 'Creativity',
    description:
      'I believe the most powerful marketing ideas emerge at the intersection of data, empathy, and bold imagination.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description:
      'Staying ahead of industry trends and embracing new technologies to deliver fresh, forward-thinking marketing solutions.',
  },
  {
    icon: Award,
    title: 'Results-Driven',
    description:
      'Every strategy, campaign, and creative decision is anchored in a commitment to measurable, meaningful outcomes.',
  },
];

export default function AboutPage() {
  return (
    <div className="font-inter">

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/hero3.jpg"
            alt="Background"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-stone-900/60" />
        </div>

        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <p className="text-amber-400 text-sm font-medium tracking-[0.25em] uppercase mb-4">
            My Story
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
            About <span className="italic text-amber-300">Lillian</span>
          </h1>

          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            A marketing strategist passionate about transforming brands and empowering businesses.
          </p>
        </div>
      </section>

      {/* Biography */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          <div className="relative">
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-amber-50 rounded-2xl -z-10" />

            <img
              src="/hero2.jpg"
              alt="Portrait"
              className="w-full max-w-sm mx-auto rounded-2xl shadow-xl object-cover object-top aspect-[3/4]"
            />

            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-stone-100 rounded-2xl -z-10" />
          </div>

          <div>
            <p className="text-amber-700 text-sm font-medium tracking-[0.2em] uppercase mb-3">
              Biography
            </p>

            <h2 className="text-4xl font-semibold text-stone-900 leading-tight mb-6">
              The Woman Behind <br />
              <span className="italic text-amber-700">the Brand</span>
            </h2>

            <div className="space-y-4 text-stone-600 leading-[1.9]">
              <p>
                Lillian Zawadi is a dynamic and results-oriented marketing strategist helping brands grow and thrive in competitive markets.
              </p>
              <p>
                She focuses on helping organisations define and communicate their brand essence effectively.
              </p>
              <p>
                Her approach blends data, storytelling, and human psychology to create impactful marketing strategies.
              </p>
              <p>
                She continuously explores emerging trends to stay ahead in digital marketing.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Strengths */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-stone-900">
              Professional Strengths
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {strengths.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white p-8 rounded-2xl shadow-sm flex gap-6">
                <Icon className="text-amber-700" />
                <div>
                  <h3 className="font-semibold text-stone-900 mb-2">{title}</h3>
                  <p className="text-stone-500 text-sm">{description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold text-stone-900">
              Core Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center p-6 border rounded-2xl">
                <Icon className="mx-auto mb-4 text-amber-700" />
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-stone-500">{description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Gallery */}
      <section className="py-0">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-4">

          <img src="/hero4.jpg" className="h-96 w-full object-cover" />
          <img src="/hero1.jpg" className="h-96 w-full object-cover" />

        </div>
      </section>

    </div>
  );
}
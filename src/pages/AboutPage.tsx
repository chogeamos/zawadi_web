import { Brain, Target, BarChart2, MessageSquare, Shield, Lightbulb, Zap, Award } from 'lucide-react';

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
    description: 'Honesty and transparency are the foundation of every client relationship and marketing decision I make.',
  },
  {
    icon: Lightbulb,
    title: 'Creativity',
    description: 'I believe the most powerful marketing ideas emerge at the intersection of data, empathy, and bold imagination.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Staying ahead of industry trends and embracing new technologies to deliver fresh, forward-thinking marketing solutions.',
  },
  {
    icon: Award,
    title: 'Results-Driven',
    description: 'Every strategy, campaign, and creative decision is anchored in a commitment to measurable, meaningful outcomes.',
  },
];

export default function AboutPage() {
  return (
    <div className="font-inter">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/WhatsApp_Image_2026-04-19_at_12.32.48_PM_(3).jpeg"
            alt=""
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-stone-900/60" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <p className="font-inter text-amber-400 text-sm font-medium tracking-[0.25em] uppercase mb-4">
            My Story
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
            About <span className="italic text-amber-300">Lillian</span>
          </h1>
          <p className="font-inter text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            A marketing strategist passionate about transforming brands and empowering businesses to reach their fullest potential.
          </p>
        </div>
      </section>

      {/* Biography */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-amber-50 rounded-2xl -z-10" />
            <img
              src="/WhatsApp_Image_2026-04-19_at_12.32.49_PM.jpeg"
              alt="Lillian Zawadi"
              className="w-full max-w-sm mx-auto rounded-2xl shadow-xl object-cover object-top aspect-[3/4]"
            />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-stone-100 rounded-2xl -z-10" />
          </div>

          <div>
            <p className="font-inter text-amber-700 text-sm font-medium tracking-[0.2em] uppercase mb-3">
              Biography
            </p>
            <h2 className="font-playfair text-4xl font-semibold text-stone-900 leading-tight mb-6">
              The Woman Behind
              <br />
              <span className="italic text-amber-700">the Brand</span>
            </h2>
            <div className="space-y-4 text-stone-600 text-base leading-[1.9]">
              <p>
                Lillian Zawadi is a dynamic and results-oriented marketing strategist with a proven record of
                helping brands grow, connect, and thrive in competitive markets. With expertise spanning brand
                development, digital strategy, and consumer engagement, Lillian brings a uniquely holistic
                perspective to every marketing challenge.
              </p>
              <p>
                Her career has been defined by a singular purpose: helping organisations discover and articulate
                their true brand essence, then communicating it in ways that inspire action. From early-stage
                startups to established businesses, she has partnered with diverse clients to unlock their
                market potential.
              </p>
              <p>
                Lillian's approach blends analytical rigour with creative instinct — she believes the most
                powerful marketing lives at the intersection of data, storytelling, and human psychology. This
                philosophy drives campaigns that do not just generate awareness, but create lasting loyalty.
              </p>
              <p>
                When she is not crafting brand strategies, Lillian is an avid learner and thought leader,
                constantly exploring emerging marketing trends to stay at the forefront of an ever-evolving
                digital landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Strengths */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="font-inter text-amber-700 text-sm font-medium tracking-[0.2em] uppercase mb-3">
              What I Bring
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-stone-900">
              Professional Strengths
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {strengths.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300 flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
                  <Icon size={22} className="text-amber-700" />
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-semibold text-stone-900 mb-2">{title}</h3>
                  <p className="font-inter text-stone-500 text-sm leading-relaxed">{description}</p>
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
            <p className="font-inter text-amber-700 text-sm font-medium tracking-[0.2em] uppercase mb-3">
              What Guides Me
            </p>
            <h2 className="font-playfair text-4xl md:text-5xl font-semibold text-stone-900">
              Core Values
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="text-center p-8 rounded-2xl border border-stone-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-stone-900 group-hover:bg-amber-700 rounded-2xl flex items-center justify-center mx-auto mb-5 transition-colors duration-300">
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-stone-900 mb-3">{title}</h3>
                <p className="font-inter text-stone-500 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Photo */}
      <section className="py-0 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-4 rounded-3xl overflow-hidden">
            <img
              src="/WhatsApp_Image_2026-04-19_at_12.32.48_PM_(4).jpeg"
              alt="Lillian Zawadi"
              className="w-full h-96 object-cover object-top"
            />
            <img
              src="/WhatsApp_Image_2026-04-19_at_12.32.48_PM_(3).jpeg"
              alt="Lillian Zawadi"
              className="w-full h-96 object-cover object-top"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

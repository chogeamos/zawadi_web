import { useState } from 'react';
import { Linkedin, Send, CheckCircle, AlertCircle, Mail, MessageCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const { error: dbError } = await supabase.from('contact_messages').insert([
      { name: form.name, email: form.email, message: form.message },
    ]);

    setSubmitting(false);

    if (dbError) {
      setError('Something went wrong. Please try again.');
    } else {
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    }
  };

  return (
    <div className="font-inter">
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-stone-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/WhatsApp_Image_2026-04-19_at_12.32.48_PM_(2).jpeg"
            alt=""
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-stone-900/60" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <p className="font-inter text-amber-400 text-sm font-medium tracking-[0.25em] uppercase mb-4">
            Get In Touch
          </p>
          <h1 className="font-playfair text-5xl md:text-6xl font-semibold text-white leading-tight mb-6">
            Let's <span className="italic text-amber-300">Connect</span>
          </h1>
          <p className="font-inter text-white/70 text-lg max-w-xl mx-auto">
            Open to collaborations, partnerships, and marketing opportunities.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">
          {/* Left: Photo + Info */}
          <div>
            <div className="relative mb-10">
              <div className="absolute -top-4 -left-4 w-40 h-40 bg-amber-50 rounded-2xl -z-10" />
              <img
                src="/WhatsApp_Image_2026-04-19_at_12.32.49_PM_(1).jpeg"
                alt="Lillian Zawadi"
                className="w-full max-w-xs rounded-2xl shadow-xl object-cover object-top aspect-square"
              />
            </div>

            <h2 className="font-playfair text-3xl font-semibold text-stone-900 mb-4">
              Ready to elevate your brand?
            </h2>
            <p className="font-inter text-stone-600 text-base leading-relaxed mb-8">
              Whether you are looking to launch a new brand, scale your marketing efforts, or simply explore
              how strategic marketing can transform your business — I would love to hear from you.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                  <Mail size={18} className="text-amber-700" />
                </div>
                <div>
                  <p className="font-inter text-xs text-stone-400 uppercase tracking-widest">Email</p>
                  <p className="font-inter text-stone-700 text-sm font-medium">Available via LinkedIn</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                  <MessageCircle size={18} className="text-amber-700" />
                </div>
                <div>
                  <p className="font-inter text-xs text-stone-400 uppercase tracking-widest">Response Time</p>
                  <p className="font-inter text-stone-700 text-sm font-medium">Within 24–48 hours</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-stone-100">
              <p className="font-inter text-stone-500 text-sm mb-4">Connect with me on</p>
              <a
                href="https://www.linkedin.com/in/lillian-zawadi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#0077B5] hover:bg-[#006396] text-white font-inter font-medium text-sm px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
              >
                <Linkedin size={18} />
                LinkedIn — Lillian Zawadi
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div className="bg-stone-50 rounded-3xl p-8 md:p-10">
            {success ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-green-600" />
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-stone-900 mb-3">
                  Message Sent!
                </h3>
                <p className="font-inter text-stone-500 text-sm leading-relaxed">
                  Thank you for reaching out. I will get back to you within 24–48 hours.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 font-inter text-sm text-amber-700 hover:text-amber-800 font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <h3 className="font-playfair text-2xl font-semibold text-stone-900 mb-2">
                  Send a Message
                </h3>
                <p className="font-inter text-stone-500 text-sm mb-8">
                  Fill in the form below and I will be in touch soon.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="font-inter text-xs text-stone-500 uppercase tracking-widest font-medium block mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 font-inter text-sm text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-inter text-xs text-stone-500 uppercase tracking-widest font-medium block mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 font-inter text-sm text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-amber-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="font-inter text-xs text-stone-500 uppercase tracking-widest font-medium block mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or opportunity..."
                      className="w-full bg-white border border-stone-200 rounded-xl px-4 py-3 font-inter text-sm text-stone-800 placeholder:text-stone-300 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <div className="flex items-center gap-2 text-red-600">
                      <AlertCircle size={16} />
                      <span className="font-inter text-sm">{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-amber-700 disabled:opacity-60 text-white font-inter font-medium text-sm px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg"
                  >
                    {submitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

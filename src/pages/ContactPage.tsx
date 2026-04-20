import { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    message: '',
  });

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    // TEMPORARY: simulate success
    setTimeout(() => {
      setSubmitting(false);
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <div className="font-inter">
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start">

          {/* Form */}
          <div className="bg-stone-50 rounded-3xl p-8 md:p-10">
            {success ? (
              <div className="text-center py-12">
                <CheckCircle size={32} className="text-green-600 mx-auto mb-4" />

                <h3 className="text-2xl font-semibold mb-3">
                  Message Sent!
                </h3>

                <p className="text-stone-500 text-sm">
                  I will respond soon.
                </p>

                <button
                  onClick={() => setSuccess(false)}
                  className="mt-6 text-amber-700 text-sm"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full border p-3 rounded-xl"
                  required
                />

                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email"
                  className="w-full border p-3 rounded-xl"
                  required
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full border p-3 rounded-xl"
                  rows={5}
                  required
                />

                {error && (
                  <p className="text-red-600 text-sm flex items-center gap-2">
                    <AlertCircle size={14} /> {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full p-3 rounded-xl text-white transition ${
                    submitting ? 'bg-gray-500' : 'bg-black hover:bg-stone-800'
                  }`}
                >
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>

              </form>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}
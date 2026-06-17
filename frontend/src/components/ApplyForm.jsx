import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { TEXTURES } from "../data/evidence";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const FIELD =
  "w-full rounded-xl bg-[#0f0f0f] border border-white/10 px-4 py-3 text-sm text-white placeholder:text-zinc-600 focus:outline-none focus:border-[#ed0584]/60 focus:ring-1 focus:ring-[#ed0584]/30 transition-colors";

export const ApplyForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    business_type: "",
    ecosystem_interest: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.company || !form.business_type) {
      toast.error("Please fill in your name, email, company and business type.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/applications`, form);
      setDone(true);
      toast.success("Application received. We review every submission personally.");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="apply"
      data-testid="apply-section"
      className="relative scroll-mt-24 py-24 md:py-32 px-6 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <img src={TEXTURES.satin} alt="" className="w-full h-full object-cover opacity-[0.12]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
      </div>

      <div className="max-w-2xl mx-auto text-center mb-12">
        <span className="text-xs font-bold tracking-[0.2em] uppercase text-[#ed0584]">
          Apply for Partnership
        </span>
        <h2 className="mt-4 font-heading text-3xl sm:text-5xl font-black tracking-tighter">
          Connect your business to emerging technology.
        </h2>
        <p className="mt-4 text-zinc-400">
          We build partnerships between real-world businesses and emerging
          technologies that generate visibility, adoption, and growth. Tell us
          about your business — applications are reviewed individually.
        </p>
      </div>

      <div
        data-testid="apply-partnership-form"
        className="max-w-2xl mx-auto rounded-3xl border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-xl p-7 md:p-10"
      >
        {done ? (
          <div data-testid="apply-success" className="text-center py-10">
            <CheckCircle2 className="w-14 h-14 text-[#ed0584] mx-auto" />
            <h3 className="mt-5 font-heading text-2xl font-bold">
              Application received.
            </h3>
            <p className="mt-3 text-zinc-400">
              Thank you, {form.name.split(" ")[0]}. If there’s a partnership
              worth building, we’ll be in touch.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                data-testid="apply-name"
                className={FIELD}
                placeholder="Full name *"
                value={form.name}
                onChange={set("name")}
              />
              <input
                data-testid="apply-email"
                type="email"
                className={FIELD}
                placeholder="Email *"
                value={form.email}
                onChange={set("email")}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                data-testid="apply-company"
                className={FIELD}
                placeholder="Company / brand *"
                value={form.company}
                onChange={set("company")}
              />
              <input
                data-testid="apply-business-type"
                className={FIELD}
                placeholder="Business type (e.g. café, startup) *"
                value={form.business_type}
                onChange={set("business_type")}
              />
            </div>
            <input
              data-testid="apply-ecosystem"
              className={FIELD}
              placeholder="Which ecosystem or partner interests you? (optional)"
              value={form.ecosystem_interest}
              onChange={set("ecosystem_interest")}
            />
            <textarea
              data-testid="apply-message"
              rows={4}
              className={`${FIELD} resize-none`}
              placeholder="What opportunity are you looking to create? (optional)"
              value={form.message}
              onChange={set("message")}
            />
            <button
              type="submit"
              data-testid="apply-submit-btn"
              disabled={loading}
              className="group w-full inline-flex items-center justify-center gap-2 bg-white text-black font-semibold rounded-full px-7 py-4 hover:bg-zinc-200 transition-colors disabled:opacity-60"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  Submit Application
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </>
              )}
            </button>
            <p className="text-center text-xs text-zinc-600">
              By invitation & review only. We respond to a limited number of
              applications.
            </p>
          </form>
        )}
      </div>
    </section>
  );
};

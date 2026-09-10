import { useState } from "react";
import { Mail, Linkedin, Phone, MapPin, Send } from "lucide-react";
import useInView from "../hooks/useInView";

export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [ref, inView] = useInView();

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully ✅");
        event.target.reset();
      } else {
        setResult(data.message || "Error submitting form ❌");
      }
    } catch (err) {
      setResult("Error submitting form ❌");
      console.error(err);
    }

    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section" aria-label="Contact">
      <div ref={ref} className={`reveal ${inView ? "is-visible" : ""} max-w-6xl mx-auto`}>
        <p className="eyebrow mb-3 justify-center w-full">· 07 Contact</p>
        <h2 className="text-3xl font-bold tracking-tight text-center mb-4">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <p className="text-center text-muted mb-12">
          Have a project in mind? Feel free to reach out.
        </p>

        <div className="flex flex-wrap gap-8">
          {/* Contact Info */}
          <div className="flex-1 min-w-[320px] relative">
            <div className="absolute -top-6 -right-4 glass floating-card px-4 py-2 rotate-[3deg] pointer-events-auto hidden sm:block z-10">
              <p className="eyebrow mb-0">Open to work</p>
            </div>

            <div className="glass floating-card p-6 pointer-events-auto">
              <h3 className="text-xl font-semibold mb-5">Contact Information</h3>

              <div className="flex items-start gap-4 mb-5">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand to-brand-2 shrink-0 shadow-lg shadow-brand/30">
                  <Mail className="w-6 h-6 text-white" />
                </span>
                <div>
                  <h4 className="font-medium m-0">Email</h4>
                  <a
                    href="mailto:andresfgpicon@gmail.com"
                    className="text-muted hover:text-brand"
                  >
                    andresfgpicon@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand to-brand-2 shrink-0 shadow-lg shadow-brand/30">
                  <Phone className="w-6 h-6 text-white" />
                </span>
                <div>
                  <h4 className="font-medium m-0">Phone</h4>
                  <a
                    href="tel:+573175854157"
                    className="text-muted hover:text-brand"
                  >
                    +57 (317) 585-4157
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand to-brand-2 shrink-0 shadow-lg shadow-brand/30">
                  <Linkedin className="w-6 h-6 text-white" />
                </span>
                <div>
                  <h4 className="font-medium m-0">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/andresguaglianone/"
                    className="text-muted hover:text-brand"
                  >
                    Andres Guaglianone
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-brand to-brand-2 shrink-0 shadow-lg shadow-brand/30">
                  <MapPin className="w-6 h-6 text-white" />
                </span>
                <div>
                  <h4 className="font-medium m-0">Location</h4>
                  <span className="text-muted">Colombia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 min-w-[320px] glass floating-card p-6 pointer-events-auto">
            <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
            <form onSubmit={onSubmit} className="flex flex-col">
              <label htmlFor="name" className="mt-4 mb-1 font-medium">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                placeholder="Andres..."
                className="p-3 border border-border rounded-lg w-full bg-background/40 text-text"
              />

              <label htmlFor="email" className="mt-4 mb-1 font-medium">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="andresfgpicon@..."
                className="p-3 border border-border rounded-lg w-full bg-background/40 text-text"
              />

              <label htmlFor="message" className="mt-4 mb-1 font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Hello, I'd like to talk about..."
                className="p-3 border border-border rounded-lg w-full resize-none min-h-[120px] bg-background/40 text-text"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 px-5 py-3 bg-gradient-to-r from-brand to-brand-2 text-white rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>

            <p className="mt-4 text-brand" role="status">{result}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

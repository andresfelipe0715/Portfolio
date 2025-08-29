import { useState } from "react";
import { Mail, Linkedin, Twitter, Instagram, Twitch, Phone, MapPin, Send } from "lucide-react";
export default function Contact() {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <section
      id="contact"
      className="py-16 px-4 font-sans"
      aria-label="Contact"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In <span className="text-blue-500">Touch</span>
        </h2>
        <p className="text-center text-gray-500 mb-12">
          Have a project in mind? Feel free to reach out.
        </p>

        <div className="flex flex-wrap gap-8">
          {/* Contact Info */}
          <div className="flex-1 min-w-[320px] p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>

            <div className="flex items-start gap-4 mb-4">
              <Mail className="w-6 h-6 text-blue-500" />
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:hello@gmail.com"
                  className="text-gray-500 hover:text-blue-500"
                >
                  andresfgpicon@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-4">
              <Phone className="w-6 h-6 text-blue-500" />
              <div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+573175854157"
                  className="text-gray-500 hover:text-blue-500"
                >
                  +57 (317) 585-4157
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-4">
              <Linkedin className="w-6 h-6 text-blue-500" />
              <div>
                <h4 className="font-medium">LinkedIn</h4>
                <a
                  href="https://www.linkedin.com/in/andres-guaglianone-935742267/"
                  className="text-gray-500 hover:text-blue-500"
                >
                  Andres Guaglianone
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-blue-500" />
              <div>
                <h4 className="font-medium">Location</h4>
                <span className="text-gray-500">Ocaña, Colombia</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1 min-w-[320px] p-8 bg-card rounded-lg shadow-md pointer-events-auto border-2 border-border">
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
                className="p-3 border border-gray-300 rounded-md w-full"
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
                className="p-3 border border-gray-300 rounded-md w-full"
              />

              <label htmlFor="message" className="mt-4 mb-1 font-medium">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="Hello, I'd like to talk about..."
                className="p-3 border border-gray-300 rounded-md w-full resize-none min-h-[120px]"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-6 px-5 py-3 bg-gradient-to-r from-blue-500 to-blue-400 text-white rounded-xl font-semibold shadow-lg flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </form>

            <p className="mt-4 text-green-500">{result}</p>
          </div>
        </div>
      </div>
    </section>
  );

}
import { Mail, Linkedin, Phone, MapPin } from "lucide-react";
import useInView from "../hooks/useInView";

export default function Contact() {
  const [ref, inView] = useInView();

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

        <div className="max-w-xl mx-auto relative">
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
      </div>
    </section>
  );
}

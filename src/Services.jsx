import { FaArrowLeft, FaArrowRight, FaCheck, FaExternalLinkAlt } from "react-icons/fa";
import DotGrid from "./components/DotGrid";

const services = [
  {
    number: "01",
    title: "A website from the ground up",
    description:
      "A clear, welcoming website that explains what you do, builds trust, and helps new customers take the next step.",
    details: ["Custom design", "Mobile-friendly pages", "Contact and enquiry links"],
  },
  {
    number: "02",
    title: "A focused landing page",
    description:
      "A single page for a service, event, or offer—with the essential information and a direct way for people to reach you.",
    details: ["One clear message", "Service highlights", "Call or WhatsApp action"],
  },
  {
    number: "03",
    title: "A refresh for your current site",
    description:
      "Update an outdated website with a cleaner look, easier navigation, and a better experience on phones and tablets.",
    details: ["Visual refresh", "Responsive improvements", "Content and layout updates"],
  },
];

export default function Services() {
  return (
    <div className="services-page relative min-h-screen bg-[#050816] text-white">
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <DotGrid dotSize={2.5} gap={26} baseColor="#2a2a2a" activeColor="#fb923c" proximity={80} shockRadius={100} shockStrength={1.5} resistance={1000} returnDuration={2} />
      </div>
      <main className="relative z-10">
        <nav className="site-nav fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 flex items-center rounded-full bg-white/10 backdrop-blur-2xl border border-white/10 shadow-2xl">
          <a className="site-brand font-bold tracking-tight text-white select-none shrink-0" href="/">Jish<span className="text-orange-400">Works</span></a>
          <div className="site-nav-links ml-auto flex items-center text-gray-300">
            <a href="/" className="hover:text-white transition">Portfolio</a>
            <a href="#services" className="hover:text-white transition">Services</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </nav>

        <header className="services-hero">
          <a className="services-back" href="/"><FaArrowLeft aria-hidden="true" /> Back to portfolio</a>
          <p className="eyebrow">Web development for local businesses</p>
          <h1>Make it easier for customers to find you and get in touch.</h1>
          <p className="services-lede">I build thoughtful, mobile-friendly websites for small businesses and independent people. The goal is simple: explain what you offer and make the next step clear.</p>
          <a className="primary-link" href="mailto:jishnudutta2002@gmail.com?subject=Website%20project">Tell me about your project <FaArrowRight aria-hidden="true" /></a>
          <p className="services-note">Every project starts with a conversation about your needs, timeline, and budget.</p>
        </header>

        <section id="services" className="services-content">
          <div className="section-heading">
            <p className="eyebrow">Ways I can help</p>
            <h2>Websites that work for your business.</h2>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <ul>{service.details.map((detail) => <li key={detail}><FaCheck aria-hidden="true" />{detail}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="services-content services-process">
          <div className="section-heading">
            <p className="eyebrow">A straightforward process</p>
            <h2>From first idea to launch.</h2>
          </div>
          <div className="process-steps">
            <div><span>01</span><h3>We talk</h3><p>Share what your business does, who you want to reach, and what you need the site to do.</p></div>
            <div><span>02</span><h3>I build</h3><p>I shape the content and design into a responsive website, then share it with you for feedback.</p></div>
            <div><span>03</span><h3>We launch</h3><p>Once everything looks right, we get your site ready to share with your customers.</p></div>
          </div>
        </section>

        <section id="contact" className="services-contact">
          <p className="eyebrow">Let’s get started</p>
          <h2>Tell me what you have in mind.</h2>
          <p>Send a short note about your business and the website you need. I’ll get back to you to discuss the next steps.</p>
          <a className="primary-link" href="mailto:jishnudutta2002@gmail.com?subject=Website%20project">Email about a project <FaExternalLinkAlt aria-hidden="true" /></a>
          <div className="services-phone">
            <span>Call or WhatsApp</span>
            <a href="tel:+916291014636">+91 62910 14636</a>
            <div className="services-phone-actions">
              <a href="tel:+916291014636">Call</a>
              <a href="https://wa.me/916291014636" target="_blank" rel="noopener noreferrer">WhatsApp <FaExternalLinkAlt aria-hidden="true" /></a>
            </div>
          </div>
          <a className="secondary-link" href="/">Return to portfolio</a>
        </section>
        <footer className="services-footer">© {new Date().getFullYear()} JishWorks · Built with curiosity.</footer>
      </main>
    </div>
  );
}

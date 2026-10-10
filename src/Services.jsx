import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCheck, FaExternalLinkAlt } from "react-icons/fa";
import DotGrid from "./components/DotGrid";

const services = [
  {
    number: "01",
    title: { en: "A website from the ground up", bn: "শুরু থেকে একটি ওয়েবসাইট" },
    description: {
      en: "A complete, custom website for your business.",
      bn: "আপনার ব্যবসার জন্য সম্পূর্ণ, নিজস্ব ওয়েবসাইট।",
    },
    details: { en: ["Custom design", "Works on phones", "Contact links"], bn: ["নিজস্ব ডিজাইন", "মোবাইলে ব্যবহারযোগ্য", "যোগাযোগের লিংক"] },
  },
  {
    number: "02",
    title: { en: "A focused landing page", bn: "একটি লক্ষ্যভিত্তিক ল্যান্ডিং পেজ" },
    description: {
      en: "One focused page for a service, product, or offer.",
      bn: "পরিষেবা, পণ্য বা অফারের জন্য একটি লক্ষ্যভিত্তিক পেজ।",
    },
    details: { en: ["Clear information", "Key details", "Call or WhatsApp link"], bn: ["স্পষ্ট তথ্য", "প্রয়োজনীয় বিবরণ", "কল বা WhatsApp লিংক"] },
  },
  {
    number: "03",
    title: { en: "A refresh for your current site", bn: "আপনার বর্তমান ওয়েবসাইট নতুন করে সাজানো" },
    description: {
      en: "Improve your current website’s design and mobile experience.",
      bn: "বর্তমান ওয়েবসাইটের ডিজাইন ও মোবাইল অভিজ্ঞতা উন্নত করা।",
    },
    details: { en: ["Updated design", "Mobile improvements", "Content updates"], bn: ["নতুন ডিজাইন", "মোবাইলের উন্নতি", "কনটেন্ট আপডেট"] },
  },
];

const copy = {
  en: {
    portfolio: "Portfolio", services: "Services", contact: "Contact", back: "Back to portfolio",
    eyebrow: "Websites for local businesses", headline: "A simple website that helps customers reach you.",
    lede: "Clean, mobile-friendly websites for small businesses.",
    start: "Discuss your website", pricingTitle: "Simple, flexible pricing", pricing: "Website: one-time, affordable payment, negotiable to fit your needs. Hosting and maintenance: separate monthly payment.",
    ways: "Services", servicesTitle: "What I can build",
    getStarted: "Get in touch", contactTitle: "Have a project in mind?", contactText: "Tell me what your business needs.",
    email: "Email about a project", callWhatsapp: "Call or WhatsApp", call: "Call", whatsapp: "WhatsApp", return: "Return to portfolio", footer: "Built with curiosity.",
  },
  bn: {
    portfolio: "পোর্টফোলিও", services: "পরিষেবা", contact: "যোগাযোগ", back: "পোর্টফোলিওতে ফিরুন",
    eyebrow: "স্থানীয় ব্যবসার জন্য ওয়েবসাইট", headline: "গ্রাহকদের যোগাযোগের সহজ উপায় দিন।",
    lede: "ছোট ব্যবসার জন্য পরিচ্ছন্ন, মোবাইল-উপযোগী ওয়েবসাইট।",
    start: "ওয়েবসাইট নিয়ে কথা বলুন", pricingTitle: "সহজ ও নমনীয় মূল্য", pricing: "ওয়েবসাইট: একবারের সাশ্রয়ী মূল্য, আপনার প্রয়োজন অনুযায়ী আলোচনা সাপেক্ষ। হোস্টিং ও রক্ষণাবেক্ষণ: আলাদা মাসিক ফি।",
    ways: "পরিষেবা", servicesTitle: "যা তৈরি করে দিতে পারি",
    getStarted: "যোগাযোগ করুন", contactTitle: "কোনো পরিকল্পনা আছে?", contactText: "আপনার ব্যবসার কী প্রয়োজন, জানান।",
    email: "প্রজেক্ট নিয়ে ইমেইল করুন", callWhatsapp: "কল বা WhatsApp করুন", call: "কল করুন", whatsapp: "WhatsApp করুন", return: "পোর্টফোলিওতে ফিরুন", footer: "কৌতূহল নিয়ে তৈরি।",
  },
};

export default function Services() {
  const [language, setLanguage] = useState("en");
  const t = copy[language];

  useEffect(() => {
    document.documentElement.lang = language === "bn" ? "bn" : "en";
    document.title = language === "bn" ? "স্থানীয় ব্যবসার জন্য ওয়েবসাইট | JishWorks" : "Web Development for Local Businesses | JishWorks";
  }, [language]);

  return (
    <div className="services-page relative min-h-screen bg-[#050816] text-white">
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <DotGrid dotSize={2.5} gap={26} baseColor="#2a2a2a" activeColor="#fb923c" proximity={80} shockRadius={100} shockStrength={1.5} resistance={1000} returnDuration={2} />
      </div>
      <main className="relative z-10">
        <nav className="site-nav fixed top-3 sm:top-5 left-1/2 -translate-x-1/2 z-50 flex items-center rounded-full bg-white/10 backdrop-blur-2xl border border-white/10 shadow-2xl">
          <a className="site-brand font-bold tracking-tight text-white select-none shrink-0" href="/">Jish<span className="text-orange-400">Works</span></a>
          <div className="site-nav-links ml-auto flex items-center text-gray-300">
            <a href="/" className="hover:text-white transition">{t.portfolio}</a>
            <a href="#services" className="hover:text-white transition">{t.services}</a>
            <a href="#contact" className="hover:text-white transition">{t.contact}</a>
          </div>
          <button type="button" className="language-toggle" onClick={() => setLanguage(language === "en" ? "bn" : "en")} aria-label={language === "en" ? "বাংলায় দেখুন" : "View in English"}>
            {language === "en" ? "বাংলা" : "English"}
          </button>
        </nav>

        <header className="services-hero">
          <a className="services-back" href="/"><FaArrowLeft aria-hidden="true" /> {t.back}</a>
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.headline}</h1>
          <p className="services-lede">{t.lede}</p>
          <a className="primary-link" href="mailto:jishnudutta2002@gmail.com?subject=Website%20project">{t.start} <FaArrowRight aria-hidden="true" /></a>
          <aside className="pricing-note"><h2>{t.pricingTitle}</h2><p>{t.pricing}</p></aside>
        </header>

        <section id="services" className="services-content">
          <div className="section-heading">
            <p className="eyebrow">{t.ways}</p>
            <h2>{t.servicesTitle}</h2>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <span className="service-number">{service.number}</span>
                <h3>{service.title[language]}</h3>
                <p>{service.description[language]}</p>
                <ul>{service.details[language].map((detail) => <li key={detail}><FaCheck aria-hidden="true" />{detail}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="services-contact">
          <p className="eyebrow">{t.getStarted}</p>
          <h2>{t.contactTitle}</h2>
          <p>{t.contactText}</p>
          <a className="primary-link" href="mailto:jishnudutta2002@gmail.com?subject=Website%20project">{t.email} <FaExternalLinkAlt aria-hidden="true" /></a>
          <div className="services-phone">
            <span>{t.callWhatsapp}</span>
            <a href="tel:+916291014636">+91 62910 14636</a>
            <div className="services-phone-actions">
              <a href="tel:+916291014636">{t.call}</a>
              <a href="https://wa.me/916291014636" target="_blank" rel="noopener noreferrer">{t.whatsapp} <FaExternalLinkAlt aria-hidden="true" /></a>
            </div>
          </div>
          <a className="secondary-link" href="/">{t.return}</a>
        </section>
        <footer className="services-footer">© {new Date().getFullYear()} JishWorks · {t.footer}</footer>
      </main>
    </div>
  );
}

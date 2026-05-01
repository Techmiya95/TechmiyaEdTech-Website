"use client";
import { useEffect, useRef, useState } from "react";
import { SEOHead } from "@/components/SEOHead";

// All 9 hackathon images from /public/Hackethon
const hackathonImages = [
  "/Hackethon/WhatsApp Image 2026-03-20 at 16.15.05.jpeg",
  "/Hackethon/WhatsApp Image 2026-03-20 at 16.15.06.jpeg",
  "/Hackethon/WhatsApp Image 2026-03-20 at 18.00.21.jpeg",
  "/Hackethon/WhatsApp Image 2026-03-20 at 18.00.23.jpeg",
  "/Hackethon/WhatsApp Image 2026-03-20 at 18.00.24.jpeg",
  "/Hackethon/WhatsApp Image 2026-03-20 at 18.00.25 (1).jpeg",
  "/Hackethon/WhatsApp Image 2026-03-20 at 18.00.25 (2).jpeg",
  "/Hackethon/WhatsApp Image 2026-03-20 at 18.00.25.jpeg",
  "/Hackethon/WhatsApp Image 2026-03-20 at 18.00.26.jpeg",
];

const features = [
  "Well-structured hackathon themes and problem statements",
  "Expert mentors from leading tech companies",
  "Access to APIs, cloud credits, and development tools",
  "Exciting prizes and recognition for winners",
  "Networking opportunities with industry professionals",
  "Live project building and demonstration sessions",
  "Post-hackathon incubation support for best ideas",
];

const benefits = [
  { icon: "🏆", text: "Discover and nurture tech talent" },
  { icon: "💡", text: "Generate innovative solutions for business challenges" },
  { icon: "🌟", text: "Build employer brand among students and developers" },
  { icon: "🤝", text: "Foster a culture of innovation and collaboration" },
  { icon: "🚀", text: "Identify potential hires and interns" },
];

const css = `
  /* ===== HERO ===== */
  .hk-hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e1b4b 40%, #312e81 100%);
    position: relative;
    overflow: hidden;
    padding: 90px 24px 110px;
    text-align: center;
  }
  .hk-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.3) 0%, transparent 55%),
      radial-gradient(ellipse at 80% 20%, rgba(168,85,247,0.2) 0%, transparent 50%),
      radial-gradient(ellipse at 60% 85%, rgba(236,72,153,0.15) 0%, transparent 50%);
    pointer-events: none;
  }
  .hk-blob {
    position: absolute; border-radius: 50%; pointer-events: none;
    animation: hk-drift 10s ease-in-out infinite;
  }
  .hk-blob-1 { width: 320px; height: 320px; top: -100px; left: -80px; background: radial-gradient(circle, rgba(99,102,241,0.15), transparent 70%); }
  .hk-blob-2 { width: 260px; height: 260px; bottom: -60px; right: -60px; background: radial-gradient(circle, rgba(168,85,247,0.15), transparent 70%); animation-delay: -5s; }
  @keyframes hk-drift { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(24px,-18px); } }

  .hk-hero-tag {
    display: inline-flex; align-items: center; gap: 8px;
    background: rgba(251,191,36,0.12); border: 1px solid rgba(251,191,36,0.35);
    color: #fbbf24; font-size: 0.75rem; font-weight: 700; letter-spacing: 0.18em;
    text-transform: uppercase; padding: 7px 20px; border-radius: 999px; margin-bottom: 24px;
  }
  .hk-hero-title {
    font-size: clamp(2rem, 5vw, 3.6rem); font-weight: 900; color: #fff;
    line-height: 1.15; margin-bottom: 20px;
  }
  .hk-hero-title span {
    background: linear-gradient(90deg, #a78bfa, #ec4899);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .hk-hero-sub {
    font-size: 1.05rem; color: rgba(255,255,255,0.72); max-width: 640px;
    margin: 0 auto 48px; line-height: 1.7;
  }
  .hk-stats {
    display: flex; justify-content: center; gap: 22px; flex-wrap: wrap;
  }
  .hk-stat {
    background: rgba(255,255,255,0.07); backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.14); border-radius: 18px;
    padding: 18px 28px; text-align: center;
    transition: transform 0.3s ease, background 0.3s ease;
  }
  .hk-stat:hover { background: rgba(255,255,255,0.11); transform: translateY(-4px); }
  .hk-stat-num { font-size: 1.75rem; font-weight: 900; color: #a78bfa; }
  .hk-stat-lbl { font-size: 0.75rem; color: rgba(255,255,255,0.6); margin-top: 4px; letter-spacing: 0.06em; }

  /* ===== FEATURES SECTION ===== */
  .hk-features {
    background: #fff; padding: 72px 24px;
  }
  .hk-sec-header { text-align: center; margin-bottom: 52px; }
  .hk-sec-header h2 {
    font-size: clamp(1.6rem, 3vw, 2.4rem); font-weight: 800; color: #1e1b4b; margin-bottom: 10px;
  }
  .hk-sec-header h2 span {
    background: linear-gradient(90deg, #7c3aed, #ec4899);
    -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;
  }
  .hk-sec-header p { color: #6b7280; font-size: 1rem; max-width: 520px; margin: 0 auto; }
  .hk-divider { width: 72px; height: 5px; background: linear-gradient(90deg, #7c3aed, #ec4899); border-radius: 99px; margin: 16px auto 0; }

  .hk-features-grid {
    display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px; max-width: 1100px; margin: 0 auto;
  }
  .hk-feature-card {
    display: flex; align-items: flex-start; gap: 14px;
    background: linear-gradient(135deg, #f5f3ff, #fdf4ff);
    border: 1px solid #e9d5ff; border-radius: 16px; padding: 20px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .hk-feature-card:hover { transform: translateY(-4px); box-shadow: 0 12px 32px rgba(124,58,237,0.12); }
  .hk-feature-icon {
    width: 36px; height: 36px; border-radius: 10px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    display: flex; align-items: center; justify-content: center; flex-shrink: 0;
    font-size: 0.9rem;
  }
  .hk-feature-text { font-size: 0.92rem; font-weight: 600; color: #374151; line-height: 1.5; }

  /* ===== BENEFITS ===== */
  .hk-benefits {
    background: linear-gradient(135deg, #1e1b4b, #312e81);
    padding: 72px 24px;
  }
  .hk-benefits-grid {
    display: flex; flex-wrap: wrap; justify-content: center; gap: 18px;
    max-width: 900px; margin: 0 auto;
  }
  .hk-benefit-pill {
    display: flex; align-items: center; gap: 10px;
    background: rgba(255,255,255,0.1); backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.15); border-radius: 999px;
    padding: 12px 24px; color: #fff; font-size: 0.9rem; font-weight: 600;
    transition: background 0.3s ease, transform 0.3s ease;
  }
  .hk-benefit-pill:hover { background: rgba(255,255,255,0.16); transform: scale(1.04); }

  /* ===== GALLERY ===== */
  .hk-gallery {
    background: linear-gradient(180deg, #f5f3ff 0%, #fdf4ff 50%, #fff 100%);
    padding: 72px 24px 100px;
  }
  .hk-gallery-grid {
    columns: 3; column-gap: 18px; max-width: 1300px; margin: 0 auto;
  }
  @media (max-width: 900px) { .hk-gallery-grid { columns: 2; } }
  @media (max-width: 580px) { .hk-gallery-grid { columns: 1; } }

  .hk-img-card {
    break-inside: avoid; margin-bottom: 18px; border-radius: 18px; overflow: hidden;
    position: relative; cursor: pointer;
    box-shadow: 0 6px 24px rgba(124,58,237,0.12), 0 2px 6px rgba(0,0,0,0.06);
    opacity: 0; transform: translateY(28px) scale(0.97);
    transition: opacity 0.5s ease, transform 0.5s ease, box-shadow 0.4s ease;
    background: #fff;
  }
  .hk-img-card.visible { opacity: 1; transform: translateY(0) scale(1); }
  .hk-img-card:hover { box-shadow: 0 20px 50px rgba(124,58,237,0.22), 0 6px 20px rgba(0,0,0,0.09); transform: translateY(-6px) scale(1.02); }
  .hk-img-card img { width: 100%; display: block; object-fit: cover; transition: transform 0.5s ease; }
  .hk-img-card:hover img { transform: scale(1.06); }
  .hk-img-overlay {
    position: absolute; inset: 0;
    background: linear-gradient(to top, rgba(30,27,75,0.75) 0%, transparent 55%);
    opacity: 0; transition: opacity 0.4s ease;
    display: flex; align-items: flex-end; padding: 16px;
  }
  .hk-img-card:hover .hk-img-overlay { opacity: 1; }
  .hk-img-label { color: #fff; font-size: 0.8rem; font-weight: 600; display: flex; align-items: center; gap: 6px; }
  .hk-img-badge {
    position: absolute; top: 12px; right: 12px;
    background: linear-gradient(135deg, #7c3aed, #ec4899);
    color: #fff; font-size: 0.62rem; font-weight: 700; letter-spacing: 0.08em;
    text-transform: uppercase; padding: 4px 10px; border-radius: 999px;
    box-shadow: 0 2px 8px rgba(124,58,237,0.4);
  }

  /* ===== LIGHTBOX ===== */
  .hk-lightbox {
    position: fixed; inset: 0; background: rgba(0,0,0,0.92); z-index: 9999;
    display: flex; align-items: center; justify-content: center; padding: 24px;
    animation: hk-lb-in 0.25s ease;
  }
  @keyframes hk-lb-in { from { opacity: 0; } to { opacity: 1; } }
  .hk-lb-img {
    max-width: min(90vw, 960px); max-height: 85vh; border-radius: 16px;
    box-shadow: 0 40px 80px rgba(0,0,0,0.6); object-fit: contain;
    animation: hk-lb-zoom 0.3s cubic-bezier(.34,1.56,.64,1);
  }
  @keyframes hk-lb-zoom { from { transform: scale(0.88); } to { transform: scale(1); } }
  .hk-lb-close {
    position: fixed; top: 20px; right: 24px;
    background: rgba(255,255,255,0.12); border: none; color: #fff;
    font-size: 1.6rem; width: 44px; height: 44px; border-radius: 50%;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    transition: background 0.2s;
  }
  .hk-lb-close:hover { background: rgba(255,255,255,0.22); }
  .hk-lb-nav {
    position: fixed; top: 50%; transform: translateY(-50%);
    background: rgba(255,255,255,0.12); border: none; color: #fff;
    font-size: 1.8rem; width: 50px; height: 50px; border-radius: 50%;
    cursor: pointer; display: flex; align-items: center; justify-content: center;
    transition: background 0.2s; z-index: 10000;
  }
  .hk-lb-nav:hover { background: rgba(255,255,255,0.22); }
  .hk-lb-prev { left: 16px; } .hk-lb-next { right: 16px; }
  .hk-lb-counter {
    position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
    color: rgba(255,255,255,0.7); font-size: 0.85rem; font-weight: 600;
    background: rgba(0,0,0,0.4); padding: 5px 14px; border-radius: 999px;
  }

  @media (max-width: 640px) {
    .hk-hero { padding: 64px 16px 80px; }
    .hk-stats { gap: 12px; }
  }
`;

// Gallery card with scroll-reveal
const HkCard = ({
  src, index, onClick,
}: {
  src: string; index: number; onClick: () => void;
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.06 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`hk-img-card${visible ? " visible" : ""}`}
      style={{ transitionDelay: `${(index % 6) * 70}ms` }} onClick={onClick}>
      <span className="hk-img-badge">Hackathon</span>
      <img src={src} alt={`Hackathon ${index + 1}`} loading="lazy"
        onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }} />
      <div className="hk-img-overlay">
        <span className="hk-img-label">🔍 Click to view</span>
      </div>
    </div>
  );
};

const Hackathons = () => {
  const [lbIndex, setLbIndex] = useState<number | null>(null);

  useEffect(() => {
    if (lbIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLbIndex(null);
      if (e.key === "ArrowRight") setLbIndex(i => (i! + 1) % hackathonImages.length);
      if (e.key === "ArrowLeft") setLbIndex(i => (i! - 1 + hackathonImages.length) % hackathonImages.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lbIndex]);

  return (
    <>
      <SEOHead
        title="Hackathons & Coding Events Bangalore"
        description="Techmiya EdTech organizes and sponsors hackathons that challenge students to solve real-world problems using AI, ML, IoT and more. View our hackathon gallery."
        keywords="Techmiya hackathons, coding events Bangalore, innovation hackathon, AI ML hackathon, student hackathon"
        canonicalUrl="/services/hackathons"
      />

      <style>{css}</style>

      {/* ===== HERO ===== */}
      <section className="hk-hero">
        <div className="hk-blob hk-blob-1" />
        <div className="hk-blob hk-blob-2" />
        <div className="relative z-10">
          <div className="hk-hero-tag">💻 Hackathons</div>
          <h1 className="hk-hero-title">
            Where Innovation<br />
            <span>Meets Code</span>
          </h1>
          <p className="hk-hero-sub">
            Techmiya EdTech organizes and sponsors hackathons that challenge participants to solve
            real-world problems using cutting-edge technologies like AI, ML, IoT and more.
          </p>
          <div className="hk-stats">
            <div className="hk-stat"><div className="hk-stat-num">10+</div><div className="hk-stat-lbl">Hackathons Hosted</div></div>
            <div className="hk-stat"><div className="hk-stat-num">500+</div><div className="hk-stat-lbl">Participants</div></div>
            <div className="hk-stat"><div className="hk-stat-num">50+</div><div className="hk-stat-lbl">Projects Built</div></div>
            <div className="hk-stat"><div className="hk-stat-num">20+</div><div className="hk-stat-lbl">Industry Mentors</div></div>
          </div>
        </div>
      </section>

      {/* Wavy divider */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 60"
        className="block -mt-[2px] bg-[#312e81]">
        <path fill="#ffffff" d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
      </svg>

      {/* ===== FEATURES ===== */}
      <section className="hk-features">
        <div className="hk-sec-header">
          <h2>What Makes Our <span>Hackathons Special?</span></h2>
          <p>Everything you need for an unforgettable innovation experience.</p>
          <div className="hk-divider" />
        </div>
        <div className="hk-features-grid">
          {features.map((f, i) => (
            <div key={i} className="hk-feature-card">
              <div className="hk-feature-icon">✓</div>
              <span className="hk-feature-text">{f}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== BENEFITS ===== */}
      <section className="hk-benefits">
        <div className="hk-sec-header mb-10">
          <h2 className="text-white">Why Join Our <span>Events?</span></h2>
          <p className="text-white/65">Benefits for students, professionals, and organizations alike.</p>
          <div className="hk-divider" />
        </div>
        <div className="hk-benefits-grid">
          {benefits.map((b, i) => (
            <div key={i} className="hk-benefit-pill">
              <span>{b.icon}</span>
              <span>{b.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== GALLERY ===== */}
      <section className="hk-gallery">
        <div className="hk-sec-header">
          <h2>Hackathon <span>Gallery</span></h2>
          <p>Moments captured from our innovation-packed hackathon events.</p>
          <div className="hk-divider" />
        </div>
        <div className="hk-gallery-grid">
          {hackathonImages.map((src, i) => (
            <HkCard key={i} src={src} index={i} onClick={() => setLbIndex(i)} />
          ))}
        </div>
      </section>

      {/* ===== LIGHTBOX ===== */}
      {lbIndex !== null && (
        <div className="hk-lightbox" onClick={() => setLbIndex(null)}>
          <img src={hackathonImages[lbIndex]} alt={`Hackathon ${lbIndex + 1}`}
            className="hk-lb-img" onClick={e => e.stopPropagation()} />
          <button className="hk-lb-close" onClick={() => setLbIndex(null)}>✕</button>
          <button className="hk-lb-nav hk-lb-prev"
            onClick={e => { e.stopPropagation(); setLbIndex(i => (i! - 1 + hackathonImages.length) % hackathonImages.length); }}>
            ‹
          </button>
          <button className="hk-lb-nav hk-lb-next"
            onClick={e => { e.stopPropagation(); setLbIndex(i => (i! + 1) % hackathonImages.length); }}>
            ›
          </button>
          <div className="hk-lb-counter">{lbIndex + 1} / {hackathonImages.length}</div>
        </div>
      )}
    </>
  );
};

export default Hackathons;

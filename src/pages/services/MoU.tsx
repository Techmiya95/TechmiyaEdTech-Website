import { useEffect, useRef, useState } from "react";
import { SEOHead } from "@/components/SEOHead";

// All MoU images from /public/MoU
const mouImages = [
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.45.jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.46 (1).jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.46 (2).jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.46.jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.47 (1).jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.47.jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.48 (1).jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.48 (2).jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.48.jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.49 (1).jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.49.jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.50 (1).jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.50.jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.51 (1).jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.51.jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.52 (1).jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.52.jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.53 (1).jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.53 (2).jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.53.jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.54 (1).jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.54 (2).jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.54.jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.55 (1).jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.55.jpeg",
  "/MoU/WhatsApp Image 2026-03-20 at 16.14.57.jpeg",
];

const css = `
  /* ===== HERO ===== */
  .mou-hero {
    background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 40%, #0c4a6e 100%);
    position: relative;
    overflow: hidden;
    padding: 90px 24px 110px;
    text-align: center;
  }
  .mou-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 15% 50%, rgba(14,165,233,0.25) 0%, transparent 55%),
      radial-gradient(ellipse at 85% 20%, rgba(99,102,241,0.2) 0%, transparent 50%),
      radial-gradient(ellipse at 50% 85%, rgba(168,85,247,0.15) 0%, transparent 50%);
    pointer-events: none;
  }
  .mou-hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(251,191,36,0.12);
    border: 1px solid rgba(251,191,36,0.35);
    color: #fbbf24;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    text-transform: uppercase;
    padding: 7px 20px;
    border-radius: 999px;
    margin-bottom: 24px;
  }
  .mou-hero-title {
    font-size: clamp(2rem, 5vw, 3.6rem);
    font-weight: 900;
    color: #fff;
    line-height: 1.15;
    margin-bottom: 20px;
  }
  .mou-hero-title span {
    background: linear-gradient(90deg, #38bdf8, #818cf8);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .mou-hero-sub {
    font-size: 1.08rem;
    color: rgba(255,255,255,0.72);
    max-width: 620px;
    margin: 0 auto 44px;
    line-height: 1.7;
  }
  .mou-stats {
    display: flex;
    justify-content: center;
    gap: 24px;
    flex-wrap: wrap;
  }
  .mou-stat {
    background: rgba(255,255,255,0.07);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255,255,255,0.14);
    border-radius: 18px;
    padding: 18px 30px;
    min-width: 130px;
    text-align: center;
    transition: transform 0.3s ease, background 0.3s ease;
  }
  .mou-stat:hover {
    background: rgba(255,255,255,0.11);
    transform: translateY(-4px);
  }
  .mou-stat-num { font-size: 1.8rem; font-weight: 900; color: #38bdf8; }
  .mou-stat-lbl { font-size: 0.77rem; color: rgba(255,255,255,0.6); margin-top: 5px; letter-spacing: 0.06em; }

  /* Floating blobs */
  .mou-blob {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    animation: mou-drift 8s ease-in-out infinite;
  }
  .mou-blob-1 { width: 300px; height: 300px; top: -80px; left: -80px; background: radial-gradient(circle, rgba(56,189,248,0.12), transparent 70%); }
  .mou-blob-2 { width: 240px; height: 240px; bottom: -60px; right: -60px; background: radial-gradient(circle, rgba(129,140,248,0.12), transparent 70%); animation-delay: -4s; }
  @keyframes mou-drift {
    0%, 100% { transform: translate(0, 0); }
    50% { transform: translate(20px, -20px); }
  }

  /* ===== GALLERY SECTION ===== */
  .mou-section {
    background: linear-gradient(180deg, #f0f9ff 0%, #e0f2fe 30%, #f5f3ff 70%, #faf5ff 100%);
    padding: 72px 24px 100px;
  }
  .mou-header { text-align: center; margin-bottom: 60px; }
  .mou-header h2 {
    font-size: clamp(1.7rem, 3.5vw, 2.7rem);
    font-weight: 800;
    color: #0c4a6e;
    margin-bottom: 12px;
    line-height: 1.25;
  }
  .mou-header h2 span {
    background: linear-gradient(90deg, #0ea5e9, #6366f1);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .mou-header p { color: #64748b; font-size: 1.02rem; max-width: 580px; margin: 0 auto; line-height: 1.65; }
  .mou-divider {
    width: 80px; height: 5px;
    background: linear-gradient(90deg, #0ea5e9, #6366f1);
    border-radius: 99px;
    margin: 18px auto 0;
  }

  /* ===== MASONRY / GRID ===== */
  .mou-grid {
    columns: 4;
    column-gap: 20px;
    max-width: 1400px;
    margin: 0 auto;
  }
  @media (max-width: 1100px) { .mou-grid { columns: 3; } }
  @media (max-width: 700px)  { .mou-grid { columns: 2; column-gap: 14px; } }
  @media (max-width: 480px)  { .mou-grid { columns: 1; } }

  /* ===== CARD ===== */
  .mou-card {
    break-inside: avoid;
    margin-bottom: 20px;
    border-radius: 18px;
    overflow: hidden;
    position: relative;
    box-shadow: 0 6px 24px rgba(14,165,233,0.12), 0 2px 6px rgba(0,0,0,0.06);
    cursor: pointer;
    opacity: 0;
    transform: translateY(30px) scale(0.97);
    transition:
      opacity 0.5s ease,
      transform 0.5s ease,
      box-shadow 0.4s ease;
    background: #fff;
  }
  .mou-card.visible {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  .mou-card:hover {
    box-shadow: 0 20px 50px rgba(14,165,233,0.25), 0 6px 20px rgba(0,0,0,0.09);
    transform: translateY(-6px) scale(1.02);
  }
  .mou-card img {
    width: 100%;
    display: block;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  .mou-card:hover img { transform: scale(1.06); }
  .mou-card-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(12,74,110,0.75) 0%, transparent 60%);
    opacity: 0;
    transition: opacity 0.4s ease;
    display: flex;
    align-items: flex-end;
    padding: 18px;
  }
  .mou-card:hover .mou-card-overlay { opacity: 1; }
  .mou-card-label {
    color: #fff;
    font-size: 0.82rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .mou-card-badge {
    position: absolute;
    top: 12px;
    right: 12px;
    background: linear-gradient(135deg, #0ea5e9, #6366f1);
    color: #fff;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 4px 10px;
    border-radius: 999px;
    box-shadow: 0 2px 8px rgba(14,165,233,0.4);
  }

  /* ===== LIGHTBOX ===== */
  .mou-lightbox {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.92);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px;
    animation: mou-lb-in 0.25s ease;
  }
  @keyframes mou-lb-in {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  .mou-lb-img {
    max-width: min(90vw, 900px);
    max-height: 85vh;
    border-radius: 16px;
    box-shadow: 0 40px 80px rgba(0,0,0,0.6);
    object-fit: contain;
    animation: mou-lb-zoom 0.3s cubic-bezier(.34,1.56,.64,1);
  }
  @keyframes mou-lb-zoom {
    from { transform: scale(0.88); }
    to   { transform: scale(1); }
  }
  .mou-lb-close {
    position: fixed;
    top: 20px; right: 24px;
    background: rgba(255,255,255,0.12);
    border: none;
    color: #fff;
    font-size: 1.6rem;
    width: 44px; height: 44px;
    border-radius: 50%;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s;
  }
  .mou-lb-close:hover { background: rgba(255,255,255,0.22); }
  .mou-lb-nav {
    position: fixed;
    top: 50%; transform: translateY(-50%);
    background: rgba(255,255,255,0.12);
    border: none; color: #fff;
    font-size: 1.6rem;
    width: 48px; height: 48px;
    border-radius: 50%;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: background 0.2s;
    z-index: 10000;
  }
  .mou-lb-nav:hover { background: rgba(255,255,255,0.22); }
  .mou-lb-prev { left: 16px; }
  .mou-lb-next { right: 16px; }
  .mou-lb-counter {
    position: fixed;
    bottom: 24px; left: 50%; transform: translateX(-50%);
    color: rgba(255,255,255,0.7);
    font-size: 0.85rem;
    font-weight: 600;
    background: rgba(0,0,0,0.4);
    padding: 5px 14px;
    border-radius: 999px;
  }

  /* ===== MARQUEE STRIP ===== */
  .mou-marquee-wrap {
    background: linear-gradient(90deg, #0ea5e9, #6366f1);
    padding: 14px 0;
    overflow: hidden;
    white-space: nowrap;
  }
  .mou-marquee {
    display: inline-block;
    animation: mou-scroll 28s linear infinite;
  }
  .mou-marquee span {
    color: #fff;
    font-size: 0.85rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    padding: 0 28px;
    opacity: 0.9;
  }
  .mou-marquee span::before { content: '🏫 '; }
  @keyframes mou-scroll {
    from { transform: translateX(0); }
    to   { transform: translateX(-50%); }
  }

  @media (max-width: 640px) {
    .mou-hero { padding: 60px 16px 80px; }
    .mou-stats { gap: 12px; }
    .mou-stat { padding: 14px 20px; }
  }
`;

const marqueeText = [
  "Jain University", "REVA University", "BMS College of Engineering", "Dayananda Sagar University",
  "PESIT College", "RVCE", "MSRIT", "Garden City University", "CMR University", "NITTE University",
  "SJES College", "Presidency University", "St. Joseph's University", "Acharya Institute", "JSS Academy",
];

// Individual Gallery Card with IntersectionObserver
const MoUCard = ({
  src,
  index,
  onClick,
}: {
  src: string;
  index: number;
  onClick: () => void;
}) => {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.06 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`mou-card${visible ? " visible" : ""}`}
      style={{ transitionDelay: `${(index % 8) * 60}ms` }}
      onClick={onClick}
    >
      <span className="mou-card-badge">MoU</span>
      <img
        src={src}
        alt={`Techmiya EdTech MoU ${index + 1}`}
        loading="lazy"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <div className="mou-card-overlay">
        <span className="mou-card-label">
          <span>🔍</span>
          <span>Click to view</span>
        </span>
      </div>
    </div>
  );
};

const MoU = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i! + 1) % mouImages.length);
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i! - 1 + mouImages.length) % mouImages.length);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex]);

  return (
    <>
      <SEOHead
        title="MoU & College Partnerships – Techmiya EdTech"
        description="Techmiya EdTech has successfully partnered with many colleges and institutions across India under MoU agreements to bridge the gap between academia and industry."
        keywords="Techmiya MoU, college partnerships, institution collaborations, EdTech MoU Bangalore, academic partnerships"
        canonicalUrl="/services/mou"
      />

      <style>{css}</style>

      {/* ===== HERO ===== */}
      <section className="mou-hero">
        <div className="mou-blob mou-blob-1" />
        <div className="mou-blob mou-blob-2" />

        <div className="relative z-10">
          <div className="mou-hero-tag">🤝 MoU Partnerships</div>
          <h1 className="mou-hero-title">
            Bridging Academia &<br />
            <span>Industry Together</span>
          </h1>
          <p className="mou-hero-sub">
            Techmiya EdTech has successfully partnered with many colleges and institutions
            across India, signing Memorandums of Understanding (MoU) to create a seamless
            bridge between academic learning and real-world industry requirements.
          </p>
          <div className="mou-stats">
            <div className="mou-stat">
              <div className="mou-stat-num">25+</div>
              <div className="mou-stat-lbl">Colleges & Institutions</div>
            </div>
            <div className="mou-stat">
              <div className="mou-stat-num">100%</div>
              <div className="mou-stat-lbl">Industry-Aligned</div>
            </div>
            <div className="mou-stat">
              <div className="mou-stat-num">5+</div>
              <div className="mou-stat-lbl">Years Experience</div>
            </div>
            <div className="mou-stat">
              <div className="mou-stat-num">5000+</div>
              <div className="mou-stat-lbl">Students Impacted</div>
            </div>
          </div>
        </div>
      </section>

      {/* Wavy divider */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 60"
        className="block -mt-[2px] bg-[#0c4a6e]"
      >
        <path fill="#f0f9ff" d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
      </svg>

      {/* ===== MARQUEE STRIP ===== */}
      <div className="mou-marquee-wrap">
        <div className="mou-marquee">
          {[...marqueeText, ...marqueeText].map((name, i) => (
            <span key={i}>{name}</span>
          ))}
        </div>
      </div>

      {/* ===== GALLERY ===== */}
      <section className="mou-section">
        <div className="mou-header">
          <h2>
            Our MoU <span>Partnership Gallery</span>
          </h2>
          <p>
            A proud record of official MoU signings between Techmiya EdTech and leading
            colleges &amp; institutions — empowering students with industry-ready skills and
            placement opportunities.
          </p>
          <div className="mou-divider" />
        </div>

        <div className="mou-grid">
          {mouImages.map((src, index) => (
            <MoUCard
              key={index}
              src={src}
              index={index}
              onClick={() => setLightboxIndex(index)}
            />
          ))}
        </div>
      </section>

      {/* ===== LIGHTBOX ===== */}
      {lightboxIndex !== null && (
        <div
          className="mou-lightbox"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Prevent click inside from closing */}
          <img
            src={mouImages[lightboxIndex]}
            alt={`MoU ${lightboxIndex + 1}`}
            className="mou-lb-img"
            onClick={(e) => e.stopPropagation()}
          />
          <button className="mou-lb-close" onClick={() => setLightboxIndex(null)}>✕</button>
          <button
            className="mou-lb-nav mou-lb-prev"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i! - 1 + mouImages.length) % mouImages.length);
            }}
          >
            ‹
          </button>
          <button
            className="mou-lb-nav mou-lb-next"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i! + 1) % mouImages.length);
            }}
          >
            ›
          </button>
          <div className="mou-lb-counter">
            {lightboxIndex + 1} / {mouImages.length}
          </div>
        </div>
      )}
    </>
  );
};

export default MoU;

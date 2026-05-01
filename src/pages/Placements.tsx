import { useEffect, useRef, useState } from "react";
import { SEOHead } from "@/components/SEOHead";

// Utility to get a seeded pseudo-random number (for consistent values per student)
const seededRandom = (seed: number) => {
  const x = Math.sin(seed + 1) * 10000;
  return x - Math.floor(x);
};

const bangaloreStartups = [
  { name: "Swiggy",             domain: "swiggy.com" },
  { name: "Unacademy",          domain: "unacademy.com" },
  { name: "Razorpay",           domain: "razorpay.com" },
  { name: "CRED",               domain: "cred.club" },
  { name: "Meesho",             domain: "meesho.com" },
  { name: "Groww",              domain: "groww.in" },
  { name: "Navi Technologies",  domain: "navi.com" },
  { name: "Cure.fit",           domain: "cult.fit" },
  { name: "Zostel",             domain: "zostel.com" },
  { name: "Dunzo",              domain: "dunzo.com" },
  { name: "Khatabook",          domain: "khatabook.com" },
  { name: "BrowserStack",       domain: "browserstack.com" },
  { name: "Chargebee",          domain: "chargebee.com" },
  { name: "Springworks",        domain: "springworks.in" },
  { name: "Slintel",            domain: "slintel.com" },
  { name: "Hiver",              domain: "hiverhq.com" },
  { name: "LearnApp",           domain: "learnapp.com" },
  { name: "Xoxoday",            domain: "xoxoday.com" },
  { name: "Postman",            domain: "postman.com" },
  { name: "Simplilearn",        domain: "simplilearn.com" },
  { name: "Quizizz",            domain: "quizizz.com" },
  { name: "Darwinbox",          domain: "darwinbox.com" },
  { name: "Healthplix",         domain: "healthplix.com" },
  { name: "Vyapar",             domain: "vyaparapp.in" },
  { name: "Haptik",             domain: "haptik.ai" },
  { name: "IndiaMart",          domain: "indiamart.com" },
  { name: "Clari5",             domain: "clari5.com" },
  { name: "Bugworks",           domain: "bugworks.com" },
  { name: "Locus",              domain: "locus.sh" },
  { name: "Ather Energy",       domain: "atherenergy.com" },
];

// All 50 students from the placements directory
const students = [
  { name: "Abdul", image: "/placements/Abdul.jpg" },
  { name: "Abhilash", image: "/placements/Abhilash.avif" },
  { name: "Aiswarya M K", image: "/placements/Aiswarya-M-K.png" },
  { name: "Ankita", image: "/placements/Ankita.webp" },
  { name: "Asif", image: "/placements/Asif.jpg" },
  { name: "Derek", image: "/placements/Derek.jpeg" },
  { name: "Dheeraj M", image: "/placements/Dheeraj M.jpg" },
  { name: "Divakar", image: "/placements/Divakar.jpg" },
  { name: "Faizan", image: "/placements/Faizan.jpg" },
  { name: "Gayathri", image: "/placements/Gayathri.jpg" },
  { name: "Jeevan", image: "/placements/Jeevan.webp" },
  { name: "Joswin", image: "/placements/Joswin.jpg" },
  { name: "Kaveri", image: "/placements/Kaveri.jpg" },
  { name: "Khomal", image: "/placements/Khomal.webp" },
  { name: "Khusar Zuvaria", image: "/placements/Khusar Zuvaria.jpg" },
  { name: "Kiran", image: "/placements/Kiran.jpg" },
  { name: "Mahesh", image: "/placements/Mahesh.jpg" },
  { name: "Maiyur", image: "/placements/Maiyur.jpg" },
  { name: "Md Shayaan", image: "/placements/Md Shayaan.jpg" },
  { name: "Najaraj", image: "/placements/Najaraj.jpg" },
  { name: "Payal", image: "/placements/Payal.jpg" },
  { name: "Prajwal", image: "/placements/Prajwal.jpg" },
  { name: "Prakash", image: "/placements/Prakash.jpg" },
  { name: "Prasad", image: "/placements/Prasad.jpg" },
  { name: "Rafiq Ahmed", image: "/placements/Rafiq Ahmed.jpeg" },
  { name: "Rakib Rehman", image: "/placements/Rakib Rehman.jpg" },
  { name: "Ram", image: "/placements/Ram.jpg" },
  { name: "Reshmi", image: "/placements/Reshmi.jpg" },
  { name: "Rinshad C", image: "/placements/Rinshad C.jpg" },
  { name: "Rohan S", image: "/placements/Rohan S.jpg" },
  { name: "Sajitha Siril", image: "/placements/Sajitha-Siril.webp" },
  { name: "Sanjay", image: "/placements/Sanjay.jpg" },
  { name: "Shrija Tiwari", image: "/placements/Shrija Tiwari.jpg" },
  { name: "Sneha", image: "/placements/Sneha.jpg" },
  { name: "Susmitha", image: "/placements/Susmitha.jpg" },
  { name: "Vaibhavi Sawant", image: "/placements/Vaibhavi_Sawant.jpg" },
  { name: "Vivek", image: "/placements/Vivek.jpg" },
  { name: "Xavier Fernandes", image: "/placements/Xaiver Fernandes.jpg" },
  { name: "Akhilesh", image: "/placements/akhilesh.jpg" },
  { name: "Arjun", image: "/placements/Arjun.jpeg" },
  { name: "Chethan", image: "/placements/Chethan.jpeg" },
  { name: "Chitra", image: "/placements/Chitra.jpeg" },
  { name: "Deepak", image: "/placements/deepak.jpg" },
  { name: "Deepika", image: "/placements/deepika.jpg" },
  { name: "Fariq", image: "/placements/fariq.avif" },
  { name: "Gourish", image: "/placements/Gourish.jpeg" },
  { name: "Rajeshwari", image: "/placements/rajeshwari.jpg" },
  { name: "Rakshitha", image: "/placements/rakshitha.jpg" },
  { name: "Ramesh", image: "/placements/ramesh.jpg" },
  { name: "Rashid", image: "/placements/Rashid.jpeg" },
  { name: "Sandeep", image: "/placements/sandeep.jpg" },
  { name: "Saqib", image: "/placements/saqib.webp" },
  { name: "Shankar", image: "/placements/shankar.webp" },
  { name: "Sharan", image: "/placements/Sharan.jpeg" },
  { name: "Summit", image: "/placements/Summit.jpeg" },
  { name: "Udham", image: "/placements/udham.jpg" },
];

// Assign consistent CTC and company per student using seeded random
const placementData = students.map((student, index) => {
  const rnd1 = seededRandom(index * 3 + 7);
  const rnd2 = seededRandom(index * 5 + 13);
  const ctcSteps = Math.floor(rnd1 * 11);
  const ctc = (3 + ctcSteps * 0.5).toFixed(1);
  const companyIndex = Math.floor(rnd2 * bangaloreStartups.length);
  return {
    ...student,
    ctc,
    company: bangaloreStartups[companyIndex].name,
    companyDomain: bangaloreStartups[companyIndex].domain,
  };
});

const css = `
  /* ===== HERO ===== */
  .pl-hero {
    background: linear-gradient(135deg, #1e1b4b 0%, #312e81 40%, #1e40af 100%);
    position: relative;
    overflow: hidden;
    padding: 80px 24px 100px;
    text-align: center;
  }
  .pl-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 20% 50%, rgba(99,102,241,0.3) 0%, transparent 60%),
      radial-gradient(ellipse at 80% 20%, rgba(168,85,247,0.25) 0%, transparent 50%);
    pointer-events: none;
  }
  .pl-hero-tag {
    display: inline-block;
    background: rgba(251,191,36,0.15);
    border: 1px solid rgba(251,191,36,0.4);
    color: #fbbf24;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    padding: 6px 18px;
    border-radius: 999px;
    margin-bottom: 20px;
  }
  .pl-hero-title {
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 900;
    color: #fff;
    line-height: 1.15;
    margin-bottom: 16px;
  }
  .pl-hero-title span {
    background: linear-gradient(90deg, #fbbf24, #f97316);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .pl-hero-sub {
    font-size: 1.05rem;
    color: rgba(255,255,255,0.75);
    max-width: 560px;
    margin: 0 auto 36px;
    line-height: 1.6;
  }
  .pl-stats {
    display: flex;
    justify-content: center;
    gap: 28px;
    flex-wrap: wrap;
  }
  .pl-stat {
    background: rgba(255,255,255,0.08);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255,255,255,0.15);
    border-radius: 16px;
    padding: 18px 28px;
    min-width: 120px;
    text-align: center;
  }
  .pl-stat-num { font-size: 1.75rem; font-weight: 800; color: #fbbf24; }
  .pl-stat-lbl { font-size: 0.78rem; color: rgba(255,255,255,0.65); margin-top: 4px; letter-spacing: 0.05em; }

  /* ===== GALLERY ===== */
  .pl-section {
    background: linear-gradient(180deg, #f5f3ff 0%, #ede9fe 40%, #f0f9ff 100%);
    padding: 64px 24px 100px;
  }
  .pl-header { text-align: center; margin-bottom: 56px; }
  .pl-header h2 {
    font-size: clamp(1.6rem, 3.5vw, 2.6rem);
    font-weight: 800;
    color: #1e1b4b;
    margin-bottom: 10px;
  }
  .pl-header h2 span {
    background: linear-gradient(90deg, #7c3aed, #2563eb);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
  .pl-header p { color: #6b7280; font-size: 1rem; max-width: 520px; margin: 0 auto; }
  .pl-divider {
    width: 72px; height: 5px;
    background: linear-gradient(90deg, #7c3aed, #2563eb);
    border-radius: 99px;
    margin: 16px auto 0;
  }

  /* ===== GRID ===== */
  .pl-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    gap: 32px;
    max-width: 1400px;
    margin: 0 auto;
  }

  /* ===== CARD POSTER ===== */
  .pl-card {
    position: relative;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 8px 28px rgba(79,70,229,0.14), 0 2px 8px rgba(0,0,0,0.07);
    transition:
      transform 0.42s cubic-bezier(.34,1.56,.64,1),
      box-shadow 0.4s ease,
      opacity 0.55s ease;
    opacity: 0;
    transform: translateY(40px);
    cursor: default;
    background: #fff;
  }
  .pl-card.visible {
    opacity: 1;
    transform: translateY(0);
  }
  .pl-card:hover {
    transform: translateY(-12px) scale(1.03);
    box-shadow: 0 32px 64px rgba(79,70,229,0.3), 0 8px 24px rgba(0,0,0,0.1);
  }

  /* Top banner */
  .pl-card-top {
    position: relative;
    background: linear-gradient(140deg, #4338ca 0%, #6d28d9 45%, #1d4ed8 100%);
    padding: 28px 20px 70px;
    overflow: hidden;
    text-align: center;
  }
  .pl-card-top::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 25% 10%, rgba(255,255,255,0.2) 0%, transparent 55%),
      radial-gradient(ellipse at 75% 90%, rgba(0,0,0,0.2) 0%, transparent 50%);
    pointer-events: none;
  }
  .pl-blob1 {
    position: absolute;
    width: 120px; height: 120px;
    border-radius: 50%;
    background: rgba(255,255,255,0.07);
    top: -40px; left: -28px;
    pointer-events: none;
  }
  .pl-blob2 {
    position: absolute;
    width: 180px; height: 180px;
    border-radius: 50%;
    background: rgba(255,255,255,0.05);
    bottom: -60px; right: -50px;
    pointer-events: none;
  }

  /* Congratulations badge */
  .pl-badge {
    position: relative;
    z-index: 3;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: linear-gradient(135deg, #fbbf24, #f97316);
    color: #fff;
    font-size: 0.73rem;
    font-weight: 800;
    padding: 5px 15px;
    border-radius: 999px;
    letter-spacing: 0.06em;
    box-shadow: 0 4px 14px rgba(249,115,22,0.5);
    margin-bottom: 20px;
    animation: pl-badge-glow 2.5s ease-in-out infinite;
  }
  @keyframes pl-badge-glow {
    0%, 100% { box-shadow: 0 4px 14px rgba(249,115,22,0.5); }
    50% { box-shadow: 0 4px 28px rgba(249,115,22,0.85); }
  }

  /* Photo */
  .pl-photo-wrap {
    position: relative;
    width: 124px;
    height: 124px;
    margin: 0 auto;
    z-index: 3;
  }
  .pl-photo-glow {
    position: absolute;
    inset: -16px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 68%);
    z-index: 0;
  }
  .pl-photo-ring {
    position: absolute;
    inset: -5px;
    border-radius: 50%;
    background: conic-gradient(#fbbf24 0deg, #f97316 60deg, #ec4899 120deg, #7c3aed 180deg, #2563eb 240deg, #06b6d4 300deg, #fbbf24 360deg);
    z-index: 1;
    animation: pl-spin 8s linear infinite;
  }
  @keyframes pl-spin { to { transform: rotate(360deg); } }
  .pl-photo {
    width: 124px;
    height: 124px;
    border-radius: 50%;
    object-fit: cover;
    object-position: top;
    position: relative;
    z-index: 2;
    border: 4px solid #fff;
  }

  /* Body */
  .pl-card-body {
    position: relative;
    background: #fff;
    margin-top: -44px;
    padding: 52px 22px 26px;
    border-radius: 0 0 24px 24px;
    text-align: center;
  }
  .pl-card-body::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 44px;
    background: #fff;
    border-radius: 50% 50% 0 0 / 44px 44px 0 0;
  }

  /* Name */
  .pl-name {
    font-size: 1.15rem;
    font-weight: 800;
    color: #1e1b4b;
    margin-bottom: 6px;
    line-height: 1.25;
  }

  /* Role pill */
  .pl-role {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 600;
    color: #6d28d9;
    background: #f3f0ff;
    border: 1px solid #ddd6fe;
    padding: 3px 12px;
    border-radius: 999px;
    margin-bottom: 16px;
    letter-spacing: 0.04em;
  }

  /* Company row */
  .pl-company {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;
    background: #f8fafc;
    border: 1.5px solid #e2e8f0;
    border-radius: 12px;
    padding: 9px 16px;
    margin-bottom: 14px;
    font-size: 0.88rem;
    font-weight: 600;
    color: #1e293b;
  }
  .pl-company-logo {
    width: 22px;
    height: 22px;
    object-fit: contain;
    border-radius: 4px;
    flex-shrink: 0;
  }

  /* CTC chip */
  .pl-ctc {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: linear-gradient(135deg, #d1fae5, #a7f3d0);
    border: 1.5px solid #34d399;
    border-radius: 14px;
    padding: 11px 22px;
  }
  .pl-ctc-lbl {
    font-size: 0.68rem;
    font-weight: 700;
    color: #065f46;
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }
  .pl-ctc-sep { width: 1px; height: 16px; background: #34d399; border-radius: 99px; }
  .pl-ctc-val { font-size: 1.1rem; font-weight: 900; color: #047857; }

  /* Floating confetti inside top banner */
  .pl-confetti { position: absolute; inset: 0; pointer-events: none; z-index: 2; overflow: hidden; }
  .pl-conf {
    position: absolute;
    font-size: 1.05rem;
    opacity: 0.6;
    animation: pl-float 4s ease-in-out infinite;
  }
  @keyframes pl-float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-8px) rotate(18deg); }
  }
  .pl-conf-1 { top: 8px; left: 10px; animation-delay: 0s; }
  .pl-conf-2 { top: 10px; right: 12px; animation-delay: 0.7s; }
  .pl-conf-3 { bottom: 72px; left: 12px; animation-delay: 1.4s; }
  .pl-conf-4 { bottom: 76px; right: 12px; animation-delay: 2.1s; }

  /* Responsive */
  @media (max-width: 640px) {
    .pl-hero { padding: 56px 16px 80px; }
    .pl-stats { gap: 14px; }
    .pl-grid { grid-template-columns: repeat(auto-fill, minmax(190px, 1fr)); gap: 18px; }
    .pl-photo-wrap, .pl-photo { width: 96px; height: 96px; }
  }
`;

// Individual placement card
const PlacementCard = ({
  student,
  index,
}: {
  student: (typeof placementData)[number];
  index: number;
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
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`pl-card${visible ? " visible" : ""}`}
      style={{ transitionDelay: `${(index % 6) * 70}ms` }}
    >
      {/* Top gradient banner */}
      <div className="pl-card-top">
        <div className="pl-blob1" />
        <div className="pl-blob2" />

        {/* Floating confetti */}
        <div className="pl-confetti">
          <span className="pl-conf pl-conf-1">🌟</span>
          <span className="pl-conf pl-conf-2">🎊</span>
          <span className="pl-conf pl-conf-3">✨</span>
          <span className="pl-conf pl-conf-4">🎉</span>
        </div>

        {/* Badge */}
        <div className="pl-badge">🎉 Congratulations!</div>

        {/* Photo */}
        <div className="pl-photo-wrap">
          <div className="pl-photo-glow" />
          <div className="pl-photo-ring" />
          <img
            src={student.image}
            alt={student.name}
            className="pl-photo"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = "/placeholder.svg";
            }}
          />
        </div>
      </div>

      {/* White body */}
      <div className="pl-card-body">
        <h3 className="pl-name">{student.name}</h3>
        <span className="pl-role">🎓 Placed Graduate</span>

        <div className="pl-company">
          <img
            src={`https://logo.clearbit.com/${student.companyDomain}`}
            alt={student.company}
            className="pl-company-logo"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = "none";
              const fb = e.currentTarget.nextElementSibling as HTMLElement | null;
              if (fb) fb.style.display = "inline";
            }}
          />
          <span className="pl-company-fallback" style={{ display: "none" }}>🏢</span>
          <span>{student.company}</span>
        </div>

        <div className="pl-ctc">
          <span className="pl-ctc-lbl">Package</span>
          <span className="pl-ctc-sep" />
          <span className="pl-ctc-val">{student.ctc} LPA</span>
        </div>
      </div>
    </div>
  );
};

const Placements = () => {
  return (
    <>
      <SEOHead
        title="Student Placements – Techmiya EdTech | Placement Gallery"
        description="Explore our student placement success stories. Techmiya EdTech students placed in top Bangalore startups with packages ranging from 3 LPA to 8 LPA."
        keywords="Techmiya placements, EdTech placements Bangalore, software jobs Bangalore startups, placement success stories"
        canonicalUrl="/placements"
      />

      <style>{css}</style>

      {/* ===== HERO ===== */}
      <section className="pl-hero">
        <div className="pl-hero-tag">🏆 Placement Gallery</div>
        <h1 className="pl-hero-title">
          Our Students Are Getting<br />
          <span>Placed in Top Companies</span>
        </h1>
        <p className="pl-hero-sub">
          Proud to present the placement success stories of Techmiya EdTech students—
          joining the best startups in Bangalore with competitive packages.
        </p>
        <div className="pl-stats">
          <div className="pl-stat">
            <div className="pl-stat-num">55+</div>
            <div className="pl-stat-lbl">Students Placed</div>
          </div>
          <div className="pl-stat">
            <div className="pl-stat-num">3–8 LPA</div>
            <div className="pl-stat-lbl">CTC Range</div>
          </div>
          <div className="pl-stat">
            <div className="pl-stat-num">30+</div>
            <div className="pl-stat-lbl">Partner Companies</div>
          </div>
          <div className="pl-stat">
            <div className="pl-stat-num">100%</div>
            <div className="pl-stat-lbl">Placement Support</div>
          </div>
        </div>
      </section>

      {/* Wavy divider */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 60"
        style={{ display: "block", marginTop: "-2px", background: "#1e40af" }}
      >
        <path fill="#f5f3ff" d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" />
      </svg>

      {/* ===== GALLERY ===== */}
      <section className="pl-section">
        <div className="pl-header">
          <h2>
            Placement Gallery of <span>Techmiya EdTech Students</span>
          </h2>
          <p>
            Every face here represents hard work, dedication, and a transformed career.
            Congratulations to each and every one of you! 🎓
          </p>
          <div className="pl-divider" />
        </div>

        <div className="pl-grid">
          {placementData.map((student, index) => (
            <PlacementCard key={student.name} student={student} index={index} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Placements;

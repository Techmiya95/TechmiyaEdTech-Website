"use client";

import React from "react";

const RecruitmentPartners = () => {
  const partners = [
    // Big Tech & IT
    { name: "Google", domain: "google.com", color: "#4285F4" },
    { name: "Amazon", domain: "amazon.com", color: "#FF9900" },
    { name: "Microsoft", domain: "microsoft.com", color: "#00A4EF" },
    { name: "IBM", domain: "ibm.com", color: "#1F70C1" },
    { name: "Infosys", domain: "infosys.com", color: "#007CC3" },
    { name: "TCS", domain: "tcs.com", color: "#E2001A" },
    { name: "Accenture", domain: "accenture.com", color: "#A100FF" },
    { name: "Wipro", domain: "wipro.com", color: "#0A1F6B" },
    { name: "HCL", domain: "hcltech.com", color: "#0064C1" },
    { name: "Cognizant", domain: "cognizant.com", color: "#1A5091" },
    { name: "Capgemini", domain: "capgemini.com", color: "#0070AD" },
    { name: "Freshworks", domain: "freshworks.com", color: "#25C16F" },
    // Startups
    { name: "Swiggy", domain: "swiggy.com", color: "#FC8019" },
    { name: "Razorpay", domain: "razorpay.com", color: "#3395FF" },
    { name: "Unacademy", domain: "unacademy.com", color: "#08BD80" },
    { name: "CRED", domain: "cred.club", color: "#1C1C1C" },
    { name: "Meesho", domain: "meesho.com", color: "#9F2089" },
    { name: "Groww", domain: "groww.in", color: "#5367FF" },
    { name: "BrowserStack", domain: "browserstack.com", color: "#FF6600" },
    { name: "Postman", domain: "postman.com", color: "#FF6C37" },
    { name: "Simplilearn", domain: "simplilearn.com", color: "#2DC5A2" },
    { name: "Darwinbox", domain: "darwinbox.com", color: "#FF5733" },
    { name: "Chargebee", domain: "chargebee.com", color: "#F97316" },
    { name: "IndiaMart", domain: "indiamart.com", color: "#E32020" },
    { name: "Ather Energy", domain: "atherenergy.com", color: "#2DCA8C" },
    { name: "Dunzo", domain: "dunzo.com", color: "#00CB68" },
    { name: "Quizizz", domain: "quizizz.com", color: "#8854D0" },
    { name: "Haptik", domain: "haptik.ai", color: "#4A90D9" },
    { name: "Vyapar", domain: "vyaparapp.in", color: "#1F8C3B" },
    { name: "Khatabook", domain: "khatabook.com", color: "#E73C3E" },
  ];

  const strip = (
    <div className="flex items-stretch gap-4 whitespace-nowrap py-2">
      {partners.map((p) => (
        <div
          key={p.name}
          className="flex-shrink-0 flex flex-col items-center justify-center gap-2 bg-white rounded-2xl px-4 py-3 shadow-md min-w-[90px] hover:scale-105 hover:shadow-lg transition-all duration-300"
        >
          <img
            src={`https://www.google.com/s2/favicons?domain=${p.domain}&sz=128`}
            alt={p.name}
            className="w-9 h-9 object-contain rounded"
            onError={(e) => {
              const img = e.currentTarget as HTMLImageElement;
              img.classList.add("hidden");
              const badge = img.nextElementSibling as HTMLElement | null;
              if (badge) {
                badge.classList.remove("hidden");
                badge.classList.add("flex");
              }
            }}
          />
          {/* Fallback initial badge */}
          <span
            className="hidden w-9 h-9 rounded-lg items-center justify-center shrink-0 text-white font-extrabold text-sm"
            style={{ background: p.color }}
          >
            {p.name.charAt(0)}
          </span>
          <span className="text-[10px] font-bold text-gray-600 tracking-wide text-center leading-tight max-w-[80px]">
            {p.name}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="relative bg-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-center text-blue-200 text-sm font-semibold mb-6 uppercase tracking-wider">
          🤝 Our Recruitment Partners
        </h3>
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee">{strip}</div>
          <div className="flex animate-marquee ml-4" aria-hidden="true">
            {strip}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruitmentPartners;

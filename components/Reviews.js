"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// ─── ─── Data ─── ───

const REVIEWS = [
  {
    name: "isaacsolomon777",
    image: "/images/reviews/isaacsolomon777.webp",
    quote: "A great experience working with Sohail again, the project details were delivered exactly as requested. I highly recommend these services to anyone serious about building a reputable site or product for themselves or their business. Thank you!",
    source: "Fiverr",
  },
  {
    name: "nourdamerji",
    image: "/images/reviews/nourdamerji.webp",
    quote: "i'm more than happy of the work that he did, i highly recommand Sohail if you want to be sure that you will get what you want",
    source: "Fiverr",
  },
  {
    name: "ricky_alpha9",
    image: "/images/reviews/ricky_alpha9.webp",
    quote: "Fantastic! Always fast and is extremely experienced and knowledgeable!",
    source: "Upwork",
  },
  {
    name: "nonstopfor",
    image: "/images/reviews/nonstopfor.webp",
    quote: "Working with Sohail has been an INCREDIBLE experience! His code expertise and attention to detail not only met but EXCEEDED my expectations. His proactive communication and quick responsiveness made the process smooth and stress-free. 👏",
    source: "Fiverr",
  },
  {
    name: "asad_alam",
    image: "/images/reviews/asad_alam.webp",
    quote: "The best agent you can find online to get your website done. I am very happy and satisfied with the service! Highly recommended.",
    source: "Fiverr",
  },
  {
    name: "loius_past",
    image: "/images/reviews/loius_past.webp",
    quote: "Very responsive and great attention in details. Highly recommended.",
    source: "Upwork",
  },
  {
    name: "zapzteam",
    image: "/images/reviews/zapzteam.webp",
    quote: "I wanted to take a moment to express my heartfelt gratitude for the exceptional work you did on my recent project. Your dedication, attention to detail, and professionalism truly exceeded my expectations. It’s clear that you put a lot of effort into delivering high-quality results. I highly recommend this seller to anyone looking for top-notch service and outstanding results. If you’re considering hiring a freelancer, look no further this seller is the best choice! Thank you once again for your excellent work. I look forward to collaborating with you on future projects.",
    source: "Fiverr",
  },
  {
    name: "nritter1993",
    image: "/images/reviews/nritter1993.webp",
    quote: "Sohail took care of my LearnDash functionality issue and went above and beyond, helping optimize my site!! Very prompt. Everything delivered as intended! 10 out of 10!!",
    source: "Fiverr",
  },
  {
    name: "dotunogundare",
    image: "/images/reviews/dotunogundare.webp",
    quote: "Sohail is one of the best guys I have hired online. He is quite proficient in what he does. He did not only solve my problems, he identify potential problems that I wasn't aware of and helped me to save some costs. It is not easy to find such a sincere professional. Now I am happy to come back to fiverr because of my experience with Sohail.",
    source: "Fiverr",
  },
  {
    name: "mimosminutez",
    image: "/images/reviews/mimosminutez.webp",
    quote: "Attentive, makes sure your needs are met, makes the changes. Wonderful collaborator. Looking forward to more collaborations.",
    source: "Fiverr",
  },
  {
    name: "irislim307",
    image: "/images/reviews/irislim307.webp",
    quote: "Once again, thank you for your hard work and commitment to this project. We're delighted with the outcome and look forward to the opportunity of working with you again in the future. If there's anything else you need from us or if you'd like us to write a glowing review on Fiverr, please don't hesitate to ask.",
    source: "Fiverr",
  },
];

const AVTAR_CSS = `
.avatar-circle{display:flex;width:50px;background-color:#f3f3f3;height:50px;border:2px solid #a0a0a0;border-radius:50%;justify-content:center;align-items:center;overflow:hidden;margin-right:15px}
.flying-avatar-wrapper{position:relative;width:100%;min-height:35vh}
.flying{position:absolute;top:30%;left:50%;margin:12px;animation:flyingAvatar 4s linear infinite;cursor:pointer}
.flying:hover{animation:none}
.flying:nth-child(odd){right:0}
.flying:nth-child(2n){left:0}
.flying:nth-child(2){top:25px;left:15px;animation-delay:.7s;animation-duration:5s}
.flying:nth-child(4){top:45%;left:-5%;animation-delay:.9s}
.flying:nth-child(6){top:auto;bottom:50px;animation-delay:.6s;left:auto;right:50%;animation-duration:9s}
.flying:first-child{top:-25px;animation-delay:1s;animation-duration:7s}
.flying:nth-child(3){top:auto;bottom:-15%;animation-delay:.4s}
.style-right-border{border-right:2px dashed var(--primary)}
@keyframes flyingAvatar{0%{transform:rotate(0deg) translate(-10px) rotate(0deg)}to{transform:rotate(1turn) translate(-10px) rotate(-1turn)}}
.feed-back-short-row{margin:5rem 0;align-items:center;min-height:50vh;border-top:1px solid transparent}
@media screen and (max-width:768px){
.feed-back-short-row{flex-direction:column-reverse}
.flying-avatar-wrapper{margin-top:2rem}
.flying{position:absolute;top:auto;left:auto;margin:12px;animation:flyingAvatar 4s linear infinite;cursor:pointer}
.flying:hover{animation:none}
.flying:nth-child(odd){top:0}
.flying:nth-child(2n){left:0;bottom:0}
.flying:first-child{right:0;top:35px}
.flying:nth-child(3){right:40%;top:0;top:-35px;transform:translateX(-50%)}
.flying:nth-child(5){left:0}
.flying:nth-child(2){top:auto;bottom:0;left:0}
.flying:nth-child(4){top:auto;bottom:30%;left:30%;transform:translateX(-50%)}
.flying:nth-child(6){top:auto;bottom:25px;left:auto;right:10%}
}
`;

// ─── ─── Avatar face
function AvatarFace({ review, textClass = "text-base" }) {
  const [failed, setFailed] = useState(false);
  if (review.image && !failed) {
    return (
      <img
        src={review.image}
        alt={`${review.name} avatar`}
        width={50}
        height={50}
        loading="lazy"
        onError={() => setFailed(true)}
        className="h-full w-full object-cover"
      />
    );
  }
  return (
    <span className={`font-display font-bold text-[#1f1f1f] ${textClass}`}>
      {review.name.charAt(0).toUpperCase()}
    </span>
  );
}

// ─── ─── Avatar button 
function AvatarButton({ review, index, active, onSelect }) {
  const isActive = index === active;
  return (
    <button
      onClick={() => onSelect(index)}
      aria-label={`Show review by ${review.name}`}
      className={`flying h-[50px] w-[50px] rounded-full p-[2px] transition-[background-color,background-image,box-shadow] duration-300 hover:bg-[image:var(--gradient-brand)] ${
        isActive
          ? "bg-[image:var(--gradient-brand)] shadow-[0_0_20px_rgba(249,115,22,0.4)]"
          : "bg-[#a0a0a0]"
      }`}
    >
      <span className="flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[#f3f3f3]">
        <AvatarFace review={review} />
      </span>
    </button>
  );
}

// ─── ─── Main component ─── ───
export default function Reviews() {
  const [active, setActive] = useState(0);
  const review = REVIEWS[active];

  // ── Auto-rotate 5 second 
  useEffect(() => {
    const t = setInterval(() => {
      setActive((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(t);
  }, [active]);

  const leftAvatars = REVIEWS.slice(0, 6);
  const rightAvatars = REVIEWS.slice(6);

  return (
    <section id="reviews" className="relative py-24">

      <style>{AVTAR_CSS}</style>

      <div className="mx-auto max-w-6xl px-6">
        {/* ── Header ── */}
        <p className="font-mono text-xs tracking-[0.2em] text-[var(--text-muted)]">
          REVIEWS / CLIENT FEEDBACK
        </p>
        <h2 className="mt-4 font-display text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
         What <span className="text-[var(--primary)]">Clients</span> Say
        </h2>

        {/* ── Feedback row */}
        <div className="feed-back-short-row style-right-border flex flex-wrap items-center justify-center">
          <div className="w-full sm:w-1/2 md:w-1/4">
            <div className="flying-avatar-wrapper">
              {leftAvatars.map((r, i) => (
                <AvatarButton
                  key={`${r.name}-${i}`}
                  review={r}
                  index={i}
                  active={active}
                  onSelect={setActive}
                />
              ))}
            </div>
          </div>

          {/* Center testimonial */}
          <div className="w-full md:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="px-2 py-8 md:px-8"
              >
                <p className="flex items-center font-display text-xl font-bold text-[var(--primary)] md:text-2xl">
                  <span className="avatar-circle">
                    <AvatarFace review={review} textClass="text-sm md:text-base" />
                  </span>
                  {review.name}
                </p>
                <blockquote className="mt-5 text-lg leading-relaxed text-[var(--text-primary)] md:text-2xl md:leading-relaxed">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <p className="mt-6 font-mono text-xs tracking-[0.15em] text-[var(--text-muted)]">
                  
                    Posted on Fiverr
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right avatars — 5, scattered */}
          <div className="mt-12 w-full sm:w-1/2 md:mt-0 md:w-1/4">
            <div className="flying-avatar-wrapper">
              {rightAvatars.map((r, i) => (
                <AvatarButton
                  key={`${r.name}-${i + 6}`}
                  review={r}
                  index={i + 6}
                  active={active}
                  onSelect={setActive}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

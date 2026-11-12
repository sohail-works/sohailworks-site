"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// ─── ─── Data ─── ───

const REVIEWS = [
  {
    name: "citius66",
    image: "/images/reviews/citius66.jpg",
    quote: "Great as previous order. We have continuous work for him.",
    source: "Fiverr",
  },
  {
    name: "charusunthar389",
    image: "/images/reviews/charusunthar389.jpg",
    quote: "Great work!!!",
    source: "Fiverr",
  },
  {
    name: "weber85",
    image: "/images/reviews/weber85.jpg",
    quote: "very helpful and competent person. In no time he solved my problem!",
    source: "Fiverr",
  },
  {
    name: "nunomdl",
    image: "/images/reviews/nunomdl.jpg",
    quote: "great person. recommend",
    source: "Fiverr",
  },
  {
    name: "charusunthar389",
    image: "/images/reviews/charusunthar389.jpg",
    quote:
      "He knows exactly what to do and is there if you need help. He is excellent talented!!! Very happy that I chose him and not someone else. Will definitely be regular customer from now!!!",
    source: "Fiverr",
  },
  {
    name: "REPLACE",
    image: "",
    quote: "REPLACE — apni real review yahan daalo.",
    source: "Fiverr",
  },
  {
    name: "REPLACE",
    image: "",
    quote: "REPLACE — apni real review yahan daalo.",
    source: "Fiverr",
  },
  {
    name: "REPLACE",
    image: "",
    quote: "REPLACE — apni real review yahan daalo.",
    source: "Fiverr",
  },
  {
    name: "REPLACE",
    image: "",
    quote: "REPLACE — apni real review yahan daalo.",
    source: "Fiverr",
  },
  {
    name: "REPLACE",
    image: "",
    quote: "REPLACE — apni real review yahan daalo.",
    source: "Fiverr",
  },
  {
    name: "REPLACE",
    image: "",
    quote: "REPLACE — apni real review yahan daalo.",
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

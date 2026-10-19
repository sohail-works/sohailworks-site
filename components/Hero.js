"use client";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Particles } from "@/components/ui/particles";
import { Clock, Rocket, DollarSign, Star } from "lucide-react";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function Hero() {
  const cardRef = useRef(null);
  const [qty, setQty] = useState(100);

  const itemsInfo = [
    {
      label: "EXPERIENCE",
      value: "5+ Years",
    },
    {
      label: "STATUS",
      dot: true,
      value: "Available",
    },
    {
      label: "SPECIALITY",
      value: "Web Dev",
    },
    {
      label: "LOCATION",
      value: "Pakistan",
    },
  ];

  const stats = [
    {
      icon: Clock,
      value: "5+",
      label: "Years Experience",
      sub: "Since 2021",
    },
    {
      icon: Rocket,
      value: "100+",
      label: "Projects Completed",
      sub: "WordPress, GHL & React",
    },
    {
      icon: DollarSign,
      value: "$15k+",
      label: "Earned",
      sub: "Fiverr & Upwork",
    },
    {
      icon: Star,
      value: "4.8",
      suffix: "/5.0",
      label: "Client Rating",
      sub: "Verified 5-Star Reviews",
    },
  ];

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(1000px) rotateX(${-y * 12}deg) rotateY(${x * 12}deg)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform =
        "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    }
  };

  useEffect(() => {
    const update = () => {
      const newQty = window.innerWidth < 768 ? 30 : 100;
      console.log("Width:", window.innerWidth, "Qty:", newQty);
      setQty(newQty);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);
  return (
    <section id="home" className="relative overflow-hidden ">
      {/* Background layer — */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <GridPattern
          width={40}
          height={40}
          className="text-[var(--border-strong)] opacity-60 [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_80%)]"
        />
        {/* Dark mode */}
        <Particles
          className="absolute inset-0 invisible dark:visible"
          key={`dark-${qty}`}
          quantity={qty}
          color="#ffffff"
          vy={-0.5}
        />
        {/* Light mode */}
        <Particles
          className="absolute inset-0 dark:invisible"
          key={`light-${qty}`}
          quantity={qty}
          color="#0F172A"
          vy={-0.5}
        />
      </div>
      <div className="grid grid-cols-1 m-8 mt-8 md:mt-18 2xl:mt-32 items-center gap-12 text-center md:grid-cols-2 md:text-left">
        {/* ── Left column ── */}
        <div className="space-y-6 ">
          {/* Badge */}
          <div className="<div mx-auto flex w-fit items-center gap-2 md:mx-0 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="whitespace-nowrap font-mono text-[10px] md:text-xs font-medium uppercase tracking-normal md:tracking-widest text-[var(--primary)]">
              Hello, I&apos;m Sohail — Available for projects
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-center text-3xl font-normal capitalize leading-snug md:text-left md:text-6xl md:leading-tight">
            I build top websites
            <br />
            that win clients
            <br />
            <span>for you!</span>
          </h1>
          {/* Paragragh */}
          <div className="mx-auto h-[3px] w-32 rounded-full bg-gradient-brand md:mx-0"></div>
          <p className="mx-auto max-w-[600px] text-base text-[var(--text-secondary)] md:mx-0 md:text-lg">
            I help local businesses capture leads and close deals faster with{" "}
            <span className="font-medium text-[var(--text-primary)]">
              WordPress websites
            </span>{" "}
            ,{" "}
            <span className="font-medium text-[var(--text-primary)]">
              GoHighLevel funnels
            </span>{" "}
            and{" "}
            <span className="font-medium text-[var(--text-primary)]">
              automations
            </span>{" "}
            , and{" "}
            <span className="font-medium text-[var(--text-primary)]">
              React/Next.js
            </span>{" "}
            apps. With 5 years of experience and $15k+ earned as a Top Rated on
            Fiverr & upwork with proven track record, I bring both the strategy
            and the hands-on build.
          </p>

          {/* Button Wrapper */}

          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#portfolio"
              className="rounded-xl bg-[var(--secondary)] px-6 py-3 font-medium text-white transition-all hover:-translate-y-1 hover:bg-[var(--secondary-hover)]"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="rounded-xl border border-[var(--border-default)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:-translate-y-1 hover:border-[var(--primary)] hover:text-[var(--primary)] "
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* ── Right column ── */}
        <div className="relative flex items-center justify-center">
          {/* Card Glow on moving */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F97316] opacity-25 blur-3xl"
          />
          {/* ── Glass ID column ── */}
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full max-w-sm rounded-3xl border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur-xl transition-transform duration-150"
          >
            {/* ── Profile Image Card Div ── */}
            <div className="mx-auto h-28 w-28 rounded-full bg-gradient-brand p-[3px]">
              <div className="h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/images/profile.webp"
                  alt="Sohail"
                  width={400}
                  height={400}
                  priority
                  className="h-full w-full scale-[2.2] object-cover object-[50%_30%] origin-[46%_10%]"
                />
              </div>
            </div>
            {/* ── Name + Specialities ── */}
            <h3 className="font-display text-center mt-4 text-xl font-bold text-[var(--text-primary)]">
              Sohail
            </h3>

            <p className="mx-auto mt-2 w-fit whitespace-nowrap rounded-full border border-black/10 bg-black/5 px-2 md:px-3 py-1 text-center font-mono text-[10px] text-[var(--primary)] dark:border-white/10 dark:bg-white/5">
              WordPress, GHL & React Developer
            </p>

            {/* ── Info grid ── */}
            <div className="mt-6 grid grid-cols-2 gap-3 text-left">
              {itemsInfo.map((item, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-black/10 bg-black/5 p-3 dark:border-white/10 dark:bg-white/5"
                >
                  <p className="font-mono text-[9px] tracking-widest text-gray-500 dark:text-gray-400 ">
                    {item.label}
                  </p>
                  <p className="mt-1 whitespace-nowrap text-xs sm:text-sm font-semibold text-[var(--text-primary)]">
                    {item.dot && (
                      <span className="relative mr-1.5 inline-flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-500 opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                      </span>
                    )}

                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            {/* ── Adding Divider ── */}
            <div className="my-4 h-px bg-black/10 dark:bg-white/10" />
            {/* ── Adding ID Text ── */}
            <p className="text-center font-mono text-[10px] tracking-[0.2em] text-gray-500 dark:text-gray-400">
              SW-2026-PRO
            </p>
          </div>
        </div>
      </div>
      {/* ── Stats strip ── */}
      <div className="mt-14 grid grid-cols-1 gap-6 px-6 sm:px-0 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="group relative h-full overflow-hidden rounded-2xl border border-black/10 bg-black/[0.04] p-5 md:backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#6E73BE]/60 hover:shadow-[0_0_25px_rgba(110,115,190,0.25)] dark:border-white/10 dark:bg-white/[0.04]"
          >
            <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-[#6E73BE]/10 blur-xl transition-all duration-300 group-hover:bg-[#6E73BE]/25"></div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#6E73BE]/30 bg-[#6E73BE]/10 text-[#6E73BE] transition-transform duration-300 group-hover:scale-110">
                <stat.icon />
              </div>
              <div className="flex flex-col gap-1 text-left">
                <p className="font-display text-3xl font-bold tracking-tight text-[var(--text-primary)]">
                  {stat.value}
                  {stat.suffix && (
                    <span className="text-[#6E73BE]">{stat.suffix}</span>
                  )}
                </p>
                <p className="text-base font-medium text-[var(--text-primary)]">
                  {stat.label}
                </p>
                <p className="text-sm text-black/60 dark:text-white/60">
                  {stat.sub}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

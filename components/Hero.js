"use client";
import { GridPattern } from "@/components/ui/grid-pattern";
import { Particles } from "@/components/ui/particles";
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden ">
     {/* Background layer — */}
  <div aria-hidden="true" className="pointer-events-none absolute inset-0">
  

{/* Dark mode */}
<Particles className="absolute inset-0 hidden dark:block" quantity={100} color="#ffffff" vy={-0.5} />
{/* Light mode */}
<Particles className="absolute inset-0 dark:hidden" quantity={100} color="#0F172A" vy={-0.5} />

<GridPattern
  width={40}
  height={40}
  className="text-[var(--border-strong)] opacity-60 [mask-image:radial-gradient(ellipse_at_center,white_30%,transparent_80%)]"
/>
  </div>
      <div className="grid grid-cols-1 m-8 mt-18 2xl:mt-32 items-center gap-12 text-center md:grid-cols-2 md:text-left">
        {/* ── Left column ── */}
        <div className="space-y-6 ">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-elevated)] px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
            </span>
            <span className="font-mono text-xs font-medium uppercase tracking-widest text-[var(--primary)]">
              Hello, I&apos;m Sohail — Available for projects
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-center text-2xl font-normal capitalize md:text-left md:text-6xl md:leading-tight">
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
              className="rounded-xl border border-[var(--border-default)] px-6 py-3 font-medium text-[var(--text-primary)] transition-all hover:-translate-y-1 hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              Hire Me
            </a>
          </div>
        </div>

        {/* ── Right column (glass card baad me) ── */}
        <div className="md:col-span-2"></div>
      </div>
    </section>
  );
}

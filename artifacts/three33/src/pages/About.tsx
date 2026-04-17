import { Link } from "wouter";

const MINT_LANDING_URL = "https://333landingpage.vercel.app";
const INSTAGRAM_URL = "https://www.instagram.com/morgen__victoria/";
const TWITTER_URL = "https://x.com/AiArsenals";

const WEBSITES = [
  { name: "CMH Marketing Solutions", url: "https://builtbycmh.com/" },
  { name: "National Web3 Women's Day™", url: "https://womenweb3.info/" },
  { name: "Web3 Women's Directory", url: "https://directory.womenweb3.info/" },
  { name: "Boink", url: "https://boinkme.xyz/" },
];

const PROJECTS: { name: string; url?: string }[] = [
  { name: "MAFIAxDAO", url: "https://mafiadao.lovable.app" },
  { name: "SolGods NFTs", url: "https://solgodsnfts.com/" },
  { name: "SuiLife", url: "https://www.suilife.io/" },
  { name: "DundiesDistrict", url: "https://itisbecauseofmysexybody.com/" },
  { name: "Defcon7 – Women's Crypto Lead" },
  { name: "Tradie Coin", url: "https://tradiecoin.xyz/" },
  { name: "HoneyBee Lounge" },
  { name: "Silence Redemption – The 2nd Crusade CTO", url: "https://silenceredemption.com/" },
];

const SOCIAL_LINKS = [
  {
    label: "@AIARSENALS",
    href: TWITTER_URL,
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "@MORGEN__VICTORIA",
    href: INSTAGRAM_URL,
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    label: "LINKEDIN",
    href: "https://www.linkedin.com/in/morgeno/",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "MORGEN36",
    href: "https://www.facebook.com/Morgen36",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "CMH MARKETING",
    href: "https://www.facebook.com/CMHMarketing/",
    icon: (
      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#0a0008", color: "#f0ede8" }}>

      {/* ── Scan line overlay ── */}
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden opacity-[0.025]">
        <div
          className="absolute w-full"
          style={{ height: "2px", background: "white", animation: "scan-line 10s linear infinite" }}
        />
      </div>

      {/* ── Nav ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5"
        style={{ background: "rgba(10,0,8,0.9)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(204,34,0,0.15)" }}
      >
        <Link href="/">
          <span className="font-cinzel font-black text-sm tracking-[0.4em] cursor-pointer" style={{ color: "#f0ede8" }}>333</span>
        </Link>
        <div className="flex items-center gap-5">
          <Link href="/about">
            <span
              className="font-mono-custom cursor-pointer transition-colors"
              style={{ fontSize: "10px", letterSpacing: "0.3em", color: "#cc2200" }}
            >
              ABOUT
            </span>
          </Link>
          <Link href="/mechanics">
            <span
              className="font-mono-custom cursor-pointer transition-colors"
              style={{ fontSize: "10px", letterSpacing: "0.3em", color: "rgba(240,237,232,0.4)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#cc2200")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,237,232,0.4)")}
            >
              MECHANICS
            </span>
          </Link>
          <a
            href={MINT_LANDING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-cinzel font-bold transition-colors"
            style={{ fontSize: "10px", letterSpacing: "0.3em", color: "#cc2200", border: "1px solid rgba(204,34,0,0.4)", padding: "6px 16px" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(204,34,0,0.1)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >
            MINT
          </a>
        </div>
      </nav>

      {/* ── Header ── */}
      <section className="pt-36 pb-16 px-6" style={{ borderBottom: "1px solid rgba(204,34,0,0.2)" }}>
        <div className="max-w-3xl mx-auto">
          <p className="font-mono-custom text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "#cc2200" }}>
            The Creator
          </p>
          <h1 className="font-cinzel font-black leading-none mb-6" style={{ fontSize: "clamp(3rem, 10vw, 5rem)", color: "#f0ede8" }}>
            About
          </h1>
          <div className="w-16 h-px mb-6" style={{ background: "#cc2200" }} />

          {/* Social links */}
          <div className="flex flex-wrap gap-4 items-center">
            {SOCIAL_LINKS.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono-custom transition-colors"
                style={{ fontSize: "10px", letterSpacing: "0.25em", color: "rgba(240,237,232,0.38)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#cc2200")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,237,232,0.38)")}
              >
                {icon}
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bio ── */}
      <section className="py-16 px-6">
        <div className="max-w-3xl mx-auto space-y-8">

          {/* Opening */}
          <div>
            <p className="font-mono-custom text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#cc2200" }}>
              About the Creator
            </p>
            <p className="font-cinzel text-lg md:text-xl leading-relaxed" style={{ color: "#f0ede8" }}>
              I'm Morgen — a Web3 builder, digital architect, and creative strategist operating at the intersection of NFTs, AI, community, and real-world utility.
            </p>
          </div>

          {/* Before Web3 */}
          <div className="pl-6" style={{ borderLeft: "2px solid rgba(204,34,0,0.3)" }}>
            <p className="font-cinzel text-sm font-semibold mb-3" style={{ color: "#cc2200" }}>
              Before Web3, I built community in real life.
            </p>
            <p className="font-mono-custom text-sm leading-relaxed mb-4" style={{ color: "rgba(240,237,232,0.65)" }}>
              I spent 20 years bartending, managed a bar, and served as Head of Promotions and Events for a decade. I didn't just work behind the bar — I built brands. I started, ran, and grew the social media accounts for two bars from the ground up, turning physical locations into recognizable local brands. I filled rooms, created experiences people talked about, and built loyalty that lasted.
            </p>
            <p className="font-mono-custom text-sm leading-relaxed" style={{ color: "rgba(240,237,232,0.65)" }}>
              That foundation — understanding energy, psychology, atmosphere, and audience — is what shapes everything I build on-chain.
            </p>
          </div>

          {/* Physical art */}
          <div className="pl-6" style={{ borderLeft: "2px solid rgba(204,34,0,0.3)" }}>
            <p className="font-mono-custom text-sm leading-relaxed" style={{ color: "rgba(240,237,232,0.65)" }}>
              Alongside live events, I create physical resin art geodes and mixed media pieces using acrylic paint, pigment powders, and alcohol ink — layering texture, color, and depth into every piece. That philosophy carries directly into my digital collections.
            </p>
          </div>

          {/* NW3WD */}
          <div className="pl-6" style={{ borderLeft: "2px solid rgba(204,34,0,0.3)" }}>
            <p className="font-mono-custom text-sm leading-relaxed mb-4" style={{ color: "rgba(240,237,232,0.65)" }}>
              I'm the founder of{" "}
              <span style={{ color: "#f0ede8" }}>National Web3 Women's Day™</span>{" "}
              (celebrated every October 11) and the architect behind the{" "}
              <span style={{ color: "#f0ede8" }}>Web3 Women's Directory</span>{" "}
              — a searchable, living ledger documenting women building in blockchain, NFTs, AI, and decentralized technology.
            </p>
            <p className="font-mono-custom text-sm leading-relaxed italic" style={{ color: "rgba(240,237,232,0.4)" }}>
              National Web3 Women's Day would not exist without my co-founder, Veronika. Thank you for all that you have done for me, for us. I will forever love you.
            </p>
          </div>

          {/* Boink */}
          <div className="pl-6" style={{ borderLeft: "2px solid rgba(204,34,0,0.3)" }}>
            <p className="font-mono-custom text-sm leading-relaxed" style={{ color: "rgba(240,237,232,0.65)" }}>
              I'm also the founder of{" "}
              <span style={{ color: "#f0ede8" }}>Boink</span>, a Web3 dating and networking platform launched during the BONK hackathon, powered by a dual-AI compatibility system and $BOINK on Solana.
            </p>
          </div>

          {/* CMH */}
          <div className="pl-6" style={{ borderLeft: "2px solid rgba(204,34,0,0.3)" }}>
            <p className="font-mono-custom text-sm leading-relaxed" style={{ color: "rgba(240,237,232,0.65)" }}>
              Through{" "}
              <span style={{ color: "#f0ede8" }}>CMH Marketing Solutions</span>, I design high-converting websites and AI-driven marketing systems for contractors, founders, and Web3 projects — blending design, SEO + GEO, automation, and token integration.
            </p>
          </div>

          {/* 333 personal */}
          <div className="pt-8" style={{ borderTop: "1px solid rgba(204,34,0,0.2)" }}>
            <p className="font-mono-custom text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "#cc2200" }}>
              This Collection
            </p>
            <p className="font-cinzel text-lg leading-relaxed mb-6" style={{ color: "#f0ede8" }}>
              This collection is very special to me.
            </p>
            <div className="space-y-4 font-mono-custom text-sm leading-relaxed" style={{ color: "rgba(240,237,232,0.65)" }}>
              <p>
                For most of my life, I've seen 333 everywhere. It shows up constantly. I wore number 33 on multiple sports teams growing up. I wink at Corvettes three times every time I see them for good luck. It's just always been there. Some may even say it's an angel number.{" "}
                <span style={{ color: "#f0ede8", fontStyle: "italic" }}>(yes thank you for a 3rd time CH ❤️❤️❤️)</span>
              </p>
              <p>With 3/3 and the blood moon aligning, I knew I had to release something.</p>
              <p>
                The goal was to launch at 3:30 PM EST on 3/3 so it's live at 3:33 PM EST. For me, this signifies change. Big things. Great things. The things I've always wanted to make real for myself. It's written in the metadata now. It's on-chain.
              </p>
              <p>
                This collection is a reminder and a promise to myself. Every single day — I{" "}
                <strong style={{ color: "#f0ede8" }}>WILL</strong> and I{" "}
                <strong style={{ color: "#f0ede8" }}>AM</strong>{" "}
                working toward these goals. Not someday. Not eventually. Every. Day.
              </p>
              <p>
                These seven images are layered over real, physical art pieces I created by hand. Each one begins in the physical world and transitions into digital permanence. A total of 333 pieces are being released across the seven images.
              </p>
              <p>
                The images evolve every day, 3–6 AM and 3–6 PM EST. It was challenging to build on Solana, but it's live and running — every single day.
              </p>
              <p>If you're here reading this, that alone means more than you know. Thank you.</p>
              <p>It's time for a change — and that starts with me.</p>
            </div>
          </div>

          {/* Closing quote */}
          <div className="p-8 text-center" style={{ border: "1px solid rgba(204,34,0,0.3)", background: "rgba(204,34,0,0.05)" }}>
            <p className="font-cinzel text-xl md:text-2xl font-bold leading-relaxed" style={{ color: "#f0ede8" }}>
              Here's to big things and a happy future, starting today.
            </p>
            <p className="font-cinzel text-2xl font-black tracking-widest mt-4" style={{ color: "#cc2200" }}>
              THANK YOU!
            </p>
          </div>

        </div>
      </section>

      {/* ── Websites Built ── */}
      <section className="py-16 px-6" style={{ borderTop: "1px solid rgba(204,34,0,0.2)" }}>
        <div className="max-w-3xl mx-auto">
          <p className="font-mono-custom text-xs tracking-[0.5em] uppercase mb-8" style={{ color: "#cc2200" }}>
            Websites I Built
          </p>
          <div className="space-y-3">
            {WEBSITES.map(({ name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4 transition-all duration-300"
                style={{ border: "1px solid rgba(204,34,0,0.15)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(204,34,0,0.5)";
                  e.currentTarget.style.background = "rgba(204,34,0,0.05)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(204,34,0,0.15)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <span className="font-cinzel text-sm font-semibold transition-colors" style={{ color: "#f0ede8" }}>
                  {name}
                </span>
                <span className="font-mono-custom transition-colors hidden sm:block" style={{ fontSize: "10px", color: "rgba(240,237,232,0.3)", letterSpacing: "0.15em" }}>
                  {url.replace("https://", "")} →
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Projects Involved In ── */}
      <section className="py-16 px-6" style={{ borderTop: "1px solid rgba(204,34,0,0.2)" }}>
        <div className="max-w-3xl mx-auto">
          <p className="font-mono-custom text-xs tracking-[0.5em] uppercase mb-8" style={{ color: "#cc2200" }}>
            Projects I'm Involved In
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {PROJECTS.map(({ name, url }) =>
              url ? (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 font-cinzel text-sm transition-all duration-300"
                  style={{ border: "1px solid rgba(204,34,0,0.15)", color: "rgba(240,237,232,0.65)" }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "rgba(204,34,0,0.5)";
                    e.currentTarget.style.color = "#cc2200";
                    e.currentTarget.style.background = "rgba(204,34,0,0.05)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(204,34,0,0.15)";
                    e.currentTarget.style.color = "rgba(240,237,232,0.65)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {name}
                </a>
              ) : (
                <div
                  key={name}
                  className="p-4 font-cinzel text-sm"
                  style={{ border: "1px solid rgba(204,34,0,0.1)", color: "rgba(240,237,232,0.45)" }}
                >
                  {name}
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-8 px-6" style={{ borderTop: "1px solid rgba(204,34,0,0.1)" }}>
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="font-mono-custom" style={{ fontSize: "9px", letterSpacing: "0.3em", color: "rgba(240,237,232,0.2)" }}>
            © 2026 THE 333 COLLECTION · @AIARSENALS
          </div>
          <div className="font-mono-custom" style={{ fontSize: "9px", letterSpacing: "0.2em", color: "rgba(240,237,232,0.15)" }}>
            BUILT ON SOLANA · METAPLEX
          </div>
        </div>
      </footer>

    </div>
  );
}

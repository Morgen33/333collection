import { useEffect, useState, useCallback, useRef } from "react";
import { Link } from "wouter";

const CANDY_MACHINE_ID = "EV6FZEwQfr1NdJ9GZ4oSHRPDJZMYgpACCwQy6ipZFNPe";
const COLLECTION_MINT_ID = "DDA9DiC7ahLjiu4eUbvHdsD6Go9j4ar3JQeohegQ7Jzn";
const MAGIC_EDEN_MINT_URL = `https://magiceden.io/launchpad/${CANDY_MACHINE_ID}`;
const TENSOR_MINT_URL = `https://www.tensor.trade/mint/${CANDY_MACHINE_ID}`;
const MINT_LANDING_URL = "https://333landingpage.vercel.app";
const TWITTER_URL = "https://x.com/AiArsenals";
const TOTAL_SUPPLY = 333;

const MINT_OPEN_TIME = new Date("2026-03-03T20:00:00.000Z");

const THEMES = [
  { name: "Strength & Power", symbol: "⚡" },
  { name: "Happy & Joy", symbol: "✦" },
  { name: "Love & Connection", symbol: "♥" },
  { name: "Money & Abundance", symbol: "◈" },
  { name: "Health & Vitality", symbol: "✿" },
  { name: "Wealth & Prosperity", symbol: "◆" },
  { name: "Home & Security", symbol: "⌂" },
];

function useCountdown(target: Date) {
  const calc = useCallback(() => {
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    return { days, hours, minutes, seconds, done: false };
  }, [target]);

  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, [calc]);
  return time;
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

function useInView(ref: React.RefObject<HTMLElement | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

function StarField() {
  const stars = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: Math.random() * 1.5 + 0.5,
    opacity: Math.random() * 0.5 + 0.1,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {stars.map(s => (
        <div
          key={s.id}
          className="absolute rounded-full"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: `rgba(240,237,232,${s.opacity})`,
            animation: `breathe ${3 + s.delay}s ease-in-out infinite`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function BloodMoon() {
  return (
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
      <div
        className="rounded-full"
        style={{
          width: "min(60vw, 60vh)",
          height: "min(60vw, 60vh)",
          background: "radial-gradient(circle at 38% 38%, #3d0000 0%, #1a0000 40%, #0a0008 70%, transparent 100%)",
          boxShadow: "0 0 80px 40px rgba(139,0,0,0.18), 0 0 200px 100px rgba(80,0,0,0.08)",
          animation: "blood-glow-pulse 6s ease-in-out infinite",
        }}
      />
    </div>
  );
}

function SacredTriangle() {
  return (
    <svg viewBox="0 0 200 180" className="w-24 h-24 opacity-20 mx-auto" fill="none">
      <polygon points="100,10 190,170 10,170" stroke="#cc2200" strokeWidth="1" />
      <polygon points="100,40 165,155 35,155" stroke="#cc2200" strokeWidth="0.5" />
      <circle cx="100" cy="107" r="30" stroke="#cc2200" strokeWidth="0.5" />
      <line x1="100" y1="10" x2="100" y2="170" stroke="#cc2200" strokeWidth="0.3" />
      <line x1="10" y1="170" x2="190" y2="170" stroke="#cc2200" strokeWidth="0.3" />
      <line x1="10" y1="170" x2="190" y2="170" stroke="#cc2200" strokeWidth="0.3" />
      <circle cx="100" cy="10" r="2" fill="#cc2200" />
      <circle cx="10" cy="170" r="2" fill="#cc2200" />
      <circle cx="190" cy="170" r="2" fill="#cc2200" />
    </svg>
  );
}

export default function Home() {
  const countdown = useCountdown(MINT_OPEN_TIME);
  const [copied, setCopied] = useState(false);
  const [activeTheme, setActiveTheme] = useState<number | null>(null);

  const themesRef = useRef<HTMLElement>(null);
  const foundationRef = useRef<HTMLElement>(null);
  const mintRef = useRef<HTMLElement>(null);

  const themesInView = useInView(themesRef);
  const foundationInView = useInView(foundationRef);
  const mintInView = useInView(mintRef);

  const mintedSoFar = 1;
  const progressPct = (mintedSoFar / TOTAL_SUPPLY) * 100;

  const copyCA = () => {
    navigator.clipboard.writeText(CANDY_MACHINE_ID);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const copyCollectionMint = () => {
    navigator.clipboard.writeText(COLLECTION_MINT_ID);
  };

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: "#0a0008", color: "#f0ede8" }}>

      {/* ── Scan line overlay ── */}
      <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden opacity-[0.025]">
        <div
          className="absolute w-full"
          style={{ height: "2px", background: "white", animation: "scan-line 10s linear infinite" }}
        />
      </div>

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <StarField />
        <BloodMoon />

        {/* Gradient overlays */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(10,0,8,0.5) 0%, transparent 30%, transparent 70%, #0a0008 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,0,8,0.3) 0%, transparent 30%, transparent 70%, rgba(10,0,8,0.3) 100%)" }} />

        {/* Nav */}
        <nav className="absolute top-0 left-0 right-0 z-20 flex items-center justify-between px-6 py-5">
          <div className="font-cinzel font-black text-sm tracking-[0.4em]" style={{ color: "#f0ede8" }}>
            333
          </div>
          <div className="flex items-center gap-6">
            <a
              href={TWITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-twitter"
              className="hidden sm:flex items-center gap-2 transition-colors"
              style={{ color: "rgba(240,237,232,0.4)", fontSize: "10px", letterSpacing: "0.3em" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#cc2200")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,237,232,0.4)")}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              @AIARSENALS
            </a>
            <Link href="/mechanics">
              <span
                className="font-mono-custom transition-colors cursor-pointer"
                style={{ fontSize: "10px", letterSpacing: "0.3em", color: "rgba(240,237,232,0.4)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#cc2200")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,237,232,0.4)")}
                data-testid="link-mechanics-nav"
              >
                MECHANICS
              </span>
            </Link>
            <a
              href={MINT_LANDING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-mint-nav"
              className="font-cinzel font-bold transition-colors"
              style={{ fontSize: "10px", letterSpacing: "0.3em", color: "#cc2200", border: "1px solid rgba(204,34,0,0.4)", padding: "6px 16px" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(204,34,0,0.1)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              MINT
            </a>
          </div>
        </nav>

        {/* Hero content */}
        <div className="relative z-10 text-center px-4 fade-up">
          <p className="font-mono-custom text-xs tracking-[0.5em] uppercase mb-6" style={{ color: "#cc2200" }}>
            3 · 3 · 2026 &nbsp;|&nbsp; Blood Moon Launch
          </p>

          <SacredTriangle />

          <h1
            className="font-cinzel font-black leading-none glitch-text"
            style={{ fontSize: "clamp(6rem, 20vw, 14rem)", color: "#f0ede8", textShadow: "0 0 60px rgba(139,0,0,0.4)", marginTop: "0.5rem" }}
          >
            333
          </h1>
          <h2
            className="font-cinzel font-semibold tracking-widest"
            style={{ fontSize: "clamp(1rem, 3vw, 2rem)", color: "rgba(240,237,232,0.85)", marginBottom: "2rem" }}
          >
            THE COLLECTION
          </h2>
          <p className="font-mono-custom text-sm leading-relaxed mx-auto max-w-md" style={{ color: "rgba(240,237,232,0.5)" }}>
            333 manifestation tokens on Solana.<br />
            Each one alive. Each one unique.<br />
            Witness the awakening — 3 to 6, AM and PM EST.
          </p>

          <div className="flex items-center justify-center gap-4 mt-10">
            <a
              href={MINT_LANDING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-mint-hero"
              className="font-cinzel font-bold pulse-ring transition-colors duration-300"
              style={{
                fontSize: "13px",
                letterSpacing: "0.4em",
                padding: "16px 40px",
                background: "#8B0000",
                color: "#f0ede8",
                border: "1px solid rgba(204,34,0,0.6)",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#cc2200")}
              onMouseLeave={e => (e.currentTarget.style.background = "#8B0000")}
            >
              MINT AND VIEW HERE
            </a>
          </div>
          <p
            className="font-mono-custom mt-4 max-w-sm mx-auto leading-relaxed"
            style={{ fontSize: "10px", color: "rgba(240,237,232,0.35)", letterSpacing: "0.05em" }}
          >
            Return during 3–6 AM or 3–6 PM EST to witness your token's transformation. That's when the awakening happens — only visible here, only in your wallet.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2" style={{ opacity: 0.35 }}>
          <div className="w-px h-10" style={{ background: "#cc2200", animation: "breathe 2.5s ease-in-out infinite" }} />
          <span className="font-mono-custom" style={{ fontSize: "9px", letterSpacing: "0.5em", color: "#cc2200" }}>SCROLL</span>
        </div>
      </section>

      {/* ── COUNTDOWN ── */}
      <section className="py-20 px-4" style={{ borderTop: "1px solid rgba(204,34,0,0.2)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-cinzel text-xs tracking-[0.5em] uppercase mb-10" style={{ color: "#cc2200" }}>
            {countdown.done ? "Mint Is Live" : "Mint Opens In"}
          </p>

          {countdown.done ? (
            <div className="flex flex-col items-center gap-6">
              <a
                href={MINT_LANDING_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-mint-countdown"
                className="font-cinzel font-bold pulse-ring transition-colors duration-300 inline-block"
                style={{
                  fontSize: "clamp(1.5rem, 4vw, 3rem)",
                  letterSpacing: "0.15em",
                  padding: "20px 48px",
                  color: "#cc2200",
                  border: "1px solid rgba(204,34,0,0.5)",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(204,34,0,0.08)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                MINT AND VIEW HERE
              </a>
              <p className="font-mono-custom max-w-lg leading-relaxed" style={{ fontSize: "11px", color: "rgba(240,237,232,0.4)", letterSpacing: "0.08em" }}>
                Return during 3–6 AM or 3–6 PM EST to witness your token's transformation. That's when the awakening happens — only visible here, only in your wallet.
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-6 md:gap-12">
              {[
                { label: "DAYS", value: pad(countdown.days) },
                { label: "HRS", value: pad(countdown.hours) },
                { label: "MIN", value: pad(countdown.minutes) },
                { label: "SEC", value: pad(countdown.seconds) },
              ].map(({ label, value }, i) => (
                <div key={i} className="flex flex-col items-center" data-testid={`countdown-${label.toLowerCase()}`}>
                  <div
                    className="font-mono-custom font-bold tabular-nums leading-none"
                    style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", color: "#f0ede8" }}
                  >
                    {value}
                  </div>
                  <div className="font-mono-custom mt-2" style={{ fontSize: "9px", letterSpacing: "0.5em", color: "#cc2200" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          )}

          <p className="font-mono-custom mt-10" style={{ fontSize: "10px", color: "rgba(240,237,232,0.3)", letterSpacing: "0.3em" }}>
            3:00 PM EST · MARCH 3, 2026
          </p>
        </div>
      </section>

      {/* ── NFT PREVIEW + MINT DETAILS ── */}
      <section
        ref={mintRef as React.RefObject<HTMLElement>}
        className="py-20 px-4"
        style={{
          borderTop: "1px solid rgba(204,34,0,0.2)",
          opacity: mintInView ? 1 : 0,
          transform: mintInView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.8s ease, transform 0.8s ease",
        }}
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">

          {/* NFT Preview card */}
          <div className="relative">
            <div
              className="blood-glow overflow-hidden relative"
              style={{ border: "1px solid rgba(204,34,0,0.3)" }}
            >
              {/* Placeholder NFT visual */}
              <div
                className="w-full aspect-square flex flex-col items-center justify-center relative"
                style={{ background: "radial-gradient(circle at 50% 50%, #1a0000 0%, #0d0008 60%, #0a0008 100%)" }}
              >
                <div className="absolute inset-0 flex items-center justify-center opacity-10">
                  <svg viewBox="0 0 300 300" className="w-full h-full" fill="none">
                    <circle cx="150" cy="150" r="120" stroke="#cc2200" strokeWidth="1" />
                    <circle cx="150" cy="150" r="80" stroke="#cc2200" strokeWidth="0.5" />
                    <circle cx="150" cy="150" r="40" stroke="#cc2200" strokeWidth="0.5" />
                    <polygon points="150,30 270,270 30,270" stroke="#cc2200" strokeWidth="1" fill="none" />
                    <polygon points="150,80 240,240 60,240" stroke="#cc2200" strokeWidth="0.5" fill="none" />
                    {[0,60,120,180,240,300].map(a => (
                      <line
                        key={a}
                        x1={150 + 120 * Math.cos(a * Math.PI / 180)}
                        y1={150 + 120 * Math.sin(a * Math.PI / 180)}
                        x2={150 - 120 * Math.cos(a * Math.PI / 180)}
                        y2={150 - 120 * Math.sin(a * Math.PI / 180)}
                        stroke="#cc2200"
                        strokeWidth="0.3"
                      />
                    ))}
                  </svg>
                </div>
                <div className="relative z-10 text-center">
                  <div className="font-cinzel font-black" style={{ fontSize: "5rem", color: "#cc2200", opacity: 0.8, textShadow: "0 0 40px rgba(204,34,0,0.6)" }}>
                    333
                  </div>
                  <div className="font-mono-custom mt-2" style={{ fontSize: "10px", letterSpacing: "0.5em", color: "rgba(240,237,232,0.3)" }}>
                    DORMANT STATE
                  </div>
                </div>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 p-4"
                style={{ background: "linear-gradient(to top, #0a0008 0%, transparent 100%)" }}
              >
                <p className="font-mono-custom" style={{ fontSize: "9px", color: "#cc2200", letterSpacing: "0.4em" }}>TOKEN #XXX</p>
                <p className="font-cinzel text-xs mt-1" style={{ color: "rgba(240,237,232,0.5)" }}>Connect your wallet to see it awaken</p>
              </div>
            </div>

            {/* Corner decorations */}
            {[
              "top-0 left-0 border-t border-l",
              "top-0 right-0 border-t border-r",
              "bottom-0 left-0 border-b border-l",
              "bottom-0 right-0 border-b border-r",
            ].map((cls, i) => (
              <div
                key={i}
                className={`absolute w-5 h-5 ${cls}`}
                style={{ borderColor: "#cc2200", margin: "-1px" }}
              />
            ))}

            <p className="font-mono-custom mt-4 text-center" style={{ fontSize: "9px", color: "rgba(240,237,232,0.2)", letterSpacing: "0.05em", lineHeight: 1.6 }}>
              Preview placeholder — actual token artwork revealed at mint.
            </p>
          </div>

          {/* Mint info */}
          <div className="space-y-7">
            <div>
              <p className="font-mono-custom text-xs tracking-[0.5em] uppercase mb-2" style={{ color: "#cc2200" }}>Collection</p>
              <h3 className="font-cinzel font-bold" style={{ fontSize: "clamp(1.6rem, 4vw, 2.5rem)", color: "#f0ede8" }}>
                The 333 Collection
              </h3>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Price", value: "$3.33" },
                { label: "Supply", value: "333" },
                { label: "Remaining", value: `${TOTAL_SUPPLY - mintedSoFar}` },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  className="p-3 text-center"
                  style={{ border: "1px solid rgba(204,34,0,0.2)" }}
                  data-testid={`stat-${label.toLowerCase()}`}
                >
                  <div className="font-mono-custom font-bold text-xl" style={{ color: "#f0ede8" }}>{value}</div>
                  <div className="font-mono-custom mt-1" style={{ fontSize: "9px", color: "rgba(240,237,232,0.35)", letterSpacing: "0.3em" }}>{label}</div>
                </div>
              ))}
            </div>

            {/* Progress bar */}
            <div>
              <div className="flex justify-between font-mono-custom mb-2" style={{ fontSize: "9px", color: "rgba(240,237,232,0.35)", letterSpacing: "0.3em" }}>
                <span>MINTED</span>
                <span>{mintedSoFar} / {TOTAL_SUPPLY}</span>
              </div>
              <div className="h-1 overflow-hidden" style={{ background: "rgba(240,237,232,0.08)" }}>
                <div
                  className="h-full transition-all duration-1000"
                  style={{ width: `${progressPct}%`, background: "#cc2200" }}
                />
              </div>
            </div>

            {/* Details */}
            <div className="space-y-2 font-mono-custom" style={{ fontSize: "10px", color: "rgba(240,237,232,0.35)", letterSpacing: "0.2em" }}>
              <div>5% ROYALTIES · SOLANA MAINNET</div>
              <div>METAPLEX CANDY MACHINE V3</div>
            </div>

            {/* Mint CTA */}
            <a
              href={MINT_LANDING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-mint-main"
              className="block w-full font-cinzel font-bold text-lg tracking-widest text-center transition-colors duration-300"
              style={{ padding: "20px 0", background: "#8B0000", color: "#f0ede8", border: "1px solid rgba(204,34,0,0.5)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#cc2200")}
              onMouseLeave={e => (e.currentTarget.style.background = "#8B0000")}
            >
              MINT AND VIEW HERE
            </a>

            {/* Also available on */}
            <div className="flex gap-3">
              <a
                href={MAGIC_EDEN_MINT_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-magic-eden"
                className="flex-1 font-mono-custom text-center py-3 transition-colors duration-300"
                style={{ fontSize: "9px", letterSpacing: "0.2em", border: "1px solid rgba(204,34,0,0.15)", color: "rgba(240,237,232,0.4)" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(204,34,0,0.5)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(204,34,0,0.15)")}
              >
                MAGIC EDEN
              </a>
              <a
                href={TENSOR_MINT_URL}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-tensor"
                className="flex-1 font-mono-custom text-center py-3 transition-colors duration-300"
                style={{ fontSize: "9px", letterSpacing: "0.2em", border: "1px solid rgba(204,34,0,0.15)", color: "rgba(240,237,232,0.4)" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(204,34,0,0.5)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(204,34,0,0.15)")}
              >
                TENSOR
              </a>
            </div>

            {/* Contract addresses */}
            <div className="space-y-2">
              <button
                onClick={copyCA}
                data-testid="button-copy-cm"
                className="w-full font-mono-custom text-left transition-colors truncate"
                style={{ fontSize: "9px", letterSpacing: "0.1em", color: copied ? "#cc2200" : "rgba(240,237,232,0.25)" }}
              >
                {copied ? "✓ COPIED" : `CANDY MACHINE: ${CANDY_MACHINE_ID}`}
              </button>
              <button
                onClick={copyCollectionMint}
                data-testid="button-copy-collection"
                className="w-full font-mono-custom text-left transition-colors truncate"
                style={{ fontSize: "9px", letterSpacing: "0.1em", color: "rgba(240,237,232,0.2)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(240,237,232,0.5)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,237,232,0.2)")}
              >
                {`COLLECTION: ${COLLECTION_MINT_ID}`}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW TO MINT ── */}
      <section className="py-16 px-4" style={{ borderTop: "1px solid rgba(204,34,0,0.2)", background: "rgba(204,34,0,0.03)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono-custom text-xs tracking-[0.5em] uppercase mb-3" style={{ color: "#cc2200" }}>How To Mint</p>
          <h3 className="font-cinzel font-bold text-xl md:text-2xl mb-10" style={{ color: "#f0ede8" }}>
            3 Steps. Right Here.
          </h3>
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                n: "I",
                title: "Get a Solana Wallet",
                body: "Download Phantom or Solflare. Fund it with at least $5 in SOL to cover the $3.33 mint price and network fees.",
              },
              {
                n: "II",
                title: "Connect & Mint",
                body: "Click MINT AND VIEW HERE above, connect your wallet on the mint page. Confirm the transaction. No marketplace needed.",
              },
              {
                n: "III",
                title: "Return for the Awakening",
                body: "After minting, come back here during 3–6 AM or 3–6 PM EST daily. This is the only place your token awakens — only in your wallet, only here.",
              },
            ].map(({ n, title, body }) => (
              <div key={n} className="flex gap-4">
                <div
                  className="font-cinzel font-black shrink-0 leading-none"
                  style={{ fontSize: "2.5rem", color: "rgba(204,34,0,0.3)" }}
                >
                  {n}
                </div>
                <div>
                  <div className="font-cinzel font-semibold text-sm mb-2" style={{ color: "#f0ede8" }}>{title}</div>
                  <div className="font-mono-custom text-xs leading-relaxed" style={{ color: "rgba(240,237,232,0.4)" }}>{body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── THE AWAKENING ── */}
      <section className="py-24 px-4" style={{ borderTop: "1px solid rgba(204,34,0,0.2)" }}>
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono-custom text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "#cc2200" }}>The Awakening</p>
          <h3 className="font-cinzel font-bold text-2xl md:text-4xl mb-8" style={{ color: "#f0ede8" }}>
            3 to 6. AM and PM. Every Day.
          </h3>
          <div className="relative mx-auto mb-10" style={{ maxWidth: "480px" }}>
            <div
              className="p-8"
              style={{ border: "1px solid rgba(204,34,0,0.25)", background: "rgba(139,0,0,0.05)" }}
            >
              <div className="font-mono-custom text-sm leading-loose" style={{ color: "rgba(240,237,232,0.6)" }}>
                <p>Between 3 and 6 AM EST —</p>
                <p style={{ color: "#cc2200" }}>your token transforms.</p>
                <p className="mt-4">Between 3 and 6 PM EST —</p>
                <p style={{ color: "#cc2200" }}>it transforms again.</p>
                <p className="mt-4" style={{ color: "rgba(240,237,232,0.35)" }}>
                  Connect your wallet here during those hours to witness it. Outside those windows, it rests in its dormant state. The awakening is real. The timing is intentional. The number is 3.
                </p>
              </div>
            </div>
            <div className="absolute -top-px -left-px w-4 h-4" style={{ borderTop: "1px solid #cc2200", borderLeft: "1px solid #cc2200" }} />
            <div className="absolute -top-px -right-px w-4 h-4" style={{ borderTop: "1px solid #cc2200", borderRight: "1px solid #cc2200" }} />
            <div className="absolute -bottom-px -left-px w-4 h-4" style={{ borderBottom: "1px solid #cc2200", borderLeft: "1px solid #cc2200" }} />
            <div className="absolute -bottom-px -right-px w-4 h-4" style={{ borderBottom: "1px solid #cc2200", borderRight: "1px solid #cc2200" }} />
          </div>
        </div>
      </section>

      {/* ── MANIFESTATION THEMES ── */}
      <section
        ref={themesRef as React.RefObject<HTMLElement>}
        className="py-20 px-4"
        style={{
          borderTop: "1px solid rgba(204,34,0,0.2)",
          opacity: themesInView ? 1 : 0,
          transform: themesInView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
        }}
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-mono-custom text-xs tracking-[0.5em] uppercase mb-3" style={{ color: "#cc2200" }}>
              Manifestation Themes
            </p>
            <h3 className="font-cinzel font-bold text-2xl md:text-3xl" style={{ color: "#f0ede8" }}>
              7 Intentions · 333 Tokens
            </h3>
            <p className="font-mono-custom text-xs mt-3 max-w-lg mx-auto leading-relaxed" style={{ color: "rgba(240,237,232,0.35)" }}>
              Every token is bound to one of seven manifestation themes. Each theme carries a different frequency, a different energy. Choose what calls to you.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {THEMES.map(({ name, symbol }, i) => (
              <button
                key={i}
                onClick={() => setActiveTheme(activeTheme === i ? null : i)}
                data-testid={`theme-${i}`}
                className="p-5 text-left transition-all duration-300"
                style={{
                  border: activeTheme === i ? "1px solid #cc2200" : "1px solid rgba(204,34,0,0.2)",
                  background: activeTheme === i ? "rgba(204,34,0,0.08)" : "transparent",
                }}
                onMouseEnter={e => {
                  if (activeTheme !== i) e.currentTarget.style.borderColor = "rgba(204,34,0,0.5)";
                }}
                onMouseLeave={e => {
                  if (activeTheme !== i) e.currentTarget.style.borderColor = "rgba(204,34,0,0.2)";
                }}
              >
                <div className="font-cinzel text-2xl mb-3" style={{ color: activeTheme === i ? "#cc2200" : "rgba(204,34,0,0.5)" }}>
                  {symbol}
                </div>
                <div className="font-cinzel font-semibold text-xs" style={{ color: "#f0ede8", lineHeight: 1.4 }}>{name}</div>
              </button>
            ))}

            {/* 8th tile — "Your theme" */}
            <div
              className="p-5 flex items-center justify-center"
              style={{ border: "1px dashed rgba(204,34,0,0.2)", background: "transparent" }}
            >
              <div className="text-center">
                <div className="font-mono-custom" style={{ fontSize: "9px", color: "rgba(240,237,232,0.25)", letterSpacing: "0.3em" }}>
                  YOURS AWAITS
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── THE FOUNDATION ── */}
      <section
        ref={foundationRef as React.RefObject<HTMLElement>}
        className="py-20 px-4"
        style={{
          borderTop: "1px solid rgba(204,34,0,0.2)",
          opacity: foundationInView ? 1 : 0,
          transform: foundationInView ? "translateY(0)" : "translateY(40px)",
          transition: "opacity 0.9s ease 0.15s, transform 0.9s ease 0.15s",
        }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-mono-custom text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "#cc2200" }}>The Foundation</p>
          <h3 className="font-cinzel font-bold text-2xl md:text-3xl mb-6" style={{ color: "#f0ede8" }}>
            Born from the Physical World
          </h3>
          <p className="font-mono-custom text-sm leading-relaxed max-w-xl mx-auto mb-10" style={{ color: "rgba(240,237,232,0.5)" }}>
            Every piece in The 333 Collection is rooted in something real. Each token's background was composed from an original, real-life physical artwork — captured, layered, and woven into the digital piece you hold. This is not generated imagery. These are living textures pulled from the physical world and carried on-chain, forever.
          </p>

          <div className="grid sm:grid-cols-3 gap-4 text-left">
            {[
              {
                tag: "ORIGIN",
                title: "Real Physical Art",
                body: "Each background began as a tangible, hand-crafted piece before it became a token.",
              },
              {
                tag: "PERMANENCE",
                title: "Immutable On-Chain",
                body: "Once minted, the artwork and its physical origin live on Solana permanently — no servers, no expiry.",
              },
              {
                tag: "INTENTION",
                title: "Meaning in Every Layer",
                body: "The physical and digital are inseparable here — each token carries the energy of both worlds.",
              },
            ].map(({ tag, title, body }) => (
              <div key={tag} className="p-5" style={{ border: "1px solid rgba(204,34,0,0.2)" }}>
                <div className="font-mono-custom mb-2" style={{ fontSize: "9px", letterSpacing: "0.4em", color: "#cc2200" }}>{tag}</div>
                <div className="font-cinzel font-semibold text-sm mb-2" style={{ color: "#f0ede8" }}>{title}</div>
                <div className="font-mono-custom text-xs leading-relaxed" style={{ color: "rgba(240,237,232,0.4)" }}>{body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-24 px-4" style={{ borderTop: "1px solid rgba(204,34,0,0.2)", background: "rgba(139,0,0,0.04)" }}>
        <div className="max-w-2xl mx-auto text-center">
          <SacredTriangle />
          <h2 className="font-cinzel font-black mt-6 mb-6 flicker" style={{ fontSize: "clamp(2rem, 8vw, 4rem)", color: "#f0ede8" }}>
            333
          </h2>
          <p className="font-mono-custom text-sm leading-relaxed mb-10" style={{ color: "rgba(240,237,232,0.45)" }}>
            Only 333 will ever exist.<br />
            Only one carries your intention.<br />
            Only this moment brings you here.
          </p>
          <a
            href={MINT_LANDING_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="button-mint-final"
            className="inline-block font-cinzel font-bold pulse-ring transition-colors duration-300"
            style={{
              fontSize: "14px",
              letterSpacing: "0.4em",
              padding: "20px 60px",
              background: "#8B0000",
              color: "#f0ede8",
              border: "1px solid rgba(204,34,0,0.5)",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "#cc2200")}
            onMouseLeave={e => (e.currentTarget.style.background = "#8B0000")}
          >
            MINT AND VIEW HERE
          </a>
          <p className="font-mono-custom mt-5 max-w-xs mx-auto leading-relaxed" style={{ fontSize: "10px", color: "rgba(240,237,232,0.3)", letterSpacing: "0.05em" }}>
            Return during 3–6 AM or 3–6 PM EST to witness your token's transformation. That's when the awakening happens — only visible here, only in your wallet.
          </p>

          <div className="flex items-center justify-center gap-6 mt-12">
            <a
              href={TWITTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-twitter-footer"
              className="flex items-center gap-2 font-mono-custom transition-colors"
              style={{ fontSize: "10px", letterSpacing: "0.3em", color: "rgba(240,237,232,0.25)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#cc2200")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,237,232,0.25)")}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              @AIARSENALS
            </a>
            <span style={{ color: "rgba(204,34,0,0.3)" }}>·</span>
            <span className="font-mono-custom" style={{ fontSize: "10px", letterSpacing: "0.2em", color: "rgba(240,237,232,0.2)" }}>
              333COLLECTION.XYZ
            </span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="py-8 px-4" style={{ borderTop: "1px solid rgba(204,34,0,0.1)" }}>
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

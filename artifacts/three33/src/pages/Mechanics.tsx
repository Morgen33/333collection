import { Link } from "wouter";

const MINT_LANDING_URL = "https://mint.333collection.xyz";

const SECTIONS = [
  { id: "vision", label: "The Vision", number: "01" },
  { id: "architecture", label: "The Architecture", number: "02" },
  { id: "awakening", label: "The Awakening", number: "03" },
  { id: "build", label: "How It Was Built", number: "04" },
  { id: "hurdles", label: "The Hurdles", number: "05" },
  { id: "original-art", label: "The Original Art", number: "05.5" },
  { id: "transparency", label: "Why Transparency", number: "06" },
];

const TECH_STACK = [
  { layer: "Blockchain", tech: "Solana Mainnet" },
  { layer: "NFT Standard", tech: "Metaplex Candy Machine V3" },
  { layer: "Dynamic Metadata", tech: "Next.js API on Vercel" },
  { layer: "Mint Site", tech: "React 19 + TypeScript" },
  { layer: "Backend", tech: "Node.js + tRPC + MySQL" },
  { layer: "Wallet Connect", tech: "Solana Wallet Adapter" },
  { layer: "Token Discovery", tech: "Solana DAS API (on-chain polling)" },
  { layer: "ME Refresh", tech: "Magic Eden Metadata Refresh API" },
];

const SYSTEM_FLOW = [
  { from: "Solana Blockchain", arrow: "stores", to: "Token mint address + metadata URI" },
  { from: "Metadata URI", arrow: "points to", to: "Live API (333collection.vercel.app)" },
  { from: "Live API", arrow: "checks", to: "Current EST time" },
  { from: "3–6 AM / 3–6 PM", arrow: "returns", to: "Awakened glitch image" },
  { from: "All other times", arrow: "returns", to: "Dormant blood moon image" },
  { from: "Magic Eden / wallets", arrow: "display", to: "Whatever the API returns" },
];

const AWAKENING_TIMELINE = [
  {
    time: "2:59 AM / 2:59 PM EST",
    event: "The mint site's server sends a refresh signal for every token in the collection. This tells wallets and explorers to re-fetch the metadata from the live API instead of showing a cached version.",
  },
  {
    time: "3:00 AM / 3:00 PM EST",
    event: "The live API begins returning the awakened image for all tokens. To see it, return to 333collection.xyz and connect your wallet — your token's awakened state is visible right there on the page.",
  },
  {
    time: "3:00–6:00 AM / PM EST",
    event: "The awakening window. All 333 tokens are in their active state simultaneously. Three full hours of manifestation energy, twice a day.",
  },
  {
    time: "6:01 AM / 6:01 PM EST",
    event: "The server sends another refresh signal. The API returns the dormant image. Tokens return to their resting state until the next window.",
  },
];

const HURDLES = [
  {
    title: "The Marketplace Cache Problem",
    body: "The biggest challenge was one we did not anticipate until we tested it. NFT marketplaces and wallets cache metadata aggressively. Even though our API was returning the correct time-based image, cached versions kept showing in explorers and wallets. The awakening mechanic was technically working, but invisible. The solution was to build a server-side scheduler that calls the Magic Eden metadata refresh endpoint at exactly 2:59 AM and PM, forcing a re-fetch from our API just before the window opens. This turned a broken mechanic into a reliable one.",
  },
  {
    title: "Node.js Polyfills in the Browser",
    body: "The Solana and Metaplex SDKs were designed for Node.js environments. When we brought them into the browser-based React app, they threw errors about missing Node.js built-ins — Buffer, crypto, stream, and others. Vite (our build tool) does not include these by default. We had to add a specific polyfill plugin to the build configuration to make the wallet adapter and Candy Machine SDK work correctly in the browser. This is a known pain point in the Solana developer ecosystem and took some debugging to resolve.",
  },
  {
    title: "Parsing Raw On-Chain Data",
    body: "To build the live mint counter, we needed to read the Candy Machine account's current state — specifically how many tokens had been minted and how many remained. The cleanest approach would have been to use Metaplex's SDK, but that added significant bundle weight. Instead, we read the raw account data directly from the Solana RPC and parsed the binary layout at the correct byte offsets. This required understanding the exact memory layout of a Candy Machine V3 account. We verified the offsets by cross-referencing the on-chain data with the known state of the collection.",
  },
  {
    title: "Mints from Outside the Site",
    body: "The system needed to track every minted token regardless of where it was minted — on this site or on any marketplace. The fix was to build an on-chain discovery poller that queries the Solana DAS API every 5 minutes for all NFTs in the collection and automatically adds any new ones to the database. Now it does not matter where someone mints — the system finds the token within 5 minutes and includes it in every future awakening cycle.",
  },
  {
    title: "Launch Day Timing",
    body: "The entire mint site — wallet connect, live counter, awakening scheduler, token discovery, Mechanics page — was built on the same day as the collection launch. It meant making decisions quickly, prioritizing reliability over perfection, and testing in real conditions. The test mint (token #1) was done before the public launch specifically to validate the full pipeline end-to-end. Everything that could be tested was tested before the mint opened.",
  },
];

const ORIGINAL_ART = [
  { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663209436663/LUq9frbKqsiXrvuVDyskXB/art-1-pink-flow_724d7d75.jpeg", label: "Strength & Power", medium: "Acrylic pour on canvas" },
  { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663209436663/LUq9frbKqsiXrvuVDyskXB/art-2-red-sky_13abed4a.jpeg", label: "Happy & Joy", medium: "Acrylic on canvas" },
  { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663209436663/LUq9frbKqsiXrvuVDyskXB/art-3-fire-bloom_fb25e354.jpeg", label: "Love & Connection", medium: "Alcohol ink & resin" },
  { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663209436663/LUq9frbKqsiXrvuVDyskXB/art-4-cosmic-garden_a604795e.jpeg", label: "Money & Abundance", medium: "Acrylic & alcohol ink" },
  { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663209436663/LUq9frbKqsiXrvuVDyskXB/art-5-deep-blue_5b5eb51b.jpeg", label: "Health & Vitality", medium: "Alcohol ink on canvas" },
  { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663209436663/LUq9frbKqsiXrvuVDyskXB/art-6-nebula_47f85e36.jpeg", label: "Wealth & Prosperity", medium: "Alcohol ink & resin" },
  { url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663209436663/LUq9frbKqsiXrvuVDyskXB/art-7-emerald_b801924b.jpeg", label: "Home & Security", medium: "Acrylic & alcohol ink" },
];

export default function Mechanics() {
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
      <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-5" style={{ background: "rgba(10,0,8,0.9)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(204,34,0,0.15)" }}>
        <Link href="/">
          <span className="font-cinzel font-black text-sm tracking-[0.4em] cursor-pointer" style={{ color: "#f0ede8" }}>333</span>
        </Link>
        <div className="flex items-center gap-5">
          <Link href="/about">
            <span
              className="font-mono-custom transition-colors cursor-pointer"
              style={{ fontSize: "10px", letterSpacing: "0.3em", color: "rgba(240,237,232,0.4)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#cc2200")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(240,237,232,0.4)")}
            >
              ABOUT
            </span>
          </Link>
          <Link href="/mechanics">
            <span className="font-mono-custom transition-colors cursor-pointer" style={{ fontSize: "10px", letterSpacing: "0.3em", color: "#cc2200" }}>
              MECHANICS
            </span>
          </Link>
          <a
            href={MINT_LANDING_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="link-mint-mechanics-nav"
            className="font-cinzel font-bold transition-colors"
            style={{ fontSize: "10px", letterSpacing: "0.3em", color: "#cc2200", border: "1px solid rgba(204,34,0,0.4)", padding: "6px 16px" }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(204,34,0,0.1)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >
            MINT
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="pt-36 pb-20 px-6" style={{ borderBottom: "1px solid rgba(204,34,0,0.2)" }}>
        <div className="max-w-3xl mx-auto">
          <p className="font-mono-custom text-xs tracking-[0.5em] uppercase mb-4" style={{ color: "#cc2200" }}>
            Mechanics & Transparency
          </p>
          <h1 className="font-cinzel font-black leading-none mb-6" style={{ fontSize: "clamp(3rem, 10vw, 5rem)", color: "#f0ede8" }}>
            How It Works
          </h1>
          <p className="font-mono-custom text-sm leading-relaxed max-w-xl" style={{ color: "rgba(240,237,232,0.55)" }}>
            The 333 Collection is not a static NFT drop. It is a living system — one where every
            token changes state twice a day, every day, forever. This page explains exactly how
            that works, how it was built, and the real challenges we faced along the way.
          </p>
        </div>
      </section>

      {/* ── Table of Contents ── */}
      <section className="py-10 px-6" style={{ borderBottom: "1px solid rgba(204,34,0,0.1)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                data-testid={`toc-${s.id}`}
                className="flex items-center gap-3 p-3 transition-all duration-200 group"
                style={{ border: "1px solid rgba(204,34,0,0.2)" }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "rgba(204,34,0,0.6)";
                  e.currentTarget.style.background = "rgba(204,34,0,0.05)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(204,34,0,0.2)";
                  e.currentTarget.style.background = "transparent";
                }}
              >
                <span className="font-mono-custom font-bold shrink-0" style={{ fontSize: "9px", letterSpacing: "0.3em", color: "#cc2200" }}>
                  {s.number}
                </span>
                <span className="font-cinzel text-xs" style={{ color: "rgba(240,237,232,0.65)" }}>
                  {s.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── 01 The Vision ── */}
      <section id="vision" className="py-20 px-6" style={{ borderBottom: "1px solid rgba(204,34,0,0.1)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-6 items-start mb-8">
            <span className="font-mono-custom font-bold shrink-0 pt-1" style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#cc2200" }}>01</span>
            <h2 className="font-cinzel font-bold" style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)", color: "#f0ede8" }}>The Vision</h2>
          </div>
          <div className="space-y-5 font-mono-custom text-sm leading-relaxed pl-14" style={{ color: "rgba(240,237,232,0.55)" }}>
            <p>
              The 333 Collection started with a simple but unusual question: what if an NFT was not
              just a static image you owned, but a token that was{" "}
              <em style={{ color: "rgba(240,237,232,0.8)" }}>alive</em> — one that responded
              to time, that changed on its own, that gave holders something to look forward to every
              single day?
            </p>
            <p>
              The number 333 is an angel number{" "}
              <span style={{ color: "#f0ede8", fontStyle: "italic" }}>(thank you CH ❤️❤️❤️)</span>{" "}
              associated with manifestation, alignment, and the
              presence of creative energy. It appears at 3:33 AM and 3:33 PM — those quiet moments
              when people notice the clock and feel something. The collection was designed around
              that energy. Every token in this collection awakens from 3 AM to 6 AM and 3 PM to 6 PM EST,
              twice a day, every day, without exception. To witness it, come back to 333collection.xyz
              and connect your wallet during those windows — that is the only place the awakening is visible.
            </p>
            <p>
              The collection is grounded in something entirely physical — and entirely original.
              Every background in these pieces is a one-of-a-kind work of art created by hand
              by Morgen herself, using acrylic paint, alcohol ink, and resin on canvas. These
              are not photographs, not stock textures, not AI-generated backgrounds. They are
              real physical paintings that exist in the world. The digital layer was built on
              top of that foundation. The art came first.
            </p>
            <p style={{ color: "rgba(240,237,232,0.75)" }}>
              333 tokens. 7 manifestation themes. One awakening window. No expiry date.
            </p>
          </div>
        </div>
      </section>

      {/* ── 02 The Architecture ── */}
      <section id="architecture" className="py-20 px-6" style={{ borderBottom: "1px solid rgba(204,34,0,0.1)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-6 items-start mb-8">
            <span className="font-mono-custom font-bold shrink-0 pt-1" style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#cc2200" }}>02</span>
            <h2 className="font-cinzel font-bold" style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)", color: "#f0ede8" }}>The Architecture</h2>
          </div>
          <div className="space-y-5 font-mono-custom text-sm leading-relaxed pl-14" style={{ color: "rgba(240,237,232,0.55)" }}>
            <p>
              Most NFTs store their metadata on Arweave or IPFS — permanent, immutable, and
              unchangeable. That is great for provenance, but it means the image can never change.
              The 333 Collection takes a different approach: the metadata URI for every token points
              to a{" "}
              <strong style={{ color: "rgba(240,237,232,0.85)" }}>live API endpoint</strong>{" "}
              rather than a static file.
            </p>
            <p>
              When a wallet, marketplace, or explorer fetches a token's metadata, it hits our API.
              The API checks the current time in EST. If it is between 3 AM and 6 AM, or 3 PM and 6 PM,
              it returns the awakened image. Any other time, it returns the dormant image. The token
              itself never changes on-chain — only what the metadata URI resolves to changes, based
              on when you ask.
            </p>

            {/* System flow diagram */}
            <div className="my-8 p-6" style={{ border: "1px solid rgba(204,34,0,0.2)" }}>
              <p className="font-mono-custom mb-5" style={{ fontSize: "9px", letterSpacing: "0.5em", color: "#cc2200" }}>SYSTEM FLOW</p>
              <div className="space-y-3">
                {SYSTEM_FLOW.map(({ from, arrow, to }, i) => (
                  <div key={i} className="flex flex-wrap items-center gap-2" style={{ fontSize: "10px" }}>
                    <span className="font-mono-custom font-bold" style={{ color: "rgba(240,237,232,0.8)", minWidth: "160px" }}>{from}</span>
                    <span className="font-mono-custom" style={{ color: "rgba(204,34,0,0.6)" }}>→ {arrow} →</span>
                    <span className="font-mono-custom" style={{ color: "rgba(240,237,232,0.45)" }}>{to}</span>
                  </div>
                ))}
              </div>
            </div>

            <p>
              The mint site connects directly to the Solana blockchain to read
              live Candy Machine data: how many tokens have been minted, how many remain, and the
              current state of the collection. That data refreshes every 30 seconds automatically.
            </p>
            <p>
              The Candy Machine is Metaplex's V3 standard — the same infrastructure used by the
              largest Solana NFT collections. It handles the mint queue, enforces the supply cap of
              333, and manages the randomized theme assignment as each token is claimed.
            </p>
          </div>
        </div>
      </section>

      {/* ── 03 The Awakening ── */}
      <section id="awakening" className="py-20 px-6" style={{ borderBottom: "1px solid rgba(204,34,0,0.1)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-6 items-start mb-8">
            <span className="font-mono-custom font-bold shrink-0 pt-1" style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#cc2200" }}>03</span>
            <h2 className="font-cinzel font-bold" style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)", color: "#f0ede8" }}>The Awakening</h2>
          </div>
          <div className="space-y-5 font-mono-custom text-sm leading-relaxed pl-14" style={{ color: "rgba(240,237,232,0.55)" }}>
            <p>
              The awakening mechanic is the heart of the collection. Here is exactly what happens,
              step by step, every single day.
            </p>

            <div className="my-6" style={{ border: "1px solid rgba(204,34,0,0.2)" }}>
              {AWAKENING_TIMELINE.map(({ time, event }, i) => (
                <div
                  key={i}
                  className="flex gap-6 p-5"
                  style={{ borderBottom: i < AWAKENING_TIMELINE.length - 1 ? "1px solid rgba(204,34,0,0.1)" : "none" }}
                >
                  <div
                    className="font-mono-custom font-bold shrink-0"
                    style={{ fontSize: "9px", letterSpacing: "0.15em", color: "#cc2200", minWidth: "140px", paddingTop: "2px" }}
                  >
                    {time}
                  </div>
                  <div className="font-mono-custom text-xs leading-relaxed" style={{ color: "rgba(240,237,232,0.55)" }}>
                    {event}
                  </div>
                </div>
              ))}
            </div>

            <p>
              The server also runs a background poller every 5 minutes that scans the Solana
              blockchain for any newly minted tokens — regardless of whether they were minted
              through this site or on any marketplace. Any new token is automatically added to
              the refresh list within 5 minutes of being minted. The system is fully self-maintaining.
            </p>
          </div>
        </div>
      </section>

      {/* ── 04 How It Was Built ── */}
      <section id="build" className="py-20 px-6" style={{ borderBottom: "1px solid rgba(204,34,0,0.1)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-6 items-start mb-8">
            <span className="font-mono-custom font-bold shrink-0 pt-1" style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#cc2200" }}>04</span>
            <h2 className="font-cinzel font-bold" style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)", color: "#f0ede8" }}>How It Was Built</h2>
          </div>
          <div className="space-y-5 font-mono-custom text-sm leading-relaxed pl-14" style={{ color: "rgba(240,237,232,0.55)" }}>
            <p>
              This collection was built by{" "}
              <strong style={{ color: "rgba(240,237,232,0.85)" }}>Morgen</strong>, founder of CMH Marketing Solutions{" "}
              <span style={{ color: "#f0ede8", fontStyle: "italic" }}>(thanks again CH ❤️❤️❤️)</span>{" "}
              and National Web3 Women's Day, working alongside an AI development partner. The
              process was collaborative and iterative — not a hand-off to a developer, but a
              genuine back-and-forth where the vision drove every technical decision.
            </p>
            <p>
              The art was created first — and it was made entirely by hand. Each of the 7
              manifestation themes is anchored by an original physical painting created by Morgen
              using acrylic paint, alcohol ink, and resin on canvas. The fluid pours, the ink
              blooms, the resin layers — none of it was generated or filtered. These are real
              objects that exist in the physical world, and they form the visual soul of every
              token in this collection.
            </p>
            <p>The technical stack was assembled around the art, not the other way around:</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 my-6">
              {TECH_STACK.map(({ layer, tech }) => (
                <div
                  key={layer}
                  className="flex justify-between items-center p-3"
                  style={{ border: "1px solid rgba(204,34,0,0.15)" }}
                >
                  <span className="font-mono-custom" style={{ fontSize: "9px", letterSpacing: "0.2em", color: "rgba(240,237,232,0.35)", textTransform: "uppercase" }}>
                    {layer}
                  </span>
                  <span className="font-mono-custom font-bold text-xs" style={{ color: "rgba(240,237,232,0.8)" }}>
                    {tech}
                  </span>
                </div>
              ))}
            </div>

            <p>
              The mint site was built in a single focused session on launch day — March 3, 2026.
              Every component was written, tested, and deployed the same day the collection went
              live. The automated systems (the awakening scheduler, the token discovery poller, the
              live mint counter) were all built and validated before the first public mint opened.
            </p>
          </div>
        </div>
      </section>

      {/* ── 05 The Hurdles ── */}
      <section id="hurdles" className="py-20 px-6" style={{ borderBottom: "1px solid rgba(204,34,0,0.1)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-6 items-start mb-8">
            <span className="font-mono-custom font-bold shrink-0 pt-1" style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#cc2200" }}>05</span>
            <h2 className="font-cinzel font-bold" style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)", color: "#f0ede8" }}>The Hurdles</h2>
          </div>
          <div className="pl-14 space-y-8">
            <p className="font-mono-custom text-sm leading-relaxed" style={{ color: "rgba(240,237,232,0.55)" }}>
              Building a dynamic NFT collection is not straightforward. These are the real
              challenges we ran into and how we solved them.
            </p>
            {HURDLES.map(({ title, body }, i) => (
              <div
                key={i}
                className="space-y-3 pl-6"
                data-testid={`hurdle-${i}`}
                style={{ borderLeft: "2px solid rgba(204,34,0,0.3)" }}
              >
                <h3 className="font-cinzel font-semibold text-lg" style={{ color: "#f0ede8" }}>{title}</h3>
                <p className="font-mono-custom text-xs leading-relaxed" style={{ color: "rgba(240,237,232,0.5)" }}>{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 05.5 The Original Art ── */}
      <section id="original-art" className="py-20 px-6" style={{ borderBottom: "1px solid rgba(204,34,0,0.1)" }}>
        <div className="max-w-5xl mx-auto">
          <div className="flex gap-6 items-start mb-4">
            <span className="font-mono-custom font-bold shrink-0 pt-1" style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#cc2200" }}>05.5</span>
            <div>
              <h2 className="font-cinzel font-bold mb-3" style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)", color: "#f0ede8" }}>The Original Art</h2>
              <p className="font-mono-custom text-xs leading-relaxed max-w-2xl" style={{ color: "rgba(240,237,232,0.45)" }}>
                These are the 7 original physical paintings that serve as the backgrounds for the 333 Collection.
                Each one was created by hand — acrylic paint, alcohol ink, and resin on canvas.
                They exist as real objects in the world. What you see in each token began here.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
            {ORIGINAL_ART.map(({ url, label, medium }, i) => (
              <div
                key={i}
                className="group overflow-hidden relative transition-all duration-300"
                data-testid={`art-${i}`}
                style={{ border: "1px solid rgba(204,34,0,0.2)" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(204,34,0,0.6)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(204,34,0,0.2)")}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={url}
                    alt={label}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-3" style={{ background: "rgba(10,0,8,0.9)" }}>
                  <p className="font-cinzel text-xs font-semibold leading-tight" style={{ color: "#f0ede8" }}>{label}</p>
                  <p className="font-mono-custom mt-1" style={{ fontSize: "9px", letterSpacing: "0.3em", color: "rgba(204,34,0,0.7)", textTransform: "uppercase" }}>{medium}</p>
                </div>
              </div>
            ))}

            {/* 8th tile */}
            <div
              className="flex flex-col justify-center items-center text-center p-4"
              style={{ border: "1px solid rgba(204,34,0,0.1)", background: "rgba(204,34,0,0.04)" }}
            >
              <p className="font-mono-custom mb-2" style={{ fontSize: "9px", letterSpacing: "0.3em", color: "#cc2200", textTransform: "uppercase" }}>Original Works</p>
              <p className="font-mono-custom leading-relaxed" style={{ fontSize: "9px", color: "rgba(240,237,232,0.35)" }}>
                All 7 pieces exist as physical originals. The digital collection was built on top of them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 06 Why Transparency ── */}
      <section id="transparency" className="py-20 px-6" style={{ borderBottom: "1px solid rgba(204,34,0,0.1)" }}>
        <div className="max-w-3xl mx-auto">
          <div className="flex gap-6 items-start mb-8">
            <span className="font-mono-custom font-bold shrink-0 pt-1" style={{ fontSize: "10px", letterSpacing: "0.4em", color: "#cc2200" }}>06</span>
            <h2 className="font-cinzel font-bold" style={{ fontSize: "clamp(1.8rem, 5vw, 2.5rem)", color: "#f0ede8" }}>Why Transparency</h2>
          </div>
          <div className="space-y-5 font-mono-custom text-sm leading-relaxed pl-14" style={{ color: "rgba(240,237,232,0.55)" }}>
            <p>
              The NFT space has a trust problem. Collectors have been burned by projects that
              overpromised, under-delivered, or quietly abandoned their mechanics after mint.
              We wanted to do the opposite.
            </p>
            <p>
              This page exists because we believe collectors deserve to know exactly what they are
              buying into. Not just the art, not just the price — but the actual system underneath.
              How it works. What it depends on. What could break and how we have protected against
              it. What we struggled with and how we solved it.
            </p>
            <p>
              The awakening mechanic is real and it is running. You can verify it yourself: return to 333collection.xyz between 3 and 6 AM or PM EST, connect your wallet, and watch your token transform. Come back at 6:01 and watch it return to dormant. The system does not require trust — it requires only a clock and a wallet.
            </p>
            <p>
              The collection will keep awakening for as long as the Vercel API is live and the mint
              site server is running. Those are the two dependencies. We are committed to maintaining
              both. If anything ever changes, we will communicate it directly and publicly.
            </p>
            <p className="font-bold" style={{ color: "rgba(240,237,232,0.85)" }}>
              333 tokens. 7 themes. Two awakenings a day. Every day. Forever.
            </p>
          </div>
        </div>
      </section>

      {/* ── Footer CTA ── */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <p className="font-mono-custom text-xs tracking-[0.5em] uppercase" style={{ color: "#cc2200" }}>
            Ready to be part of it?
          </p>
          <h3 className="font-cinzel font-bold text-3xl" style={{ color: "#f0ede8" }}>Mint Your Token</h3>
          <p className="font-mono-custom text-xs max-w-md mx-auto" style={{ color: "rgba(240,237,232,0.35)" }}>
            333 tokens. $3.33. One of 7 manifestation themes. Connect your wallet during 3–6 AM and PM EST to witness the Awakening, every day.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link href="/">
              <span
                className="inline-block font-cinzel font-bold text-sm tracking-widest transition-colors duration-300 cursor-pointer"
                style={{ padding: "14px 40px", background: "transparent", color: "#cc2200", border: "1px solid rgba(204,34,0,0.5)" }}
                onMouseEnter={e => (e.currentTarget.style.background = "rgba(204,34,0,0.08)")}
                onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
              >
                BACK TO MINT
              </span>
            </Link>
            <a
              href={MINT_LANDING_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-mint-mechanics-footer"
              className="inline-block font-cinzel font-bold text-sm tracking-widest transition-colors duration-300"
              style={{ padding: "14px 40px", background: "#8B0000", color: "#f0ede8", border: "1px solid rgba(204,34,0,0.5)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "#cc2200")}
              onMouseLeave={e => (e.currentTarget.style.background = "#8B0000")}
            >
              MINT AND VIEW HERE
            </a>
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

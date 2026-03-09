import { useState } from 'react';

// ─────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────
const videos = [
  { id: 1, category: 'short', title: 'C3H1 REV',                  videoId: 'dQw4w9WgXcQ', duration: '0:45', views: '12K'  },
  { id: 2, category: 'short', title: 'Instagram Reel Edit',        videoId: 'S64DLYg4k5Y', duration: '0:30', views: '8.4K' },
  { id: 3, category: 'short', title: 'Faceless Final',             videoId: '7rjkEAZkm60', duration: '0:58', views: '21K'  },
  { id: 4, category: 'short', title: 'Intake Breathing Final',     videoId: 'JPXmeApUoW4', duration: '0:38', views: '5.1K' },
  { id: 5, category: 'short', title: 'Michael Jordan Faceless Rev',videoId: '-9rekxYjKH0', duration: '0:52', views: '34K'  },
  { id: 6, category: 'short', title: 'Sean Revised',               videoId: 'd0h79VhnnTE', duration: '1:02', views: '9.7K' },
  { id: 7, category: 'long',  title: 'Long Edit',                  videoId: 'dAf23VMxc9o', duration: '8:24', views: '2.3K' },
];

const services = [
  { icon: '✂️', title: 'Short-Form Editing',    desc: 'Viral Reels, TikToks & Shorts — punchy cuts, captions, transitions.' },
  { icon: '🎬', title: 'Long-Form Production',  desc: 'YouTube videos, podcasts & brand docs with cinematic polish.'         },
  { icon: '🎨', title: 'Motion Graphics',       desc: 'Custom lower-thirds, titles, and animated brand elements.'            },
  { icon: '🎵', title: 'Sound Design',          desc: 'Synced SFX, music licensing, voiceover mixing — ear-candy.'           },
];

const stats = [
  { stat: '50+', label: 'Videos Delivered'    },
  { stat: '98%', label: 'Client Satisfaction' },
  { stat: '48h', label: 'Avg. Turnaround'     },
  { stat: '∞',   label: 'Revisions Included'  },
];

// ─────────────────────────────────────────────
// PHONE FRAME CARD
// ─────────────────────────────────────────────
function PhoneFrame({ video }) {
  const isLong = video.category === 'long';
  const embedUrl =
    `https://www.youtube.com/embed/${video.videoId}` +
    `?autoplay=1&mute=1&loop=1&playlist=${video.videoId}` +
    `&controls=1&rel=0&playsinline=1&modestbranding=1`;

  return (
    <div className="flex flex-col items-center group">
      {/* ── Phone shell ── */}
      <div
        className="relative mx-auto w-full transition-transform duration-500 group-hover:-translate-y-3"
        style={{ maxWidth: '260px' }}
      >
        {/* Body */}
        <div
          className="relative bg-zinc-800 rounded-[3rem] border-[5px] border-zinc-700 group-hover:border-red-600 transition-colors duration-500 shadow-2xl"
          style={{ aspectRatio: '9/19.5' }}
        >
          {/* Side buttons – left */}
          <div className="absolute -left-[8px] top-[16%] w-[5px] h-7  bg-zinc-600 rounded-l-md" />
          <div className="absolute -left-[8px] top-[25%] w-[5px] h-9  bg-zinc-600 rounded-l-md" />
          <div className="absolute -left-[8px] top-[36%] w-[5px] h-9  bg-zinc-600 rounded-l-md" />
          {/* Side button – right */}
          <div className="absolute -right-[8px] top-[25%] w-[5px] h-14 bg-zinc-600 rounded-r-md" />

          {/* Screen */}
          <div className="absolute inset-[4px] rounded-[2.5rem] overflow-hidden bg-black">
            {/* Dynamic island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-900 rounded-full z-30 flex items-center justify-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
              <div className="w-2.5  h-2.5 rounded-full bg-zinc-800 border border-zinc-600" />
            </div>

            {/* YouTube — autoplays muted on load */}
            <iframe
              src={embedUrl}
              className="absolute inset-0 w-full h-full"
              style={{ border: 'none' }}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              title={video.title}
            />

            {/* Category badge */}
            <div className="absolute top-9 left-2 z-20 pointer-events-none">
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow ${isLong ? 'bg-blue-600 text-white' : 'bg-red-600 text-white'}`}>
                {isLong ? 'Long' : 'Short'}
              </span>
            </div>

            {/* Duration */}
            <div className="absolute bottom-4 right-2 z-20 pointer-events-none">
              <span className="bg-black/75 text-white text-[9px] font-mono px-1.5 py-0.5 rounded">
                {video.duration}
              </span>
            </div>

            {/* Home bar */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-14 h-[3px] bg-white/25 rounded-full z-30" />
          </div>
        </div>

        {/* Glow */}
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-red-700/20 blur-2xl rounded-full group-hover:bg-red-600/40 transition-colors duration-500 pointer-events-none" />
      </div>

      {/* Title */}
      <div className="mt-5 text-center px-2">
        <h3 className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors leading-tight">
          {video.title}
        </h3>
        <p className="text-xs text-zinc-500 mt-1">{video.views} views · {video.duration}</p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// BOOKING SECTION
// ─────────────────────────────────────────────
function Booking() {
  return (
    <section id="book" className="py-32 bg-black border-t border-zinc-800">
      <div className="max-w-5xl mx-auto px-6">

        {/* Headline */}
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-red-500 font-semibold mb-4">
            Free Strategy Call
          </p>
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Ready to level up<br className="hidden md:block" /> your content?
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Book a free 15-minute call. We'll review your current content and show you exactly what's possible.
          </p>
        </div>

        {/* Card */}
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 overflow-hidden">
          <div className="grid md:grid-cols-2">

            {/* LEFT — CTA */}
            <div className="p-10 md:p-14 flex flex-col justify-center gap-6 border-b md:border-b-0 md:border-r border-zinc-800">
              <div className="flex items-center gap-4 p-5 rounded-2xl bg-zinc-800/60 border border-zinc-700">
                <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold">15-Minute Strategy Call</p>
                  <p className="text-zinc-400 text-sm">Pick any available time slot</p>
                </div>
              </div>

              {/* Book button */}
              <a
                href="https://calendly.com/your-username/15min" // ← REPLACE WITH YOUR CALENDLY LINK
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-red-600 hover:bg-red-500 active:bg-red-700 text-white text-lg font-bold px-10 py-5 rounded-2xl transition-all shadow-xl shadow-red-900/30 hover:shadow-red-700/40 hover:-translate-y-0.5"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Book My Free Call
              </a>

              {/* Email fallback */}
              <div className="text-center">
                <p className="text-zinc-500 text-sm mb-2">or reach us directly</p>
                <a
                  href="mailto:reelifyllc@gmail.com"
                  className="inline-flex items-center gap-2 text-red-400 hover:text-red-300 font-medium transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  reelifyllc@gmail.com
                </a>
              </div>
            </div>

            {/* RIGHT — stats + social proof */}
            <div className="p-10 md:p-14 flex flex-col justify-center gap-10 bg-zinc-900/40">
              <div className="grid grid-cols-2 gap-8">
                {stats.map(({ stat, label }) => (
                  <div key={label}>
                    <p className="text-4xl font-bold text-red-500 mb-1">{stat}</p>
                    <p className="text-sm text-zinc-500">{label}</p>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-zinc-800" />

              {/* Social proof avatars */}
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[
                    { bg: 'bg-red-600',   letter: 'J' },
                    { bg: 'bg-zinc-600',  letter: 'M' },
                    { bg: 'bg-red-800',   letter: 'S' },
                    { bg: 'bg-zinc-700',  letter: 'A' },
                  ].map(({ bg, letter }) => (
                    <div key={letter} className={`w-9 h-9 rounded-full ${bg} border-2 border-zinc-900 flex items-center justify-center text-xs text-white font-bold`}>
                      {letter}
                    </div>
                  ))}
                </div>
                <p className="text-sm text-zinc-400">
                  Joined by <span className="text-white font-semibold">20+ creators</span> this month
                </p>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap gap-3">
                {['✅ No commitment', '🔒 100% free', '⚡ Same-day reply'].map((badge) => (
                  <span key={badge} className="text-xs text-zinc-300 bg-zinc-800 border border-zinc-700 px-3 py-1.5 rounded-full">
                    {badge}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// MAIN EXPORT
// ─────────────────────────────────────────────
export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const filteredVideos =
    filter === 'all' ? videos : videos.filter((v) => v.category === filter);

  return (
    <>
      {/* ── SERVICES STRIP ── */}
      <section className="bg-zinc-950 border-y border-zinc-800 py-14">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-red-500 text-center mb-10 font-semibold">
            What We Do
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="text-center group">
                <div className="text-4xl mb-3">{s.icon}</div>
                <h4 className="text-white font-semibold mb-1 group-hover:text-red-400 transition-colors">
                  {s.title}
                </h4>
                <p className="text-zinc-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO ── */}
      <section id="portfolio" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header + filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-14">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-red-500 font-semibold mb-2">Portfolio</p>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white">
                Our Latest Work
              </h2>
            </div>
            <div className="flex gap-3">
              {['all', 'short', 'long'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                    filter === cat
                      ? 'bg-red-600 text-white shadow-lg shadow-red-900/30'
                      : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white'
                  }`}
                >
                  {cat === 'all' ? 'All' : cat === 'short' ? 'Short-Form' : 'Long-Form'}
                </button>
              ))}
            </div>
          </div>

          {/* Phone grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-16">
            {filteredVideos.map((video) => (
              <PhoneFrame key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>

      {/* ── BOOKING ── */}
      <Booking />
    </>
  );
}
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
  const embedUrl = `https://www.youtube.com/embed/${video.videoId}?autoplay=1&mute=1&loop=1&playlist=${video.videoId}&controls=1&rel=0&playsinline=1&modestbranding=1`;

  return (
    <div className="flex flex-col items-center group">
      {/* Phone shell */}
      <div
        className="relative mx-auto w-full transition-all duration-500 group-hover:-translate-y-3"
        style={{ maxWidth: '260px' }}
      >
        <div
          className="relative bg-zinc-900 rounded-[3rem] border-[6px] border-zinc-800 group-hover:border-red-500 transition-colors duration-500 shadow-2xl shadow-black/70 overflow-hidden"
          style={{ aspectRatio: '9/19.5' }}
        >
          {/* Side buttons */}
          <div className="absolute -left-[9px] top-[16%] w-[6px] h-7 bg-zinc-700 rounded-l-md" />
          <div className="absolute -left-[9px] top-[25%] w-[6px] h-9 bg-zinc-700 rounded-l-md" />
          <div className="absolute -left-[9px] top-[36%] w-[6px] h-9 bg-zinc-700 rounded-l-md" />
          <div className="absolute -right-[9px] top-[25%] w-[6px] h-14 bg-zinc-700 rounded-r-md" />

          {/* Screen */}
          <div className="absolute inset-[5px] rounded-[2.4rem] overflow-hidden bg-black">
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-zinc-900 rounded-full z-30 flex items-center justify-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-800 border border-zinc-600" />
            </div>

            {/* YouTube Embed */}
            <iframe
              src={embedUrl}
              className="absolute inset-0 w-full h-full"
              style={{ border: 'none' }}
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              title={video.title}
            />

            {/* Category Badge */}
            <div className="absolute top-9 left-2 z-20 pointer-events-none">
              <span className={`text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider shadow ${isLong ? 'bg-blue-600 text-white' : 'bg-red-500 text-white'}`}>
                {isLong ? 'LONG FORM' : 'SHORT FORM'}
              </span>
            </div>

            {/* Duration */}
            <div className="absolute bottom-4 right-2 z-20 pointer-events-none">
              <span className="bg-black/80 text-white text-[9px] font-mono px-1.5 py-0.5 rounded">
                {video.duration}
              </span>
            </div>

            {/* Home Bar */}
            <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-14 h-[3px] bg-white/25 rounded-full z-30" />
          </div>
        </div>

        {/* Glow Effect */}
        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-red-500/20 blur-2xl rounded-full group-hover:bg-red-500/40 transition-all duration-500 pointer-events-none" />
      </div>

      {/* Video Info */}
      <div className="mt-6 text-center px-2">
        <h3 className="text-sm font-semibold text-white group-hover:text-red-400 transition-colors leading-tight">
          {video.title}
        </h3>
        <p className="text-xs text-zinc-500 mt-1">
          {video.views} views · {video.duration}
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN PORTFOLIO COMPONENT
// ─────────────────────────────────────────────
export default function Portfolio() {
  const [filter, setFilter] = useState('all');

  const filteredVideos = 
    filter === 'all' 
      ? videos 
      : videos.filter((v) => v.category === filter);

  return (
    <>
      {/* SERVICES SECTION */}
      <section className="bg-zinc-950 border-y border-zinc-800 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-red-500 text-center mb-10 font-semibold">
            WHAT WE DO
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {services.map((s) => (
              <div key={s.title} className="text-center group">
                <div className="text-5xl mb-4 transition-transform group-hover:scale-110 duration-300">
                  {s.icon}
                </div>
                <h4 className="text-white font-semibold mb-2 group-hover:text-red-400 transition-colors">
                  {s.title}
                </h4>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header + Filters */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-red-500 font-semibold mb-2">PORTFOLIO</p>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tighter text-white">
                Our Latest Work
              </h2>
            </div>

            <div className="flex gap-3 flex-wrap">
              {['all', 'short', 'long'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-2.5 rounded-3xl text-sm font-medium transition-all ${
                    filter === cat
                      ? 'bg-red-500 text-white shadow-lg shadow-red-900/50'
                      : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-700'
                  }`}
                >
                  {cat === 'all' ? 'All Work' : cat === 'short' ? 'Short-Form' : 'Long-Form'}
                </button>
              ))}
            </div>
          </div>

          {/* Phone Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-20">
            {filteredVideos.map((video) => (
              <PhoneFrame key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
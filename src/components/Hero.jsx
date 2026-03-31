// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative pt-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/90 to-black pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 text-center w-full">
        <div
          data-aos="fade-up"
          className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg px-6 py-2.5 rounded-full mb-8 border border-white/10"
        >
          <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
          <span className="text-sm tracking-widest uppercase font-medium">Now Booking 2026 Projects</span>
        </div>

        <h1
          data-aos="fade-up"
          data-aos-delay="150"
          className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8 text-white"
        >
          YOUR STORY.<br />PROFESSIONALLY EDITED.
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-16"
        >
          Premium short-form & long-form video editing for creators, brands and agencies.
        </p>

        <div data-aos="fade-up" data-aos-delay="450" className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="#portfolio"
            className="group bg-white text-black hover:bg-gray-200 px-10 py-5 rounded-2xl text-xl font-semibold transition-all flex items-center justify-center gap-3"
          >
            See Our Work
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center text-sm text-gray-400">
        <span className="animate-bounce text-2xl mb-1">↓</span>
        <span className="tracking-widest text-xs">SCROLL TO EXPLORE</span>
      </div>
    </section>
  );
}
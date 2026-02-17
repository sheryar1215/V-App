export default function Hero() {
  return (
    <section className="min-h-screen flex items-center relative pt-20">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-950/80 to-black pointer-events-none" />

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
          className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8"
        >
          YOUR STORY.<br />PROFESSIONALLY EDITED.
        </h1>

        <p
          data-aos="fade-up"
          data-aos-delay="300"
          className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12"
        >
          Premium short-form & long-form video editing for creators, brands and agencies.
        </p>

        <div data-aos="fade-up" data-aos-delay="450" className="flex flex-col sm:flex-row gap-5 justify-center">
          <a
            href="#book"
            className="bg-red-600 hover:bg-red-700 px-10 py-5 rounded-2xl text-xl font-semibold transition flex items-center justify-center gap-3"
          >
            <i className="fa-solid fa-calendar-days"></i>
            Book Free Strategy Call
          </a>
          <a
            href="#portfolio"
            className="border border-white/50 hover:border-white px-10 py-5 rounded-2xl text-xl font-semibold transition"
          >
            See Our Work →
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-sm text-gray-400">
        <span className="animate-bounce">↓</span>
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
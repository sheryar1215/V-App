export default function Booking() {
  return (
    <section id="book" className="py-32 bg-black border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6" data-aos="fade-up">
          Ready to level up your content?
        </h2>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto" data-aos="fade-up" data-aos-delay="150">
          Book a free 15-minute strategy call. We’ll review your current content and show you exactly what’s possible.
        </p>

        <div
          className="bg-zinc-900/70 rounded-3xl p-10 md:p-16 border border-zinc-800"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="text-lg md:text-xl mb-10 text-gray-300">
            We use Google Calendar scheduling (powered by Calendly). Choose a time that works best for you.
          </p>

          {/* Replace with your real Calendly / Google Calendar link */}
          <a
            href="https://calendly.com/your-username/15min" // ← CHANGE THIS
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-white text-black text-xl md:text-2xl font-semibold px-10 py-6 md:px-14 md:py-8 rounded-2xl hover:bg-red-600 hover:text-white transition-all shadow-xl hover:shadow-red-900/30"
          >
            <i className="fa-solid fa-calendar-check text-3xl"></i>
            Pick a Time → Book Now
          </a>

          <p className="mt-10 text-gray-500">
            or email us directly at{' '}
            <a href="mailto:reelifyllc@gmail.com" className="text-red-400 hover:text-red-300 underline">
              reelifyllc@gmail.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Testimonials() {
  const reviews = [
    {
      text: "Reelify turned my raw footage into 12 viral Reels in under 48 hours. Best investment I’ve made this year.",
      name: "Sarah Chen",
      role: "@sarahbuilds • Content Creator",
    },
    {
      text: "The long-form edit for our podcast episode got 180k views in the first week. The pacing and captions are next level.",
      name: "Marcus Rivera",
      role: "CEO, GrowthOS",
    },
    {
      text: "Professional, fast, and the quality is insane. They just get the vibe I want every single time.",
      name: "Elena Voss",
      role: "Content Creator • 1.2M followers",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-6xl font-bold text-center tracking-tight mb-16" data-aos="fade-up">
          What Our Clients Say
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-zinc-900/70 p-8 rounded-3xl border border-zinc-800 hover:border-zinc-600 transition-all"
              data-aos="fade-up"
              data-aos-delay={i * 150}
            >
              <p className="italic text-lg leading-relaxed mb-8 text-gray-200">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gradient-to-br from-zinc-700 to-zinc-800 rounded-full flex-shrink-0"></div>
                <div>
                  <p className="font-semibold">{review.name}</p>
                  <p className="text-sm text-gray-500">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
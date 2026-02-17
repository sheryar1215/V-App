export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">What We Edit</h2>
          <p className="text-xl text-gray-400">From viral Reels to cinematic long-form content</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: "fa-bolt",
              title: "Short-Form Magic",
              desc: "Reels, TikToks, YouTube Shorts — hook in 3 seconds, keep them scrolling.",
            },
            {
              icon: "fa-film",
              title: "Long-Form Cinema",
              desc: "YouTube videos, podcasts, brand films — storytelling that converts.",
            },
            {
              icon: "fa-rocket",
              title: "SaaS & Promo",
              desc: "Product explainer videos, launch reels, demo videos that sell.",
            },
          ].map((item, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={i * 150}
              className="bg-zinc-900/70 p-10 rounded-3xl border border-zinc-800 hover:border-zinc-600 transition-all group"
            >
              <div className="text-red-500 text-6xl mb-6">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <h3 className="text-3xl font-semibold mb-4">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
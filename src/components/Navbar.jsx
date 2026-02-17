export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 border border-white/30 rounded flex items-center justify-center">
            <i className="fa-solid fa-play text-white text-xl"></i>
          </div>
          <span className="text-3xl font-bold tracking-tighter">REELIFY</span>
        </div>

        <div className="hidden md:flex items-center gap-10 text-sm font-medium">
          <a href="#services" className="hover:text-red-500 transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-red-500 transition-colors">Portfolio</a>
          <a href="#testimonials" className="hover:text-red-500 transition-colors">Testimonials</a>
          <a href="#book" className="hover:text-red-500 transition-colors">Book Now</a>
        </div>

        <a
          href="#book"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-colors"
        >
          Book Consultation
        </a>
      </div>
    </nav>
  );
}
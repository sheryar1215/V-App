import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-out-cubic',
    });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen font-sans antialiased">
      <Navbar />
      <Hero />
      <Services />
      {/* <Portfolio /> */}
      <Testimonials />
      <Booking />

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-16 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-10 border border-white/40 rounded flex items-center justify-center">
              <i className="fa-solid fa-play text-xl"></i>
            </div>
            <span className="text-4xl font-bold tracking-tight">REELIFY</span>
          </div>
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Reelify LLC • All Rights Reserved
          </p>
          <p className="text-gray-600 text-xs mt-2">
            reelifyllc@gmail.com
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
import { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import MobileDock from './components/MobileDock';
import MatrixEasterEgg from './components/MatrixEasterEgg';
import ScrollToTop from './components/ScrollToTop';
import CursorSpotlight from './components/AmbientBackground';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import About from './sections/About';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import CustomCursor from './components/CustomCursor';
import TerminalOverlay from './components/TerminalOverlay';
import { DevModeProvider } from './components/DevModeContext';
import TerminalBot from './components/TerminalBot';

function App() {
  useEffect(() => {
    const terminalTitles = [
      "murtaza@dev:~$ portfolio_active",
      "murtaza@dev:~$ status: online",
      "Murtaza Dawoodjeewala | Best Web Developer in Ratlam & MP",
      "murtaza@dev:~$ git status --clean",
    ];
    
    let currentIndex = 0;
    const titleInterval = setInterval(() => {
      document.title = terminalTitles[currentIndex];
      currentIndex = (currentIndex + 1) % terminalTitles.length;
    }, 3500); // Changes every 3.5 seconds

    return () => clearInterval(titleInterval);
  }, []);

  return (
    <HelmetProvider>
      <DevModeProvider>
        {/* GLOBAL SEO META INJECTION */}
        <Helmet>
          <title>Murtaza Dawoodjeewala | Best Web Developer in Ratlam, MP & React Expert</title>
          <meta name="description" content="Looking for the best web developer in MP or a React developer in Ratlam? Meet Murtaza Dawoodjeewala, CEO of Webblers IT Solutions, building high-end web apps." />
          <meta name="keywords" content="Best Web Developer in MP, Best Developer in Ratlam, Frontend Developer in Ratlam, React Developer in Ratlam, Website Builder in Ratlam, Webblers CEO, Murtaza Dawoodjeewala" />
          
          {/* OpenGraph / Social Meta tags */}
          <meta property="og:title" content="Murtaza Dawoodjeewala | Best Web Developer in Ratlam & MP" />
          <meta property="og:description" content="Expert Frontend & React Developer, UI/UX Designer, and CEO of Webblers IT Solutions based in Ratlam, Madhya Pradesh." />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://yourdomain.com" />
        </Helmet>

        <main className="relative min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500/30 overflow-hidden print:overflow-visible print:bg-white">
          <div className="print:hidden">
            <CursorSpotlight />
            <CustomCursor />
            <TerminalOverlay />
            <MatrixEasterEgg />
            <MobileDock />
            <Navbar />
            <ScrollToTop />
            <Hero />
            <Skills />
            <About />
            <Projects />
            <Experience />
            <Contact />
            <TerminalBot />
          </div>
        </main>
      </DevModeProvider>
    </HelmetProvider>
  );
}

export default App;
import Navbar from './components/Navbar';
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

function App() {
  return (
    <DevModeProvider>
      <main className="relative min-h-screen bg-zinc-950 text-white font-sans selection:bg-emerald-500/30 overflow-hidden print:overflow-visible print:bg-white">
        <div className="print:hidden">
          <CursorSpotlight />
          <CustomCursor />
          <TerminalOverlay />
          <Navbar />
          <ScrollToTop />
          <Hero />
          <Skills />
          <About />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </main>
    </DevModeProvider>
  );
}

export default App;
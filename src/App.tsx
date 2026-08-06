import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TerminalSkills from './components/TerminalSkills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Footer from './components/Footer';
import ScrollProgressBar from './components/ScrollProgressBar';

function App() {
  return (
    <div className="bg-[#F0EFE9] text-[#0A0A0A] min-h-screen selection:bg-[#0A0A0A] selection:text-[#F0EFE9] font-sans antialiased overflow-x-hidden">
      <ScrollProgressBar />
      <Navigation />

      <main>
        <Hero />
        <TerminalSkills />
        <Experience />
        <Projects />
        <Certificates />
      </main>

      <Footer />
    </div>
  );
}

export default App;

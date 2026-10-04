import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import SkillsPage from './pages/Skills';
import ProjectsPage from './pages/Projects';
import CadTechPage from './pages/projects/CadTech';
import MoversPackersPage from './pages/projects/MoversPackers';
import PortfolioPage from './pages/projects/Portfolio';
import JourneyPage from './pages/Journey';
import ResumePage from './pages/Resume';
import ContactPage from './pages/Contact';
import NotFoundPage from './pages/NotFound';

function AppShell() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <main className="app-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/projects/cadtech" element={<CadTechPage />} />
          <Route path="/projects/movers-packers" element={<MoversPackersPage />} />
          <Route path="/projects/portfolio" element={<PortfolioPage />} />
          <Route path="/journey" element={<JourneyPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppShell />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

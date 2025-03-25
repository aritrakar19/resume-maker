import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import TemplateSelection from './components/TemplateSelection';
import CreateResume from './components/CreateResume';
import Preview from './components/Preview';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/templates" element={<TemplateSelection />} />
          <Route path="/create" element={<CreateResume />} />
          <Route path="/preview" element={<Preview />} />
          <Route path="/about" element={<About />} />
          <Route path="/why-choose-us" element={<WhyChooseUs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </SnackbarProvider>
  );
}

export default App;

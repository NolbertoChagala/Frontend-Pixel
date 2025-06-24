import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ContactForm from './components/ContactForm';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Aviso from './view/Aviso';

function Home() {
  return (
    <div className="landing">
      <Navbar />
      <Header />
      <Services />
      <About />
      <Projects />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aviso" element={<Aviso />} />
      </Routes>
    </Router>
  );
}

export default App;

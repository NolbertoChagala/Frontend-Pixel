import './App.css';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import Services from './components/Services';
import About from './components/About';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import './styles/App.css';


function App() {
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

export default App

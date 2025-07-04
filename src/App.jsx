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
import Login from './view/Login';
import Register from './view/Register';
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from './view/Dashboard';

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
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/aviso" 
          element={
            <ProtectedRoute>
              <Aviso />
            </ProtectedRoute>
          } 
        />
         <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } 
        />

        {/* RUTAS PÚBLICAS */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;

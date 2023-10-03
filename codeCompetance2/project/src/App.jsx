import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';

export default function App() {
  return (
    <div>
      <Navbar />
      <Welcome />
      <Contact />
      <About />
      <Footer />
    </div>
  );
}

// App-wide styles are consolidated in per-section CSS and index.css
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

import Header from './sections/Header';
import Hero from './sections/Hero';
import Facts from './sections/Facts';
import About from './sections/About';
import Symptoms from './sections/Symptoms';
import Testimonials from './sections/Testimonials';
import Process from './sections/Process';
import Benefits from './sections/Benefits';
import HowToBook from './sections/HowToBook';
import FAQ from './sections/FAQ';
import Footer from './sections/Footer';
import FormSection from './FormSection';

function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Facts />
        <About />
        <Symptoms />
        <FormSection formType="first"/>
        <Testimonials />
        <Process />
        <Benefits />
        <HowToBook />
        <FAQ />
        <FormSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;

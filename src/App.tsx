import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { CarPark } from './components/CarPark';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { Contact } from './components/Contact';

function App() {
  return (

    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      <main className="max-w-7xl mx-auto px-4 py-12 pt-16">
        <section id="services">
          <Services />
        </section>
        <section id="cars">
          <CarPark />
        </section>
        <section id="why-us">
          <WhyChooseUs />
        </section>
        <section id="reviews">
          <Reviews />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>&copy; 2024 Kondiční jízdy Moravec. Všechna práva vyhrazena.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
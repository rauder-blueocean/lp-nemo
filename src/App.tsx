import { Routes, Route } from 'react-router-dom';
import Hero from './componentes/hero';
import Header from './componentes/hearder';
import System from './componentes/system';
import Testimonials from './componentes/testimonials';
import CTA from './componentes/cta';
import Footer from './componentes/foorter';
import Servicos from './componentes/servicos';
import FAQ from './componentes/faq';
import CardLead from './componentes/cardlead';
import Logos from './componentes/logos';
  
// Página inicial
function HomePage() {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Header />
      <Hero />
      <System />
      <Logos />
      <Servicos />
      <Testimonials />
      <CardLead />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
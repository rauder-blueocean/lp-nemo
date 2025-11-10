import Hero from './componentes/hero';
import Header from './componentes/hearder';
import System from './componentes/system';
import Testimonials from './componentes/testimonials';
import CTA from './componentes/cta';
import Footer from './componentes/foorter';

export default function App() {
  return ( 
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Header />
      <Hero />
      <System />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
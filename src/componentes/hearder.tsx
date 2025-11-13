import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from './button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='fixed top-0 left-0 right-0 w-full bg-white border-b border-border-primary z-50'>
      <div className='flex flex-row justify-between items-center p-4 px-6'>
        <img src="/nemo-logo.svg" alt="logo" className='h-5 lg:w-[180px] animate-fade-in' />
        
        {/* Menu de navegação desktop */}
        <nav className='hidden md:flex items-center gap-8 font-semibold animate-fade-in animate-delay-100'>
          <Link to="/" className='text-text-primary hover:bg-border-primary transition-colors py-1 px-3 rounded-lg'>
            Home
          </Link>
          <a href="#servicos" className='text-text-primary hover:bg-border-primary transition-colors py-1 px-3 rounded-lg'>
            Serviços
          </a>
          <a href="#suporte" className='text-text-primary hover:bg-border-primary transition-colors py-1 px-3 rounded-lg'>
            Suporte
          </a>
          <Link to="/faq" className='text-text-primary hover:bg-border-primary transition-colors py-1 px-3 rounded-lg'>
            FAQ
          </Link>
        </nav>
          <Button className='hidden md:block px-6 py-2 animate-fade-in animate-delay-200'>
            Entre em Contato
          </Button>

        {/* Menu hambúrguer mobile */}
        <button onClick={toggleMenu} className='md:hidden z-50'>
          {isMenuOpen ? (
            <X className='w-6 h-6 text-text-primary' />
          ) : (
            <Menu className='w-6 h-6 text-text-primary' />
          )}
        </button>
      </div>

      {/* Dropdown Menu Mobile */}
      <div 
        className={`md:hidden w-full overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className='flex flex-col p-6 gap-4 border-t border-border-primary'>
          <Link 
            to="/" 
            onClick={toggleMenu}
            className='text-text-primary hover:text-blue-primary transition-colors py-2 font-semibold'
          >
            Home
          </Link>
          <a 
            href="#servicos" 
            onClick={toggleMenu}
            className='text-text-primary hover:text-blue-primary transition-colors py-2 font-semibold'
          >
            Serviços
          </a>
          <a 
            href="#suporte" 
            onClick={toggleMenu}
            className='text-text-primary hover:text-blue-primary transition-colors py-2 font-semibold'
          >
            Suporte
          </a>
          <Link 
            to="/faq" 
            onClick={toggleMenu}
            className='text-text-primary hover:text-blue-primary transition-colors py-2 font-semibold'
          >
            FAQ
          </Link>
          <Button className='px-6 py-2'>
            Entre em Contato
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Header;
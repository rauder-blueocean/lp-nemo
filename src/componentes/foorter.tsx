const Footer = () => {
  return (
    <footer className='relative h-fit w-screen overflow-x-hidden bg-[color:var(--color-text-primary)] px-8 py-8 flex flex-col items-center gap-4 z-10'>
        <div className='flex w-full flex-row justify-between'>
            <img src="/nemo-logo-white.svg" alt="logo" className='h-5'/>
            <div className='flex items-center gap-4'>
            <a href="https://www.instagram.com/nemocrm/" target="_blank" rel="noopener noreferrer" className='hover:opacity-80 transition-opacity'>
                <img src="/instagram.svg" alt="Instagram" className='w-5 h-5'/>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='hover:opacity-80 transition-opacity'>
                <img src="/linkedin.svg" alt="LinkedIn" className='w-5 h-5'/>
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className='hover:opacity-80 transition-opacity'>
                <img src="/whatsapp.svg" alt="WhatsApp" className='w-5 h-5'/>
            </a>
            </div>
        </div>
        <div className="h-[1px] w-full bg-border-primary"></div>
        <p className='text-sm leading-tight text-white'>
          Ao continuar, você concorda com nossos{' '}
          <a href="/termos" className='underline hover:opacity-80 transition-opacity'>Termos e Condições</a>.{' '}
          © 2025 Nemo CRM{' '}
          <a href="/privacidade" className='underline hover:opacity-80 transition-opacity'>Privacidade</a>{' '}
          <a href="/suporte" className='underline hover:opacity-80 transition-opacity'>Suporte</a>
        </p>
    </footer>
  )
}

export default Footer;
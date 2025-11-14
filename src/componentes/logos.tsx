const Logos = () => {
  const logos = [
    { src: '/logo1.png', alt: 'Logo 1', height: 'h-[20px]' },
    { src: '/logo2.png', alt: 'Logo 2', height: 'h-[25px]' },
    { src: '/logo3.png', alt: 'Logo 3', height: 'h-[25px] mb-1' },
    { src: '/logo4.png', alt: 'Logo 4', height: 'h-[25px] mb-1' },
  ];

  return (
    <div className='relative w-screen overflow-x-hidden pb-24 pt-12'>
      {/* Versão Mobile - Carrossel */}
      <div className='lg:hidden relative h-[40px] overflow-hidden'>
        {/* Gradient esquerdo */}
        <div className='absolute left-0 top-0 bottom-0 w-[60px] bg-gradient-to-r from-white to-transparent pointer-events-none z-10' />
        
        {/* Container do carrossel */}
        <div className='flex gap-8 animate-scroll-horizontal'>
          {/* Primeira sequência */}
          {logos.map((logo, index) => (
            <div 
              key={`first-${index}`}
              className='flex items-center justify-center flex-shrink-0'
            >
              <img 
                src={logo.src} 
                alt={logo.alt}
                className={logo.height}
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40"%3E%3Crect fill="%23e5e7eb" width="100" height="40"/%3E%3C/svg%3E';
                }}
              />
            </div>
          ))}
          
          {/* Segunda sequência (duplicada para efeito infinito) */}
          {logos.map((logo, index) => (
            <div 
              key={`second-${index}`}
              className='flex items-center justify-center flex-shrink-0'
            >
              <img 
                src={logo.src} 
                alt={logo.alt}
                className={logo.height}
                onError={(e) => {
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40"%3E%3Crect fill="%23e5e7eb" width="100" height="40"/%3E%3C/svg%3E';
                }}
              />
            </div>
          ))}
        </div>
        
        {/* Gradient direito */}
        <div className='absolute right-0 top-0 bottom-0 w-[60px] bg-gradient-to-l from-white to-transparent pointer-events-none z-10' />
      </div>

      {/* Versão Desktop - Linha fixa */}
      <div className='hidden lg:flex flex-row gap-12 items-center justify-center'>
        {logos.map((logo, index) => (
          <img 
            key={index}
            className={logo.height} 
            src={logo.src} 
            alt={logo.alt}
            onError={(e) => {
              e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 40"%3E%3Crect fill="%23e5e7eb" width="100" height="40"/%3E%3C/svg%3E';
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Logos;

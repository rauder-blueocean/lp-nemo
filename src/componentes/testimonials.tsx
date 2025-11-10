const Testimonials = () => {
  // Imagens do time - você precisará adicionar as imagens reais na pasta public
  const teamPhotos = [
    '/team/person1.jpg',
    '/team/person2.jpg',
    '/team/person3.jpg',
    '/team/person4.jpg',
    '/team/person5.jpg',
    '/team/person6.jpg',
    '/team/person7.jpg',
    '/team/person8.jpg',
  ];

  const testimonials = [
    {
      name: 'Lucas Lins',
      avatar: '/avatars/lucas.jpg',
      message: 'Oi Gio, boa tarde!! Tudo certo sim, e por aí? Vocês são sensacionais, aí não precisamos de mais nada pois vocês já fazem as atualizações antes da gente pedir hehehe'
    },
    {
      name: 'Lucas',
      avatar: '/avatars/lucas2.jpg',
      message: 'Vocês têm superado nossas expectativas e você tem sido como uma amiga pra gente, de verdade. Muito obrigado pela excelência'
    },
    {
      name: 'Lucas',
      avatar: '/avatars/lucas2.jpg',
      message: 'Vocês têm superado nossas expectativas e você tem sido como uma amiga pra gente, de verdade. Muito obrigado pela excelência'
    }
  ];

  return (
    <div className='relative h-fit w-screen overflow-x-hidden bg-white px-6 py-8 flex flex-col items-center'>
      <div className='w-full flex flex-col gap-7'>
        {/* Título e Descrição */}
        <div className='flex flex-col gap-2 text-center'>
          <h2 className='text-[20px] font-bold text-text-primary leading-tight'>
            Crescimento previsível começa <br /> com tecnologia sólida e suporte <br /> que entende SaaS.
          </h2>
          <p className='text-[12px] font-medium text-text-secondary'>
            Na Nemo, você não recebe apenas um CRM. Você recebe um time que acompanha sua operação, apoia sua implementação e garante que cada métrica avance.
          </p>
        </div>

        {/* Grid de Fotos do Time */}
        <div className='flex flex-wrap gap-5 justify-center'>
          {teamPhotos.map((photo, index) => (
            <div 
              key={index}
              className='w-[66px] h-[66px] rounded-[4px] bg-gray-200 overflow-hidden relative'
            >
              <img 
                src={photo} 
                alt={`Team member ${index + 1}`}
                className='w-full h-full object-cover'
                onError={(e) => {
                  // Fallback se a imagem não existir
                  e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66"%3E%3Crect fill="%23e5e7eb" width="66" height="66"/%3E%3C/svg%3E';
                }}
              />
              <div className='absolute inset-0 bg-[rgba(102,120,148,0.12)] mix-blend-color' />
            </div>
          ))}
        </div>

        {/* Carrossel de Depoimentos */}
        <div className='relative h-[400px] w-[375px] mx-auto overflow-hidden'>
          {/* Gradient no topo */}
          <div className='absolute top-0 left-0 right-0 h-[102px] bg-gradient-to-b from-white to-transparent pointer-events-none z-10' />
          
          {/* Container do carrossel com animação infinita */}
          <div className='flex flex-col gap-7 animate-scroll-infinite'>
            {/* Primeira sequência de cards */}
            {testimonials.map((testimonial, index) => (
              <div 
                key={`first-${index}`}
                className='bg-white border border-border-primary rounded-xl px-6 py-6 flex gap-4 min-h-[120px] flex-shrink-0'
              >
                <div className='w-11 h-11 rounded-full bg-gray-200 overflow-hidden flex-shrink-0'>
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className='w-full h-full object-cover'
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44"%3E%3Ccircle fill="%23e5e7eb" cx="22" cy="22" r="22"/%3E%3C/svg%3E';
                    }}
                  />
                </div>
                <div className='flex flex-col gap-0.5 flex-1'>
                  <p className='text-sm font-extrabold text-text-primary leading-tight'>
                    {testimonial.name}
                  </p>
                  <p className='text-sm font-medium text-text-secondary '>
                    {testimonial.message}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Segunda sequência de cards (duplicada para efeito infinito) */}
            {testimonials.map((testimonial, index) => (
              <div 
                key={`second-${index}`}
                className='bg-white border border-border-primary rounded-xl px-6 py-6 flex gap-4 min-h-[120px] flex-shrink-0'
              >
                <div className='w-11 h-11 rounded-full bg-gray-200 overflow-hidden flex-shrink-0'>
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className='w-full h-full object-cover'
                    onError={(e) => {
                      e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44"%3E%3Ccircle fill="%23e5e7eb" cx="22" cy="22" r="22"/%3E%3C/svg%3E';
                    }}
                  />
                </div>
                <div className='flex flex-col gap-0.5 flex-1'>
                  <p className='text-sm font-extrabold text-text-primary leading-tight'>
                    {testimonial.name}
                  </p>
                  <p className='text-sm font-medium text-text-secondary '>
                    {testimonial.message}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Gradient no fim */}
          <div className='absolute bottom-0 left-0 right-0 h-[116px] bg-gradient-to-t from-white to-transparent pointer-events-none z-10' />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;


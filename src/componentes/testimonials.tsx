import { useInView } from '../hooks/useInView';

const Testimonials = () => {
  const titleRef = useInView({ threshold: 0.2 });
  const descRef = useInView({ threshold: 0.2 });

  // Imagens do time
  const teamPhotos = [
    '/foto1.png',
    '/foto2.png',
    '/foto3.png',
    '/foto4.png',
    '/foto5.png',
    '/foto7.png',
    '/foto8.png'
  ];

  const testimonials = [
    {
      name: 'Mariana Duarte',
      role: 'Head de Vendas SaaS',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      message: 'A Nemo centralizou tudo: WhatsApp, leads e funil. Hoje respondo clientes 3x mais rápido e fecho muito mais oportunidades.'
    },
    {
      name: 'Renato Silveira',
      role: 'Gerente de Suporte & CX',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      message: 'Automatizamos o WhatsApp e reduzimos em 40% o tempo de atendimento. A equipe finalmente consegue focar em vender.'
    },
    {
      name: 'Bianca Moretti',
      role: 'Product Marketing Manager',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg',
      message: 'O que mais me impressionou foi a simplicidade. Em um dia já tínhamos fluxos rodando e o time inteiro usando sem dor de cabeça.'
    },
    {
      name: 'Lucas Amaral',
      role: 'SDR Leader',
      avatar: 'https://randomuser.me/api/portraits/men/75.jpg',
      message: 'O card do lead é perfeito. Todas as informações na mão e sem precisar sair do sistema para responder no WhatsApp.'
    },
    {
      name: 'Carla Menezes',
      role: 'COO de Startup B2B',
      avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
      message: '“Depois que migramos para a Nemo, nossa operação ficou previsível. Funis claros, automações inteligentes e suporte que realmente ajuda.”'
    }
  ];

  return (
    <div id='testimonials' className='relative h-fit w-screen overflow-x-hidden bg-white px-6 lg:px-[74px] py-24 flex flex-col items-center justify-center'>
      <div className='w-full flex flex-col lg:flex-row gap-24 justify-center'>
        <div className='flex flex-col gap-7 justify-center'>
        {/* Título e Descrição */}
        <div className='flex flex-col gap-2 text-center lg:text-left'>
          <div ref={titleRef.ref}>
            <h2 className={`text-[24px] lg:w-[532px] font-bold text-text-primary leading-tight lg:text-3xl lg:leading-tight transition-all duration-800 ${titleRef.isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              Crescimento previsível <br className='hidden lg:block' /> começa <br className='block lg:hidden' /> com tecnologia sólida <br className='hidden lg:block' /> e suporte <br className='block lg:hidden' /> que entende SaaS.
            </h2>
          </div>
          <div ref={descRef.ref}>
            <p className={`text-[14px] lg:w-[600px] lg:text-xl font-medium text-text-secondary transition-all duration-1000 ${descRef.isInView ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
              Na Nemo, você não recebe apenas um CRM. Você recebe um time que acompanha sua operação, apoia sua implementação e garante que cada métrica avance.
            </p>
          </div>
        </div>

        {/* Grid de Fotos do Time - Mobile/Tablet */}
        <div className='block lg:hidden flex flex-wrap gap-5 justify-center'>
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

        {/* Carrossel Horizontal - Desktop (lg:) */}
        <div className='hidden lg:block relative h-[86px] overflow-hidden w-full max-w-[800px]'>
          {/* Gradient esquerdo */}
          <div className='absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-white to-transparent pointer-events-none z-10' />
          
          {/* Container do carrossel */}
          <div className='flex gap-5 animate-scroll-horizontal'>
            {/* Primeira sequência */}
            {teamPhotos.map((photo, index) => (
              <div 
                key={`first-${index}`}
                className='w-[66px] h-[66px] rounded-[4px] bg-gray-200 overflow-hidden relative flex-shrink-0'
              >
                <img 
                  src={photo} 
                  alt={`Team member ${index + 1}`}
                  className='w-full h-full object-cover'
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66"%3E%3Crect fill="%23e5e7eb" width="66" height="66"/%3E%3C/svg%3E';
                  }}
                />
                <div className='absolute inset-0 bg-[rgba(102,120,148,0.12)] mix-blend-color' />
              </div>
            ))}
            
            {/* Segunda sequência (duplicada para efeito infinito) */}
            {teamPhotos.map((photo, index) => (
              <div 
                key={`second-${index}`}
                className='w-[66px] h-[66px] rounded-[4px] bg-gray-200 overflow-hidden relative flex-shrink-0'
              >
                <img 
                  src={photo} 
                  alt={`Team member ${index + 1}`}
                  className='w-full h-full object-cover'
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 66 66"%3E%3Crect fill="%23e5e7eb" width="66" height="66"/%3E%3C/svg%3E';
                  }}
                />
                <div className='absolute inset-0 bg-[rgba(102,120,148,0.12)] mix-blend-color' />
              </div>
            ))}
          </div>
          
          {/* Gradient direito */}
          <div className='absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-white to-transparent pointer-events-none z-10' />
        </div>
        </div>

        {/* Carrossel de Depoimentos */}
        <div className='relative h-[400px] w-full mx-auto overflow-hidden lg:mx-0 lg:w-[375px]'>
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
                  <p className='text-xs font-medium text-text-secondary leading-tight'>
                    {testimonial.role}
                  </p>
                  <p className='text-sm font-medium text-text-secondary mt-1'>
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
                  <p className='text-xs font-medium text-text-secondary leading-tight'>
                    {testimonial.role}
                  </p>
                  <p className='text-sm font-medium text-text-secondary mt-1'>
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


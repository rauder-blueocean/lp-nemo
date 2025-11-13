import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import { useInView } from '../hooks/useInView';
import { useEffect } from 'react';

const CardLead = () => {
  const cardRef = useInView({ threshold: 0.2 });
  const cardDeskRef = useInView({ threshold: 0.2 });

  const { rive: riveMobile, RiveComponent: RiveComponentMobile } = useRive({
    src: '/cardlead.riv',
    autoplay: false,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  const { rive: riveDesktop, RiveComponent: RiveComponentDesktop } = useRive({
    src: '/cardlead_desk.riv',
    autoplay: false,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  // Controla a animação Rive Mobile quando entra na viewport
  useEffect(() => {
    if (cardRef.isInView && riveMobile) {
      riveMobile.play();
    }
  }, [cardRef.isInView, riveMobile]);

  // Controla a animação Rive Desktop quando entra na viewport
  useEffect(() => {
    if (cardDeskRef.isInView && riveDesktop) {
      riveDesktop.play();
    }
  }, [cardDeskRef.isInView, riveDesktop]);

  return (
    <div className='flex flex-col gap-2 w-screen overflow-x-hidden bg-white px-6 py-8 flex flex-col items-center'>
      <h1 className='text-2xl font-bold text-text-primary lg:text-4xl'>Converse, configure e converta sem sair do sistema.</h1>
      <p className='text-sm text-text-secondary lg:text-xl'>O WhatsApp é integrado nativamente — responda leads, edite informações e avance negócios direto do CRM.</p>
      {/* Versão Mobile */}
      <div ref={cardRef.ref} className='w-full max-w-[800px] mt-4 lg:hidden'>
        <div className='shadow-lg rounded-[9px] overflow-hidden border border-border-primary' style={{ aspectRatio: '9 / 12.8' }}>
          <RiveComponentMobile 
            style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
          />
        </div>
      </div>

      {/* Versão Desktop */}
      <div ref={cardDeskRef.ref} className='w-full max-w-[1200px] mt-4 hidden lg:block'>
        <div className='shadow-lg overflow-hidden border border-border-primary' style={{ aspectRatio: '16 / 9.437' }}>
          <RiveComponentDesktop 
            style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
          />
        </div>
      </div>
    </div>
  );
};

export default CardLead;
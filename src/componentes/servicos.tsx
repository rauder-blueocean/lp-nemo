import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import { useInView } from '../hooks/useInView';
import { useEffect } from 'react';

const Servicos = () => {
  const card1Ref = useInView({ threshold: 0.2 });
  const card2Ref = useInView({ threshold: 0.2 });
  const card3Ref = useInView({ threshold: 0.2 });
  const card4Ref = useInView({ threshold: 0.2 });
  const card5Ref = useInView({ threshold: 0.2 });

  const { rive: rive1, RiveComponent: RiveComponent1 } = useRive({
    src: '/criacao_de_lead_final.riv',
    autoplay: false,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  const { rive: rive2, RiveComponent: RiveComponent2 } = useRive({
    src: '/edicao_da_pipelinefinal.riv',
    autoplay: false,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  const { rive: rive3, RiveComponent: RiveComponent3 } = useRive({
    src: '/graficos.riv',
    autoplay: false,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  const { rive: rive4, RiveComponent: RiveComponent4 } = useRive({
    src: '/menssagens.riv',
    autoplay: false,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  const { rive: rive5, RiveComponent: RiveComponent5 } = useRive({
    src: '/relogio.riv',
    autoplay: false,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  const titleRef = useInView({ threshold: 0.2 });
  const descRef = useInView({ threshold: 0.2 });

  // Controla a animação Rive 1 quando entra na viewport
  useEffect(() => {
    if (card1Ref.isInView && rive1) {
      rive1.play();
    }
  }, [card1Ref.isInView, rive1]);

  // Controla a animação Rive 2 quando entra na viewport
  useEffect(() => {
    if (card2Ref.isInView && rive2) {
      rive2.play();
    }
  }, [card2Ref.isInView, rive2]);

  // Controla a animação Rive 3 quando entra na viewport
  useEffect(() => {
    if (card3Ref.isInView && rive3) {
      rive3.play();
    }
  }, [card3Ref.isInView, rive3]);

  // Controla a animação Rive 4 quando entra na viewport
  useEffect(() => {
    if (card4Ref.isInView && rive4) {
      rive4.play();
    }
  }, [card4Ref.isInView, rive4]);

  // Controla a animação Rive 5 quando entra na viewport
  useEffect(() => {
    if (card5Ref.isInView && rive5) {
      rive5.play();
    }
  }, [card5Ref.isInView, rive5]);

  return (
    <div id='servicos' className='relative h-fit w-screen overflow-x-hidden bg-white px-6 py-8 flex flex-col items-center'>
      <div ref={titleRef.ref}>
        <h1 className={`text-2xl font-bold text-center text-text-primary lg:text-5xl leading-tight lg:leading-tight transition-all duration-800 ${titleRef.isInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
          Tudo o que sua operação SaaS <br /> precisa. Em um só lugar.
        </h1>
      </div>
      <div ref={descRef.ref}>
        <p className={`text-sm text-text-secondary text-center leading-tight lg:text-lg mt-2 transition-all duration-1000 ${descRef.isInView ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
          A Nemo é composta por cinco módulos integrados que tornam sua operação mais eficiente, previsível <br /> e escalável. (fazer igual site da attio, mostrando dashboards de cada etapa)
        </p>
      </div>
      <div className='flex flex-col gap-4 w-full mt-8 md:flex-row md:flex-wrap md:justify-center lg:w-[1200px]'>
        <div ref={card1Ref.ref} className='shadow-lg rounded-[9px] w-full md:w-[327px] overflow-hidden' style={{ aspectRatio: '327 / 251' }}>
          <RiveComponent1 
            style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
          />
        </div>
        <div ref={card2Ref.ref} className='shadow-lg rounded-[9px] w-full md:w-[327px] overflow-hidden' style={{ aspectRatio: '327 / 251' }}>
          <RiveComponent2 
            style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
          />
        </div>
        <div ref={card3Ref.ref} className='shadow-lg rounded-[9px] w-full md:w-[327px] overflow-hidden' style={{ aspectRatio: '327 / 251' }}>
          <RiveComponent3 
            style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
          />
        </div>
        <div ref={card4Ref.ref} className='shadow-lg rounded-[9px] w-full md:w-[327px] overflow-hidden' style={{ aspectRatio: '327 / 251' }}>
          <RiveComponent4 
            style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
          />
        </div>
        <div ref={card5Ref.ref} className='shadow-lg rounded-[9px] w-full md:w-[327px] overflow-hidden' style={{ aspectRatio: '327 / 251' }}>
          <RiveComponent5 
            style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Servicos;
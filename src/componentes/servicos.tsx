import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import { useInView } from '../hooks/useInView';

const Servicos = () => {
  const { RiveComponent: RiveComponent1 } = useRive({
    src: '/criacao_de_lead_final.riv',
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  const { RiveComponent: RiveComponent2 } = useRive({
    src: '/edicao_da_pipelinefinal.riv',
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  const { RiveComponent: RiveComponent3 } = useRive({
    src: '/graficos.riv',
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  const titleRef = useInView({ threshold: 0.2 });
  const descRef = useInView({ threshold: 0.2 });
  const card1Ref = useInView({ threshold: 0.2 });
  const card2Ref = useInView({ threshold: 0.2 });
  const card3Ref = useInView({ threshold: 0.2 });

  return (
    <div className='relative h-fit w-screen overflow-x-hidden bg-white px-6 py-8 flex flex-col items-center'>
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
      <div className='flex flex-col gap-4 w-full md:w-fit md:flex-row mt-8'>
        <div ref={card1Ref.ref} className={`shadow-lg rounded-[9px] w-full md:w-[327px] overflow-hidden transition-all duration-800 ${card1Ref.isInView ? 'animate-fade-in-up animate-delay-300' : 'opacity-0 translate-y-8'}`} style={{ aspectRatio: '327 / 251' }}>
          <RiveComponent1 
            style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
          />
        </div>
        <div ref={card2Ref.ref} className={`shadow-lg rounded-[9px] w-full md:w-[327px] overflow-hidden transition-all duration-800 ${card2Ref.isInView ? 'animate-fade-in-up animate-delay-400' : 'opacity-0 translate-y-8'}`} style={{ aspectRatio: '327 / 251' }}>
          <RiveComponent2 
            style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
          />
        </div>
        <div ref={card3Ref.ref} className={`shadow-lg rounded-[9px] w-full md:w-[327px] overflow-hidden transition-all duration-800 ${card3Ref.isInView ? 'animate-fade-in-up animate-delay-500' : 'opacity-0 translate-y-8'}`} style={{ aspectRatio: '327 / 251' }}>
          <RiveComponent3 
            style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
          />
        </div>
      </div>
    </div>
  )
}

export default Servicos;
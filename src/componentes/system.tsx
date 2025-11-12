import { useState, useEffect } from 'react';
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import { useInView } from '../hooks/useInView';

type Tab = 'pipeline' | 'dashboard' | 'workflows';

const System = () => {
  const [activeTab, setActiveTab] = useState<Tab>('pipeline');
  const pipelineRef = useInView({ threshold: 0.1 });

  const { rive, RiveComponent } = useRive({
    src: '/pipeline.riv',
    autoplay: false,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  // Controla a animação Rive quando entra na viewport
  useEffect(() => {
    if (pipelineRef.isInView && rive && activeTab === 'pipeline') {
      rive.play();
    }
  }, [pipelineRef.isInView, rive, activeTab]);

  const handleTabClick = (tab: Tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 w-full">
      {/* Tab Bar */}
      <div className='flex flex-row items-center justify-center h-[51px] border-border-primary border-b w-full relative animate-fade-in'>
        <button 
          onClick={() => handleTabClick('pipeline')}
          className={`text-sm font-semibold flex-1 h-full transition-all relative ${
            activeTab === 'pipeline' 
              ? 'text-blue-primary' 
              : 'text-text-primary hover:text-blue-primary'
          }`}
        >
          Pipeline
          {activeTab === 'pipeline' && (
            <div className='absolute bottom-0 left-0 right-0 h-[2px] bg-blue-primary' />
          )}
        </button>
        <button 
          onClick={() => handleTabClick('dashboard')}
          className={`text-sm font-semibold flex-1 h-full transition-all relative ${
            activeTab === 'dashboard' 
              ? 'text-blue-primary' 
              : 'text-text-primary hover:text-blue-primary'
          }`}
        >
          Dashboard
          {activeTab === 'dashboard' && (
            <div className='absolute bottom-0 left-0 right-0 h-[2px] bg-blue-primary' />
          )}
        </button>
        <button 
          onClick={() => handleTabClick('workflows')}
          className={`text-sm font-semibold flex-1 h-full transition-all relative ${
            activeTab === 'workflows' 
              ? 'text-blue-primary' 
              : 'text-text-primary hover:text-blue-primary'
          }`}
        >
          Workflows
          {activeTab === 'workflows' && (
            <div className='absolute bottom-0 left-0 right-0 h-[2px] bg-blue-primary' />
          )}
        </button>
      </div>

      {/* Tab Content */}
      <div className='w-full relative'>
        {activeTab === 'pipeline' && (
          <div ref={pipelineRef.ref} className='w-full flex py-8 lg:justify-center relative px-6'>
            <div className='w-full min-w-[700px] h-[450px] lg:w-[1200px] lg:h-[773px] shadow-lg rounded-[9px] overflow-hidden' style={{ aspectRatio: '16 / 9' }}>
              <RiveComponent 
                style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
              />
            </div>
            {/* Degradê branco na parte inferior */}
            <div className='absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-white to-transparent pointer-events-none z-20' />
          </div>
        )}
        {activeTab === 'dashboard' && (
          <div className='h-[200px] w-[400px] bg-blue-500 mx-auto'>
            {/* Conteúdo Dashboard */}
          </div>
        )}
        {activeTab === 'workflows' && (
          <div className='h-[200px] w-[400px] bg-green-500 mx-auto'>
            {/* Conteúdo Workflows */}
          </div>
        )}
      </div>
    </div>
  )
}

export default System;
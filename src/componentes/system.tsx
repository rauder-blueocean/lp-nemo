import { useState, useEffect } from 'react';
import { useRive, Layout, Fit, Alignment } from '@rive-app/react-canvas';
import { useInView } from '../hooks/useInView';

type Tab = 'pipeline' | 'dashboard' | 'workflows';

const System = () => {
  const [activeTab, setActiveTab] = useState<Tab>('pipeline');
  const pipelineRef = useInView({ threshold: 0.1 });
  const dashboardRef = useInView({ threshold: 0.1 });
  const workflowsRef = useInView({ threshold: 0.1 });

  const { rive: rivePipeline, RiveComponent: RiveComponentPipeline } = useRive({
    src: '/pipeline.riv',
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  const { rive: riveDashboard, RiveComponent: RiveComponentDashboard } = useRive({
    src: '/dashboard_home.riv',
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  const { rive: riveWorkflows, RiveComponent: RiveComponentWorkflows } = useRive({
    src: '/workflow.riv',
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  // Controla a animação Rive Pipeline quando entra na viewport
  useEffect(() => {
    if (pipelineRef.isInView && rivePipeline && activeTab === 'pipeline') {
      rivePipeline.play();
    }
  }, [pipelineRef.isInView, rivePipeline, activeTab]);

  // Controla a animação Rive Dashboard quando entra na viewport
  useEffect(() => {
    if (dashboardRef.isInView && riveDashboard && activeTab === 'dashboard') {
      riveDashboard.play();
    }
  }, [dashboardRef.isInView, riveDashboard, activeTab]);

  // Controla a animação Rive Workflows quando entra na viewport
  useEffect(() => {
    if (workflowsRef.isInView && riveWorkflows && activeTab === 'workflows') {
      riveWorkflows.play();
    }
  }, [workflowsRef.isInView, riveWorkflows, activeTab]);

  // Troca automática de tabs a cada 10 segundos
  useEffect(() => {
    const tabs: Tab[] = ['pipeline', 'dashboard', 'workflows'];
    const interval = setInterval(() => {
      setActiveTab((currentTab) => {
        const currentIndex = tabs.indexOf(currentTab);
        const nextIndex = (currentIndex + 1) % tabs.length;
        return tabs[nextIndex];
      });
    }, 10000); // 10 segundos

    return () => clearInterval(interval);
  }, [activeTab]); // Reseta o intervalo quando activeTab muda

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
              <RiveComponentPipeline 
                style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
              />
            </div>
            {/* Degradê branco na parte inferior */}
            <div className='absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-white to-transparent pointer-events-none z-20' />
          </div>
        )}
        {activeTab === 'dashboard' && (
          <div ref={dashboardRef.ref} className='w-full flex py-8 lg:justify-center relative px-6'>
            <div className='w-full min-w-[700px] h-[450px] lg:w-[1200px] lg:h-[773px] shadow-lg rounded-[9px] overflow-hidden' style={{ aspectRatio: '16 / 9' }}>
              <RiveComponentDashboard 
                style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
              />
            </div>
            {/* Degradê branco na parte inferior */}
            <div className='absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-white to-transparent pointer-events-none z-20' />
          </div>
        )}
        {activeTab === 'workflows' && (
          <div ref={workflowsRef.ref} className='w-full flex py-8 lg:justify-center relative px-6'>
            <div className='w-full min-w-[700px] h-[450px] lg:w-[1200px] lg:h-[773px] shadow-lg rounded-[9px] overflow-hidden' style={{ aspectRatio: '16 / 9' }}>
              <RiveComponentWorkflows 
                style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
              />
            </div>
            {/* Degradê branco na parte inferior */}
            <div className='absolute bottom-0 left-0 right-0 h-[250px] bg-gradient-to-t from-white to-transparent pointer-events-none z-20' />
          </div>
        )}
      </div>
    </div>
  )
}

export default System;
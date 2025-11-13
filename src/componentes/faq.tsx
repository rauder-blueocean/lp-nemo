import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useInView } from '../hooks/useInView';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const titleRef = useInView({ threshold: 0.2 });
  const descRef = useInView({ threshold: 0.2 });

  const faqData: FAQItem[] = [
    {
      question: 'O que é a Nemo CRM?',
      answer: 'A Nemo é um CRM completo desenvolvido especialmente para empresas SaaS. Centralizamos comunicação, vendas, faturamento, dados e automação em um único sistema inteligente que cresce com sua operação.'
    },
    {
      question: 'Como funciona a implementação?',
      answer: 'Nossa equipe acompanha todo o processo de implementação. Fazemos a configuração inicial, migramos seus dados, treinamos sua equipe e oferecemos suporte contínuo para garantir o sucesso da sua operação.'
    },
    {
      question: 'Qual o prazo de implementação?',
      answer: 'O prazo varia de acordo com a complexidade da sua operação, mas geralmente a implementação completa leva de 2 a 4 semanas. Durante esse período, nossa equipe trabalha lado a lado com você.'
    },
    {
      question: 'Vocês oferecem suporte?',
      answer: 'Sim! Oferecemos suporte completo via WhatsApp, email e videoconferência. Nossa equipe está sempre disponível para ajudar você a extrair o máximo valor da plataforma.'
    },
    {
      question: 'É possível integrar com outras ferramentas?',
      answer: 'Sim, a Nemo oferece integrações nativas com as principais ferramentas do mercado, além de API completa para integrações customizadas de acordo com suas necessidades.'
    },
    {
      question: 'Como funciona o modelo de pagamento?',
      answer: 'Trabalhamos com mensalidade fixa baseada no número de usuários e módulos utilizados. Não há taxa de setup e você pode cancelar quando quiser.'
    },
    {
      question: 'Posso testar antes de contratar?',
      answer: 'Sim! Oferecemos uma demonstração completa da plataforma onde você pode ver na prática como a Nemo pode transformar sua operação.'
    },
    {
      question: 'Meus dados estão seguros?',
      answer: 'Absolutamente. Utilizamos os mais altos padrões de segurança da indústria, com criptografia end-to-end, backups automáticos e conformidade com LGPD.'
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id='faq' className='relative h-fit w-screen overflow-x-hidden bg-white px-6 lg:px-[74px] py-16 lg:py-24 flex flex-col items-center'>
      <div className='w-full max-w-[800px] flex flex-col gap-8'>
        {/* Título e Descrição */}
        <div className='flex flex-col gap-3 text-center'>
          <div ref={titleRef.ref}>
            <h1 className={`text-3xl lg:text-5xl font-bold text-text-primary leading-tight transition-all duration-800 ${titleRef.isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
              Perguntas Frequentes
            </h1>
          </div>
          <div ref={descRef.ref}>
            <p className={`text-sm lg:text-lg text-text-secondary transition-all duration-1000 ${descRef.isInView ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
              Tire suas dúvidas sobre a Nemo CRM
            </p>
          </div>
        </div>

        {/* Lista de FAQs */}
        <div className='flex flex-col gap-4'>
          {faqData.map((faq, index) => (
            <div
              key={index}
              className='border border-border-primary rounded-lg overflow-hidden bg-white transition-all duration-300 hover:shadow-md'
            >
              <button
                onClick={() => toggleAccordion(index)}
                className='w-full px-6 py-5 flex items-center justify-between text-left transition-colors'
              >
                <span className='text-base lg:text-lg font-semibold text-text-primary pr-4'>
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-blue-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className='px-6 pb-5 pt-0'>
                  <p className='text-sm lg:text-base text-text-secondary leading-relaxed'>
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;


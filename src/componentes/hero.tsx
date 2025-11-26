import { useState } from 'react';
import type { FormEvent } from 'react';
import Button from './button';
import { useInView } from '../hooks/useInView';
import { sendToWebhook } from '../utils/webhook';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  nomeEmpresa: string;
}

const Hero = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    nomeEmpresa: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const badgeRef = useInView({ threshold: 0.1 });
  const titleRef = useInView({ threshold: 0.1 });
  const descRef = useInView({ threshold: 0.1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Validação básica
    if (!formData.nome || !formData.email || !formData.telefone || !formData.nomeEmpresa) {
      alert('Por favor, preencha todos os campos!');
      return;
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Por favor, insira um email válido!');
      return;
    }

    setIsSubmitting(true);

    try {
      const result = await sendToWebhook(formData);
      
      if (result.success) {
        alert(result.message);
        // Limpar formulário
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          nomeEmpresa: ''
        });
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      alert('Erro ao enviar formulário. Por favor, tente novamente mais tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id='home' className='relative h-fit w-screen bg-white pt-24 pb-12 px-8 flex flex-col items-center lg:h-[580px] lg:justify-center'>
      <div className='flex flex-col items-center justify-center gap-2'>
      <div ref={badgeRef.ref} className={`p-[1px] flex w-fit h-fit rounded-full overflow-hidden relative transition-all duration-1000 ${badgeRef.isInView ? 'animate-fade-in' : 'opacity-0'}`}>
        <div className="h-[400px] w-[400px] absolute top-[-180px] left-[-100px] animate-spin-slow-reverse" style={{background: 'conic-gradient(from 0deg, #3B6BE8, rgba(59, 108, 232, 0))'}}></div>
      <div className='flex flex-row items-center justify-between py-1 px-8 rounded-full w-fit bg-white z-10'>
        <div className='text-blue-primary text-sm font-semibold'>Para Donos de SaaS</div>  
      </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-2'>
        <div ref={titleRef.ref}>
          <h1 className={`text-5xl font-bold text-center lg:text-7xl transition-all duration-800 ${titleRef.isInView ? 'animate-fade-in-up animate-delay-200' : 'opacity-0 translate-y-8'}`}>
            O seu último <br /> e melhor CRM
          </h1>
        </div>
        <div className='flex flex-col items-center justify-center' ref={descRef.ref}>
          <p className={`text-sm text-center leading-tight lg:text-lg transition-all duration-1000 ${descRef.isInView ? 'animate-fade-in animate-delay-400' : 'opacity-0'}`}>
            Um CRM completo, desenvolvido para softwares, que <br /> centraliza comunicação, vendas, faturamento, dados <br /> e automação em um único sistema.
          </p>
          <Button onClick={() => window.location.href = '#cta'} className={`mt-4 px-8 hidden lg:block transition-all duration-1000 ${descRef.isInView ? 'animate-fade-in animate-delay-600' : 'opacity-0'}`}>
            Entre em Contato
          </Button>
        </div>
      </div>
      </div>
      
      {/* Formulário de Contato */}
      <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-full max-w-md mt-8 md:hidden'>
        <input 
          type='text'
          name='nome'
          value={formData.nome}
          onChange={handleChange}
          placeholder='Nome' 
          className='border border-border-primary rounded-md h-[45px] px-4 text-sm font-semibold text-text-secondary placeholder:text-text-secondary focus:outline-none focus:border-blue-primary transition-colors'
        />
        <input 
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          placeholder='Email' 
          className='border border-border-primary rounded-md h-[45px] px-4 text-sm font-semibold text-text-secondary placeholder:text-text-secondary focus:outline-none focus:border-blue-primary transition-colors'
        />
        <input 
          type='tel'
          name='telefone'
          value={formData.telefone}
          onChange={handleChange}
          placeholder='Telefone' 
          className='border border-border-primary rounded-md h-[45px] px-4 text-sm font-semibold text-text-secondary placeholder:text-text-secondary focus:outline-none focus:border-blue-primary transition-colors'
        />
        <input 
          type='text'
          name='nomeEmpresa'
          value={formData.nomeEmpresa}
          onChange={handleChange}
          placeholder='Nome da sua Empresa' 
          className='border border-border-primary rounded-md h-[45px] px-4 text-sm font-semibold text-text-secondary placeholder:text-text-secondary focus:outline-none focus:border-blue-primary transition-colors'
        />
        <Button type='submit' disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Entre em Contato'}
        </Button>
      </form>
    </div>
  );
};

export default Hero;
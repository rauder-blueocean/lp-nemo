import { useState } from 'react';
import type { FormEvent } from 'react';
import Button from './button';
import { useInView } from '../hooks/useInView';

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  nomeEmpresa: string;
}

const CTA = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    email: '',
    telefone: '',
    nomeEmpresa: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const titleRef = useInView({ threshold: 0.2 });
  const descRef = useInView({ threshold: 0.2 });

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

    // Simula envio (removido webhook)
    setTimeout(() => {
      alert('Formulário enviado com sucesso! Entraremos em contato em breve.');
      // Limpar formulário
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        nomeEmpresa: ''
      });
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div id='cta' className='relative h-fit w-screen overflow-x-hidden bg-white px-8  pb-24 pt-2  flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-8'>
      <div className='flex flex-col gap-2  lg:w-[500px]'>
        <div ref={titleRef.ref}>
          <h1 className={`text-3xl font-bold text-center lg:text-left lg:text-4xl transition-all duration-800 ${titleRef.isInView ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'}`}>
            Transforme dados em crescimento previsível.
          </h1>
        </div>
        <div ref={descRef.ref}>
          <p className={`text-sm text-center text-center lg:text-left leading-tight text-text-secondary lg:text-lg transition-all duration-1000 ${descRef.isInView ? 'animate-fade-in animate-delay-200' : 'opacity-0'}`}>
            A Nemo conecta pessoas, processos e receita para que sua operação cresça de forma inteligente e sustentável.
          </p>
        </div>
      </div>
      <button onClick={() => window.location.href = '#home'} className='bg-blue-primary mt-4 text-white h-[45px] px-8 rounded-md font-semibold text-sm hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed block lg:hidden'>
        Agendar demonstração grátis
      </button>
        
        {/* Formulário de Contato */}
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-full max-w-md mt-8 hidden lg:flex lg:overflow-visible'>
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
            {isSubmitting ? 'Enviando...' : 'Agendar demonstração grátis'}
          </Button>
        </form>
    </div>
  )
}

export default CTA;
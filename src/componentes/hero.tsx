import { useState } from 'react';
import type { FormEvent } from 'react';
import Button from './button';

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent) => {
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

    // Exibir dados em JSON
    console.log('Dados do formulário:', JSON.stringify(formData, null, 2));
    alert('Formulário enviado com sucesso! Confira o console para ver os dados em JSON.');
    
    // Limpar formulário
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      nomeEmpresa: ''
    });
  };

  return (
    <div className='relative h-fit w-screen overflow-x-hidden bg-white pt-24 pb-8 px-8 flex flex-col items-center'>
      <div className='flex flex-col items-center justify-center gap-2'>
      <div className="p-[1px] flex w-fit h-fit rounded-full overflow-hidden relative">
        <div className="h-[400px] w-[400px] absolute top-[-180px] left-[-100px] animate-spin-slow-reverse" style={{background: 'conic-gradient(from 0deg, #3B6BE8, rgba(59, 108, 232, 0))'}}></div>
      <div className='flex flex-row items-center justify-between py-1 px-8 rounded-full w-fit bg-white z-10'>
        <div className='text-blue-primary text-sm font-semibold'>Para Donos de SaaS</div>  
      </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-2'>
        <h1 className='text-5xl font-bold text-center'>O seu último <br /> e melhor CRM</h1>
        <p className='text-sm text-center leading-tight'>Um CRM completo, desenvolvido para softwares, que centraliza comunicação, vendas, faturamento, dados e automação em um único sistema.</p>
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
        <Button type='submit'>
          Entre em Contato
        </Button>
      </form>
    </div>
  );
};

export default Hero;
import { useState } from 'react';
import type { FormEvent } from 'react';
import Button from './button';

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
    <div className='relative h-fit w-screen overflow-x-hidden bg-white px-8  py-8 flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-8'>
      <div className='flex flex-col gap-2  lg:w-[500px]'>
        <h1 className='text-3xl font-bold text-center lg:text-left lg:text-4xl'>Transforme dados em crescimento previsível.</h1>
        <p className='text-sm text-center text-center lg:text-left leading-tight text-text-secondary lg:text-lg'>A Nemo conecta pessoas, processos e receita para que sua operação cresça de forma inteligente e sustentável.</p>
      </div>
        
        {/* Formulário de Contato */}
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 w-full max-w-md mt-8'>
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
            Agendar demonstração grátis
          </Button>
        </form>
    </div>
  )
}

export default CTA;
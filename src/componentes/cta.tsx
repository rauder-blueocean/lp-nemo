import Button from './button';

const CTA = () => {
  return (
    <div className='relative h-fit w-screen overflow-x-hidden bg-white px-8  py-8 flex flex-col items-center gap-2'>
        <h1 className='text-3xl font-bold text-center'>Transforme dados em crescimento previsível.</h1>
        <p className='text-sm text-center leading-tight text-text-secondary'>A Nemo conecta pessoas, processos e receita para que sua operação cresça de forma inteligente e sustentável.</p>
        <Button className='px-6 py-2 mt-4'>
          Agendar demonstração grátis
        </Button>
    </div>
  )
}

export default CTA;
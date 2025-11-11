const Servicos = () => {
  return (
    <div className='relative h-fit w-screen overflow-x-hidden bg-white px-6 py-8 flex flex-col items-center'>
      <h1 className="text-2xl font-bold text-center text-text-primary lg:text-5xl leading-tight lg:leading-tight">Tudo o que sua operação SaaS <br /> precisa. Em um só lugar.</h1>
      <p className="text-sm text-text-secondary text-center leading-tight lg:text-lg mt-2">A Nemo é composta por cinco módulos integrados que tornam sua operação mais eficiente, previsível <br /> e escalável. (fazer igual site da attio, mostrando dashboards de cada etapa)</p>
      <div className='flex flex-col gap-4 w-full md:w-fit md:flex-row mt-8'>
        <img src="/Layer1.svg" alt="Layer 1" className='shadow-lg rounded-[8px]' />
        <img src="/Layer2.svg" alt="Layer 2" className='shadow-lg rounded-[8px]' />
        <img src="/Layer3.svg" alt="Layer 3" className='shadow-lg rounded-[8px]' />
      </div>
    </div>
  )
}

export default Servicos;
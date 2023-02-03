import About from '../pages/About';
import Portfolio from '../pages/Portfolio';


export default function Body ({currentPage}) {
  return (
    <main className='flex flex-col flex-grow linear-gradient(rgb(55, 65, 81), rgb(17, 24, 39), rgb(0, 0, 0)) p-6 sm:p-12'>
      <div className='mt-5 flex justify-between items-end'>
        <h2 id='page-title' className='text-[36px] font-bold'>
          {currentPage.displayName}
        </h2>

      </div>
      <div className='mb-5 after:block after:bg-dark after:h-[5px] after:mt-2'></div>
      
      
      <section id='page-body' className='text-[20px] leading-relaxed'>
        {currentPage.name === 'about me' ? <About/> : null}
        {currentPage.name === 'projects' ? <Portfolio/> : null}
        
      </section>
    </main>
  )
}
import avatar from '../images/Me.jpeg';
import Nav from './Nav';

export default function Header ({pages, currentPage, setCurrentPage}) {
  const name = `Jeff Fleischman`;
  const subtitle = `Aspiring Programmer`;

  return (


    <header>
      <section id="top-bar" className="flex items-center flex-col sm:flex-row bg-dark pb-3 sm:py-3 justify-between ">
        <h1 className="max-sm:w-[100vw] bg-highlight text-white text-center sm:text-left font-bold p-3 md:pl-[40px] text-[30px] sm:text-[24px] md:text-[36px]">{name}</h1>
        <Nav 
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </section>
      <section className='relative md:static flex flex-col md:flex-row overflow-hidden justify-between items-center md:items-end h-[250px] md:h-[200px] bg-banner bg-cover bg-no-repeat bg-center'>
        <br></br>
        <img id='avatar' className='w-[250px] h-[250px] m-[-30px] md:m-[-20px] rounded-full border-dark shadow shadow-dark' src={avatar} alt='Profile Pic. ' />
        
        <div className='absolute md:static bottom-[-10px] p-[15px] bg-highlight text-white font-bold text-[20px] sm:text-[24px] md:text-[30px] mb-[20px]  mr-0 md:mr-[30px]' id='subtitle'>
          {subtitle}
        </div>
      </section>
    </header>
  );
}
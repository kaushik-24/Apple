import {appleImg, searchImg, bagImg} from '../utils';
import {navLists} from '../constants'
const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px10 px-5 flex justify-between items-center">
        <nav className='flex w-full screen-nax-width'>
            <img className="cursor-pointer" src={appleImg} alt="Apple" 
            width={14} height={18} />

            <div className="flex flex-1 justify-center max-sm:hidden">
                {navLists.map((nav, i) => (
                    <div key={nav} className='px-5 text-sm cursor-pointer text-gray hover:text-white transition-all'>
                        {nav}
                    </div>
                ))}
            </div>

            <div className='flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1'>
                <img className="cursor-pointer" src={searchImg} alt="search"
                 width={18} height={18}></img>
                <img className="cursor-pointer" src={bagImg} alt="bag" 
                width={18} height={18}></img>
            </div>
        </nav>
    </header>
  )
}

export default Navbar
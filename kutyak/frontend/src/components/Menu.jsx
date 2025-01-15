import {Link} from "react-router-dom";

function Menu() {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6">
    <div className="relative pt-6 pb-16 sm:pb-24">
        <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <Link to="/"><span className="sr-only">Company Name</span>
                        <img className="w-auto h-8 sm:h-10" src="https://www.svgrepo.com/show/448244/pack.svg" loading="lazy" width="202" height="40"/>
                    </Link>
                    <div className="flex items-center -mr-2 md:hidden">
                        <button className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-50 rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-50"  type="button" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" aria-hidden="true" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex md:space-x-10 list-none">
                <li>
                    <Link to="/kutyanevek" className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                        target="">Kutyanevek</Link>
                </li>
                <li>
                    <Link to="/kutyafajtak" className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                        target="">Kutyafajták
                    </Link>
                </li>
                <li>
                    <Link to="/kutyak" className="text-base font-normal text-gray-500 list-none hover:text-gray-900"
                        target="">Rendelési adatok
                    </Link>
                </li>
            </div>
           
        </nav>
    </div>
</div>
  )
}

export default Menu
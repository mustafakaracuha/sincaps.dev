import Link from "next/link";

import { LuSquirrel } from "react-icons/lu";
import { MdOutlineRssFeed } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const NavBar = () => {
    return (
        <nav className="bg-white border-b border-gray-200 py-4">
            <div className="flex justify-between items-center px-16">
                <div className="text-xl font-bold text-gray-800 flex items-center space-x-2">
                    <Link href="/" className="flex items-center gap-2">
                        <LuSquirrel className="text-indigo-600" size={30} />
                        <span className="text-indigo-600">
                            Sincaps<span className="text-gray-500">.dev</span>
                        </span>
                    </Link>
                </div>

                {/* Menü Bağlantıları */}
                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="text-gray-600 flex text-[13px] items-center hover:text-indigo-500 transition duration-300">
                        <MdOutlineRssFeed size={18} className="mr-1" />
                        Akış
                    </Link>
                    {/* <Link href="/feedBack" className="text-gray-600 flex text-sm items-center hover:text-indigo-500 transition duration-300">
                        <FaComments size={18} className="mr-1" />
                        Öneri
                    </Link> */}
                    <Link href="/developer" className="text-gray-600 flex text-[13px] items-center hover:text-indigo-500 transition duration-300">
                        <FaUser size={13} className="mr-1" />
                        Geliştirici
                    </Link>
                </div>

                <div className="md:hidden flex items-center">
                    <button className="text-gray-600 hover:text-indigo-500 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;

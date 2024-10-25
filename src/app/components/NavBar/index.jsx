"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LuSquirrel } from "react-icons/lu";
import { MdOutlineRssFeed } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && isMenuOpen && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <nav className="w-full h-[4rem] bg-white border-b border-gray-200 py-4">
            <div className="flex justify-between items-center px-16 max-sm:px-5">
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 0.1 }} className="text-xl font-bold text-gray-800 flex items-center space-x-2">
                    <Link href="/" className="flex items-center gap-2">
                        <LuSquirrel className="text-indigo-600" size={30} />
                        <span className="text-indigo-600">
                            Sincaps<span className="text-gray-500">.dev</span>
                        </span>
                    </Link>
                </motion.div>

                <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.3, delay: 0.2 }} className="hidden md:flex space-x-6">
                    <Link href="/" className="text-gray-600 flex text-[13px] items-center hover:text-indigo-500 transition duration-300">
                        <MdOutlineRssFeed size={18} className="mr-1" />
                        Akış
                    </Link>
                    <Link href="/developer" className="text-gray-600 flex text-[13px] items-center hover:text-indigo-500 transition duration-300">
                        <FaUser size={13} className="mr-1" />
                        Geliştirici
                    </Link>
                </motion.div>

                <div className="md:hidden flex items-center">
                    <button onClick={toggleMenu} className="text-gray-600 hover:text-indigo-500 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>
            </div>

            {/* Mobil Menü İçeriği */}
            {isMenuOpen && (
                <div ref={menuRef} className="md:hidden transition-all duration-300 bg-white border-t border-gray-200 mt-2 px-14 max-sm:px-2 pt-4">
                    <Link href="/" className="flex py-2 items-center px-4 text-gray-500 hover:text-indigo-500 transition duration-300">
                        <MdOutlineRssFeed size={18} className="mr-3" />
                        Akış
                    </Link>
                    <Link href="/developer" className="flex items-center py-2 px-4 text-gray-500 hover:text-indigo-500 transition duration-300">
                        <FaUser size={14} className="mr-4" />
                        Geliştirici
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default NavBar;

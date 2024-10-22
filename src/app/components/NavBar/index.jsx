"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

import { LuSquirrel } from "react-icons/lu";
import { MdOutlineRssFeed } from "react-icons/md";
import { FaUser } from "react-icons/fa";

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    // Dışarıya tıklama kontrolü
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        // Tüm tıklamaları dinle
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <nav className="bg-white border-b border-gray-200 py-4">
            <div className="flex justify-between items-center px-16">
                <div className="text-xl font-bold text-gray-800 flex items-center space-x-2">
                    <Link href="/" className="flex items-center gap-2">
                        <LuSquirrel className="text-indigo-500" size={30} />
                        <span className="text-indigo-500">
                            Sincaps<span className="text-gray-500">.dev</span>
                        </span>
                    </Link>
                </div>

                <div className="hidden md:flex space-x-6">
                    <Link href="/" className="text-gray-600 flex text-[13px] items-center hover:text-indigo-500 transition duration-300">
                        <MdOutlineRssFeed size={18} className="mr-1" />
                        Akış
                    </Link>
                    <Link href="/developer" className="text-gray-600 flex text-[13px] items-center hover:text-indigo-500 transition duration-300">
                        <FaUser size={13} className="mr-1" />
                        Geliştirici
                    </Link>
                </div>

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
                <div ref={menuRef} className="md:hidden transition-all duration-300 bg-white border-t border-gray-200 mt-2 px-14 pt-4">
                    <Link href="/" className="flex py-2 items-center px-4 text-gray-600 hover:text-indigo-500 transition duration-300">
                        <MdOutlineRssFeed size={18} className="mr-3" />
                        Akış
                    </Link>
                    <Link href="/developer" className="flex items-center py-2 px-4 text-gray-600 hover:text-indigo-500 transition duration-300">
                        <FaUser size={14} className="mr-4" />
                        Geliştirici
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default NavBar;

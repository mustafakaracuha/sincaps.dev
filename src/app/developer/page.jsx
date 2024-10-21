import React from "react";
import Image from "next/image";

import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiReact, SiTailwindcss, SiNextdotjs, SiJavascript } from "react-icons/si";

import developer from "../../assets/images/developer.jpg";

function Developer() {
    return (
        <>
            <div className="flex h-full p-10 items-start justify-center overflow-hidden">
                <div className="max-w-xl rounded-xl flex flex-col items-center overflow-hidden p-6">
                    {/* Developer Image */}
                    <div className="w-32 h-32 rounded-full flex items-center justify-center border overflow-hidden mb-5">
                        <Image src={developer} width={100} height={100} alt="Picture of the author" />
                    </div>

                    {/* Developer Name */}
                    <h3 className="text-xl text-center max-sm:text-md font-bold text-gray-700 mb-2">Mustafa Karaçuha</h3>

                    {/* Role */}
                    <p className="text-center max-sm:text-sm text-gray-400 mb-4">Front End Developer</p>

                    {/* About Me */}
                    <p className="text-center max-sm:text-sm text-gray-600 mt-2 mb-2">
                        <span className="text-indigo-600 font-semibold"> Sincaps</span>
                        <span className="text-gray-500">.dev</span> / Tek sayfa, bir çok şey
                    </p>

                    {/* Teknolojiler */}
                    <div className="flex justify-center max-sm:text-sm space-x-4 mb-4 mt-6">
                        <div className="flex items-center space-x-2">
                            <SiReact className="text-blue-500 text-xl" />
                            <span className="text-gray-600">React.js</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <SiTailwindcss className="text-blue-400 text-xl" />
                            <span className="text-gray-600">Tailwind CSS</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <SiNextdotjs className="text-black text-xl" />
                            <span className="text-gray-600">Next.js</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <SiJavascript className="text-yellow-500 text-xl" />
                            <span className="text-gray-600">JavaScript</span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-4 mb-4 mt-4">
                        <a href="https://github.com/mustafakaracuha" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-gray-600 hover:text-black text-xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/mustafakaracuha" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="text-gray-600 hover:text-blue-600 text-xl" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Developer;

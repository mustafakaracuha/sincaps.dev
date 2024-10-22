"use client";

import React, { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import toast from "react-hot-toast";

import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { SiReact, SiTailwindcss, SiNextdotjs, SiJavascript } from "react-icons/si";

import developer from "../../assets/images/developer.jpg";

function Developer() {
    const [message, setMessage] = useState("");

    return (
        <>
            <div className="w-full flex h-full items-start justify-center overflow-hidden">
                <div className="max-w-2xl rounded-xl flex flex-col items-center overflow-hidden p-10">
                    {/* Developer Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="w-32 h-32 max-sm:w-20 max-sm:h-20  xl:w-32 xl:h-32 rounded-full flex items-center justify-center border overflow-hidden mb-5 pt-6"
                    >
                        <Image src={developer} width={110} height={100} alt="Picture of the author" />
                    </motion.div>

                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="text-xl text-center max-sm:text-[16px] font-bold text-gray-700 mb-2"
                    >
                        Mustafa Karaçuha
                    </motion.h3>

                    {/* Role */}
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} className="text-center max-sm:text-[14px] text-gray-400 mb-4">
                        Front End Developer
                    </motion.p>

                    {/* Hakkımda */}
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.4 }} className="text-center max-sm:text-sm text-gray-600 mt-2 mb-4">
                        4+ yıllık yazılım geliştirme deneyimi olan bir Front End geliştiriciyim. Modern web teknolojileriyle etkileşimli kullanıcı arayüzleri oluşturmayı seviyorum. Web performans
                        optimizasyonu, responsive tasarım ve kullanıcı deneyimi üzerine çalışıyorum.
                    </motion.p>

                    {/* Teknolojiler */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.5 }}
                        className="flex justify-center max-sm:text-sm space-x-4 mb-4 mt-6"
                    >
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
                    </motion.div>

                    {/* Sosyal Linkler */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.7 }} className="flex justify-center space-x-4 mb-4 mt-4">
                        <a href="https://github.com/mustafakaracuha" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-gray-600 hover:text-black text-xl" />
                        </a>
                        <a href="https://www.linkedin.com/in/mustafakaracuha" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className="text-gray-600 hover:text-blue-600 text-xl" />
                        </a>
                    </motion.div>

                    {/* İletişim */}
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.8 }} className="text-center flex-col mt-8 px-14">
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            className="w-[30rem] max-sm:w-[25rem] max-sm:text-sm max-sm:h-20 p-6 border border-gray-300 rounded-md mb-4 focus:outline-indigo-500"
                            rows="4"
                            placeholder="Öneri veya görüşlerinizi bana bildirin."
                        ></textarea>
                        <button
                            disabled={!message}
                            onClick={() => toast.success("Önerini aldım, teşekkürler 😉")}
                            className=" bg-indigo-600 disabled:opacity-50 text-white py-2 px-4 max-sm:text-sm rounded-md"
                        >
                            Gönder
                        </button>
                    </motion.div>
                </div>
            </div>
        </>
    );
}

export default Developer;

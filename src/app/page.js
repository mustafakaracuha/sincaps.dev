"use client";

import Link from "next/link";
import { FaNewspaper, FaLaptopCode, FaChartLine, FaHeartbeat, FaFutbol, FaStar, FaFilm, FaTools, FaBook } from "react-icons/fa";
import { motion } from "framer-motion";

function Page() {
    const newsTopics = [
        { link: "guncel", title: "Son Dakika", description: "En son haberleri ve gelişmeleri keşfedin.", icon: <FaNewspaper className="text-red-500 text-lg" /> },
        { link: "teknoloji", title: "Teknoloji", description: "Gündemdeki en son teknoloji gelişmeleri.", icon: <FaLaptopCode className="text-yellow-500 text-lg" /> },
        { link: "egitim", title: "Eğitim", description: "Eğitimde son durum ve önemli gelişmeler.", icon: <FaChartLine className="text-pink-500 text-lg" /> },
        { link: "saglik", title: "Sağlık", description: "Sağlık alanındaki yenilikler ve bilgiler.", icon: <FaHeartbeat className="text-orange-500 text-lg" /> },
        { link: "spor", title: "Spor", description: "Spor dünyasından haberler ve etkinlikler.", icon: <FaFutbol className="text-green-500 text-lg" /> },
        { link: "dini-bilgiler", title: "Dini Bilgiler", description: "Dini konularda güncel bilgiler ve kaynaklar.", icon: <FaBook className="text-blue-500 text-lg" /> },
        { link: "magazin", title: "Magazin", description: "Magazin dünyasından haberler.", icon: <FaFilm className="text-gray-500 text-lg" /> },
        { link: "burc", title: "Burçlar", description: "Günlük burç yorumlarınızı okuyun ve geleceğinizi öğrenin.", icon: <FaStar className="text-violet-500 text-lg" /> },
    ];

    const toolTopics = [{ link: "donusturuculer", title: "Dönüştürücüler", description: "Günlük hayatınızda kullanabileceğiniz araçlar.", icon: <FaTools className="text-blue-500 text-lg" /> }];

    return (
        <div className="w-full h-screen pb-24 flex flex-col items-start justify-start bg-white px-10 pt-8 overflow-auto custom-scrollbar-page">
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-3xl font-bold max-sm:text-[20px] text-gray-700 mb-4 text-center"
            >
                Sincaps.dev
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="max-sm:text-sm md:text-sm lg:text-md xl:text-[15px] font-normal text-gray-500 mb-10"
            >
                <strong className="text-indigo-600">Sincap.dev</strong>, kullanıcıların gündemden teknolojiye, ekonomiden spora kadar geniş bir yelpazede haberleri takip edebileceği bir platformdur.
                Kullanıcıları en son gelişmelerle buluşturmak ve farklı alanlarda kaynaklar sunarak bilgi edinimlerini kolaylaştırmaktır.
            </motion.p>

            {/* Haberler Başlığı */}
            <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.3 }} className="text-lg font-semibold text-gray-600 mb-6">
                Haberler
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-[1700px]:grid-cols-5 gap-8">
                {newsTopics.map((topic, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-lg shadow-gray-200 flex flex-col items-start text-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <div className="w-full flex items-center justify-between mb-4">
                            <h3 className="text-sm font-semibold text-gray-600">{topic.title}</h3>
                            <div>{topic.icon}</div>
                        </div>
                        <p className="text-gray-400 text-[13px] mt-2 mb-4">{topic.description}</p>
                        <Link href={topic.link === "burc" ? `/feed/horoscope` : `/feed/${topic.link}`} className="text-indigo-500 text-[14px] font-medium hover:underline">
                            Keşfet
                        </Link>
                    </motion.div>
                ))}
            </div>

            {/* Araçlar Başlığı */}
            <motion.h2 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.5 }} className="text-lg font-semibold text-gray-600 mt-12 mb-6">
                Araçlar
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-[1700px]:grid-cols-5 gap-8">
                {toolTopics.map((topic, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-lg shadow-gray-200 flex flex-col items-start text-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <div className="w-full flex items-center justify-between mb-5">
                            <h3 className="text-sm font-semibold text-gray-600">{topic.title}</h3>
                            <div>{topic.icon}</div>
                        </div>
                        <p className="text-gray-400 text-[13px] mt-2 mb-4">{topic.description}</p>
                        <Link href={`/converters`} className="text-indigo-500 text-[14px] font-medium hover:underline">
                            Keşfet
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Page;

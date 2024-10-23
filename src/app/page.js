"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { FaNewspaper, FaLaptopCode, FaChartLine, FaHeartbeat, FaFutbol, FaStar, FaFilm, FaBook, FaCarCrash, FaAmbulance } from "react-icons/fa";
import { PiTrafficSignFill } from "react-icons/pi";
import { RiEarthquakeFill } from "react-icons/ri";
import { IoIosColorPalette } from "react-icons/io";
import { WiEarthquake } from "react-icons/wi";

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

    const toolTopics = [
        {link: "deprem",title: "Deprem",description: "Deprem anında nasıl hareket etmeniz gerektiği hakkında",icon: <RiEarthquakeFill className="text-fuchsia-500 text-[19px]" />,path: "/earthquake"},
        { link: "sondepremler", title: "Son Depremler", description: "En yakın zamanda olan depremler", icon: <WiEarthquake className="text-indigo-500 text-[22px]" />, path: "/lastearthquake" },
        { link: "trafikcezasi", title: "Trafik Cezaları", description: "2024 yılı trafik cezaları", icon: <FaCarCrash className="text-red-500 text-xl" />, path: "/trafficfine" },
        { link: "trafikkurallari", title: "Trafik Kuralları", description: "Trafik kuralları", icon: <PiTrafficSignFill className="text-gray-400 text-[19px]" />, path: "/trafficrules" },
        { link: "acilnumaralar", title: "Acil Numaralar", description: "Acil durum numaraları", icon: <FaAmbulance className="text-lime-600 text-[19px]" />, path: "/emergencynumbers" },
        { link: "renkler", title: "Renkler", description: "Renkler", icon: <IoIosColorPalette className="text-yellow-500 text-[19px]" />, path: "/colours" },
    ];

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
                className="max-sm:text-sm md:text-sm lg:text-md xl:text-[14px] border-l-4 border-yellow-500 bg-yellow-50 p-4 font-normal text-gray-400 mb-8 mt-3"
            >
                <strong className="text-indigo-600">Sincap.dev</strong>, doğru ve güvenilir kaynaklar sunarak toplumu bilgilendirir, güncel haberler ve analizlerle kullanıcıların gelişen olaylara dair
                farkındalığını artırır. Eğitim, sağlık, çevre gibi toplumu ilgilendiren önemli konularda da içerikler sunarak, kullanıcılarının sosyal sorumluluklarını destekler ve bilinçli bireyler
                yetişmesine katkıda bulunur.
            </motion.p>

            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="text-lg max-sm:text-[14px] font-semibold text-gray-600 mb-6"
            >
                Haberler
            </motion.h2>
            <div className="grid max-sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 min-[1700px]:grid-cols-5 max-sm:gap-5 gap-8">
                {newsTopics.map((topic, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-lg shadow-gray-200 flex flex-col items-start text-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <div className="w-full flex items-center justify-between mb-4">
                            <h3 className="text-sm max-sm:text-[12px] font-semibold text-gray-600">{topic.title}</h3>
                            <div>{topic.icon}</div>
                        </div>
                        <p className="text-gray-400 max-sm:text-[11px] text-[13px] mt-2 mb-4">{topic.description}</p>
                        <Link href={topic.link === "burc" ? `/feed/horoscope` : `/feed/${topic.link}`} className="text-indigo-500 max-sm:text-[12px] text-[14px] font-medium hover:underline">
                            incele
                        </Link>
                    </motion.div>
                ))}
            </div>

            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="text-lg max-sm:text-[14px] font-semibold text-gray-600 mt-12 mb-6"
            >
                Bilgilendirme
            </motion.h2>
            <div className="grid max-sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 min-[1700px]:grid-cols-5 max-sm:gap-5  gap-8">
                {toolTopics.map((topic, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-lg shadow-gray-200 flex flex-col items-start text-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                    >
                        <div className="w-full flex items-center justify-between mb-5">
                            <h3 className="text-sm max-sm:text-[12px] font-semibold text-gray-600">{topic.title}</h3>
                            <div>{topic.icon}</div>
                        </div>
                        <p className="text-gray-400 max-sm:text-[11px] text-[13px] mt-2 mb-4">{topic.description}</p>
                        <Link href={topic.path} className="text-indigo-500 max-sm:text-[12px] text-[14px] font-medium hover:underline">
                            oku
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Page;

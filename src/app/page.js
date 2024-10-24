"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { FaNewspaper, FaLaptopCode, FaChartLine, FaHeartbeat, FaFutbol, FaFilm, FaBook, FaCarCrash,FaTree, FaSpa, FaPaw } from "react-icons/fa";
import { PiTrafficSignFill } from "react-icons/pi";
import { RiEarthquakeFill } from "react-icons/ri";
import { WiEarthquake } from "react-icons/wi";
import { GiMedicines } from "react-icons/gi";

function Page() {
    const newsTopics = [
        { link: "guncel", title: "Son Dakika", description: "En son haberleri ve gelişmeleri keşfedin.", icon: <FaNewspaper className="text-red-500" /> },
        { link: "teknoloji", title: "Teknoloji", description: "Gündemdeki en son teknoloji gelişmeleri.", icon: <FaLaptopCode className="text-yellow-500" /> },
        { link: "egitim", title: "Eğitim", description: "Eğitimde son durum ve önemli gelişmeler.", icon: <FaChartLine className="text-pink-500" /> },
        { link: "saglik", title: "Sağlık", description: "Sağlık alanındaki yenilikler ve bilgiler.", icon: <FaHeartbeat className="text-orange-500" /> },
        { link: "spor", title: "Spor", description: "Spor dünyasından haberler ve etkinlikler.", icon: <FaFutbol className="text-green-500" /> },
        { link: "dini-bilgiler", title: "Dini Bilgiler", description: "Dini konularda güncel bilgiler ve kaynaklar.", icon: <FaBook className="text-blue-500" /> },
        { link: "magazin", title: "Magazin", description: "Magazin dünyasından haberler.", icon: <FaFilm className="text-gray-500" /> },
    ];

    const toolTopics = [
        {
            link: "deprem",
            title: "Deprem",
            description: "Deprem anında nasıl hareket etmeniz gerektiği hakkında",
            icon: <RiEarthquakeFill className="text-fuchsia-500" />,
            path: "/earthquake",
        },
        { link: "sondepremler", title: "Son Depremler", description: "En yakın zamanda olan depremler", icon: <WiEarthquake className="text-indigo-500" />, path: "/recent-earthquakes" },
        { link: "nobetcieczane", title: "Nöbetçi Eczaneler", description: "Şehrinizdeki nöbetçi eczaneler", icon: <GiMedicines className="text-yellow-500" />, path: "/pharmacies-oncall" },
        { link: "trafikcezasi", title: "Trafik Cezaları", description: "2024 yılı trafik cezaları", icon: <FaCarCrash className="text-red-500" />, path: "/traffic-fine" },
        { link: "trafikkurallari", title: "Trafik Kuralları", description: "Trafik kuralları", icon: <PiTrafficSignFill className="text-gray-400" />, path: "/traffic-rules" },
        { link: "cevreyikorumak", title: "Çevreyi Korumak", description: "Çevreyi korumak hakkında", icon: <FaTree className="text-lime-600" />, path: "/protecting-environment" },
        { link: "hayvanlarikorumak", title: "Minik Dostlar", description: "Hayvanları koruma yolları ve yapılabilecekler hakkında bilgi edinin", icon: <FaPaw className="text-teal-500" />, path: "/protecting-animals" },
        { link: "kisiselbakim", title: "Kişisel Bakım", description: "Sağlıklı ve bakımlı görünmek için öneriler ve ipuçları", icon: <FaSpa className="text-pink-400" />, path: "/personal-care" },
    ];

    return (
        <div className="w-full h-screen pb-24 flex flex-col items-start justify-start bg-white max-sm:px-5 px-10 pt-8 overflow-auto custom-scrollbar-page">
            <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="text-3xl font-bold max-sm:text-[20px] text-gray-600 mb-4 text-center"
            >
                Sincaps.dev
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="max-sm:text-sm md:text-sm lg:text-md xl:text-[14px] border-l-4 border-yellow-500 bg-yellow-50 p-4 font-normal text-gray-400 mb-8 mt-3"
            >
                Doğru ve güvenilir kaynaklar sunarak toplumu bilgilendirir, güncel haberler ve analizlerle kullanıcıların gelişen olaylara dair
                farkındalığını artırır. Eğitim, sağlık, çevre gibi toplumu ilgilendiren önemli konularda da içerikler sunarak, kullanıcılarının sosyal sorumluluklarını destekler ve bilinçli bireyler
                yetişmesine katkıda bulunur.
            </motion.p>

            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="text-[16px] max-sm:text-[16px] font-semibold text-gray-600 mt-3 mb-6"
            >
                Bilgilendirme
            </motion.h2>
            <div className="w-full grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-[1700px]:grid-cols-5 max-sm:gap-5 gap-8">
                {toolTopics.map((topic, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-lg shadow-gray-200 max-sm:border max-sm:shadow-none flex flex-col items-start text-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                        <div className="w-full flex items-center justify-between mb-5">
                            <h3 className="text-[13px] max-sm:text-[15px] font-semibold text-gray-600">{topic.title}</h3>
                            <div className="text-[17px] max-sm:text-[22px]">{topic.icon}</div>
                        </div>
                        <p className="text-gray-400 max-sm:text-[14px] text-[13px] mt-2 mb-4">{topic.description}</p>
                        <Link href={topic.path} className="text-indigo-500 text-[13px] font-semibold hover:underline">
                            oku
                        </Link>
                    </motion.div>
                ))}
            </div>
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="text-[16px] max-sm:text-[16px] font-semibold text-gray-600 mt-12 mb-6"
            >
                Haberler
            </motion.h2>
            <div className="w-full grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 min-[1700px]:grid-cols-5 max-sm:gap-5 gap-8">
                {newsTopics.map((topic, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-6 rounded-xl shadow-lg max-sm:border max-sm:shadow-none shadow-gray-200 flex flex-col items-start text-start"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.2 }}
                    >
                        <div className="w-full flex items-center justify-between mb-5">
                            <h3 className="text-[13px] max-sm:text-[15px] font-semibold text-gray-600">{topic.title}</h3>
                            <div className="text-[17px] max-sm:text-[22px]">{topic.icon}</div>
                        </div>
                        <p className="text-gray-400 max-sm:text-[14px] text-[13px] mt-2 mb-4">{topic.description}</p>
                        <Link href={`/feed/${topic.link}`} className="text-indigo-500 text-[13px] font-semibold hover:underline">
                            incele
                        </Link>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Page;

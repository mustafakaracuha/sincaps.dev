"use client";

import React from "react";

import { motion } from "framer-motion";

import { FaTachometerAlt, FaBan, FaWalking, FaTrafficLight, FaCarSide, FaMobileAlt } from "react-icons/fa"; // İkonları içe aktar
import { PiSeatbeltFill } from "react-icons/pi";

function page() {
    const trafficRules = [
        {
            title: "Hız Sınırlarına Uyun",
            description: "Şehir içi ve şehir dışı yollarda belirlenen hız sınırlarına uymak zorunludur. Hız sınırlarını aşmak hem sizin hem de diğer sürücülerin güvenliğini tehlikeye atar.",
            icon: <FaTachometerAlt className="text-red-500" />,
        },
        {
            title: "Emniyet Kemerinizi Takın",
            description: "Araç hareket etmeye başlamadan önce, sürücü ve tüm yolcuların emniyet kemerini takması zorunludur.",
            icon: <PiSeatbeltFill className="text-blue-500" />,
        },
        {
            title: "Alkollü Araç Kullanmayın",
            description:
                "Alkollü iken araç kullanmak trafik kazalarına yol açabileceği için kesinlikle yasaktır. Alkollü araç kullanmanın cezası hem para cezası hem de ehliyete el konulması olabilir.",
            icon: <FaBan className="text-yellow-500" />,
        },
        {
            title: "Yaya Geçitlerinde Dikkatli Olun",
            description: "Yaya geçitlerinde durarak yayaların geçişine izin verin. Özellikle okul ve hastane çevrelerinde bu kurala dikkat etmek önemlidir.",
            icon: <FaWalking className="text-green-500" />,
        },
        {
            title: "Trafik Işıklarına Uyun",
            description: "Trafik ışıkları, yolun güvenli bir şekilde kullanılmasını sağlar. Kırmızı ışıkta geçmek tehlikeli ve yasaktır.",
            icon: <FaTrafficLight className="text-red-600" />,
        },
        {
            title: "Takip Mesafesine Dikkat Edin",
            description: "Öndeki araçla aranızdaki mesafeyi koruyun. Ani durmalarda kaza riskini azaltmak için takip mesafesi hayati önem taşır.",
            icon: <FaCarSide className="text-purple-500" />,
        },
        {
            title: "Mobil Cihaz Kullanımına Dikkat Edin",
            description: "Araç kullanırken cep telefonu veya başka mobil cihazlar kullanmak dikkat dağınıklığına neden olur ve kazalara yol açabilir.",
            icon: <FaMobileAlt className="text-orange-500" />,
        },
    ];

    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className="w-full h-full py-8 px-10 max-sm:px-5 pb-20 bg-white overflow-auto">
            <h1 className="text-xl max-sm:text-[16px] flex items-center justify-between gap-4 font-semibold text-gray-700 text-start mb-4">Trafik Kuralları</h1>
            <ul className="space-y-3">
                {trafficRules.map((rule, index) => (
                    <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="p-4 border-b border-gray-100 flex items-center gap-4"
                    >
                        <div className="text-xl">{rule.icon}</div>
                        <div>
                            <h2 className="text-md max-sm:text-[14px] font-semibold text-gray-700 mb-2">{rule.title}</h2>
                            <p className="text-[14px] max-sm:text-[13px] text-gray-500">{rule.description}</p>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
}

export default page;

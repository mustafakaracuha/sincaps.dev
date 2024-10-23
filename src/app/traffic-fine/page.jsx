"use client";

import { motion } from "framer-motion";
import { FaTachometerAlt, FaBeer, FaMobileAlt, FaParking, FaTrafficLight } from "react-icons/fa";
import { PiSeatbeltFill } from "react-icons/pi";

function page() {
    const trafficFines = [
        {
            id: 1,
            title: "Hız Sınırını Aşma",
            icon: <FaTachometerAlt className="text-red-500 text-xl" />,
            color: "border-red-500",
            details: [
                { description: "Hız sınırını %10-%30 oranında aşma cezası", fine: "951 TL" },
                { description: "Hız sınırını %30-%50 oranında aşma cezası", fine: "1.979 TL" },
                { description: "Hız sınırını %50'den fazla aşma cezası", fine: "4.064 TL" },
            ],
        },
        {
            id: 2,
            title: "Alkollü Araç Kullanma",
            icon: <FaBeer className="text-yellow-500 text-xl" />,
            color: "border-yellow-500",
            details: [
                { description: "İlk sefer alkollü araç kullanma cezası", fine: "6.439 TL" },
                { description: "İkinci sefer alkollü araç kullanma cezası", fine: "8.075 TL" },
                { description: "Üçüncü sefer alkollü araç kullanma cezası", fine: "12.978 TL" },
            ],
        },
        {
            id: 3,
            title: "Emniyet Kemeri Takmama",
            icon: <PiSeatbeltFill className="text-blue-500 text-xl" />,
            color: "border-blue-500",
            details: [{ description: "Emniyet kemeri kullanmama cezası", fine: "691 TL" }],
        },
        {
            id: 4,
            title: "Cep Telefonu Kullanma",
            icon: <FaMobileAlt className="text-green-500 text-xl" />,
            color: "border-green-500",
            details: [{ description: "Araç kullanırken cep telefonu kullanma cezası", fine: "1.507 TL" }],
        },
        {
            id: 5,
            title: "Park İhlalleri",
            icon: <FaParking className="text-purple-500 text-xl" />,
            color: "border-purple-500",
            details: [{ description: "Yasak yere park etme cezası", fine: "691 TL" }],
        },
        {
            id: 6,
            title: "Kırmızı Işık İhlali",
            icon: <FaTrafficLight className="text-orange-500 text-xl" />,
            color: "border-orange-500",
            details: [{ description: "Kırmızı ışıkta geçme cezası", fine: "951 TL" }],
        },
    ];

    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className="w-full h-full overflow-auto pb-24 px-10 py-8">
            <h1 className="text-xl max-sm:text-[16px] flex items-center justify-between gap-4 font-semibold text-gray-600 text-start mb-4">2024 Yılı Türkiye Trafik Cezaları</h1>
            <div className="space-y-4">
                {trafficFines.map((fine) => (
                    <div key={fine.id} className={`p-4 border border-gray-200 rounded-lg shadow-sm flex items-start gap-4`}>
                        <div>{fine.icon}</div>
                        <div>
                            <h2 className="text-md max-sm:text-[14px] font-semibold text-gray-700 mb-1">{fine.title}</h2>
                            {fine.details.map((detail, index) => (
                                <p key={index} className="text-gray-600 text-[14px] max-sm:text-[13px] mb-1">
                                    {detail.description}: <strong>{detail.fine}</strong>
                                </p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default page;

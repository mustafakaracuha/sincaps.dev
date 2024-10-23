"use client";

import { motion } from "framer-motion";

function page() {
    const trafficFines = [
        {
            id: 1,
            title: "Hız Sınırını Aşma",
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
            color: "border-blue-500",
            details: [{ description: "Emniyet kemeri kullanmama cezası", fine: "691 TL" }],
        },
        {
            id: 4,
            title: "Cep Telefonu Kullanma",
            color: "border-green-500",
            details: [{ description: "Araç kullanırken cep telefonu kullanma cezası", fine: "1.507 TL" }],
        },
        {
            id: 5,
            title: "Park İhlalleri",
            color: "border-purple-500",
            details: [{ description: "Yasak yere park etme cezası", fine: "691 TL" }],
        },
        {
            id: 6,
            title: "Kırmızı Işık İhlali",
            color: "border-orange-500",
            details: [{ description: "Kırmızı ışıkta geçme cezası", fine: "951 TL" }],
        },
    ];

    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className="w-full h-full overflow-auto pb-24 px-10 py-8">
            <h1 className="text-xl flex items-center justify-between gap-4 font-semibold text-gray-600 text-start mb-4">2024 Yılı Türkiye Trafik Cezaları</h1>
            <div className="space-y-4">
                {trafficFines.map((fine) => (
                    <div key={fine.id} className={`p-4 bg-gray-50 border-l-4 ${fine.color}`}>
                        <h2 className="text-md font-semibold text-gray-700 mb-1">{fine.title}</h2>
                        {fine.details.map((detail, index) => (
                            <p key={index} className="text-gray-600 text-[14px]">
                                {detail.description}: <strong>{detail.fine}</strong>
                            </p>
                        ))}
                    </div>
                ))}
            </div>
        </motion.div>
    );
}

export default page;

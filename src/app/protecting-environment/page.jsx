"use client";

import React from "react";

import { motion } from "framer-motion";

import { FaRecycle, FaLightbulb, FaWater, FaTree, FaCarSide, FaApple } from "react-icons/fa";
import { FaBottleDroplet } from "react-icons/fa6";
import { GiFruitBowl } from "react-icons/gi";

function page() {
    const environmentProtectionTips = [
        {
            title: "Geri Dönüşüm",
            description: "Atıkların geri dönüşümünü sağlamak, doğal kaynakların korunmasına yardımcı olur ve atık miktarını azaltır.",
            icon: <FaRecycle className="text-green-500" />,
        },
        {
            title: "Enerji Tasarrufu",
            description: "Elektrikli aletleri kullanmadığınız zaman kapatmak ve enerji tasarruflu ampuller kullanmak, enerji tüketimini azaltır.",
            icon: <FaLightbulb className="text-yellow-500" />,
        },
        {
            title: "Su Tasarrufu",
            description: "Muslukları kapatmak ve suyu gereksiz yere israf etmemek, su kaynaklarının korunmasına yardımcı olur.",
            icon: <FaWater className="text-blue-500" />,
        },
        {
            title: "Ağaç Dikin",
            description: "Ağaçlar, havayı temizler ve ekosistemi dengede tutar. Ağaç dikmek, doğanın yeniden canlanmasına katkı sağlar.",
            icon: <FaTree className="text-green-700" />,
        },
        {
            title: "Araç Kullanımını Azaltın",
            description: "Yürümek, bisiklet sürmek veya toplu taşıma kullanmak, karbon salınımını azaltır ve hava kalitesini iyileştirir.",
            icon: <FaCarSide className="text-gray-700" />,
        },
        {
            title: "Plastik Kullanımını Azaltın",
            description: "Tek kullanımlık plastik ürünlerden kaçınmak ve yeniden kullanılabilir ürünleri tercih etmek, çevreyi korur.",
            icon: <FaBottleDroplet className="text-purple-500" />,
        },
        {
            title: "Yerel Ürünleri Tercih Edin",
            description: "Yerel çiftçilerden alınan ürünler, taşımacılık nedeniyle oluşan karbon ayak izini azaltır.",
            icon: <GiFruitBowl className="text-red-500" />,
        },
    ];

    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className="w-full h-full py-8 px-10 pb-20 bg-white overflow-auto">
            <h1 className="text-xl max-sm:text-[16px] flex items-center justify-between gap-4 font-semibold text-gray-700 text-start mb-4">Çevreyi Korumak</h1>
            <ul className="space-y-4">
                {environmentProtectionTips.map((tip, index) => (
                    <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="p-4 border border-gray-200 rounded-lg shadow-sm flex items-center gap-4"
                    >
                        <div className="text-xl">{tip.icon}</div>
                        <div>
                            <h2 className="text-md max-sm:text-[14px] font-semibold text-gray-700 mb-2">{tip.title}</h2>
                            <p className="text-[14px] max-sm:text-[13px] text-gray-500">{tip.description}</p>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
}

export default page;

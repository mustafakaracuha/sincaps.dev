"use client";

import React from "react";
import { motion } from "framer-motion";

import { FaRecycle, FaLightbulb, FaWater, FaTree, FaCarSide, FaApple } from "react-icons/fa";
import { FaBottleDroplet } from "react-icons/fa6";
import { GiFruitBowl } from "react-icons/gi";
import { MdHouse } from "react-icons/md";

function Page() {
    const environmentProtectionTips = [
        {
            title: "Geri Dönüşüm",
            description:
                "Atıkların geri dönüşümünü sağlamak, doğal kaynakların korunmasına yardımcı olur ve atık miktarını azaltır. Kağıt, plastik ve cam gibi materyallerin geri dönüşümü ile enerji tasarrufu sağlanır.",
            icon: <FaRecycle className="text-green-500" />,
        },
        {
            title: "Enerji Tasarrufu",
            description:
                "Elektrikli aletleri kullanmadığınız zaman kapatmak ve enerji tasarruflu ampuller kullanmak, enerji tüketimini azaltır. Evinizdeki enerji tasarruflu cihazlar kullanarak faturalarınızı düşürebilir ve çevreye katkıda bulunabilirsiniz.",
            icon: <FaLightbulb className="text-yellow-500" />,
        },
        {
            title: "Su Tasarrufu",
            description:
                "Muslukları kapatmak ve suyu gereksiz yere israf etmemek, su kaynaklarının korunmasına yardımcı olur. Ayrıca, yağmur suyu toplama sistemleri kullanarak doğal kaynaklardan tasarruf edebilirsiniz.",
            icon: <FaWater className="text-blue-500" />,
        },
        {
            title: "Ağaç Dikin",
            description: "Ağaçlar, havayı temizler ve ekosistemi dengede tutar. Ağaç dikmek, doğanın yeniden canlanmasına katkı sağlar ve yerel faunanın yaşam alanlarını korur.",
            icon: <FaTree className="text-green-700" />,
        },
        {
            title: "Araç Kullanımını Azaltın",
            description:
                "Yürümek, bisiklet sürmek veya toplu taşıma kullanmak, karbon salınımını azaltır ve hava kalitesini iyileştirir. Carpool (bir arabanın birkaç kişi tarafından paylaşılması) uygulamaları ile ulaşımda daha sürdürülebilir bir yol izleyebilirsiniz.",
            icon: <FaCarSide className="text-gray-700" />,
        },
        {
            title: "Plastik Kullanımını Azaltın",
            description:
                "Tek kullanımlık plastik ürünlerden kaçınmak ve yeniden kullanılabilir ürünleri tercih etmek, çevreyi korur. Alışveriş yaparken bez çanta kullanarak plastik poşet tüketimini azaltabilirsiniz.",
            icon: <FaBottleDroplet className="text-purple-500" />,
        },
        {
            title: "Yerel Ürünleri Tercih Edin",
            description:
                "Yerel çiftçilerden alınan ürünler, taşımacılık nedeniyle oluşan karbon ayak izini azaltır. Ayrıca, organik ürünleri tercih etmek, kimyasal gübre ve ilaç kullanımını azaltır.",
            icon: <GiFruitBowl className="text-red-500" />,
        },
        {
            title: "Doğal Kaynakları Koru",
            description:
                "Doğal kaynakları korumak için mümkünse malzemeleri geri dönüştürmeli veya yeniden kullanılabilir seçenekleri tercih etmelisiniz. Ayrıca, doğal alanları koruma çabalarına katılarak çevre bilincini artırabilirsiniz.",
            icon: <FaApple className="text-red-500" />,
        },
        {
            title: "Atık Yönetimi",
            description:
                "Atıklarınızı doğru şekilde ayırmak, geri dönüşüm ve kompost yapımına yardımcı olur. Organik atıklarınızı kompost yaparak toprağın verimliliğini artırabilir ve atık miktarını azaltabilirsiniz.",
            icon: <MdHouse className="text-brown-500" />,
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="w-full h-full py-8 px-10 max-sm:px-5 pb-20 bg-white overflow-auto"
        >
            <h1 className="text-xl max-sm:text-[16px] flex items-center justify-between gap-4 font-semibold text-gray-700 text-start mb-4">Çevreyi Korumak</h1>
            <ul className="space-y-3">
                {environmentProtectionTips.map((tip, index) => (
                    <motion.li
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="p-4 border-b border-gray-100 flex items-center gap-4"
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

export default Page;

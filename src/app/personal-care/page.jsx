"use client";

import React from "react";
import { motion } from "framer-motion";

import { FaSpa, FaTooth, FaShower, FaCut, FaSprayCan } from "react-icons/fa";

function PersonalCarePage() {
    const personalCareTopics = [
        {
            title: "Cilt Bakımı",
            description: "Cilt temizliği ve nemlendirme rutini, sağlıklı bir görünüm için önemlidir. Güneş koruyucu kullanmak da cilt yaşlanmasını önler ve lekelerin oluşumunu azaltır.",
            icon: <FaSpa className="text-pink-500 text-lg" />,
        },
        {
            title: "Diş Bakımı",
            description: "Düzenli diş fırçalama ve diş ipi kullanımı, ağız sağlığını korur. Ayrıca, yılda en az bir kez diş hekimine gitmek, diş problemlerinin önüne geçer.",
            icon: <FaTooth className="text-blue-500 text-lg" />,
        },
        {
            title: "Saç Bakımı",
            description: "Saçın sağlıklı ve parlak kalması için düzenli yıkama ve uygun ürünler kullanmak gerekir. Ayrıca saç maskeleri ve doğal yağlar, saçın beslenmesine yardımcı olur.",
            icon: <FaShower className="text-green-500 text-lg" />,
        },
        {
            title: "Tıraş ve Kesim",
            description: "Düzenli tıraş ve saç kesimi, temiz ve bakımlı bir görünüm sağlar. Tıraş sonrası cilt bakım ürünleri kullanmak, ciltteki tahrişi azaltır.",
            icon: <FaCut className="text-gray-500 text-lg" />,
        },
        {
            title: "Parfüm ve Deodorant Kullanımı",
            description:
                "Deodorant, ter kokusunu önlemek için günlük olarak kullanılmalıdır. Parfüm ise kişisel tarzınızı yansıtmak için hafifçe uygulanabilir. Tercih edilen parfüm, kişisel imajınızı güçlendirir.",
            icon: <FaSprayCan className="text-yellow-500 text-lg" />,
        },
    ];

    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className="w-full h-full overflow-auto pb-24 px-10 max-sm:px-5 py-8">
            <h1 className="text-xl max-sm:text-[16px] flex items-center justify-between gap-4 font-semibold text-gray-600 text-start mb-4">Kişisel Bakım</h1>
            <ul className="space-y-3">
                {personalCareTopics.map((topic, index) => (
                    <motion.li
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        key={index}
                        className="p-4 border-b border-gray-100 flex items-center gap-4"
                    >
                        <div>{topic.icon}</div>
                        <div>
                            <h2 className="text-md max-sm:text-[14px] font-semibold text-gray-700 mb-1">{topic.title}</h2>
                            <p className="text-gray-500 text-[14px] max-sm:text-[13px] mb-1">{topic.description}</p>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
}

export default PersonalCarePage;

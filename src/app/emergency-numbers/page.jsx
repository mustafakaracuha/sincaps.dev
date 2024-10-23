"use client"

import React from "react";
import {motion} from 'framer-motion'

import { FaAmbulance, FaFireExtinguisher, FaShieldAlt, FaTree, FaPhoneAlt, FaLifeRing } from "react-icons/fa";

function page() {
    const emergencyNumbers = [
        {
            name: "Polis İmdat",
            number: "155",
            description: "Acil polis yardımı gerektiğinde arayabileceğiniz numara.",
            icon: <FaShieldAlt className="text-blue-500" />,
        },
        {
            name: "Acil Sağlık",
            number: "112",
            description: "Acil sağlık yardımı veya ambulans çağırmak için arayabileceğiniz numara.",
            icon: <FaAmbulance className="text-red-500" />,
        },
        {
            name: "İtfaiye",
            number: "110",
            description: "Yangın veya kurtarma operasyonları için itfaiyeye ulaşabileceğiniz numara.",
            icon: <FaFireExtinguisher className="text-orange-500" />,
        },
        {
            name: "Jandarma İmdat",
            number: "156",
            description: "Jandarma yardımı gerektiğinde arayabileceğiniz numara.",
            icon: <FaShieldAlt className="text-green-500" />,
        },
        {
            name: "Orman Yangını",
            number: "177",
            description: "Orman yangınları ile ilgili acil durumlarda arayabileceğiniz numara.",
            icon: <FaTree className="text-green-600" />,
        },
        {
            name: "Sahil Güvenlik",
            number: "158",
            description: "Deniz ile ilgili acil durumlarda sahil güvenliğe ulaşabileceğiniz numara.",
            icon: <FaLifeRing className="text-blue-600" />,
        },
    ];

    return (
        <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
        className="w-full h-full py-8 px-10 pb-20 bg-white overflow-auto">
            <h1 className="text-xl max-sm:text-[16px] flex items-center justify-between gap-4 font-semibold text-gray-700 text-start mb-4">Acil Durum Numaraları</h1>
            <ul className="space-y-4">
                {emergencyNumbers.map((emergency, index) => (
                    <li key={index} className="p-4 border border-gray-200 rounded-lg shadow-sm flex items-center gap-4">
                        <div className="text-xl">{emergency.icon}</div>
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <h2 className="text-md max-sm:text-[14px] font-semibold text-gray-700 mb-2">{emergency.name}</h2>
                                <span className="text-lg font-bold text-red-500">{emergency.number}</span>
                            </div>
                            <p className="text-[14px] max-sm:text-[13px] text-gray-600">{emergency.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

export default page;

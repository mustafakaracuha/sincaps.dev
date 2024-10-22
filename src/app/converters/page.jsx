"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import { TbTemperatureSun } from "react-icons/tb";
import { RiRulerLine } from "react-icons/ri";
import { GiWeightScale, GiSpeedometer, GiMoneyStack, GiClockwork } from "react-icons/gi";

const converters = [
    { name: "Birim", icon: <RiRulerLine />, description: "Uzunluk, ağırlık, sıcaklık ve diğer ölçü birimleri arasında dönüşüm yapın.", color: "text-blue-400" },
    { name: "Para Birimi", icon: <GiMoneyStack />, description: "Farklı ülkelerin para birimleri arasında dönüşüm yapın.", color: "text-green-400" },
    { name: "Hız", icon: <GiSpeedometer />, description: "Km/s, mil/saat gibi hız birimleri arasında dönüşüm yapın.", color: "text-yellow-400" },
    { name: "Ağırlık", icon: <GiWeightScale />, description: "Kilogram, pound ve diğer ağırlık birimleri arasında dönüşüm yapın.", color: "text-red-400" },
    { name: "Sıcaklık", icon: <TbTemperatureSun />, description: "Santigrat, Fahrenheit gibi sıcaklık birimleri arasında dönüşüm yapın.", color: "text-orange-400" },
    { name: "Süre", icon: <GiClockwork />, description: "Saat, dakika, saniye gibi zaman birimleri arasında dönüşüm yapın.", color: "text-purple-400" },
];

function Converter() {
    const [selectedConverter, setSelectedConverter] = useState("");

    return (
        <div className={`flex w-full h-full overflow-auto pb-24 px-10 py-8 ${selectedConverter ? "flex-row" : "flex-col"}`}>
            <div className={`flex-1 ${selectedConverter ? "w-2/3" : "w-full"}`}>
                <div className="mb-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-xl flex items-center justify-between gap-4 font-semibold text-gray-600 text-start mb-4"
                    >
                        Dönüştürücüler
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                        className="max-sm:text-xs md:text-sm lg:text-md xl:text-md text-gray-500"
                    >
                        Farklı birimler, para birimleri ve ölçüler arasında hızlı ve kolay dönüşüm yapabileceğiniz araçlarımızı keşfedin. İhtiyacınıza uygun dönüştürücüyü seçin.
                    </motion.p>
                </div>

                <div className={"grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6 transition-all duration-300"}>
                    {converters.map((converter, index) => (
                        <motion.div
                            key={index}
                            onClick={() => setSelectedConverter(converter)}
                            className={`bg-white p-6 rounded-xl shadow-lg shadow-gray-200 flex flex-col items-start text-start"}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            <div className="w-full flex items-center justify-between mb-4">
                                <h3 className="text-sm font-semibold text-gray-600">{converter.name}</h3>
                                <div className={`${converter.color} text-lg`}>{converter.icon}</div>
                            </div>
                            <h3 className="text-gray-400 text-[13px] mt-2 mb-4">{converter.description}</h3>
                            <p className="text-indigo-500 text-[14px] font-medium hover:underline">Dönüştür</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Converter;

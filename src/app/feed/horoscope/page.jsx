"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { GiAries, GiTaurus, GiGemini, GiCancer, GiLeo, GiVirgo, GiLibra, GiScorpio, GiSagittarius, GiCapricorn, GiAquarius, GiPisces } from "react-icons/gi";
import { fetchHoroscope } from "../../../store/features/horoscopes/horoscopeSlice";

const horoscopes = [
    { name: "Koç", icon: <GiAries />, date: "21 Mar - 19 Nis", color: "text-red-400" },
    { name: "Boğa", icon: <GiTaurus />, date: "20 Nis - 20 May", color: "text-green-400" },
    { name: "İkizler", icon: <GiGemini />, date: "21 May - 20 Haz", color: "text-blue-400" },
    { name: "Yengeç", icon: <GiCancer />, date: "21 Haz - 22 Tem", color: "text-purple-400" },
    { name: "Aslan", icon: <GiLeo />, date: "23 Tem - 22 Ağu", color: "text-yellow-400" },
    { name: "Başak", icon: <GiVirgo />, date: "23 Ağu - 22 Eyl", color: "text-gray-400" },
    { name: "Terazi", icon: <GiLibra />, date: "23 Eyl - 22 Eki", color: "text-pink-400" },
    { name: "Akrep", icon: <GiScorpio />, date: "23 Eki - 21 Kas", color: "text-pink-400" },
    { name: "Yay", icon: <GiSagittarius />, date: "22 Kas - 21 Ara", color: "text-orange-400" },
    { name: "Oğlak", icon: <GiCapricorn />, date: "22 Ara - 19 Oca", color: "text-violet-400" },
    { name: "Kova", icon: <GiAquarius />, date: "20 Oca - 18 Şub", color: "text-teal-400" },
    { name: "Balık", icon: <GiPisces />, date: "19 Şub - 20 Mar", color: "text-cyan-400" },
];

function HoroscopePage() {
    const [selectedHoroscope, setSelectedHoroscope] = useState("");
    const { horoscopeListResult } = useSelector((state) => state.horoscope);
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedHoroscope.name) {
            dispatch(fetchHoroscope(selectedHoroscope.name));
        }
    }, [dispatch, selectedHoroscope]);

    return (
        <div className={`flex w-full h-full overflow-auto pb-24 px-10 py-8 ${selectedHoroscope ? "flex-row" : "flex-col"}`}>
            <div className={`flex-1 ${selectedHoroscope ? "w-2/3" : "w-full"}`}>
                <div className="mb-6">
                    <h1 className="text-xl flex items-center justify-between gap-4 font-semibold text-gray-600 text-start mb-4">Burçlar</h1>
                    <p className="max-sm:text-xs md:text-sm lg:text-md xl:text-md text-gray-500">
                        Gök kubbede yer alan 12 takımyıldızına burç denir. Bir insanın doğum anında Güneş hangi takımyıldızındaysa o, kişinin burcudur. Zodyak Kuşağında gezegenlerin seyri
                        takımyıldızlarıyla ilişkilendirildiğinde anlamı ve etkisi değişir.
                    </p>
                </div>

                <div className={"grid max-sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mt-6 transition-all duration-300"}>
                    {horoscopes.map((horoscope, index) => (
                        <motion.div
                            key={index}
                            onClick={() => setSelectedHoroscope(horoscope)}
                            className={`cursor-pointer p-6 flex flex-col items-center shadow-lg shadow-gray-200 rounded-2xl ${selectedHoroscope === horoscope ? "bg-gray-50" : "bg-white"}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                        >
                            <div className={`${horoscope.color} text-3xl mb-2`}>{horoscope.icon}</div>
                            <h3 className="text-md text-gray-600 mb-1 font-medium">{horoscope.name}</h3>
                            <p className="text-sm text-gray-400">{horoscope.date}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {horoscopeListResult && selectedHoroscope && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <motion.div
                        className="bg-white w-full h-full p-8 relative overflow-auto flex flex-col items-center justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <button onClick={() => setSelectedHoroscope("")} className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-4xl">
                            &times;
                        </button>
                        <div className="flex flex-col items-center">
                            <div className={`${selectedHoroscope.color} text-6xl mb-4`}>{selectedHoroscope.icon}</div>
                            <h2 className="text-3xl font-bold mb-2">{selectedHoroscope.name} Burcu</h2>
                            <p className="text-lg mt-1 text-gray-500">{selectedHoroscope.date}</p>
                            <div className="mt-6 text-lg text-gray-600 px-4 max-w-xl">
                                <p className="font-semibold mb-4">Günlük Burç Yorumu</p>
                                <p>{horoscopeListResult[0]?.title}</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}

export default HoroscopePage;

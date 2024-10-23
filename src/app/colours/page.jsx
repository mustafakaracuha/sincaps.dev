"use client";

import React from "react";
import { motion } from "framer-motion";

function page() {
    const colors = [
        {
            name: "Kırmızı",
            hex: "#FF0000",
            description: "Kırmızı, genellikle tehlikeyi, tutkuyu veya enerjiyi temsil eder.",
            colorBox: <div style={{ backgroundColor: "#FF0000" }} className="w-8 h-8 rounded-full"></div>,
        },
        {
            name: "Mavi",
            hex: "#0000FF",
            description: "Mavi, güveni, sadakati ve dinginliği temsil eder.",
            colorBox: <div style={{ backgroundColor: "#0000FF" }} className="w-8 h-8 rounded-full"></div>,
        },
        {
            name: "Yeşil",
            hex: "#00FF00",
            description: "Yeşil, doğayı, büyümeyi ve tazeliği simgeler.",
            colorBox: <div style={{ backgroundColor: "#00FF00" }} className="w-8 h-8 rounded-full"></div>,
        },
        {
            name: "Sarı",
            hex: "#FFFF00",
            description: "Sarı, neşeyi, enerjiyi ve sıcaklığı ifade eder.",
            colorBox: <div style={{ backgroundColor: "#FFFF00" }} className="w-8 h-8 rounded-full"></div>,
        },
        {
            name: "Turuncu",
            hex: "#FFA500",
            description: "Turuncu, yaratıcılığı ve coşkuyu temsil eder.",
            colorBox: <div style={{ backgroundColor: "#FFA500" }} className="w-8 h-8 rounded-full"></div>,
        },
        {
            name: "Mor",
            hex: "#800080",
            description: "Mor, lüksü, zarafeti ve gizemi simgeler.",
            colorBox: <div style={{ backgroundColor: "#800080" }} className="w-8 h-8 rounded-full"></div>,
        },
        {
            name: "Siyah",
            hex: "#000000",
            description: "Siyah, gücü, şıklığı ve sofistikeliği ifade eder.",
            colorBox: <div style={{ backgroundColor: "#000000" }} className="w-8 h-8 rounded-full"></div>,
        },
        {
            name: "Beyaz",
            hex: "#FFFFFF",
            description: "Beyaz, saflığı, temizliği ve sadeliği ifade eder.",
            colorBox: <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB" }} className="w-8 h-8 rounded-full"></div>,
        },
        {
            name: "Gri",
            hex: "#808080",
            description: "Gri, dengeyi ve tarafsızlığı temsil eder.",
            colorBox: <div style={{ backgroundColor: "#808080" }} className="w-8 h-8 rounded-full"></div>,
        },
        {
            name: "Açık Mavi",
            hex: "#ADD8E6",
            description: "Açık mavi, sakinliği ve huzuru ifade eder.",
            colorBox: <div style={{ backgroundColor: "#ADD8E6" }} className="w-8 h-8 rounded-full"></div>,
        },
        {
            name: "Pembe",
            hex: "#FFC0CB",
            description: "Pembe, şefkati ve sevgiyi temsil eder.",
            colorBox: <div style={{ backgroundColor: "#FFC0CB" }} className="w-8 h-8 rounded-full"></div>,
        },
        {
            name: "Kahverengi",
            hex: "#A52A2A",
            description: "Kahverengi, toprağı ve doğallığı simgeler.",
            colorBox: <div style={{ backgroundColor: "#A52A2A" }} className="w-8 h-8 rounded-full"></div>,
        },
        {
            name: "Açık Yeşil",
            hex: "#90EE90",
            description: "Açık yeşil, doğanın tazeliğini ve yenilenmeyi ifade eder.",
            colorBox: <div style={{ backgroundColor: "#90EE90" }} className="w-8 h-8 rounded-full"></div>,
        },
        {
            name: "Açık Gri",
            hex: "#D3D3D3",
            description: "Açık gri, sadeliği ve minimalizmi temsil eder.",
            colorBox: <div style={{ backgroundColor: "#D3D3D3" }} className="w-8 h-8 rounded-full"></div>,
        },
        {
            name: "Lacivert",
            hex: "#000080",
            description: "Lacivert, derinliği ve ciddiyeti ifade eder.",
            colorBox: <div style={{ backgroundColor: "#000080" }} className="w-8 h-8 rounded-full"></div>,
        },
    ];

    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className="w-full h-full py-8 px-10 pb-20 bg-white overflow-auto">
            <h1 className="text-xl max-sm:text-[16px] font-semibold text-gray-700 text-start mb-4">Renkler</h1>
            <ul className="space-y-4">
                {colors.map((color, index) => (
                    <li key={index} className="p-4 border border-gray-200 rounded-lg shadow-sm flex items-center gap-4">
                        {color.colorBox}
                        <div className="flex-1">
                            <div className="flex justify-between items-center">
                                <h2 className="text-md max-sm:text-[14px] font-semibold text-gray-700 mb-1">{color.name}</h2>
                                <span className="text-sm font-bold text-gray-500">{color.hex}</span>
                            </div>
                            <p className="text-gray-500 text-[14px] max-sm:text-[13px] mb-1">{color.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </motion.div>
    );
}

export default page;

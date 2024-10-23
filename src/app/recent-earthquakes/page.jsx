"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";
import { FiRefreshCw } from "react-icons/fi";
import { WiEarthquake } from "react-icons/wi";
import { LuSquirrel } from "react-icons/lu";

import { fetchLastEarthquake } from "../../store/features/recent-earthquakes/recent-earthquakesSlice";

function Page() {
    const { lastEarthquakeInfo, loading, error } = useSelector((state) => state.recentEarthquakes);
    const [selectedFilter, setSelectedFilter] = useState("all");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLastEarthquake());
    }, []);

    const sortedEarthquakeInfo = [...lastEarthquakeInfo].sort((a, b) => b.mag - a.mag);

    const filterOptions = [
        { value: "all", label: "Son Depremler" },
        { value: "5+", label: "5 ve Üzeri" },
        { value: "3-5", label: "3 - 5 Arası" },
        { value: "under3", label: "3'ten Küçük" },
    ];

    const filteredEarthquakeInfo = sortedEarthquakeInfo.filter((quake) => {
        if (selectedFilter === "5+") return quake.mag >= 5;
        if (selectedFilter === "3-5") return quake.mag >= 3 && quake.mag < 5;
        if (selectedFilter === "under3") return quake.mag < 3;
        return true;
    });

    if (loading) {
        return (
            <div className="w-full flex flex-col items-center justify-center pt-10">
                <LuSquirrel className="text-2xl text-gray-400 animate-pulse" />
                <p className="mt-2 text-gray-500">Son depremler yükleniyor...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500">
                <p>Hata: {error}</p>
                <button onClick={() => dispatch(fetchNews(feedName))} className="text-blue-500 hover:underline">
                    Tekrar Dene
                </button>
            </div>
        );
    }

    const getMagnitudeColor = (magnitude) => {
        if (magnitude >= 5) return "bg-red-50 text-red-600";
        if (magnitude >= 3) return "bg-yellow-100 text-yellow-700";
        return "bg-blue-100 text-blue-600";
    };

    return (
        <div className="w-full h-full pb-24 bg-white px-10 pt-8 overflow-auto custom-scrollbar-page">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.3 }} className="w-full flex items-center justify-between mb-4">
                <select
                    value={selectedFilter}
                    onChange={(e) => setSelectedFilter(e.target.value)}
                    className="text-xl max-sm:text-[15px] flex items-center outline-none justify-between gap-4 font-semibold text-gray-600 text-start"
                >
                    {filterOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <button onClick={() => dispatch(fetchLastEarthquake())} className={loading ? "animate-spin" : " text-gray-500"}>
                    <FiRefreshCw size={17} />
                </button>
            </motion.div>
            <div className="space-y-4">
                {filteredEarthquakeInfo.map((quake, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="p-4 border border-gray-200 rounded-lg shadow-sm flex justify-between items-center bg-white"
                    >
                        <div className="flex items-center gap-2">
                            <WiEarthquake size={30} className="text-red-400 max-sm:hidden" />
                            <div>
                                <h2 className="text-md max-sm:text-[12px] font-semibold text-gray-800 mb-1">{quake.title}</h2>
                                <p className="text-xs max-sm:text-[11px] text-gray-500">Tarih: {quake.date}</p>
                            </div>
                        </div>
                        <div className={`w-32 text-start px-4 py-2 rounded-md ${getMagnitudeColor(quake.mag)}`}>
                            <p className="text-sm max-sm:text-[12px] font-extrabold mb-1">Büyüklük: {quake.mag}</p>
                            <p className="text-xs max-sm:text-[12px]">Derinlik: {quake.depth} km</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Page;

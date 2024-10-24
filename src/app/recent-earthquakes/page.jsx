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

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLastEarthquake());
    }, []);

    if (loading) {
        return (
            <div className="w-full flex flex-col items-center justify-center pt-10">
                <LuSquirrel className="text-2xl text-gray-400 animate-bounce" />
                <p className="mt-2 text-gray-500">Son depremler yükleniyor...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500">
                <p>Hata: {error}</p>
                <button onClick={() => dispatch(fetchLastEarthquake(feedName))} className="text-blue-500 hover:underline">
                    Tekrar Dene
                </button>
            </div>
        );
    }

    return (
        <div className="w-full h-full pb-24 bg-white max-sm:px-0 px-10 pt-8 overflow-auto custom-scrollbar-page">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.3 }} className="w-full max-sm:px-6 flex items-center justify-between mb-6">
                <h1 className="text-xl max-sm:text-[16px] flex items-center justify-between gap-4 font-semibold text-gray-600 text-start">Son Depremler</h1>
                <button onClick={() => dispatch(fetchLastEarthquake())} className={loading ? "animate-spin" : " text-gray-500"}>
                    <FiRefreshCw size={17} />
                </button>
            </motion.div>
            <div className="space-y-4">
                {lastEarthquakeInfo.map((quake, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        className="p-4 border-b border-gray-100 flex justify-between items-center bg-white"
                    >
                        <div className="flex items-center gap-2">
                            <WiEarthquake size={30} className="text-red-400" />
                            <div>
                                <h2 className="text-sm max-sm:text-[12px] font-semibold text-gray-800 mb-1">{quake.title}</h2>
                                <p className="text-xs max-sm:text-[11px] text-gray-500">Tarih: {quake.date}</p>
                                <p className="text-xs max-sm:text-[12px] text-gray-500 mt-1">Derinlik {quake.depth} km</p>
                            </div>
                        </div>
                        <p className="text-sm w-8 h-8 flex items-center justify-center p-2 bg-red-500 text-white text-center rounded-full max-sm:text-[12px] font-extrabold mb-2">{quake.mag}</p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Page;

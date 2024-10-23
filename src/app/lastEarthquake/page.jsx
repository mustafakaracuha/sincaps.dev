"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";
import { FiRefreshCw } from "react-icons/fi";
import { WiEarthquake } from "react-icons/wi";
import { LuSquirrel } from "react-icons/lu";

import { fetchLastEarthquake } from "../../store/features/lastearthquake/lastEarthquakeSlice";

function Page() {
    const { lastEarthquakeInfo, loading, error } = useSelector((state) => state.lastEarthquake);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchLastEarthquake());
    }, []);

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

    return (
        <div className="w-full h-full pb-24 bg-white px-10 pt-8 overflow-auto custom-scrollbar-page">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1, duration: 0.3 }} className="w-full flex items-center justify-between mb-4">
                <h1 className="text-xl max-sm:text-[15px] flex items-center justify-between gap-4 font-semibold text-gray-600 text-start">Son Depremler</h1>
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
                        className="p-4 border border-gray-200 rounded-lg shadow-sm flex justify-between items-center bg-white"
                    >
                        <div className="flex items-center gap-2">
                            <WiEarthquake size={30} className="text-red-400 max-sm:hidden" />
                            <div>
                                <h2 className="text-md max-sm:text-[12px] font-semibold text-gray-800 mb-1">{quake.title}</h2>
                                <p className="text-xs max-sm:text-[11px] text-gray-500">Tarih: {quake.date}</p>
                            </div>
                        </div>
                        <div className="w-32 text-start px-4 py-2 bg-gray-100 rounded-md">
                            <p className="text-sm max-sm:text-[12px] text-gray-600 font-extrabold mb-1">Büyüklük: {quake.mag}</p>
                            <p className="text-xs max-sm:text-[12px] text-gray-500">Derinlik: {quake.depth}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Page;

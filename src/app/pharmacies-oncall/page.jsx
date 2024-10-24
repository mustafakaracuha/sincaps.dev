"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { LuSquirrel } from "react-icons/lu";

import { fetchPharmaciesOncall } from "../../store/features/pharmacies-oncall/pharmacies-oncallSlice";

function PharmaciesOncallPage() {
    const dispatch = useDispatch();

    const { pharmaciesOncallList, loading, error } = useSelector((state) => state.pharmaciesOncall);

    const [selectedCity, setSelectedCity] = useState("sivas");
    const [selectedDistrict, setSelectedDistrict] = useState("merkez");

    useEffect(() => {
        dispatch(fetchPharmaciesOncall({ selectedCity, selectedDistrict }));
    }, [selectedCity, selectedDistrict]);

    const normalizeString = (str) => {
        const turkishChars = {
            ç: "c",
            Ç: "c",
            ğ: "g",
            Ğ: "g",
            ı: "i",
            İ: "i",
            ö: "o",
            Ö: "o",
            ş: "s",
            Ş: "s",
            ü: "u",
            Ü: "u",
        };

        return str
            .split("")
            .map((char) => turkishChars[char] || char)
            .join("")
            .toLowerCase();
    };

    const handleCityChange = (e) => {
        const selectedCity = e.target.value;
        setSelectedCity(normalizeString(selectedCity));
        setSelectedDistrict("");
    };

    const handleDistrictChange = (e) => {
        const selectedDistrict = e.target.value;
        setSelectedDistrict(normalizeString(selectedDistrict));
    };

    if (loading) {
        return (
            <div className="w-full flex flex-col items-center justify-center pt-10">
                <LuSquirrel className="text-2xl text-gray-400 animate-bounce" />
                <p className="mt-2 text-gray-500">Nöbetçi eczaneler yükleniyor...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500">
                <p>Hata: {error}</p>
                <button onClick={() => dispatch(fetchPharmaciesOncall(selectedCity))} className="text-blue-500 hover:underline">
                    Tekrar Dene
                </button>
            </div>
        );
    }

    return (
        <div className="w-full h-full pb-24 bg-white px-10 pt-8 overflow-auto custom-scrollbar-page">
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className="flex items-center justify-between gap-4 mb-6">
                <h1 className="text-xl max-sm:text-[16px] flex items-center justify-between gap-4 font-semibold text-gray-600 text-start">Nöbetçi Eczaneler</h1>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <select value={selectedCity} onChange={handleCityChange} className="border w-28 text-sm outline-none border-gray-300 rounded-md p-2">
                            {pharmaciesOncallList.cities?.map((city, index) => (
                                <option key={index} value={city.toLowerCase()}>
                                    {city}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="relative">
                        <select value={selectedDistrict} onChange={handleDistrictChange} className="border outline-none text-sm border-gray-300 rounded-md p-2" disabled={!selectedCity}>
                            <option value="">İlçe Seçin</option>
                            {pharmaciesOncallList.districts?.map((district, index) => (
                                <option key={index} value={district.toLowerCase()}>
                                    {district}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>
            </motion.div>

            <ul className="space-y-6">
                {pharmaciesOncallList?.pharmacies?.map((pharmacy, index) => (
                    <motion.li
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        key={index}
                        className="bp-4 border-b border-gray-100 flex-col justify-between items-center bg-white"
                    >
                        <div>
                            <h3 className="text-sm max-sm:text-[12px] font-semibold text-gray-800 mb-2">{pharmacy.title}</h3>
                            <p className="text-xs max-sm:text-[11px] text-gray-500">{pharmacy.address}</p>
                        </div>
                        <div className="flex items-center gap-4 mt-4 mb-4">
                            <a href={`tel:${pharmacy.phone}`} className="flex p-2 text-xs font-semibold rounded-md bg-amber-400 text-white items-center">
                                <FaPhoneAlt className="mr-1" /> {pharmacy.phone}
                            </a>
                            <a href={pharmacy.directions} target="_blank" className="flex p-2 text-xs font-semibold rounded-md bg-indigo-500 text-white items-center">
                                <FaMapMarkerAlt className="mr-1" /> Yol Tarifi Al
                            </a>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </div>
    );
}

export default PharmaciesOncallPage;

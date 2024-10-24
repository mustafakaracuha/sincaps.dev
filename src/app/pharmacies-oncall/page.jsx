"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { FaPhoneAlt, FaMapMarkerAlt, FaExclamationTriangle } from "react-icons/fa";
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

    const handleCityChange = (e) => {
        const selectedCity = e.target.value;
        setSelectedCity(selectedCity);
        setSelectedDistrict("");
    };

    const handleDistrictChange = (e) => {
        const selectedDistrict = e.target.value;
        setSelectedDistrict(selectedDistrict);
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
        <div className="w-full h-full pb-24 bg-white px-10 max-sm:px-5 pt-8 overflow-auto custom-scrollbar-page">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full flex max-sm:flex-col items-center max-sm:items-start justify-between gap-4 mb-6"
            >
                <h1 className="w-full text-xl max-sm:text-[17px] flex items-center justify-between gap-4 font-semibold text-gray-600 text-start capitalize">
                    {selectedCity.toLowerCase() + " " + selectedDistrict.toLowerCase()} Eczaneler
                </h1>

                <div className="w-full flex items-center justify-end gap-4">
                    <select value={selectedCity} onChange={handleCityChange} className="border max-sm:w-full text-sm outline-none border-gray-300 rounded-md p-2">
                        {pharmaciesOncallList.cities?.map((city, index) => (
                            <option key={index} value={city.value}>
                                {city.text}
                            </option>
                        ))}
                    </select>

                    <select value={selectedDistrict} onChange={handleDistrictChange} className="border outline-none max-sm:w-full text-sm border-gray-300 rounded-md p-2" disabled={!selectedCity}>
                        <option value="">İlçe Seçin</option>
                        {pharmaciesOncallList.districts?.map((district, index) => (
                            <option key={index} value={district.value}>
                                {district.text}
                            </option>
                        ))}
                    </select>
                </div>
            </motion.div>

            <ul className="space-y-6">
                {pharmaciesOncallList?.pharmacies?.length > 0
                    ? pharmaciesOncallList.pharmacies.map((pharmacy, index) => (
                          <motion.li
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1, duration: 0.3 }}
                              key={index}
                              className="bp-4 border-b border-gray-100 flex max-sm:flex-col justify-between max-sm:items-start items-center bg-white"
                          >
                              <div className="flex items-center max-sm:items-start gap-3">
                                  <span className="text-3xl rounded-md max-sm:text-lg bg-red-500 px-2 py-1 text-white font-bold">E</span>
                                  <div>
                                      <h3 className="text-[15px] max-sm:text-[14px] font-semibold text-gray-600 mb-2">{pharmacy.title}</h3>
                                      <p className="text-[12px] max-sm:text-[12px] text-gray-400">{pharmacy.address}</p>
                                  </div>
                              </div>
                              <div className="flex items-center max-sm:justify-end max-sm:w-full gap-4 mt-6 mb-4">
                                  <a href={`tel:${pharmacy.phone}`} className="flex p-2 text-xs max-sm:text-[10px] font-semibold rounded-md bg-gray-400 text-white items-center">
                                      <FaPhoneAlt className="mr-1" /> {pharmacy.phone}
                                  </a>
                                  <a
                                      href={pharmacy.directions}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="flex p-2 text-xs max-sm:text-[10px] font-semibold rounded-md bg-indigo-500 text-white items-center"
                                  >
                                      <FaMapMarkerAlt className="mr-1" /> Yol Tarifi Al
                                  </a>
                              </div>
                          </motion.li>
                      ))
                    : loading === false &&
                      pharmaciesOncallList?.pharmacies?.length === 0 && (
                          <li className="text-center bg-yellow-50 px-4 text-sm max-sm:text-[14px] text-yellow-600 rounded-md font-semibold py-4 flex items-center justify-center">
                              <FaExclamationTriangle className="mr-2 text-yellow-600 text-md" /> Bu bölgede eczane bulunamadı.
                          </li>
                      )}
            </ul>
        </div>
    );
}

export default PharmaciesOncallPage;

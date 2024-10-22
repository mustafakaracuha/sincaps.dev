"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { FaCaretDown, FaCaretUp } from "react-icons/fa6";

import { fetchMoneyInfo } from "../../../store/features/converter/money/moneySlice";

function CurrencyConverter() {
    const dispatch = useDispatch();
    const { moneyList, loading } = useSelector((state) => state.money);
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("");
    const [toCurrency, setToCurrency] = useState("");
    const [convertedAmount, setConvertedAmount] = useState(null);

    useEffect(() => {
        dispatch(fetchMoneyInfo());
    }, [dispatch]);

    const handleConvert = () => {
        const from = moneyList.find((money) => money.currencyName === fromCurrency);
        const to = moneyList.find((money) => money.currencyName === toCurrency);

        console.log("From:", from);
        console.log("To:", to);
        console.log("Amount:", amount);

        if (from && to && !isNaN(amount) && amount > 0) {
            const fromRate = parseFloat(from.currencExchange);
            const toRate = parseFloat(to.currencExchange);

            console.log("From Rate:", fromRate);
            console.log("To Rate:", toRate);

            if (!isNaN(fromRate) && !isNaN(toRate)) {
                const conversionRate = toRate / fromRate; 
                console.log("Conversion Rate:", conversionRate);

                const result = amount * conversionRate; 
                console.log("Result:", result);

                setConvertedAmount(result);
            } else {
                toast.error("Dönüşüm oranları geçersiz!");
            }
        } else {
            toast.error("Lütfen tüm alanları doldurun ve geçerli bir miktar girin!");
        }
    };

    return (
        <div className={`flex w-full h-full overflow-auto pb-24 px-10 py-8`}>
            <div className={`flex-1`}>
                <div className="mb-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="text-xl flex items-center justify-between gap-4 font-semibold text-gray-600 text-start mb-4"
                    >
                        Para
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

                <div className="flex h-full items-start gap-10">
                    <div className="w-1/2 h-[40rem] grid grid-cols-2 gap-4 overflow-auto">
                        {moneyList.map((money, index) => (
                            <motion.div
                                key={index}
                                className="bg-white p-6 rounded-xl  shadow-md shadow-gray-200 flex flex-col items-start text-start"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                            >
                                <div className="w-full flex items-center justify-between">
                                    <h3 className="text-[14px] font-semibold text-gray-600">{money.currencyName}</h3>
                                    <div className="flex items-start gap-2">
                                        {money.changeIcon === "change-up" && <FaCaretUp size={17} className="text-green-500" />}
                                        {money.changeIcon === "change-down" && <FaCaretDown size={17} className="text-red-500" />}
                                        <span className="text-[13px] text-gray-500">{money.currencExchange}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.7 }}
                        className="w-1/2 h-[40rem] bg-white rounded-xl shadow-md shadow-gray-200 p-6 flex flex-col"
                    >
                        <div className="flex flex-col mb-4">
                            <label htmlFor="amount" className="text-sm text-gray-600 mb-1">
                                Miktar
                            </label>
                            <input
                                type="number"
                                id="amount"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="border border-gray-300 rounded-md p-2"
                                placeholder="Miktarı girin"
                                min="0"
                            />
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="fromCurrency" className="text-sm text-gray-600 mb-1">
                                Gönderen Para Birimi
                            </label>
                            <select id="fromCurrency" value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)} className="border border-gray-300 rounded-md p-2">
                                <option value="">Seçin</option>
                                {moneyList.map((money, index) => (
                                    <option key={index} value={money.currencyName}>
                                        {money.currencyName + " " + `(${money.currencExchange})`}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="flex flex-col mb-4">
                            <label htmlFor="toCurrency" className="text-sm text-gray-600 mb-1">
                                Alınacak Para Birimi
                            </label>
                            <select id="toCurrency" value={toCurrency} onChange={(e) => setToCurrency(e.target.value)} className="border border-gray-300 rounded-md p-2">
                                <option value="">Seçin</option>
                                {moneyList.map((money, index) => (
                                    <option key={index} value={money.currencyName}>
                                       {money.currencyName + " " + `(${money.currencExchange})`}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <button onClick={handleConvert} className="bg-indigo-500 text-white py-2 rounded-md mt-3 hover:bg-indigo-700 transition duration-200">
                            Dönüştür
                        </button>

                        <div className="mt-4">
                            {convertedAmount !== null && (
                                <p className="text-lg text-gray-700">
                                    {convertedAmount.toFixed(2)} {toCurrency}
                                </p>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default CurrencyConverter;

"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";
import { motion } from "framer-motion";
import { CgSpinner } from "react-icons/cg";

import { fetchLeagueFixtures } from "../../../../store/features/live/liveSlice";

function Page({ params }) {
    const { feedName } = params;
    const [selectedLeague, setSelectedLeague] = useState("1");
    const [selectedWeek, setSelectedWeek] = useState("9");
    const { leagueFixturesResult, loading, error } = useSelector((state) => state.live);

    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedLeague) {
            dispatch(fetchLeagueFixtures({ selectedLeague, selectedWeek }));
        }
    }, [dispatch, selectedLeague, selectedWeek]);

    const handleLeagueClick = (leagueKey) => {
        setSelectedLeague(leagueKey);
    };

    const leagueList = [
        { key: "1", league: "Trendyol Süper Lig" },
        { key: "7", league: "İspanya La Liga" },
        { key: "6", league: "Serie A" },
        { key: "5", league: "Bundesliga" },
        { key: "2", league: "Premier Lig" },
        { key: "8", league: "Fransa Ligue 1" },
    ];

    return (
        <div className="px-24 max-sm:px-0 py-8 max-sm:py-3 w-full h-full">
            <div className="max-w-[75rem] flex space-x-4 mb-4 px-4 py-3 rounded-lg bg-gray-100">
                <Link href={`/feed/${feedName}/standings`} className="text-lg  max-sm:text-[12px] flex items-center justify-between gap-4 font-semibold text-gray-600 rounded-lg text-start">
                    Puan Durumu
                </Link>
                <h1 className="text-lg max-sm:text-[12px] flex items-center justify-between gap-4 font-semibold text-indigo-600 rounded-lg bg-gray-100 text-start">Fikstür</h1>
                <Link href={`/feed/${feedName}/topScorers`} className="text-lg  max-sm:text-[12px] flex items-center justify-between gap-4 font-semibold text-gray-600 text-start">
                    Gol Krallığı
                </Link>
            </div>

            <div className="max-w-[75rem] flex space-x-4 mb-4 py-4 px-4 rounded-lg bg-gray-100 overflow-x-auto">
                {leagueList.map((league) => (
                    <button
                        key={league.key}
                        onClick={() => handleLeagueClick(league.key)}
                        className={`flex-grow min-w-[5rem]  max-sm:text-[12px] max-w-[8rem] py-2 border text-center transition-all border-gray-200 rounded-lg font-semibold text-[12px] flex items-center justify-center gap-1 text-gray-500 ${
                            selectedLeague === league.key ? "transition-all bg-indigo-500 text-white" : "bg-white"
                        }`}
                    >
                        {league.league}
                    </button>
                ))}
                <div className="flex items-center space-x-2">
                    <select
                        id="weekSelect"
                        value={selectedWeek}
                        onChange={(e) => setSelectedWeek(e.target.value)}
                        className="py-2 px-3 !outline-none border font-semibold border-gray-200 rounded-lg text-gray-500 text-[12px]"
                    >
                        {Array.from({ length: 38 }, (_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}. Hafta
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {loading ? (
                <div className="flex justify-center items-center mt-10 h-full">
                    <CgSpinner className="text-lg text-indigo-600 animate-spin" />
                </div>
            ) : (
                leagueFixturesResult && (
                    <div className="w-full grid grid-cols-1 gap-4">
                        {leagueFixturesResult.map((match, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.3 }}
                                className="flex flex-col md:flex-row justify-between items-center bg-white shadow-md shadow-gray-200 p-4 rounded-lg"
                            >
                                <div className="text-gray-600 font-bold text-[12px] max-sm:mb-4">{match.formattedDate}</div>

                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-2">
                                        <img src={match.team1Img} alt={match.team1Img} width={24} height={24} />
                                        <p className="text-gray-800 font-bold text-[12px]">{match.team1Name}</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <p className="text-gray-800 font-bold text-[12px] px-2 py-1 bg-gray-100">{match.team1Score}</p>
                                        <p className="text-gray-600 font-bold text-[12px]">-</p> {/* Skor çizgisi */}
                                        <p className="text-gray-800 font-bold text-[12px] px-2 py-1 bg-gray-100">{match.team2Score}</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <p className="text-gray-800 font-bold text-[12px]">{match.team2Name}</p>
                                        <img src={match.team2Img} alt={match.team2Img} width={24} height={24} />
                                    </div>
                                </div>

                                <div className="bg-green-500 text-white px-3 max-sm:mt-4 py-1 rounded-md text-[12px] font-bold">{match.formattedTime}</div>
                            </motion.div>
                        ))}
                    </div>
                )
            )}
        </div>
    );
}

export default Page;

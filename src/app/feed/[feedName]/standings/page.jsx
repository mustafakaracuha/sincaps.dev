"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";
import { motion } from "framer-motion";
import { CgSpinner } from "react-icons/cg";

import { fetchLeagueResult } from "../../../../store/features/live/liveSlice";

function Page({ params }) {
    const { feedName } = params;
    const [selectedLeague, setSelectedLeague] = useState("1");
    const { leagueListResult, loading, error } = useSelector((state) => state.live);
    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedLeague) {
            dispatch(fetchLeagueResult(selectedLeague));
        }
    }, [dispatch, selectedLeague]);

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
                <h1 className="text-lg max-sm:text-[15px] flex items-center justify-between gap-4 font-semibold text-indigo-600 rounded-lg bg-gray-100 text-start">Puan Durumu</h1>
                <Link href={`/feed/${feedName}/fixtures`} className="text-lg max-sm:text-[15px] flex items-center justify-between gap-4 font-semibold text-gray-600 text-start">
                    Fikstür
                </Link>
                <Link href={`/feed/${feedName}/topScorers`} className="text-lg max-sm:text-[15px] flex items-center justify-between gap-4 font-semibold text-gray-600 text-start">
                    Gol Krallığı
                </Link>
            </div>
            <div className="max-w-[75rem] flex space-x-4 mb-4 py-4 px-4 rounded-lg bg-gray-100 overflow-x-auto">
                {leagueList.map((league) => (
                    <button
                        key={league.key}
                        onClick={() => handleLeagueClick(league.key)}
                        className={`flex-grow max-sm:text-[12px] min-w-[5rem] max-w-[8rem] py-2 border text-center transition-all border-gray-200 rounded-lg font-semibold text-[12px] flex items-center justify-center gap-1 text-gray-500 ${
                            selectedLeague === league.key ? "transition-all bg-indigo-500 text-white" : "bg-white"
                        }`}
                    >
                        {league.league}
                    </button>
                ))}
            </div>

            {loading ? (
                <div className="flex justify-center items-center mt-10 h-full">
                    <CgSpinner className="text-lg text-indigo-600 animate-spin" />
                </div>
            ) : (
                leagueListResult && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="w-full h-screen max-sm:pb-[15rem] overflow-auto">
                        <table className="w-full text-[14px] text-left">
                            <thead>
                                <tr className="!rounded-t-xl ">
                                    <th className="px-4 py-2">Takım</th>
                                    <th className="px-4 py-2">O</th>
                                    <th className="px-4 py-2">G</th>
                                    <th className="px-4 py-2">B</th>
                                    <th className="px-4 py-2">M</th>
                                    <th className="px-4 py-2">A</th>
                                    <th className="px-4 py-2">Y</th>
                                    <th className="px-4 py-2">AV</th>
                                    <th className="px-4 py-2">P</th>
                                </tr>
                            </thead>
                            <tbody>
                                {leagueListResult?.map((team, index) => {
                                    let borderColor = "";
                                    if (index < 5) {
                                        const blueShades = ["border-indigo-600", "border-indigo-500", "border-indigo-400", "border-indigo-400", "border-indigo-200", "border-indigo-100"];
                                        borderColor = blueShades[index];
                                    } else if (index >= leagueListResult.length - 4) {
                                        borderColor = "border-red-500";
                                    }
                                    return (
                                        <motion.tr
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1, duration: 0.3 }}
                                            className={`hover:bg-indigo-50 border-l-4 ${borderColor}`}
                                        >
                                            <td className="border text-gray-600 font-bold text-[12.5px] border-gray-200 px-4 py-2 flex items-center gap-2">
                                                <img src={team.logo} alt={team.logo} width={20} height={20} />
                                                {team.team_name}
                                            </td>
                                            <td className="border text-gray-600 border-gray-200 px-4 py-2">{team.played}</td>
                                            <td className="border text-gray-600 border-gray-200 px-4 py-2">{team.won}</td>
                                            <td className="border text-gray-600 border-gray-200 px-4 py-2">{team.drawn}</td>
                                            <td className="border text-gray-600 border-gray-200 px-4 py-2">{team.lost}</td>
                                            <td className="border text-gray-600 border-gray-200 px-4 py-2">{team.goals_for}</td>
                                            <td className="border text-gray-600 border-gray-200 px-4 py-2">{team.goals_against}</td>
                                            <td className="border text-gray-600 border-gray-200 px-4 py-2">{team.avarage}</td>
                                            <td className="border text-gray-600 border-gray-200 px-4 py-2 font-bold">{team.points}</td>
                                        </motion.tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </motion.div>
                )
            )}
        </div>
    );
}

export default Page;

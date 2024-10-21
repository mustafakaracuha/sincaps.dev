"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Link from "next/link";
import { motion } from "framer-motion";
import { CgSpinner } from "react-icons/cg";

import { fetchLeagueResult, fetchTopScorers } from "../../../../store/features/live/liveSlice";

function Page({ params }) {
    const { feedName } = params;
    const [selectedLeague, setSelectedLeague] = useState(1);
    const { topScorersResult, leagueListResult, loading, error } = useSelector((state) => state.live);

    const dispatch = useDispatch();

    useEffect(() => {
        if (selectedLeague) {
            dispatch(fetchTopScorers());
            dispatch(fetchLeagueResult(selectedLeague));
        }
    }, [dispatch, selectedLeague]);

    const handleLeagueClick = (leagueKey) => {
        setSelectedLeague(leagueKey);
    };

    const leagueList = [
        { key: 1, league: "Trendyol Süper Lig" },
        { key: 7, league: "İspanya La Liga" },
        { key: 6, league: "Serie A" },
        { key: 5, league: "Bundesliga" },
        { key: 2, league: "Premier Lig" },
        { key: 8, league: "Fransa Ligue 1" },
    ];

    const filteredTopScorers = topScorersResult?.filter((scorer) => scorer.leagueId === selectedLeague);

    const getTeamLogo = (teamName) => {
        const team = leagueListResult?.find((item) => item.team_name === teamName);
        return team ? team.logo : "";
    };

    return (
        <div className="px-24 py-8 w-full">
            <div className="max-w-[75rem] flex space-x-4 mb-4 px-4 py-3 rounded-lg bg-gray-100">
                <Link href={`/feed/${feedName}/standings`} className="text-lg flex items-center justify-between gap-4 font-semibold text-gray-600 rounded-lg text-start">
                    Puan Durumu
                </Link>
                <Link href={`/feed/${feedName}/fixtures`} className="text-lg flex items-center justify-between gap-4 font-semibold text-gray-600 text-start">
                    Fikstür
                </Link>
                <h1 className="text-lg flex items-center justify-between gap-4 font-semibold text-indigo-600 rounded-lg bg-gray-100 text-start">Gol Krallığı</h1>
            </div>

            <div className="max-w-[75rem] flex space-x-4 mb-4 py-4 px-4 rounded-lg bg-gray-100 overflow-x-auto">
                {leagueList.map((league) => (
                    <button
                        key={league.key}
                        onClick={() => handleLeagueClick(league.key)}
                        className={`flex-grow min-w-[5rem] max-w-[8rem] py-2 border text-center transition-all border-gray-200 rounded-lg font-semibold text-[12px] flex items-center justify-center gap-1 text-gray-500 ${
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
                topScorersResult && (
                    <div className="w-full grid grid-cols-1 gap-4">
                        {filteredTopScorers[0]?.topScorers.map((scorer, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.3 }}
                                className="flex flex-col md:flex-row justify-between items-center bg-white shadow-md shadow-gray-200 p-4 rounded-lg"
                            >
                                <div className="flex items-center space-x-4">
                                    <div className="flex items-center space-x-2">
                                        <img src={getTeamLogo(scorer.team_name)} alt={scorer.team_name} width={22} height={22} />
                                        <p className="text-gray-800 font-bold text-[12px]">{scorer.name}</p>
                                    </div>
                                </div>

                                <div className="bg-green-500 text-white px-3 py-1 rounded-md text-[12px] font-bold">{scorer.goals} Gol</div>
                            </motion.div>
                        ))}
                    </div>
                )
            )}
        </div>
    );
}

export default Page;

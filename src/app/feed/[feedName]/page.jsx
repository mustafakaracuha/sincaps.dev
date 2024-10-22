"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";

import { IoIosFootball } from "react-icons/io";
import { GiSoccerKick } from "react-icons/gi";
import { LuSquirrel } from "react-icons/lu";

import { fetchNews } from "../../../store/features/feed/feedSlice";

const FeedPage = ({ params }) => {
    const { feedName } = params;
    const dispatch = useDispatch();
    const { newsArticles, loading, error } = useSelector((state) => state.feed);

    useEffect(() => {
        dispatch(fetchNews(feedName));
    }, [dispatch, feedName]);

    if (loading) {
        return (
            <div className="w-full flex flex-col items-center justify-center pt-10">
                <LuSquirrel className="text-2xl text-gray-400 animate-pulse" />
                <p className="mt-2 text-gray-500">Son haberler yükleniyor...</p>
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
        <div className="w-full h-screen py-8 pb-20 px-10 overflow-auto">
            {newsArticles.length > 0 && (
                <h1 className="text-xl flex items-center justify-between gap-4 font-semibold text-gray-600 text-start mb-6">
                    {feedName.charAt(0).toUpperCase() + feedName.slice(1)} Haberler
                    <span>
                        {feedName.charAt(0).toUpperCase() + feedName.slice(1) === "Spor" && (
                            <div className="flex items-center gap-3">
                                <Link
                                    href={`/feed/${feedName}/standings`}
                                    className="text-[12px] py-1 px-3 border border-gray-200 bg-white rounded-lg font-semibold flex items-center gap-1 text-gray-500"
                                >
                                    <IoIosFootball className="text-gray-500" size={15} /> Puan Durumu
                                </Link>
                                <Link
                                    href={`/feed/${feedName}/fixtures`}
                                    className="text-[12px] py-1 px-3 border border-gray-200 bg-white rounded-lg font-semibold flex items-center gap-1 text-gray-500"
                                >
                                    <GiSoccerKick className="text-gray-500" size={15} /> Fikstür
                                </Link>
                            </div>
                        )}
                    </span>
                </h1>
            )}

            <div className="grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 min-[1700px]:grid-cols-4 gap-8">
                {newsArticles.length > 0 &&
                    newsArticles.map((article, index) => (
                        <motion.a
                            key={index}
                            href={article.link}
                            target="_blank"
                            className="group block bg-white shadow-lg shadow-gray-200 rounded-2xl overflow-hidden"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: index * 0.1 }}
                        >
                            <div className="relative">
                                {article.imageUrl && <img srcSet={article.imageUrl} alt={article.title} className="w-full h-48 object-cover rounded-t-2xl" />}
                                <div className="absolute top-0 left-0 right-0 h-full bg-gradient-to-b from-transparent to-white"></div>
                            </div>
                            <div className="py-8 px-6">
                                <h4 className="text-md font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">{article.title}</h4>
                            </div>
                        </motion.a>
                    ))}
            </div>
        </div>
    );
};

export default FeedPage;

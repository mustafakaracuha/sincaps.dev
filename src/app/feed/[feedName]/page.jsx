"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";

import { CgSpinner } from "react-icons/cg";
import { IoIosFootball } from "react-icons/io";
import { GiSoccerKick } from "react-icons/gi";

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
                <CgSpinner className="text-3xl text-indigo-600 animate-spin" />
                <p className="mt-2">İçerikler yükleniyor...</p>
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

            <div className="grid sm:grid-cols-1 xl:grid-cols-2 min-[1700px]:grid-cols-4 gap-6">
                {newsArticles.length > 0 &&
                    newsArticles.map((article, index) => (
                        <a href={article.link} target="_blank" key={index} className="text-sm text-gray-700 font-semibold">
                            <div key={index} className="p-5 overflow-hidden border rounded-2xl relative flex">
                                {article.imageUrl && <img srcSet={article.imageUrl} alt={article.title} className="w-20 h-20 object-cover rounded-xl mr-4" />}
                                <div className="flex flex-col justify-center space-y-2">
                                    <h4 className="text-[15px] text-gray-600 font-semibold">{article.title}</h4>
                                    <p className="text-sm text-gray-500 leading-snug">{article.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
            </div>
        </div>
    );
};

export default FeedPage;

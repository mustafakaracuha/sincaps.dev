"use client";

import Link from "next/link";

const topics = [
    { link: "guncel", title: "Güncel", description: "En son haberleri ve gelişmeleri keşfedin." },
    { link: "teknoloji", title: "Teknoloji", description: "Gündemdeki en son teknoloji gelişmeleri." },
    { link: "egitim", title: "Eğitim", description: "Eğitimde son durum ve önemli gelişmeler." },
    { link: "saglik", title: "Sağlık", description: "Sağlık alanındaki yenilikler ve bilgiler." },
    { link: "spor", title: "Spor", description: "Spor dünyasından haberler ve etkinlikler. Puan durumları, canlı maç sonuçları, ligler.." },
    { link: "ekonomi", title: "Ekonomi", description: "Ekonomideki son durum ve önemli gelişmeler." },
    { link: "burc", title: "Burçlar", description: "Günlük burç yorumlarınızı okuyun ve geleceğinizi öğrenin." },
];

const SidebarMenu = () => {
    return (
        <div className="w-[30rem] h-screen overflow-auto max-sm:hidden px-16 pt-8">
            <ul className="space-y-6">
                {topics.map((topic, index) => (
                    <li key={index} className="cursor-pointer">
                        <Link href={topic.link === "burc" ? `/feed/horoscope` : `/feed/${topic.link}`} className="flex flex-col space-y-2 pt-1">
                            <h4 className="text-[15px] font-medium">{topic.title}</h4>
                            <p className="text-[13px] text-gray-400 leading-5">{topic.description}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SidebarMenu;

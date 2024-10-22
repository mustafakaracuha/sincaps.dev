"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

const topics = [
    { link: "guncel", title: "#Son Dakika", description: "En son haberleri ve gelişmeleri keşfedin." },
    { link: "ekonomi", title: "Ekonomi", description: "Ekonomideki son durum ve önemli gelişmeler." },
    { link: "spor", title: "Spor", description: "Spor dünyasından haberler ve etkinlikler. Puan durumları, canlı maç sonuçları, ligler.." },
    { link: "teknoloji", title: "Teknoloji", description: "Gündemdeki en son teknoloji gelişmeleri." },
    { link: "egitim", title: "Eğitim", description: "Eğitimde son durum ve önemli gelişmeler." },
    { link: "magazin", title: "Magazin", description: "Magazin dünyasından haberler." },
    { link: "saglik", title: "Sağlık", description: "Sağlık alanındaki yenilikler ve bilgiler." },
    { link: "dini-bilgiler", title: "Dini Bilgiler", description: "Dini konularda güncel bilgiler ve kaynaklar." },
    { link: "burc", title: "Burçlar", description: "Günlük burç yorumlarınızı okuyun ve geleceğinizi öğrenin." },
    { link: "donusturuculer", title: "Dönüştürücüler", description: "Günlük hayatınızda kullanabileceğiniz araçlar." },
];

const SidebarMenu = () => {
    const [isFeedPage, setIsFeedPage] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        setIsFeedPage(pathname.includes("/feed"));
    }, [pathname]);

    return (
        <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="w-[30rem] h-full overflow-y-auto max-sm:hidden px-16 pt-8 pb-24"
        >
            <ul className="space-y-6">
                {(isFeedPage ? topics : topics.filter((topic) => ["guncel", "spor", "ekonomi", "magazin"].includes(topic.link))).map((topic, index) => (
                    <motion.li key={index} className="cursor-pointer" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1 }}>
                        <Link href={topic.link === "burc" ? `/feed/horoscope` : topic.link === "donusturuculer" ? `/converters` : `/feed/${topic.link}`} className="flex flex-col space-y-2 pt-1">
                            <h4 className="text-[15px] font-medium">{topic.title}</h4>
                            <p className="text-[13px] text-gray-400 leading-5">{topic.description}</p>
                        </Link>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
};

export default SidebarMenu;

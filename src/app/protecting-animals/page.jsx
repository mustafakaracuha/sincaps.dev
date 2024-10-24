"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPaw, FaTree, FaHeart, FaHands, FaDog, FaCat, FaDove, FaHandsHelping, FaLeaf } from "react-icons/fa";

function AnimalProtectionPage() {
    const animalProtectionTopics = [
        {
            title: "Hayvan Hakları",
            description:
                "Hayvanlar, yaşam hakkı, barınma, beslenme ve tedavi haklarına sahiptir. Onların refahı için yasalarla korunmaları gerekmektedir. Hayvanların kötü muameleye maruz kalmamaları için toplumda bilinçlendirme çalışmaları yapılmalıdır.",
            icon: <FaPaw className="text-purple-500 text-lg" />,
        },
        {
            title: "Doğal Yaşam Alanlarının Korunması",
            description:
                "Hayvanların doğal habitatları, biyolojik çeşitliliğin korunmasında kritik bir rol oynamaktadır. Ormanlar, sulak alanlar ve diğer doğal alanlar, hayvanların yaşamlarını sürdürebilmeleri için korunmalıdır. Bu alanların tahrip edilmesi, birçok türün yok olmasına neden olabilir.",
            icon: <FaTree className="text-green-500 text-lg" />,
        },
        {
            title: "Sahiplenme ve Barınak Desteği",
            description:
                "Sokak hayvanlarının sahiplenilmesi, onların sağlıklı bir yaşam sürmelerini sağlamak için hayati öneme sahiptir. Barınaklar, hayvanlara geçici bir ev sunarak onların güvenliğini sağlarken, sahiplenme kampanyaları ile daha fazla insanın bu hayvanlara sahip çıkması teşvik edilmelidir.",
            icon: <FaHeart className="text-red-500 text-lg" />,
        },
        {
            title: "Hayvan İstismarı ile Mücadele",
            description:
                "Hayvanlara karşı yapılan istismar ve kötü muamele, sadece hayvanların değil, aynı zamanda toplumun da bir sorunudur. Eğitim ve bilinçlendirme kampanyaları ile hayvan hakları ihlalleri konusunda farkındalık artırılmalıdır. İstismar vakalarına karşı yasal yaptırımların uygulanması gerekmektedir.",
            icon: <FaHands className="text-blue-500 text-lg" />,
        },
        {
            title: "Eğitim ve Farkındalık",
            description:
                "Hayvan sevgisi aşılamak ve korunması konusunda toplumda farkındalık yaratmak için eğitim programları düzenlenmelidir. Okullarda hayvan hakları eğitimi verilmesi, çocuklara hayvan sevgisi kazandırmak için önemli bir adımdır. Ayrıca, hayvanları koruma etkinlikleri ve gönüllü çalışmalar teşvik edilmelidir.",
            icon: <FaLeaf className="text-yellow-500 text-lg" />,
        },
        {
            title: "Kayıt ve İzleme",
            description:
                "Sahipli hayvanların kayıt altına alınması, kaybolan hayvanların bulunmasını kolaylaştırır. Ayrıca, hayvanların sağlık durumlarının izlenmesi, gerekli tedavilerin zamanında yapılmasını sağlar. Mikroçip uygulamaları, hayvanların kimliklerinin belirlenmesine yardımcı olur.",
            icon: <FaDog className="text-brown-500 text-lg" />,
        },
        {
            title: "Sokak Hayvanları için Destek",
            description:
                "Sokak hayvanlarına yiyecek ve su sağlamak, onların hayatta kalmalarına yardımcı olur. Gönüllülerin sokak hayvanlarına düzenli olarak bakması, onların yaşam kalitesini artırır. Ayrıca, sokak hayvanlarına yönelik bakım ve barınma projeleri desteklenmelidir.",
            icon: <FaCat className="text-gray-500 text-lg" />,
        },
        {
            title: "Eko-Dostu Projeler",
            description:
                "Hayvanların ve doğal yaşam alanlarının korunması için eko-dostu projeler desteklenmelidir. Sürdürülebilir tarım uygulamaları, hayvanların doğal yaşam alanlarını tehdit etmeden gıda üretimine olanak sağlar. Doğa dostu projeler, hem hayvanların hem de insanların yararına olacaktır.",
            icon: <FaDove className="text-teal-500 text-lg" />,
        },
    ];

    const donationSites = [
        {
            name: "Türkiye Hayvanları Koruma Derneği",
            url: "https://www.thkd.org.tr/bagis.php",
            icon: <FaPaw className="text-red-800 text-md" />,
            color: "bg-red-400",
        },
        {
            name: "Toplum Gönüllüleri Vakfı",
            url: "https://www.tog.org.tr/sokak-hayvanlari",
            icon: <FaHandsHelping className="text-amber-900 text-md" />,
            color: "bg-amber-400",
        },
        {
            name: "Tüm Yardımlaşma Derneği (TÜMYAD)",
            url: "https://www.tumyad.org/sertifikali-bagis/sokak-hayvanlari-bagis-sertifikasi/",
            icon: <FaHeart className="text-indigo-700 text-md" />,
            color: "bg-indigo-400",
        },
        {
            name: "Hayvan Hakları Federasyonu",
            url: "https://www.haytap.org/",
            icon: <FaLeaf className="text-green-800 text-md" />,
            color: "bg-green-400",
        },
    ];

    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className="w-full h-full overflow-auto pb-24 px-10 max-sm:px-5 py-8">
            <h1 className="text-xl max-sm:text-[16px] flex items-center justify-between gap-4 font-semibold text-gray-600 text-start mb-4">Hayvanları Korumak</h1>
            <div className="grid grid-cols-1 max-sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6 mb-6">
                {donationSites.map((site, index) => (
                    <a href={site.url} target="_blank" key={index} className={`p-4 rounded-lg flex items-center transition-shadow duration-300 ${site.color}`}>
                        <div className="flex items-center">
                            {site.icon}
                            <h3 className="text-[12px] font-semibold text-white ml-2">{site.name}</h3>
                        </div>
                    </a>
                ))}
            </div>
            <ul className="space-y-3">
                {animalProtectionTopics.map((topic, index) => (
                    <motion.li
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                        key={index}
                        className="p-4 border-b border-gray-100 flex items-center gap-4"
                    >
                        <div>{topic.icon}</div>
                        <div>
                            <h2 className="text-md max-sm:text-[14px] font-semibold text-gray-700 mb-1">{topic.title}</h2>
                            <p className="text-gray-500 text-[14px] max-sm:text-[13px] mb-1">{topic.description}</p>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
}

export default AnimalProtectionPage;

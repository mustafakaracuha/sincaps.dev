"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaAppleAlt, FaRunning, FaBrain, FaBed, FaTint } from "react-icons/fa";
import GoogleAdsenseWrite from "../../../GoogleAdsenseWrite";

function Page() {
    const healthyLivingTopics = [
        {
            title: "Beslenme ve Diyet",
            description: "Dengeli ve sağlıklı beslenme, vücut sağlığımızı korumak için gereklidir. Günlük vitamin ve mineral alımını sağlamak, enerji seviyemizi ve genel sağlığımızı olumlu etkiler.",
            icon: <FaAppleAlt className="text-green-500 text-lg" />,
            diet: [
                "Kahvaltı: Yulaf ezmesi, yumurta, yeşillik",
                "Ara Öğün: Bir avuç ceviz veya badem.",
                "Öğle: Izgara tavuk, kinoa ve sebze salatası, pilav",
                "Ara Öğün: Yeşil elma",
                "Akşam: Fırında somon, bulgur, kinoa ve buharda pişirilmiş brokoli",
            ],
        },
        {
            title: "Egzersiz ve Fiziksel Aktivite",
            description: "Düzenli egzersiz, hem fiziksel hem de zihinsel sağlığımızı güçlendirir. Haftada en az 150 dakika orta şiddette fiziksel aktivite, kalp sağlığımızı korumamıza yardımcı olur.",
            icon: <FaRunning className="text-blue-500 text-lg" />,
            activities: [
                "Yürüyüş: Günde 30 dakika tempolu yürüyüş kalp sağlığını destekler.",
                "Koşu: Haftada 2-3 kez yapılan 20-30 dakikalık koşular dayanıklılığı artırır.",
                "Yoga: Zihinsel ve fiziksel esnekliği artırır, stresi azaltır.",
                "Ağırlık Antrenmanı: Haftada 2-3 kez yapılan ağırlık çalışmaları kas kütlesini artırır ve metabolizmayı hızlandırır.",
                "Yüzme: Tüm kas gruplarını çalıştıran etkili bir kardiyo aktivitesidir.",
            ],
        },
        {
            title: "Mental Sağlık ve Stres Yönetimi",
            description: "Ruhsal sağlığımızı korumak, günlük stresle başa çıkmak için önemlidir. Meditasyon ve hobiler, stresin azalmasına katkıda bulunur.",
            icon: <FaBrain className="text-purple-500 text-lg" />,
            activities: [
                "Meditasyon: Günlük 10-15 dakika meditasyon yapmak zihinsel sağlığı artırır ve stresi azaltır.",
                "Hobi Edinmek: Resim yapmak, müzik aleti çalmak veya bahçecilik gibi hobiler, stres seviyelerini düşürür.",
                "Nefes Egzersizleri: Derin nefes alarak gevşeme sağlamak, anksiyete ve stresi azaltabilir.",
                "Doğa Yürüyüşleri: Doğada zaman geçirmek, ruh halini iyileştirir ve zihinsel sağlığı destekler.",
                "Sosyal Bağlantılar: Arkadaşlarla veya aileyle vakit geçirmek, duygusal destek sağlar.",
            ],
        },
        {
            title: "Uyku Düzeni",
            description: "Düzenli ve kaliteli uyku, vücudumuzun yenilenmesi için gereklidir. Günde 7-9 saat uyumak, bağışıklık sistemimizi güçlü tutar ve enerji seviyemizi artırır.",
            icon: <FaBed className="text-gray-500 text-lg" />,
            activities: [
                "Uyku Rutini: Her gün aynı saatte yatmak ve uyanmak uyku kalitesini artırır.",
                "Rahatlatıcı Aktiviteler: Yatmadan önce okuma yapmak veya hafif esneme egzersizleri yapmak gevşemeye yardımcı olur.",
                "Mavi Işık Engelleme: Yatmadan önce ekran süresini kısıtlamak, uykuya dalmayı kolaylaştırır.",
                "Yatak Odanızı Düzenleyin: Sessiz ve karanlık bir uyku ortamı yaratmak uyku kalitesini artırır.",
                "Uykudan Önce Sıvı Tüketimi: Yatmadan en az 1 saat önce sıvı alımını azaltmak, gece tuvalete kalkmayı önler.",
            ],
        },
        {
            title: "Hidrasyon",
            description: "Gün boyunca yeterli su tüketmek, vücut fonksiyonlarımızı düzenler ve genel sağlığımızı destekler.",
            icon: <FaTint className="text-teal-500 text-lg" />,
            activities: [
                "Günlük Su Tüketimi: Günde en az 2-3 litre su içmeyi hedefleyin.",
                "Su Tüketimini Hatırlatmak: Telefon uygulamaları veya hatırlatıcılar kullanarak su içmeyi unutmayın.",
                "Hidratasyon İçecekleri: Su dışında, bitki çayları veya doğal meyve suyu gibi sıvıları da tüketebilirsiniz.",
                "Yemeklerle Birlikte Su İçmek: Yemek sırasında su içmek, sindirime yardımcı olur.",
                "Su Şişesi Taşıyın: Yanınızda bir su şişesi taşımak, su içmeyi kolaylaştırır.",
            ],
        },
    ];

    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className="w-full h-full overflow-auto pb-24 px-10 max-sm:px-5 py-8">
            <h1 className="text-xl max-sm:text-[16px] flex items-center justify-between gap-4 font-semibold text-gray-600 text-start mb-4">Sağlıklı Yaşam</h1>
            <p className="text-gray-500 text-[15px] max-sm:text-[14px] flex items-center gap-2">
                Sağlıklı bir yaşam tarzı sürdürmek için doğru alışkanlıklar geliştirmek önemlidir. Beslenme, uyku, egzersiz ve mental sağlığa özen göstererek hayat kalitemizi artırabiliriz.
            </p>

            <ul className="space-y-3 mt-6 mb-6">
                {healthyLivingTopics.map((topic, index) => (
                <>
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
                            {topic.diet && (
                                <>
                                    <p className="text-[15px] text-gray-500">Örnek bir beslenme planı; </p>
                                    <ul className="list-disc pl-5 mt-2 text-gray-600 text-sm">
                                        {topic.diet.map((item, dietIndex) => (
                                            <li key={dietIndex}>{item}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            {topic.activities && (
                                <>
                                    <p className="text-[15px] text-gray-500 mt-2">Önerilen aktiviteler; </p>
                                    <ul className="list-disc pl-5 mt-2 text-gray-600 text-sm">
                                        {topic.activities.map((activity, activityIndex) => (
                                            <li key={activityIndex}>{activity}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                        </div>
                    </motion.li>
                     <GoogleAdsenseWrite pId={process.env.NEXT_GOOGLE_ID} />
                     </>
                ))}
            </ul>
        </motion.div>
    );
}

export default Page;

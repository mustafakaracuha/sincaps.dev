import Link from "next/link";
import { FaNewspaper, FaLaptopCode, FaChartLine, FaHeartbeat, FaFutbol, FaStar, FaFilm } from "react-icons/fa";

function Page() {
    const topics = [
        { link: "guncel", title: "Güncel", description: "En son haberleri ve gelişmeleri keşfedin.", icon: <FaNewspaper className="text-red-400 text-xl" /> },
        { link: "teknoloji", title: "Teknoloji", description: "Gündemdeki en son teknoloji gelişmeleri.", icon: <FaLaptopCode className="text-yellow-400 text-xl" /> },
        { link: "egitim", title: "Eğitim", description: "Eğitimde son durum ve önemli gelişmeler.", icon: <FaChartLine className="text-pink-400 text-xl" /> },
        { link: "saglik", title: "Sağlık", description: "Sağlık alanındaki yenilikler ve bilgiler.", icon: <FaHeartbeat className="text-orange-400 text-xl" /> },
        { link: "spor", title: "Spor", description: "Spor dünyasından haberler ve etkinlikler.", icon: <FaFutbol className="text-green-400 text-xl" /> },
        { link: "magazin", title: "Magazin", description: "Magazin dünyasından haberler.", icon: <FaFilm className="text-gray-400 text-xl" /> },
        { link: "burc", title: "Burçlar", description: "Günlük burç yorumlarınızı okuyun ve geleceğinizi öğrenin.", icon: <FaStar className="text-violet-400 text-xl" /> },
    ];

    return (
        <div className="w-full h-screen pb-24 flex flex-col items-start justify-start bg-white px-10 pt-10 overflow-auto">
            <h1 className="text-3xl font-bold text-gray-700 mb-4 text-center">Sincaps.dev</h1>
            <p className="text-md font-normal text-gray-600 mb-10">
                <strong className="text-indigo-600">Sincap.dev</strong>, kullanıcıların gündemden teknolojiye, ekonomiden spora kadar geniş bir yelpazede haberleri takip edebileceği bir platformdur.
                Amacımız, kullanıcılarımızı en son gelişmelerle buluşturmak ve farklı alanlarda kaynaklar sunarak bilgi edinimlerini kolaylaştırmaktır.
            </p>

            {/* Topic Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {topics.map((topic, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-lg shadow-gray-200 flex flex-col items-start text-start">
                        <div className="w-full flex items-center justify-between mb-5">
                            <h3 className="text-md font-semibold text-gray-700">{topic.title}</h3>
                            <div>{topic.icon}</div>
                        </div>
                        <p className="text-gray-400 text-sm mt-2 mb-4">{topic.description}</p>
                        <Link href={topic.link === "burc" ? `/feed/horoscope` : `/feed/${topic.link}`} className="text-indigo-500 text-sm font-medium hover:underline">
                            Keşfet
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page;

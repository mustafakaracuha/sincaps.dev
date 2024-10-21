import Link from "next/link";
import { FaNewspaper, FaLaptopCode, FaChartLine, FaHeartbeat, FaFutbol, FaStar, FaFilm } from "react-icons/fa";

function Page() {
    const topics = [
        { link: "guncel", title: "Güncel", description: "En son haberleri ve gelişmeleri keşfedin.", icon: <FaNewspaper className="text-orange-600 text-xl" /> },
        { link: "teknoloji", title: "Teknoloji", description: "Gündemdeki en son teknoloji gelişmeleri.", icon: <FaLaptopCode className="text-green-600 text-xl" /> },
        { link: "egitim", title: "Eğitim", description: "Eğitimde son durum ve önemli gelişmeler.", icon: <FaChartLine className="text-yellow-600 text-xl" /> },
        { link: "saglik", title: "Sağlık", description: "Sağlık alanındaki yenilikler ve bilgiler.", icon: <FaHeartbeat className="text-red-600 text-xl" /> },
        { link: "spor", title: "Spor", description: "Spor dünyasından haberler ve etkinlikler.", icon: <FaFutbol className="text-indigo-600 text-xl" /> },
        { link: "magazin", title: "Magazin", description: "Magazin dünyasından haberler.", icon: <FaFilm className="text-rose-600 text-xl" /> },
        { link: "burc", title: "Burçlar", description: "Günlük burç yorumlarınızı okuyun ve geleceğinizi öğrenin.", icon: <FaStar className="text-purple-600 text-xl" /> },
    ];

    return (
        <div className="w-full h-screen pb-24 flex flex-col items-center justify-start bg-white px-10 pt-10 overflow-auto">
            <p className="text-md text-gray-700 mb-8 text-start">
                <strong className="text-indigo-600">Sincaps</strong>, gündemden teknolojiye, ekonomiden spora kadar geniş bir yelpazede haberleri takip edebileceğiniz bir platformdur. En son
                gelişmeleri ve bilgileri kolaylıkla keşfedebilirsiniz.
            </p>

            {/* Topic Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {topics.map((topic, index) => (
                    <div key={index} className="bg-white p-5 rounded-xl shadow-lg shadow-gray-200">
                        <div className="flex items-center mb-4">
                            {topic.icon}
                            <h3 className="text-sm font-semibold text-gray-600 ml-2">{topic.title}</h3>
                        </div>
                        <p className="text-gray-500 text-sm mb-4">{topic.description}</p>
                        <Link href={topic.link === "burc" ? `/feed/horoscope` : `/feed/${topic.link}`} className="text-gray-400 text-sm font-semibold hover:underline">
                            Keşfet →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page;

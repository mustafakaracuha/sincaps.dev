import Link from "next/link";
import { FaNewspaper, FaLaptopCode, FaChartLine, FaHeartbeat, FaFutbol, FaStar, FaFilm } from "react-icons/fa";

function Page() {
    const topics = [
        { link: "guncel", title: "Güncel", description: "En son haberleri ve gelişmeleri keşfedin.", bgColor: "bg-orange-50", icon: <FaNewspaper className="text-orange-500 text-lg" /> },
        { link: "teknoloji", title: "Teknoloji", description: "Gündemdeki en son teknoloji gelişmeleri.", bgColor: "bg-green-50", icon: <FaLaptopCode className="text-green-500 text-lg" /> },
        { link: "egitim", title: "Eğitim", description: "Eğitimde son durum ve önemli gelişmeler.", bgColor: "bg-yellow-50", icon: <FaChartLine className="text-yellow-500 text-lg" /> },
        { link: "saglik", title: "Sağlık", description: "Sağlık alanındaki yenilikler ve bilgiler.", bgColor: "bg-red-50", icon: <FaHeartbeat className="text-red-500 text-lg" /> },
        { link: "spor", title: "Spor", description: "Spor dünyasından haberler ve etkinlikler.", bgColor: "bg-indigo-50", icon: <FaFutbol className="text-indigo-500 text-lg" /> },
        { link: "magazin", title: "Magazin", description: "Magazin dünyasından haberler.", bgColor: "bg-rose-50", icon: <FaFilm className="text-rose-500 text-lg" /> },
        { link: "burc", title: "Burçlar", description: "Günlük burç yorumlarınızı okuyun ve geleceğinizi öğrenin.", bgColor: "bg-purple-50", icon: <FaStar className="text-purple-500 text-lg" /> },
    ];

    return (
        <div className="w-full flex flex-col items-center justify-start bg-white px-20 pt-10">
            {/* Sincaps Description */}
            <p className="text-md text-gray-600 mb-8 text-start">
                <strong className="text-indigo-600">Sincaps</strong>, gündemden teknolojiye, ekonomiden spora kadar geniş bir yelpazede haberleri takip edebileceğiniz bir platformdur. En son
                gelişmeleri ve bilgileri kolaylıkla keşfedebilirsiniz.
            </p>

            {/* Topic Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {topics.map((topic, index) => (
                    <div key={index} className={`p-6 rounded-xl transition duration-300 ${topic.bgColor}`}>
                        <div className="flex items-center mb-2">
                            {topic.icon}
                            <h3 className="text-lg font-medium text-gray-700 ml-2">{topic.title}</h3>
                        </div>
                        <p className="text-gray-500 text-sm mb-4">{topic.description}</p>
                        <Link href={topic.link === "burc" ? `/feed/horoscope` : `/feed/${topic.link}`} className="text-blue-500 text-sm hover:underline">
                            Keşfet →
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Page;

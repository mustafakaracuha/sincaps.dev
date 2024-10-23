"use client";

import { motion } from "framer-motion";

function page() {
    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className="w-full h-full overflow-auto pb-24 px-10 py-8">
            <h1 className="text-xl flex items-center justify-between gap-4 font-semibold text-gray-600 text-start mb-4">2024 Yılı Türkiye Trafik Cezaları</h1>
            <div className="space-y-4">
                <div className="p-4 bg-gray-50 border-l-4 border-red-500">
                    <h2 className="text-md font-semibold text-gray-700 mb-1">Hız Sınırını Aşma</h2>
                    <p className="text-gray-600 text-[14px]">
                        Hız sınırını %10-%30 oranında aşma cezası: <strong>951 TL</strong>
                    </p>
                    <p className="text-gray-600 text-[14px]">
                        Hız sınırını %30-%50 oranında aşma cezası: <strong>1.979 TL</strong>
                    </p>
                    <p className="text-gray-600 text-[14px]">
                        Hız sınırını %50'den fazla aşma cezası: <strong>4.064 TL</strong>
                    </p>
                </div>

                <div className="p-4 bg-gray-50 border-l-4 border-yellow-500">
                    <h2 className="text-md font-semibold text-gray-700 mb-1">Alkollü Araç Kullanma</h2>
                    <p className="text-gray-600 text-[14px]">
                        İlk sefer alkollü araç kullanma cezası: <strong>6.439 TL</strong>
                    </p>
                    <p className="text-gray-600 text-[14px]">
                        İkinci sefer alkollü araç kullanma cezası: <strong>8.075 TL</strong>
                    </p>
                    <p className="text-gray-600 text-[14px]">
                        Üçüncü sefer alkollü araç kullanma cezası: <strong>12.978 TL</strong>
                    </p>
                </div>

                <div className="p-4 bg-gray-50 border-l-4 border-blue-500">
                    <h2 className="text-md font-semibold text-gray-700">Emniyet Kemeri Takmama</h2>
                    <p className="text-gray-600 text-[14px]">
                        Emniyet kemeri kullanmama cezası: <strong>691 TL</strong>
                    </p>
                </div>

                <div className="p-4 bg-gray-50 border-l-4 border-green-500">
                    <h2 className="text-md font-semibold text-gray-700">Cep Telefonu Kullanma</h2>
                    <p className="text-gray-600 text-[14px]">
                        Araç kullanırken cep telefonu kullanma cezası: <strong>1.507 TL</strong>
                    </p>
                </div>

                <div className="p-4 bg-gray-50 border-l-4 border-purple-500">
                    <h2 className="text-md max-sm:text-[14px] font-semibold text-gray-700">Park İhlalleri</h2>
                    <p className="text-gray-600 text-[14px]">
                        Yasak yere park etme cezası: <strong>691 TL</strong>
                    </p>
                </div>

                <div className="p-4 bg-gray-100 border-l-4 border-orange-500">
                    <h2 className="text-md font-semibold text-gray-700">Kırmızı Işık İhlali</h2>
                    <p className="text-gray-600 text-[15px]">
                        Kırmızı ışıkta geçme cezası: <strong>951 TL</strong>
                    </p>
                </div>
            </div>
        </motion.div>
    );
}

export default page;

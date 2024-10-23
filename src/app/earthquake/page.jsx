"use client";

import { motion } from "framer-motion";

function Page() {
    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className="w-full h-full py-8 px-10 pb-20 bg-white overflow-auto">
            <h1 className="text-xl flex items-center justify-between gap-4 font-semibold text-gray-700 text-start mb-6">Depreme Bina İçerisinde Yakalananlar Neler Yapmalıdır?</h1>

            <div className="space-y-4 mb-10">
                <ul className="space-y-3 text-[15px] list-disc">
                    <li>
                        <span className="font-semibold">Yat: </span>Yere yan yatıp bacaklarınızı karnınıza doğru çekmelisiniz.
                    </li>
                    <li>
                        <span className="font-semibold">Korun: </span>Özellikle baş bölgesinin korunması birinci önceliktir, yastık ya da başka bir cisimle başınızı korumaya çalışmalısınız.
                    </li>
                    <li>
                        <span className="font-semibold">Kapan: </span>Başınızı kollarınızın arasına alarak kapanmalısınız.
                    </li>
                    <li>
                        <span className="font-semibold">Tutun: </span>Deprem sırasında salınan oturma grubu gibi ağır ve büyük cisimlere tutunarak, onlarla sallanabilir ve sizi ezmelerine engel
                        olabilirsiniz.
                    </li>
                </ul>
            </div>
            <p className="mt-4 text-[15px]">
                Sabitlenmemiş dolap, raf, pencere ve diğer eşyalardan uzak durmalısınız. Bir eşyanın altına girmek yerine, ağırlık merkezi yere yakın olan eşyaların yanına yatmanızı öneririz.
            </p>
            <p className="mt-4 text-[15px]">
                Varsa sağlam sandalyelerle desteklenmiş veya dolgun ve hacimli koltuk, kanepe, içi dolu sandık, baza gibi koruma sağlayabilecek eşyaların yanına çömelerek hayat üçgeni
                oluşturabilirsiniz.
            </p>
            <p className="mt-4 text-[15px]">
                Başınızı iki elinizin arasına alarak veya yastık ve kitap gibi koruyucu bir malzeme yardımıyla korumalısınız. Sarsıntı geçene kadar bu pozisyonda bekleyebilirsiniz.
            </p>
            <p className="mt-4 text-[15px]">Binalarda en tehlikeli yerler balkon, merdiven ve asansörlerdir. Deprem sırasında yüksek risk oluşturan bu yerlerde bulunulmamalıdır.</p>
            <ul className="space-y-3 mt-10 text-[15px] text-gray-500 list-disc mb-6">
                <li>Merdivenlere ya da çıkışlara doğru koşulmamalıdır.</li>
                <li>Balkonlara çıkılmamalıdır.</li>
                <li>Balkonlardan ya da pencerelerden aşağıya atlanmamalıdır.</li>
                <li>Asansörler kesinlikle kullanılmamalıdır.</li>
                <li>Telefonlar acil durum ve yangınları bildirmek dışında kullanılmamalıdır.</li>
                <li>Kibrit veya çakmak yakılmamalı, elektrik düğmelerine dokunulmamalıdır.</li>
                <li>Tekerlekli sandalyede isek tekerlekler kilitlenmeli, baş ve boyun korumaya alınmalıdır.</li>
                <li>İş aletlerinin bulunduğu mutfak, imalathane, laboratuvar gibi yerlerde; ocak, fırın ve benzeri cihazlar kapatılmalı, dökülebilecek malzeme ve maddelerden uzaklaşılmalıdır.</li>
                <li>Sarsıntı geçtikten sonra doğal gaz, elektrik ve su vanaları kapatılmalı, soba ve ısıtıcılar söndürülmelidir.</li>
                <li>
                    Diğer güvenlik önlemleri uygulandıktan sonra, gerekli eşya ve malzemeler alınarak bina, daha önceden tespit edilmiş yoldan derhal terk edilerek toplanma bölgesine gidilmelidir.
                </li>
                <li>
                    Okulda, sınıfta ya da büroda isek sağlam sıra ve masaların altında veya yanında; koridorda isek duvarın yanında hayat üçgeni oluşturacak biçimde{" "}
                    <span className="font-semibold">ÇÖK-KAPAN-TUTUN </span> hareketi yapılarak baş ve boyun korunmalıdır.
                </li>
                <li>Pencerelerden ve camdan yapılmış eşyalardan uzak durulmalıdır.</li>
            </ul>
            <h1 className="text-xl flex items-center justify-between gap-4 font-semibold text-gray-700 text-start">Depreme Açık Alanda Yakalananlar Neler Yapmalıdır?</h1>
            <ul className="space-y-3 mt-8 mb-6 text-[15px] text-gray-500 list-disc">
                <li>
                    Enerji hatları ve direklerinden, ağaçlardan, diğer binalardan ve duvar diplerinden uzaklaşmalısınız. Açık arazide çömelerek etraftan gelen tehlikelere karşı hazırlıklı olmanız
                    önemlidir.
                </li>
                <li>Toprak kayması oluşabilecek, taş veya kaya düşebilecek yamaç altlarında durmamalısınız. Böyle bir ortamdaysanız hızlı bir şekilde güvenli alana geçmeye çabalamalısınız.</li>
                <li>Binalardan düşebilecek baca, kiremit, cam kırıkları ve sıvalara karşı tedbirli olmalısınız.</li>
                <li>Toprak altındaki kanalizasyon, elektrik ve doğal gaz hatlarından gelecek tehlikelere karşı dikkatli olmalısınız.</li>
                <li>Deniz kıyısından mümkün olduğunca uzaklaşmalısınız.</li>
            </ul>
            <h1 className="text-xl flex items-center justify-between gap-4 font-semibold text-gray-700 text-start">Depreme Araçta Yakalananlar Neler Yapmalıdır?</h1>
            <ul className="space-y-3 mt-8 mb-6 text-[15px] text-gray-500 list-disc">
                <li>
                    Sarsıntı sırasında karayolunda seyir halindeyseniz ve bulunduğunuz yer güvenli ise, yolu kapatmadan sağa yanaşıp durmanız gerekir. Kontak anahtarını yerinde bırakıp pencereler
                    kapalı olarak araç içerisinde beklemeniz en güvenli yöntemdir. Sarsıntı durduktan sonra açık alanlara gidebilirsiniz.
                </li>
                <li>
                    Aracınız meskûn mahalde, ağaç, enerji hatları veya direklerinin yanında ve köprü gibi güvenliksiz bir yerde ise, kontak anahtarını üzerinde bırakarak onu terk etmeli ve trafikten
                    uzak açık alanlara gitmelisiniz.
                </li>
                <li>
                    Sarsıntı sırasında bir tünelin içinde ve tünel çıkışına uzaktaysanız; aracı durdurup inmeli ve yanına yan yatarak ayaklarınızı karnınıza çekip ellerinizle baş ve boynunuzu
                    korumalısınız.
                </li>
                <li>
                    Kapalı bir otoparkta iseniz; araç dışına çıkmalı, aracın yanına yan yatarak ellerinizle baş ve boynunuzu korumalısınız. Yukarıdan düşebilecek tavan ya da tünel gibi büyük kütleler
                    aracı belki ezecek ama yok etmeyecektir. Araç içinde olduğunuz takdirde, aracın üzerine düşen bir parça ile aracın içinde ezilebilirsiniz.
                </li>
            </ul>
            <h1 className="text-xl flex items-center justify-between gap-4 font-semibold text-gray-700 text-start">Depreme Toplu Taşıma Araçlarında Yakalananlar Neler Yapmalıdır?</h1>
            <ul className="space-y-3 mt-8 text-[15px] text-gray-500 list-disc">
                <li>
                    Gerekmedikçe, metro ve trenden kesinlikle inmemelisiniz. Çünkü metro ve tren hatlarında elektrik bulunur ve elektrik size ciddi sorunlar yaşatabilir. Ayrıca diğer hatlardan metro
                    ya da tren gelmesi de olasıdır.
                </li>
                <li>
                    Sarsıntı bitinceye kadar metro, otobüs ya da trenin içinde bulunan sıkıca tutturulmuş askı, korkuluk veya herhangi bir yere tutunmalısınız. Otobüs, metro veya tren personeli
                    tarafından verilen talimatlara uymanız, olası problemlerin önüne geçebilir.
                </li>
            </ul>
        </motion.div>
    );
}

export default Page;

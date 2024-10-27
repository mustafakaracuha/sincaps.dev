"use client";

import { motion } from "framer-motion";
import GoogleAdsenseWrite from "../../../GoogleAdsenseWrite";

function Page() {
    const safetyTips = [
        {
            title: "Depreme Bina İçerisinde Yakalananlar Neler Yapmalıdır?",
            items: [
                { description: "Yat: Yere yan yatıp bacaklarınızı karnınıza doğru çekmelisiniz." },
                { description: "Korun: Özellikle baş bölgesinin korunması birinci önceliktir, yastık ya da başka bir cisimle başınızı korumaya çalışmalısınız." },
                { description: "Kapan: Başınızı kollarınızın arasına alarak kapanmalısınız." },
                { description: "Tutun: Deprem sırasında salınan oturma grubu gibi ağır ve büyük cisimlere tutunarak, onlarla sallanabilir ve sizi ezmelerine engel olabilirsiniz." },
            ],
            additionalNotes: [
                "Sabitlenmemiş dolap, raf, pencere ve diğer eşyalardan uzak durmalısınız. Bir eşyanın altına girmek yerine, ağırlık merkezi yere yakın olan eşyaların yanına yatmanızı öneririz.",
                "Varsa sağlam sandalyelerle desteklenmiş veya dolgun ve hacimli koltuk, kanepe, içi dolu sandık, baza gibi koruma sağlayabilecek eşyaların yanına çömelerek hayat üçgeni oluşturabilirsiniz.",
                "Başınızı iki elinizin arasına alarak veya yastık ve kitap gibi koruyucu bir malzeme yardımıyla korumalısınız. Sarsıntı geçene kadar bu pozisyonda bekleyebilirsiniz.",
                "Binalarda en tehlikeli yerler balkon, merdiven ve asansörlerdir. Deprem sırasında yüksek risk oluşturan bu yerlerde bulunulmamalıdır.",
            ],
            warnings: [
                "Merdivenlere ya da çıkışlara doğru koşulmamalıdır.",
                "Balkonlara çıkılmamalıdır.",
                "Balkonlardan ya da pencerelerden aşağıya atlanmamalıdır.",
                "Asansörler kesinlikle kullanılmamalıdır.",
                "Telefonlar acil durum ve yangınları bildirmek dışında kullanılmamalıdır.",
                "Kibrit veya çakmak yakılmamalı, elektrik düğmelerine dokunulmamalıdır.",
                "Tekerlekli sandalyede isek tekerlekler kilitlenmeli, baş ve boyun korumaya alınmalıdır.",
                "İş aletlerinin bulunduğu mutfak, imalathane, laboratuvar gibi yerlerde; ocak, fırın ve benzeri cihazlar kapatılmalı, dökülebilecek malzeme ve maddelerden uzaklaşılmalıdır.",
                "Sarsıntı geçtikten sonra doğal gaz, elektrik ve su vanaları kapatılmalı, soba ve ısıtıcılar söndürülmelidir.",
                "Diğer güvenlik önlemleri uygulandıktan sonra, gerekli eşya ve malzemeler alınarak bina, daha önceden tespit edilmiş yoldan derhal terk edilerek toplanma bölgesine gidilmelidir.",
                "Okulda, sınıfta ya da büroda isek sağlam sıra ve masaların altında veya yanında; koridorda isek duvarın yanında hayat üçgeni oluşturacak biçimde ÇÖK-KAPAN-TUTUN hareketi yapılarak baş ve boyun korunmalıdır.",
                "Pencerelerden ve camdan yapılmış eşyalardan uzak durulmalıdır.",
            ],
        },
        {
            title: "Depreme Açık Alanda Yakalananlar Neler Yapmalıdır?",
            items: [
                "Enerji hatları ve direklerinden, ağaçlardan, diğer binalardan ve duvar diplerinden uzaklaşmalısınız. Açık arazide çömelerek etraftan gelen tehlikelere karşı hazırlıklı olmanız önemlidir.",
                "Toprak kayması oluşabilecek, taş veya kaya düşebilecek yamaç altlarında durmamalısınız. Böyle bir ortamdaysanız hızlı bir şekilde güvenli alana geçmeye çabalamalısınız.",
                "Binalardan düşebilecek baca, kiremit, cam kırıkları ve sıvalara karşı tedbirli olmalısınız.",
                "Toprak altındaki kanalizasyon, elektrik ve doğal gaz hatlarından gelecek tehlikelere karşı dikkatli olmalısınız.",
                "Deniz kıyısından mümkün olduğunca uzaklaşmalısınız.",
            ],
        },
        {
            title: "Depreme Araçta Yakalananlar Neler Yapmalıdır?",
            items: [
                "Sarsıntı sırasında karayolunda seyir halindeyseniz ve bulunduğunuz yer güvenli ise, yolu kapatmadan sağa yanaşıp durmanız gerekir. Kontak anahtarını yerinde bırakıp pencereler kapalı olarak araç içerisinde beklemeniz en güvenli yöntemdir. Sarsıntı durduktan sonra açık alanlara gidebilirsiniz.",
                "Aracınız meskûn mahalde, ağaç, enerji hatları veya direklerinin yanında ve köprü gibi güvenliksiz bir yerde ise, kontak anahtarını üzerinde bırakarak onu terk etmeli ve trafikten uzak açık alanlara gitmelisiniz.",
                "Sarsıntı sırasında bir tünelin içinde ve tünel çıkışına uzaktaysanız; aracı durdurup inmeli ve yanına yan yatarak ayaklarınızı karnınıza çekip ellerinizle baş ve boynunuzu korumalısınız.",
                "Kapalı bir otoparkta iseniz; araç dışına çıkmalı, aracın yanına yan yatarak ellerinizle baş ve boynunuzu korumalısınız. Yukarıdan düşebilecek tavan ya da tünel gibi büyük kütleler aracı belki ezecek ama yok etmeyecektir. Araç içinde olduğunuz takdirde, aracın üzerine düşen bir parça ile aracın içinde ezilebilirsiniz.",
            ],
        },
        {
            title: "Depreme Toplu Taşıma Araçlarında Yakalananlar Neler Yapmalıdır?",
            items: [
                "Gerekmedikçe, metro ve trenden kesinlikle inmemelisiniz. Çünkü metro ve tren hatlarında elektrik bulunur ve elektrik size ciddi sorunlar yaşatabilir. Ayrıca diğer hatlardan metro ya da tren gelmesi de olasıdır.",
                "Sarsıntı bitinceye kadar metro, otobüs ya da trenin içinde bulunan sıkıca tutturulmuş askı, korkuluk veya herhangi bir yere tutunmalısınız. Otobüs, metro veya tren personeli tarafından verilen talimatlara uymanız, olası problemlerin önüne geçebilir.",
            ],
        },
    ];

    return (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.1 }} className="w-full h-full py-8 px-10 pb-20 bg-white overflow-auto">
            {safetyTips.map((tip, index) => (
                <div key={index}>
                    <h1 className="text-xl flex items-center justify-between gap-4 font-semibold text-gray-700 text-start mb-4">{tip.title}</h1>
                    <div className="space-y-4 mb-6">
                        <ul className="space-y-3 text-gray-500 text-[15px] list-disc">
                            {tip.items.map((item, itemIndex) => (
                                <li key={itemIndex}>{typeof item === "string" ? item : <span className="font-semibold text-gray-700">{item.description}</span>}</li>
                            ))}
                        </ul>
                    </div>
                    <GoogleAdsenseWrite pId={process.env.NEXT_GOOGLE_ID}/>
                    {tip.additionalNotes &&
                        tip.additionalNotes.map((note, noteIndex) => (
                            <p key={noteIndex} className="mt-4 text-[15px]">
                                {note}
                            </p>
                        ))}
                    {tip.warnings && (
                        <ul className="space-y-3 mt-10 text-[15px] text-gray-500 list-disc mb-6">
                            {tip.warnings.map((warning, warningIndex) => (
                                <li key={warningIndex}>{warning}</li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </motion.div>
    );
}

export default Page;

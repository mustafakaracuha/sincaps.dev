import { Providers } from "../store/providers";
import { store } from "../store/store";

import NavBar from "./components/NavBar";
import SidebarMenu from "./components/SideBar";
import GoogleAdsense from "../../GoogleAdsense";
import "./globals.css";

import { Toaster } from "react-hot-toast";

export const metadata = {
    title: "Sincaps.dev",
    description:
        "Sincaps.dev, doğru ve güvenilir kaynaklar sunarak toplumu bilgilendirir, güncel haberler ve analizlerle kullanıcıların gelişen olaylara dair farkındalığını artırır. Eğitim, sağlık, çevre gibi toplumu ilgilendiren önemli konularda da içerikler sunarak, kullanıcılarının sosyal sorumluluklarını destekler ve bilinçli bireyler yetişmesine katkıda bulunur.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.png" type="image/png" />
            </head>
            <body className="w-full h-full overflow-y-hidden">
                <NavBar />
                <Providers store={store}>
                    <div className="w-full h-screen flex items-center">
                        {/* Side Bar */}
                        <SidebarMenu />

                        {/* Divider */}
                        <div className="w-[1px] h-screen bg-gray-200 rounded-full"></div>

                        {/* Content */}
                        <div className="w-full h-full">{children}</div>
                    </div>
                </Providers>
                <Toaster />
                <GoogleAdsense pId={process.env.NEXT_GOOGLE_ID} />
            </body>
        </html>
    );
}

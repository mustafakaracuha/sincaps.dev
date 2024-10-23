import { Providers } from "../store/providers";
import { store } from "../store/store";

import NavBar from "./components/NavBar";
import SidebarMenu from "./components/SideBar";
import "./globals.css";

import { Toaster } from "react-hot-toast";

export const metadata = {
    title: "Sincaps.dev",
    description:
        "Sincaps.dev, kullanıcıların en güncel haberleri takip edebileceği, teknoloji, sağlık, spor, eğitim ve daha birçok alanda bilgiye ulaşabileceği dinamik bir platformdur. Haberlerden araçlara kadar geniş bir içerik yelpazesi sunarak bilgi edinmenizi kolaylaştırıyoruz.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/favicon.png" type="image/png" />
            </head>
            <body className="overflow-hidden">
                <Providers store={store}>
                    <NavBar />
                    <div className="w-full h-screen flex items-center">
                        {/* Side Bar */}
                        <SidebarMenu />

                        {/* Divider */}
                        <div className="w-[1px] h-screen bg-gray-200 rounded-full"></div>

                        {/* Content */}
                        <div className="w-full h-screen">{children}</div>
                    </div>
                </Providers>
                <Toaster />
            </body>
        </html>
    );
}

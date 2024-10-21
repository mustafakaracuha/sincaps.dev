import { Providers } from "../store/providers";
import { store } from "../store/store";

import NavBar from "./components/NavBar";
import SidebarMenu from "./components/SideBar";
import "./globals.css";

export const metadata = {
    title: "Sincaps",
    description: "Generated by create next app",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="overflow-hidden">
                <Providers store={store}>
                    <NavBar />
                    <div className="w-full h-screen flex *:items-center">
                        {/* Side Bar */}
                        <SidebarMenu />

                        {/* Divider */}
                        <div className="w-[1px] h-screen bg-gray-200 rounded-full"></div>

                        {/* Content */}
                        <div className="w-full h-screen">{children}</div>
                    </div>
                </Providers>
            </body>
        </html>
    );
}

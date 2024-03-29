import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import NavBarComponent from "@/components/NavBarComponent";
import FooterComponent from "@/components/FooterComponent";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
    title: "CSTAD",
    description: "Best Institute in Cambodia Ever",
};

export default function RootLayout({children}:Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <html lang="en">
                <body className={inter.className}>
                <div className="bg-gray-200">
                    <header className="sticky top-0 z-50">
                        <NavBarComponent/>
                    </header>
                    {children}
                    <footer>
                        <FooterComponent/>
                    </footer>
                </div>
                </body>
            </html>
        </>
    );
}

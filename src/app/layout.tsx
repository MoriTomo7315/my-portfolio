import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/organisms/header";
import Footer from "./components/organisms/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "This is my portofolio page by tomoya.mori",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <div className="{inter.className} w-[960px] m-auto">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
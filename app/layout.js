import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Margad Batsaikhan",
  description: "Enjoy Margad's portfolio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main className="mx-auto px-12 max-w-6xl">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}

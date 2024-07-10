import "./globals.css";
import Header from "./components/Header";
import localFont from 'next/font/local'

export const metadata = {
  title: "Margad Batsaikhan",
  description: "Enjoy Margad's portfolio.",
};


const openSauceOne = localFont({
  src: [
    {
      path: '../public/font/OpenSauceOne-Medium.woff2',
      weight: '500'
    },
    {
      path: '../public/font/OpenSauceOne-Regular.woff2',
      weight: '400'
    },
    {
      path: '../public/font/OpenSauceOne-SemiBold.woff2',
      weight: '600'
    }
  ],
  variable: '--font-open-sauce-one'
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSauceOne.className}>
        <main className="mx-auto px-12 max-w-6xl max-lg:px-2">
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}

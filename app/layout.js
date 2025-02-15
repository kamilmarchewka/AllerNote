import localFont from "next/font/local";
import Nav from "@/components/nav/Nav";
import BackgroundGraphic from "@/components/background/bg-graphics";
import "./globals.css";
import Footer from "@/components/footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Nav />
        <main className="body-spacing ">{children}</main>
        <Footer />
        <div className="fixed bottom-0 right-0 -z-50">
          <BackgroundGraphic />
        </div>
      </body>
    </html>
  );
}

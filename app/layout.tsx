import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const heading = Poppins({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Wok & Roll | Teriyaki & Sushi in Kent, WA",
  description:
    "Latino-owned teriyaki, Chinese favorites and sushi at 405 Central Ave N, Kent, WA. Message us on Instagram to order.",
};

const themeScript = `try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
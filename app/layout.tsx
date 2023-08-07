import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Inter,
  Montserrat,
  Barriecito,
  Voltaire,
  Barlow_Condensed,
  Archivo_Narrow,
  Rampart_One,
  League_Gothic,
  Bebas_Neue,
} from "next/font/google";

import Image from "next/image";
import localFont from "next/font/local";

export const league = League_Gothic({
  weight: ["400"],
  subsets: ["latin"],
  /*   display: "swap",
   */ variable: "--font-league",
});

export const bebas = Bebas_Neue({
  weight: ["400"],
  subsets: ["latin"],
  /*   display: "swap",
   */ variable: "--font-bebas",
});

export const neutra = localFont({
  src: "../public/fonts/neutratextbook.otf",
  variable: "--font-neutra",
});

const inter = Inter({ subsets: ["latin"] });
export const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  /*   display: "swap",
   */ variable: "--font-montserrat",
});

export const barriecito = Barriecito({
  weight: ["400"],
  subsets: ["latin"],
  /*   display: "swap",
   */ variable: "--font-barriecito",
});

export const voltaire = Voltaire({
  weight: ["400"],
  subsets: ["latin"],
  /*   display: "swap",
   */ variable: "--font-voltaire",
});

export const rampart = Rampart_One({
  weight: ["400"],
  subsets: ["latin"],
  /*   display: "swap",
   */ variable: "--font-rampart",
});

export const archivo = Archivo_Narrow({
  weight: ["400"],
  subsets: ["latin"],
  /*   display: "swap",
   */ variable: "--font-archivo",
});

export const barlow = Barlow_Condensed({
  weight: ["400"],
  subsets: ["latin"],
  /*   display: "swap",
   */ variable: "--font-barlow",
});

export const metadata: Metadata = {
  title: "Federico Holc - Fotografía",
  description: "Sitio web fotográfico de Federico Holc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${barriecito.variable} ${voltaire.variable} ${league.variable} ${bebas.variable} ${neutra.variable} `}
    >
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}

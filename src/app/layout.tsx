import type { Metadata } from "next";
import { Bebas_Neue, Roboto, Shrikhand } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--roboto",
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--bebas",
  subsets: ["latin"],
  weight: "400",
});
const shirk = Shrikhand({
  variable: "--shirk",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Gigih Prasetia",
  description: `
  Im Front End Developer with proficiency in developing and maintaining web applications using React, Next js, Vue js,
React Native, Express, My Sql, and Firebase. Proficient in building responsive layouts, optimizing website performance,
and handling backend integrations. Strong foundation in programming languages such as HTML, CSS, and JavaScript.
Excellent communication skills and ability to learn and adapt quickly in a team environment.`,
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${shirk.variable}  ${bebasNeue.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import WeddingMusic from "@/components/WeddingMusic";
import {
  Aref_Ruqaa,
  Cormorant_Garamond,
  Pinyon_Script,
} from "next/font/google";
import "./globals.css";

const pinyonScript = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pinyon",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const arefRuqaa = Aref_Ruqaa({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-aref",
});

export const metadata: Metadata = {
  title: "Ahmed & Doina's Wedding - 23 OCT - 8:00 PM",
  description:
    "Celebrate the wedding of Ahmed & Donia with our beautifully designed digital wedding invitation. Grand View Hall - Tanta - 8:00 PM",
  openGraph: {
    title: "Ahmed & Donia's Wedding Invitation",
    description:
      "Celebrate the wedding of Ahmed & Doina with our beautifully designed digital wedding invitation. Grand View Hall - Tanta - 8:00 PM",
    images: [
      {
        url: "/public/meta.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmed & Donia+'s Wedding Invitation",
      },
    ],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover", // This expands the content to the screen edges
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${pinyonScript.variable} ${cormorant.variable} ${arefRuqaa.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <WeddingMusic />
        {children}
      </body>
    </html>
  );
}

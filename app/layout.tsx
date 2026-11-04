import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const siteUrl = "https://www.doctorbuendia.com.mx";
const socialTitle =
  "Dr. Diego Eduardo Buendia Valdez | Traumatología, Ortopedia y Cirugía de Columna";
const socialDescription =
  "Diagnóstico y tratamiento de lesiones, dolor articular y problemas de columna. Opciones quirúrgicas y no quirúrgicas. Ciudad de México.";
const socialImage = `${siteUrl}/images/og-image.jpg`;

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: socialTitle,
  alternates: { canonical: siteUrl },
  description: socialDescription,
  icons: {
    icon: [
      {
        url: "/images/fav-icono.jpg",
        type: "image/jpeg",
        sizes: "32x32",
      },
    ],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: socialTitle,
    description: socialDescription,
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: "Dr. Diego Buendia, especialista en ortopedia y cirugía de columna",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: socialTitle,
    description: socialDescription,
    images: [socialImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${fraunces.variable} ${inter.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}

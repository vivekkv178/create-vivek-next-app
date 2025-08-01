import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import { CONSTANTS } from "@/lib/constants";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Title",
  description: "Description",
  metadataBase: new URL(`${CONSTANTS.CDN_PATH}/repo/Thumbnail.png`),
  openGraph: {
    title: "Title",
    description: "Description",
    url: "url",
    siteName: "Site Name",
    images: [
      {
        url: `${CONSTANTS.CDN_PATH}/repo/Thumbnail.png`, // Must be an absolute URL
        width: 800,
        height: 1000,
      },
      {
        url: `${CONSTANTS.CDN_PATH}/repo/Thumbnail.png`, // Must be an absolute URL
        width: 1800,
        height: 2000,
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}

import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Toprofile_Multimedia",
  icons: {
    icon: "/img/logo-img.svg",
    shortcut: "/img/logo-img.svg",
    apple: "/img/logo-img.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

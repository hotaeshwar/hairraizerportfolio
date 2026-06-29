import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Hair Raiserz Unisex Salon 66 A Mohali | Premium Luxury Beauty Destination",
  description: "Hair Raiserz Unisex Salon 66 A Mohali is a luxury beauty destination crafted for modern men and women. From stylish haircuts and luxury hair color to bridal makeovers, skin care, and nail artistry, look fresh, confident, and unforgettable.",
  keywords: ["Hair Raiserz", "Salon in Mohali", "Best Salon Mohali", "Bridal Makeup Mohali", "Unisex Salon Mohali", "Hair Color Mohali", "Hair Raiserz Sector 66 A"],
  icons: {
    icon: "/icon.png?v=2",
    apple: "/icon.png?v=2",
  },
  openGraph: {
    title: "Hair Raiserz Unisex Salon 66 A Mohali | Luxury Beauty Destination",
    description: "Premium hair styling, bridal makeup, luxury hair color, and grooming services in Mohali.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-[#fcfcfc] text-[#09090b] font-sans selection:bg-gold-primary selection:text-white">
        {children}
      </body>
    </html>
  );
}

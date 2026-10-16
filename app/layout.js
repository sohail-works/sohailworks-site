import { Space_Grotesk, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import WhatsappButton from "@/components/WhatsAppButton";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-display" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata = {
  title: "Sohail — WordPress, GoHighLevel & React Developer",
  description: "I build fast, high-converting websites with WordPress, GoHighLevel & React. What you can imagine, I can build it for you — let's work together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className= {` scroll-smooth ${spaceGrotesk.variable} ${jakarta.variable} ${jetbrains.variable}`}>
      <body>
      <Navbar />
      <CustomCursor />
      {children}
      <WhatsappButton />
      </body>
    </html>
  );
}

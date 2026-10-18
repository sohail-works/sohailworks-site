import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import WhatsappButton from "@/components/WhatsAppButton";

const spaceGrotesk = localFont({
  src: "./fonts/SpaceGrotesk-VariableFont_wght.woff2",
  variable: "--font-display",
  weight: "300 400 700",
});

const jakarta = localFont({
  src: "./fonts/PlusJakartaSans-VariableFont_wght.woff2",
  variable: "--font-body",
  weight: "200 800",
});

const jetbrains = localFont({
  src: "./fonts/JetBrainsMono-VariableFont_wght.woff2",
  variable: "--font-mono",
  weight: "100 800",
});

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

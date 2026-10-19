import "./globals.css";
import Navbar from "@/components/Navbar";
import CustomCursor from "@/components/CustomCursor";
import WhatsappButton from "@/components/WhatsAppButton";


export const metadata = {
  title: "Sohail — WordPress, GoHighLevel & React Developer",
  description: "I build fast, high-converting websites with WordPress, GoHighLevel & React. What you can imagine, I can build it for you — let's work together.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en"  className= {` scroll-smooth `}>
    <head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=Plus+Jakarta+Sans:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
</head>
      <body>
      <Navbar />
      <CustomCursor />
      {children}
      <WhatsappButton />
      </body>
    </html>
  );
}

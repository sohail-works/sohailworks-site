import Hero from "@/components/Hero"
import Portfolio from "@/components/Portfolio"
import Services from "@/components/Services"
import dynamic from "next/dynamic";



const About = dynamic(() => import("@/components/About"));
const Reviews = dynamic(() => import("@/components/Reviews"));
const Faqs = dynamic(() => import("@/components/Faqs"));
const Contact = dynamic(() => import("@/components/Contact"));
const Footer = dynamic(() => import("@/components/Footer"));


export default function Home(){
  return( <>
   <main className="m-10 mx-auto w-full lg:max-w-7xl">
      <Hero/>
      <Services/>
      <Portfolio/>
      <About/>
      <Reviews/>
      <Faqs/>
      <Contact/>
    </main>
      <Footer/>
  </>
   
  )
}
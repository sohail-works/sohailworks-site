import Hero from "@/components/Hero"
import Portfolio from "@/components/Portfolio"
import Services from "@/components/Services"
import dynamic from "next/dynamic";

const Reviews = dynamic(() => import("@/components/Reviews"));


export default function Home(){
  return(
    <main className="m-10 mx-auto w-full lg:max-w-7xl">
      <Hero/>
      <Services/>
      <Portfolio/>
      <Reviews/>
    </main>
  )
}
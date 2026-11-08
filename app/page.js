import Hero from "@/components/Hero"
import Portfolio from "@/components/Portfolio"
import Services from "@/components/Services"

export default function Home(){
  return(
    <main className="m-10 mx-auto w-full lg:max-w-7xl">
      <Hero/>
      <Services/>
      <Portfolio/>
    </main>
  )
}
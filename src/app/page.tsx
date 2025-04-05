import { SecondBlock } from "@/components/SecondBlock";
import { FirstBlock } from "@/components/FirstBlock";
  import { Header } from "@/components/Header";
import { Cards } from "@/components/Cards";
import { GitProys } from "@/components/GitProys";
import { SetTech } from "@/components/SetTech";
  
export default function Home() {
  return (
    <>
      <Header />
      <FirstBlock />
      <Cards />
      <SecondBlock />
      <GitProys />
      <SetTech />
    </>
  )
}

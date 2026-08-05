import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import SpeakingImpact from "@/components/SpeakingImpact";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <SpeakingImpact />
      </main>
    </>
  );
}

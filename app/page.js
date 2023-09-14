import Image from 'next/image'
import MissionSection from "@/components/sections/MissionSection"
import BannerSection from "@/components/sections/BannerSection"
import BusinessSection from "@/components/sections/BusinessSection"
import CounterSection from "@/components/sections/CounterSection"
import Header from "@/components/Header"
import SmallCardsSection from "@/components/sections/SmallCardsSection";
import CertifiedSlider from "@/components/CertifiedSlider";
import CertifiedSection from "@/components/sections/CertifiedSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
      <div>
          <Header />
          <main className="flex min-h-screen flex-col items-center justify-between">
              <BannerSection />
              <div className="mt-[-22.5px]">
                  <Image
                      src="/img/arrow_down.svg"
                      alt="arrow down"
                      width={45}
                      height={45}
                      priority
                  />
              </div>
              <MissionSection />
              <BusinessSection />
              <CounterSection />
              <SmallCardsSection />
              <CertifiedSection
                  title="Make a difference. We are certified."
              />
              <ContactForm />
              <Footer />
          </main>
      </div>
  )
}

import Image from 'next/image'
import MissionSection from "@/components/sections/MissionSection"
import BannerSection from "@/components/sections/BannerSection"
import BusinessSection from "@/components/sections/BusinessSection"
import CounterSection from "@/components/sections/CounterSection"
import ContactFormSection from "@/components/sections/ContactFormSection"
import SmallCardsSection from "@/components/sections/SmallCardsSection";
import CertifiedSection from "@/components/sections/CertifiedSection";
import JobOffersSection from "@/components/sections/JobOffersSection"
import ServicesSection from "@/components/sections/ServicesSection"
import Layout from "@/components/Layout"

export default function Home() {
    return (
        <Layout>
            1111
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
            <CertifiedSection/>
            <JobOffersSection />
            <ServicesSection />
            <ContactFormSection />
        </Layout>
    )
}

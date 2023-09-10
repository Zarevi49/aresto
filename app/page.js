import Image from 'next/image'
import MissionSection from "@/components/sections/MissionSection"
import BannerSection from "@/components/sections/BannerSection"
import BusinessSection from "@/components/sections/BusinessSection"

export default function Home() {
  return (
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
    </main>
  )
}

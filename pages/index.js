import MissionSection from "@/components/sections/MissionSection"
import BannerSection from "@/components/sections/BannerSection"
import BusinessSection from "@/components/sections/BusinessSection"
import CounterSection from "@/components/sections/CounterSection"
import ContactFormSection from "@/components/sections/ContactFormSection"
import SmallCardsSection from "@/components/sections/SmallCardsSection";
import CertifiedSection from "@/components/sections/CertifiedSection";
import JobOffersSection from "@/components/sections/JobOffersSection"
import ServicesSection from "@/components/sections/ServicesSection"
import Layout, {getGlobalSettings} from "@/components/Layout"
import {Axios, DIRECTUS_API_ENDPOINT} from "@/helpers/directus"

const COLLECTION_NAME = 'website_aresto_home_page'

export async function getStaticProps({ locale }) {
    const global_settings = await getGlobalSettings(locale)

    const requestConfig = {
        params: {
            fields: [
                '*.*',
                'translations.blocks.*',
                'translations.blocks.item.*',
                'translations.blocks.item.images.*',
                'translations.blocks.item.cards.*',
                'translations.blocks.item.cards.images.*',
                'translations.blocks.item.video.*',
            ],
            limit: 1,
        },
    };
    const response = await Axios.get(`${DIRECTUS_API_ENDPOINT}/items/${COLLECTION_NAME}/`, requestConfig)
    const itemData = response.data.data
    const translation = itemData.translations.find(t => t.languages_code === locale)
    console.log(itemData)
    return {
        props: {
            global_settings,
            item: translation
        },
    };

}

export default function Home({global_settings, item}) {
    console.log(item)
    return (
        <Layout global_settings={global_settings}>
            {
                item.blocks.map((block) => {
                    // Determine the component name and data from the fetched data
                    const component = block.collection
                    if (component === "block_banner") {
                        return (
                            <BannerSection key={block.id} data={block.item} />
                        )
                    }
                    else if (component === "block_heading_and_text") {
                        return <MissionSection key={block.id} data={block.item}  />
                    }
                    else if (component === "block_business") {
                        return <BusinessSection key={block.id} data={block.item}  />
                    }
                    else if (component === "block_numbers") {
                        return <CounterSection key={block.id} data={block.item}  />
                    }
                    else if (component === "block_cardgroup") {
                        return <SmallCardsSection key={block.id} data={block.item}  />
                    }
                    else if (component === "block_heading_and_slider") {
                        return <CertifiedSection key={block.id} data={block.item}  />
                    }
                    else if (component === "block_cardgroup_slider") {
                        return <JobOffersSection key={block.id} data={block.item}  />
                    }
                    else if (component === "block_services") {
                        return <ServicesSection key={block.id} data={block.item}  />
                    }
                })
            }
            <ContactFormSection />
        </Layout>
    )
}

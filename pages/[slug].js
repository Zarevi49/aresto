import Layout, {getGlobalSettings} from "@/components/Layout"
import {Axios, DIRECTUS_API_ENDPOINT} from "@/helpers/directus"
import {serverSideTranslations} from "next-i18next/serverSideTranslations"
const COLLECTION_NAME = 'website_aresto_pages'

export async function getStaticPaths({ locales }) {
    try {
        const response = await Axios.get(`${DIRECTUS_API_ENDPOINT}/items/${COLLECTION_NAME}?fields=slug`)
        const items = response.data.data
        const paths = locales.flatMap(locale =>
            items.map(item => ({ params: { slug: item.slug.toString(), locale } }))
        )

        return { paths, fallback: 'blocking' }
    } catch (error) {
        console.error("Error fetching paths in getStaticPaths:", error)
        return { paths: [], fallback: 'blocking' }
    }
}

export async function getStaticProps({ params, locale }) {
    try {
        const response = await Axios.get(`${DIRECTUS_API_ENDPOINT}/items/${COLLECTION_NAME}/${params.slug}?fields=*.*`)
        const itemData = response.data.data

        // Filter the translations based on the provided locale
        const translation = itemData.translations.find(t => t.languages_code === locale)

        const global_settings = await getGlobalSettings(locale)
        return {
            props: {
                item: translation,
                global_settings,
                ...(await serverSideTranslations(locale, ["common"]))
            }
        }
    } catch (error) {
        console.error("Error fetching data in getStaticProps:", error)
        return { props: {}, notFound: true }
    }
}

function Page({ item, global_settings }) {
    if (!item) {
        // If no item data is provided, render a not found message
        return <div>Item not found.</div>
    }
    return (
        <Layout classes={"bg-primary-light"} global_settings={global_settings}>
            <div className="max-w-[908px] px-5 mx-auto md:mt-[176px] mt-[76px] md:mb-[100px] mb-[80px]">
                {
                    item.content.blocks.map((item, index_t) => {
                        if (item.type === "header" && item.data.text && item.data.level) {
                            const Tag = `h${item.data.level}`
                            let heading_classes = ""
                            if (item.data.level === 1) {
                                heading_classes = "md:text-[60px] text-[35px] font-heading leading-[95%] md:mb-[66px] mb-[27px]  md:text-left text-center"
                            } else if (item.data.level === 2) {
                                heading_classes = "font-heading md:text-[30px] text-[25px] mb-[18px] leading-[90%] md:text-left text-center"
                            }
                            return <Tag key={index_t + Tag} className={heading_classes}>{item.data.text}</Tag>
                        }
                        if (item.type === "paragraph" && item.data.text) {
                            return (
                                <p key={index_t + 'p'} className="md:mb-[87px] mb-[70px]" dangerouslySetInnerHTML={ {__html: item.data.text} }></p>
                            )
                        }
                    })
                }
            </div>
        </Layout>
    )
}

export default Page

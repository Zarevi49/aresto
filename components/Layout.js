import React from "react"
import Header from "./Header"
import Footer from "./Footer"
// import {getGlobalSettings} from "@/helpers/global_settings"
import {Axios, DIRECTUS_API_ENDPOINT} from "@/helpers/directus"
const COLLECTION_NAME = 'website_aresto_header_and_footer'
export async function getGlobalSettings(locale) {
    try {
        const response = await Axios.get(`${DIRECTUS_API_ENDPOINT}/items/${COLLECTION_NAME}?fields=*.*`)
        let itemData = response.data.data // Assuming there's only one item in this collection

        // Find the translation that matches the provided locale
        const translation = itemData.translations.find(t => t.languages_code === locale)

        // If a translation is found, use it otherwise, use the default data
        // const footerData = translation || itemData
        delete itemData.translations
        const global_settings = {...translation, ...itemData}

        return global_settings
    } catch (error) {
        console.error("Error fetching footer data:", error)
        return {}
    }
}
const Layout = ({ children, classes, global_settings }) => {
    return (
        <div className={classes}>
            <Header phone={global_settings.phone_number} />
            <main className="flex min-h-screen flex-col items-center justify-between">
                {children}
            </main>
            <Footer footer={global_settings} />
        </div>
    )
}

export default Layout

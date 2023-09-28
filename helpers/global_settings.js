// import {Axios, DIRECTUS_API_ENDPOINT} from "@/helpers/directus"
// const COLLECTION_NAME = 'website_aresto_header_and_footer'
// export async function getGlobalSettings(locale) {
//     try {
//         const response1 = await Axios.get(`${DIRECTUS_API_ENDPOINT}/items/${COLLECTION_NAME}?fields=*.*`);
//         const itemData = response.data // Assuming there's only one item in this collection
//         console.log(itemData)
//
//         // Find the translation that matches the provided locale
//         const translation = itemData.translations.find(t => t.languages_code === locale);
//
//         // If a translation is found, use it; otherwise, use the default data
//         const footerData = translation || itemData;
//
//         return footerData;
//     } catch (error) {
//         console.error("Error fetching footer data:", error);
//         return {};
//     }
// }

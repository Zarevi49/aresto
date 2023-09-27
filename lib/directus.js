// import axios from "axios";
//
// const API_URL = "http://0.0.0.0:8055"
// const API_ITEMS_URL = `${API_URL}/items/`
// const API_TOKEN = "vX79axZaWlOJ6gtdz3DPRchIe-Oeyw0U"
//
// const Axios = axios.create({
//     baseURL: `${API_ITEMS_URL}`,
//     headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${API_TOKEN}`,
//     },
// })
//
// const getApiData = async (tableSlug, query_params) => {
//     try {
//         // const { data } = await Axios.get(
//         //     `${tableSlug}?fields=${filterParams}${limit ? `&limit=${limit}` : ""}`
//         // );
//         const { data } = await Axios.get(
//             `${tableSlug}`, {
//                 params: {
//                     fields: query_params.fields,
//                     filter: {...query_params.filter}
//                 }
//             }
//         )
//
//         return data.data
//     } catch (error) {
//         console.log(error)
//     }
// }
//
// export { getApiData }
//
import axios from "axios"

const DIRECTUS_API_ENDPOINT = 'http://0.0.0.0:8055'
const API_TOKEN = "vX79axZaWlOJ6gtdz3DPRchIe-Oeyw0U"

const Axios = axios.create({
    baseURL: `${DIRECTUS_API_ENDPOINT}`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_TOKEN}`,
    },
})
export {Axios, DIRECTUS_API_ENDPOINT}

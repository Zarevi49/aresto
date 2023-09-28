// DataContext.js
"use client"
import { createContext, useContext, useEffect, useState } from 'react';
import {DIRECTUS_API_ENDPOINT} from "@/helpers/directus"
import axios from "axios"

const DataContext = createContext();
const COLLECTION_NAME = 'website_aresto_header_and_footer'
const Axios = axios.create({
    baseURL: `${DIRECTUS_API_ENDPOINT}`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.API_TOKEN}`,
    },
})
export function DataProvider({ children, locale }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Fetch the data when the app loads
        async function fetchData() {
            try {
                const response = await Axios.get(`${DIRECTUS_API_ENDPOINT}/items/${COLLECTION_NAME}?fields=*.*`, {
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${process.env.API_TOKEN}`,
                    }
                });
                let itemData = response.data.data // Assuming there's only one item in this collection
                console.log(itemData)
                // Find the translation that matches the provided locale
                const translation = itemData.translations.find(t => t.languages_code === locale);

                // If a translation is found, use it; otherwise, use the default data
                // const footerData = translation || itemData;
                delete itemData.translations
                const global_settings = {...translation, ...itemData};

                setData(global_settings)
            } catch (error) {
                console.error("Error fetching footer data:", error);
                return {};
            }
        }

        fetchData();
    }, []);

    return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
}

export function useData() {
    return useContext(DataContext);
}

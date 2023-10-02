import Layout from "@/components/Layout"
import {getApiData} from "@/lib/directus"

async function getStaticProps(slug) {
    const query_params = {
        fields: ["*.*"],
        filter: {
            languages_code: {
                _eq: "en-US"
            },
            website_aresto_pages_slug: {
                _eq: slug
            }
        }
    }
    const landingObjectData = await getApiData('website_aresto_pages_translations', query_params)
    if (!landingObjectData) {
        return {
            notFound:   true,
        }
    }
    return landingObjectData
}
export default async function PrivacyPolicy({params}) {
    const page = await getStaticProps(params.slug)
    const content = page[0].content.blocks
    const props = {
        post: {
            title: "Politique de confidentialité 1111",
            content: [
                {
                    type: "paragraph",
                    text: "La présente politique de confidentialité (ci-après la « Politique de confidentialité ») régit la façon dont Beim Méchel, société luxembourgeoise dont le siège est établi à 1, rue Jean Majerus L-7555 Mersch, immatriculée au Registre de Commerce et des Sociétés, Luxembourg, section B sous le numéro 221957 (ci-après, la « Société ») recueille, utilise, conserve et dévoile des informations recueillies auprès des utilisateurs (ci-après les « Utilisateurs » ou, à titre individuel, un « Utilisateur ») de notre site internet, <a href='https://beimmechel.lu'>https://beimmechel.lu</a> (ci-après le « Site »)."
                },
                {
                    type: "header",
                    text: "Conformité à la législation de protection des données"
                },
                {
                    type: "paragraph",
                    text: "La Société reconnaît et s'engage à respecter les lois et règlements régissant le traitement des données personnelles, y compris, mais sans s'y limiter, le Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 sur la protection des personnes en ce qui concerne le traitement des données personnelles et sur la libre circulation de ces données (« GDPR ») et toute autre loi ou réglementation nationale applicable régissant le traitement des données personnelles."
                },
                {
                    type: "header",
                    text: "Conformité à la législation de protection des données"
                },
                {
                    type: "paragraph",
                    text: "La Société reconnaît et s'engage à respecter les lois et règlements régissant le traitement des données personnelles, y compris, mais sans s'y limiter, le Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 sur la protection des personnes en ce qui concerne le traitement des données personnelles et sur la libre circulation de ces données (« GDPR ») et toute autre loi ou réglementation nationale applicable régissant le traitement des données personnelles."
                },
                {
                    type: "header",
                    text: "Conformité à la législation de protection des données"
                },
                {
                    type: "paragraph",
                    text: "La Société reconnaît et s'engage à respecter les lois et règlements régissant le traitement des données personnelles, y compris, mais sans s'y limiter, le Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 sur la protection des personnes en ce qui concerne le traitement des données personnelles et sur la libre circulation de ces données (« GDPR ») et toute autre loi ou réglementation nationale applicable régissant le traitement des données personnelles."
                },
                {
                    type: "header",
                    text: "Conformité à la législation de protection des données"
                },
                {
                    type: "paragraph",
                    text: "La Société reconnaît et s'engage à respecter les lois et règlements régissant le traitement des données personnelles, y compris, mais sans s'y limiter, le Règlement (UE) 2016/679 du Parlement européen et du Conseil du 27 avril 2016 sur la protection des personnes en ce qui concerne le traitement des données personnelles et sur la libre circulation de ces données (« GDPR ») et toute autre loi ou réglementation nationale applicable régissant le traitement des données personnelles."
                },
            ]
        }
    }
    return (
        <Layout classes={"bg-primary-light"}>
            <div className="max-w-[908px] px-5 mx-auto md:mt-[176px] mt-[76px] md:mb-[100px] mb-[80px]">
                {
                    content.map((item, index_t) => {
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

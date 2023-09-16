import Layout from "@/components/Layout"

export default function PrivacyPolicy() {
    const props = {
        post: {
            title: "Politique de confidentialité",
            content: [
                {
                    type: "paragraph",
                    text: "La présente politique de confidentialité (ci-après la « Politique de confidentialité ») régit la façon dont Beim Méchel, société luxembourgeoise dont le siège est établi à 1, rue Jean Majerus L-7555 Mersch, immatriculée au Registre de Commerce et des Sociétés, Luxembourg, section B sous le numéro 221957 (ci-après, la « Société ») recueille, utilise, conserve et dévoile des informations recueillies auprès des utilisateurs (ci-après les « Utilisateurs » ou, à titre individuel, un « Utilisateur ») de notre site internet, https://beimmechel.lu (ci-après le « Site »)."
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
                    props.post?.title && (
                        <h1 className="md:text-[60px] text-[35px] font-heading leading-[95%] md:mb-[66px] mb-[27px]  md:text-left text-center">{props.post?.title}</h1>
                    )
                }
                {
                    props.post.content.map((item) => {
                        if (item.type === "header" && item.text) {
                            return (
                                <h2 className="font-heading md:text-[30px] text-[25px] mb-[18px] leading-[90%] md:text-left text-center">{item.text}</h2>
                            )
                        }
                        if (item.type === "paragraph" && item.text) {
                            return (
                                <p className="md:mb-[87px] mb-[70px]">{item.text}</p>
                            )
                        }
                    })
                }
            </div>
        </Layout>
    )
}

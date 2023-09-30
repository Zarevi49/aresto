import '../styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3"

function MyApp({ Component, pageProps }) {
    return (
        <GoogleReCaptchaProvider
            reCaptchaKey={process.env.RECAPTCHA_SITE_KEY}
            scriptProps={{
                async: false,
                defer: false,
                appendTo: "head",
                nonce: undefined,
            }}
        >
            <Component {...pageProps} />
        </GoogleReCaptchaProvider>
    )
}

export default appWithTranslation(MyApp)

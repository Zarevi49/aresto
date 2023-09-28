// function ButtonPhone({ text, accent = false }) {
//
//     return (
//         <div className={` bg-blue-500 text-dark py-1 px-2.5 rounded-full text-[13px] font-normal font-lato font-medium leading-[19.5px] tracking-[1.3px] uppercase border-[1.5px] cursor-pointer bg-primary-light hover:bg-ease-in-out duration-300 ${accent ? 'bg-primary-light hover:bg-white' : 'bg-white'}`}>{text}</div>
//     )
// }
//
// export default ButtonPhone
// components/LanguageSwitcher.js
import { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'

export default function LanguageSwitcher() {
    const router = useRouter()

    // Get locales from the router
    const locales = router.locales
    const [open, setOpen] = useState(false)
    const dropdownRef = useRef(null)
    const currentLocaleLabel = locales.find(l => l === router.locale) || 'EN'

    const handleLocaleChange = (locale) => {
        router.push(router.asPath, router.asPath, { locale })
        setOpen(false)
    }

    useEffect(() => {
        const clickListener = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpen(false)
            }
        }

        document.addEventListener('click', clickListener)

        return () => {
            document.removeEventListener('click', clickListener)
        }
    }, [])

    return (
        <div ref={dropdownRef} className="relative">
            <button onClick={() => setOpen(!open)} className={` bg-blue-500 text-dark py-1 px-2.5 rounded-full text-[13px] font-normal font-lato font-medium leading-[19.5px] tracking-[1.3px] uppercase border-[1.5px] cursor-pointer bg-primary-light hover:bg-ease-in-out duration-300 'bg-primary-light hover:bg-white'`}>{currentLocaleLabel}</button>
            {open && (
                <ul className="absolute left-0 right-0 text-center pt-1">
                    {locales
                        .filter((locale) => locale !== router.locale) // Exclude the current language from dropdown
                        .map((locale) => (
                            <li className={"font-normal uppercase text-[13px] cursor-pointer"} key={locale} onClick={() => handleLocaleChange(locale)}>
                                {locale}
                            </li>
                        ))}
                </ul>
            )}
        </div>
    )
}

function LanguageDropdown({ selectedLang, onLanguageChange, languages }) {
    if (!languages || languages.length === 0) {
        return <span className="mx-1">{selectedLang}</span>;
    }

    return (
        <div className="relative mx-1">
            <select
                value={selectedLang}
                onChange={onLanguageChange}
                className="bg-blue-500 text-dark py-1.5 px-2.5 rounded-full text-[13px] font-normal font-lato font-medium leading-[19.5px] tracking-[1.3px] uppercase border-2 cursor-pointer hover:bg-primary-light hover:bg-ease-in-out duration-150 mx-1"
            >
                {languages.map(lang => (
                    <option key={lang.code} value={lang.code}>
                        {lang.name}
                    </option>
                ))}
            </select>
        </div>
    );
}



export default LanguageDropdown;
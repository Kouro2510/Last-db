import React, { useState } from 'react';
import { useTranslation } from 'react-i18next'


// Contains the value and text for the options
const languages = [
    { value: '', text: "Options" },
    { value: 'en', text: "English" },
    { value: 'zh', text: "Hindi" },
    { value: 'th', text: "Bengali" }
]

function App() {

    // It is a hook imported from 'react-i18next'
    const { t } = useTranslation();

    const [lang, setLang] = useState('en');

    const handleChange = e => {
        setLang(e.target.value);
        let loc = "http://localhost:3000/";
        window.location.replace(loc + "?lng=" + e.target.value);
    }

    return (
        <div className="App">
            <h1>{t('welcome')}</h1>
            <label>{t('choose')}</label>

            <select value={lang} onChange={handleChange}>
                {languages.map(item => {
                    return (<option key={item.value}
                                    value={item.value}>{item.text}</option>);
                })}
            </select>
        </div>
    );
}

export default App;
import indonesia from "../assets/lang/id.js"
import english from "../assets/lang/en.js"

const recentLang = localStorage.getItem("lang")

const set = (langJson) => {
    Object.entries(langJson).forEach(([key, value]) => {
        document.getElementById(key).innerHTML = value
    })
}

export const setLanguage = (lang) => {
    if (lang == "id" || recentLang == "id") {
        set(indonesia)
    }
    if (lang == "en" || recentLang == "en") {
        set(english)
    }
}
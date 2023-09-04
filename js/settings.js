import { setLanguage } from "./lang.js"

const speedInput = document.getElementById("input-speed")
const langInput = document.getElementById("input-language")

const setSpeed = (value) => {
	localStorage.setItem("speed", value || 30)
	return localStorage.getItem("speed")
}

const setLang = (value) => {
	localStorage.setItem("lang", value || "en")
	return localStorage.getItem("lang")
}

export const getSettings = () => {
	return ({
		speed: localStorage.getItem("speed") || setSpeed(),
		lang: localStorage.getItem("lang") || setLang()
	})
}

speedInput.value = getSettings().speed
langInput.value = getSettings().lang

speedInput.onchange = (e) => {
	const value = e.target.value
	setSpeed(value)
	console.log(value)
}

langInput.onchange = (e) => {
	const value = e.target.value
	const recentLang = setLang(value)

	setLanguage(recentLang)
	console.log(value)
}

import { showAnimation } from "./animation.js";
import { addCounterValue, getCounterValue } from "./counter.js";
import { setLanguage } from "./lang.js";
import { showModal } from "./modal.js";
import { getSettings } from "./settings.js";
import { bibooNoises } from "./sound.js";


const counterValue = document.getElementById("counter-value")
const countButton = document.getElementById("counter-button")

const settingsButton = document.getElementById("trigger-settings")
const creditsButton = document.getElementById("trigger-credits")

const displayCounter = () => {
	counterValue.innerText = getCounterValue()
}

window.onload = () => {
	displayCounter()
	getSettings()
	setLanguage()
	
	countButton.onclick = () => {
		showAnimation()
		addCounterValue()
		displayCounter()
		bibooNoises()
	}

	settingsButton.onclick = () => showModal("modal-settings")

	creditsButton.onclick = () => showModal("modal-credits")
}

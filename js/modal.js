export const showModal = (modalId) => {
	const modal = document.getElementById(modalId)
	modal.style.display = "block"

	modal.querySelector("#modal-close").onclick = () => {
		modal.style.display = "none"
	}
}


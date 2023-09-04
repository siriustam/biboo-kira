const setCounterValue = () => {
    if (!localStorage.getItem("count")) {
        localStorage.setItem("count", 0)
    }
}

export const getCounterValue = () => {
    setCounterValue()
    return parseInt(localStorage.getItem("count"))
}

export const addCounterValue = () => {
    let count = getCounterValue()
    localStorage.setItem("count", ++count)
}

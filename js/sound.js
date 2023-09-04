const playAudio = (source) => {
    let audio = new Audio()
    audio.src = source
    audio.autoplay = true
}

const noises = ["biboo_kirakira.mp3", "biboo_kiririn.mp3"]

export const bibooNoises = () => {
    const noisesPath = "./../assets/sounds"
    const noisesTitle = noises[Math.floor(Math.random() * noises.length)]
    const noise = `${noisesPath}/${noisesTitle}`

    console.log(noise);

    playAudio(noise)
}



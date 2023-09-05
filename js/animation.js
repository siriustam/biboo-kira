const bibooSprites = [
	"./assets/images/biboo1.gif",
	"./assets/images/biboo2.gif"
]

const createAnimation = (animationDuration, sprite) => {
	const animation = document.createElement("img")
	animation.src = bibooSprites[sprite]
	animation.id = "animation"
	animation.style.animationDuration = `${animationDuration}ms`

	return animation
}

const getRandom = (range) => {
	const min = 0
	const max = range - 1
	return Math.floor(Math.random() * (max - min + 1) + min)
}

export const showAnimation = () => {
	const sprite = getRandom(2)
	const maxDuration = 3000
	const speed = localStorage.getItem("speed")
	const animationDuration = maxDuration / speed * 10
	const animationArea = document.getElementById("kira-animation")
	const animation = createAnimation(animationDuration, sprite)
	
	var randPos = Math.floor(Math.random()*screen.height);	
	var randSize = Math.floor(Math.random()*199)+1;	
	animation.style.top = randPos - 470 + "px"
	animation.style.scale = randSize + "%"
	if(document.getElementById('rotate').checked){
		animation.style.transform = 'rotate('+localStorage.getItem("count")+'deg)'
	}else{

	}

	animationArea.appendChild(animation)

	setTimeout(() => {
		animation.remove()
	}, animationDuration)
}

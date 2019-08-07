const secondsHand = document.querySelector('.sec-hand');
const minutesHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');



function setDate() {
	const now = new Date();
	const seconds = now.getSeconds();
	const minutes = now.getMinutes();
	const hours = now.getHours();
	const secondsDegrees = seconds * 360 / 60 + 90;
	const minutesDegrees = minutes * 360 / 60 + 90;
	const hoursDegrees = hours * 360 / 12 + 90;

	secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
	minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
	hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;

	const watchFace = document.querySelector('.clock');
	if (hours >= 6 && hours < 12) {
		watchFace.style.background = `url("https://cdn.pixabay.com/photo/2017/08/18/18/02/skyline-2655848_1280.jpg")`;
	}
	else if (hours >= 12 && hours < 17) {
		watchFace.style.background = `url("https://cdn.pixabay.com/photo/2017/10/19/14/50/holbeinsteg-2867907_1280.jpg")`;
	}
	else if (hours >= 17 && hours < 20) {
		watchFace.style.background = `url("https://cdn.pixabay.com/photo/2014/09/22/22/20/frankfurt-456930_1280.jpg")`;
	}
	else {
		watchFace.style.background = `url("https://cdn.pixabay.com/photo/2018/08/03/11/52/skyline-3581756_1280.jpg")`;
	}
	watchFace.style['background-size'] = `cover`;
}

setInterval(setDate, 1000);





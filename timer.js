const hourUp = document.querySelector('.h_up_arrow');
const hoursValue = document.querySelector('.hours');
const hourDown = document.querySelector('.h_down_arrow');
const minUp = document.querySelector('.m_up_arrow');
const minDown = document.querySelector('.m_down_arrow');
const minValue = document.querySelector('.min');
const secUp = document.querySelector('.s_up_arrow');
const secDown = document.querySelector('.s_down_arrow');
const secValue = document.querySelector('.secs');
const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
const time = document.querySelector('.time');
const chime = document.getElementById("beep");

let startClicked = false;
let pauseClicked = false;
let resetClicked = true;
let hour = 0;
let min = 0;
let sec = 0;
let timerInterval = 0;
let alarmInterval = 0;

hourUp.addEventListener('click', (event) => {
	hour++;
	hoursValue.innerHTML = hour < 10 ? ('0' + hour + ':') : (hour + ':');
});

hourDown.addEventListener('click', (event) => {
	if(hour > 0){
		hour--;
	}
	hoursValue.innerHTML = hour < 10 ? ('0' + hour + ':') : (hour + ':');
});

minUp.addEventListener('click', (event) => {
	if(min < 59){
		min++;
	}
	minValue.innerHTML = min < 10 ? ('0' + min + ':') : (min + ':');
});

minDown.addEventListener('click', (event) => {
	if(min > 0){
		min--;
	}
	minValue.innerHTML = min < 10 ? ('0' + min + ':') : (min + ':');
});

secUp.addEventListener('click', (event) => {
	if(sec < 59){
		sec++;
	}
	secValue.innerHTML = sec < 10 ? '0' + sec : sec;
});

secDown.addEventListener('click', (event) => {
	if(sec > 0){
		sec--;
	}
	secValue.innerHTML = sec < 10 ? '0' + sec : sec;
})


start.addEventListener('click', (event) => {

	if(resetClicked && !startClicked){
		hourUp.style.display = 'none';
		hourDown.style.display = 'none';
		minUp.style.display = 'none';
		minDown.style.display = 'none';
		secUp.style.display = 'none';
		secDown.style.display = 'none';
	}

	if(!startClicked){
		startClicked = true;
		resetClicked = false;
		pauseClicked = false;
		start.style.color = "#04f700";
		time.style.color = "#04f700";
		pause.style.color = "white";
		countDown();
		timerInterval = setInterval(countDown,  1000);
		console.log("Still executed here")
	}
});

pause.addEventListener('click', (event) =>{
	startClicked = false;
	pauseClicked = true;
	resetClicked = false;
	start.style.color = "white";
	time.style.color = "#f70000";
	pause.style.color = "#f70000";
	chime.pause();
	clearInterval(timerInterval);
	clearInterval(alarmInterval);
	
});

reset.addEventListener('click', (event) => {
	chime.pause();
	clearInterval(timerInterval);
	clearInterval(alarmInterval);
	start.style.color = "white";
	time.style.color = "white";
	pause.style.color = "white";
	startClicked = false;
	pauseClicked = false;
	resetClicked = true;
	hour = 0;
	min = 0;
	sec = 0;
	
	hourUp.style.display = 'block';
	hourDown.style.display = 'block';
	minUp.style.display = 'block';
	minDown.style.display = 'block';
	secUp.style.display = 'block';
	secDown.style.display = 'block';

	hoursValue.innerHTML = 'Hr';
	minValue.innerHTML = 'Min';
	secValue.innerHTML = 'Sec';
});

function countDown(){
	if(startClicked && sec != 0 || min != 0 || hour != 0){
		if(sec >= 0){
			sec--;
		}

		if(sec == -1 && min >= 1){
			sec = 59;
			min--;
		}
		if(sec == -1 & min == 0 && hour >= 1){
			min = 59;
			sec = 59;
			hour--;
		}
	}

	hoursValue.innerHTML = (hour < 10 ? "0" + hour : hour) + ':';
	minValue.innerHTML = (min < 10 ? "0" + min : min) + ':';
	secValue.innerHTML = (sec < 10 ? "0" + sec : sec);

	if(sec == 0 && min == 0 && hour == 0){
		console.log("here")
		clearInterval(timerInterval);
		alarmInterval = setInterval(alarmSound, 1);
	}
}

function alarmSound(){
	chime.play();
}

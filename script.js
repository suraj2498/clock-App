const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
const time = document.querySelector('.time');

// ------------- Clock Controls ------------- //

clockRun();
start.style.display = "none"
pause.style.display = "none"
reset.style.display = "none"

function convertFormat(time){
	return time >= 12 ? "PM" : "AM";
}


function checkTime(time){
	if(time > 12){
		time -= 12;
	}

	if(time === 0){
		time = 12;
	}
	return time;
}

function addZero(time){
	if(time < 10){
		time = "0" + time;
	}
	return time;
}

function clockRun() {
	showTime();
	clockInterval = setInterval(showTime,1000);
}

function showTime(){

	let date = new Date();
	let hours = date.getHours(); // from 0 to 23
	let minutes = date.getMinutes(); // from 0 to 59
	let seconds = date.getSeconds(); // from 0 to 59
	
	let formatHours = convertFormat(hours);
	hours = checkTime(hours);
	
	hours = addZero(hours);
	minutes = addZero(minutes);
	seconds = addZero(seconds);
	 
	time.innerHTML = `${hours}:${minutes}:${seconds} ${formatHours}`; 
	// with the $ we can select variables directly
}
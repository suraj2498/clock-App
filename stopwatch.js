const start = document.querySelector('.start');
const pause = document.querySelector('.pause');
const reset = document.querySelector('.reset');
const time = document.querySelector('.time');
let s_hours = 0;
let s_minutes = 0;
let s_seconds = 0; 
let startClicked = false;

function stopwatchDetails(){
	s_seconds++;

	if(s_seconds == 60){
		s_minutes++;
		s_seconds = 0;
	}
	if(s_minutes == 60){
		s_hours++;
		s_minutes = 0;
	}
	time.innerHTML = (s_hours < 10 ? "0" + s_hours : s_hours) + ":" + (s_minutes < 10 ? "0" + s_minutes : s_minutes) + ":" + (s_seconds < 10 ? "0" + s_seconds : s_seconds) 
	// hours ? action 1 : action 2 tests hours as a boolean if true not null then action, if false or null then action 2
}

function startStopwatch(){
	stopwatchDetails();
	stopwatchInterval = setInterval(stopwatchDetails, 1000); 
}

// -----------------Start, pause, and reset controls --------------//
start.addEventListener('click', (event) => {
	if(!startClicked){
        startStopwatch();
        startClicked = true;
    }

	time.style.color = '#04f700';
	start.style.color = '#04f700';
	pause.style.color = 'white';
	reset.style.color = 'white';
});

pause.addEventListener('click', (event) => {
	
    clearInterval(stopwatchInterval);
    startClicked = false
	
	time.style.color = '#f70000';
	start.style.color = 'white';
	pause.style.color = '#f70000';
	reset.style.color = 'white';
});


reset.addEventListener('click', (event) => {
	
    clearInterval(stopwatchInterval);
    startClicked = false
	time.innerHTML = "00:00:00";
	s_hours = 0;
	s_minutes = 0;
	s_seconds = 0;

	time.style.color = 'white';
	start.style.color = 'white';
	pause.style.color = 'white';
	reset.style.color = 'white';
});
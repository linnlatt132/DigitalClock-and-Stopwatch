function updateClock(){

  const now = new Date();

  //format hours to 12hr formal am pm
  let hours = now.getHours();
  const amPm = hours>=12 ? 'PM': 'AM';

  //Adjust hours for 12 hours
  //convert 0 (minught 12)
  hours = hours%12 || 12;

  //Get the current date and time
  const minutes = String(now.getMinutes()).padStart(2,'0');
  const seconds = String(now.getSeconds()).padStart(2,'0');
  const newH = (hours<10 ? "0": "")+hours;
  //Fromat Time
  const timeString = `${newH}:${minutes}:${seconds}`;
  const amPmString = `${amPm}`;

  //Display time
  document.getElementById('time').textContent = timeString;
  document.getElementById('amPmTime').textContent = amPmString;

  //Format Day
  const options ={
    year : 'numeric',
    month : 'long',
    day : 'numeric'
  };

  const dateString = now.toLocaleDateString(undefined,options);
  document.getElementById('date').textContent = dateString;

  //Fromat weekDay
  let Wday = new Date();

  const dayArray =[
    "Sun","Mon","Tue","Wed","Thur","Fri","Sat"
  ];
  const shortDay = dayArray[Wday.getDay()];
  document.getElementById('weekDay').textContent = shortDay;
}

setInterval(updateClock,1000);
updateClock();


//Stopwatch Start
let timer = 0;
let timerInterval = null;
const DisplayTime = document.getElementById('stopW');
const DisplayText = document.getElementById('text');

//format time
function formatTime(seconds){
  const hrs = String(Math.floor(seconds / 3600)).padStart(2,'0');
  const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2,'0');
  const sec = String(seconds%60).padStart(2,'0');
  return `${hrs}:${mins}:${sec}`;
}

//start time
function startTimer(){
  timerInterval = setInterval(()=>{
    timer ++;
    DisplayTime.textContent = formatTime(timer);
    DisplayText.textContent = "It is counting...";
  },1000);

  //stop time
document.getElementById('stop').addEventListener('click',()=>{
  clearInterval(timerInterval);
  DisplayText.textContent = "It is pausing...";
});
}

//start button
document.getElementById('start').addEventListener('click',startTimer);

//reset time
function resetTime(){
  timer=0;
  DisplayTime.textContent = formatTime(timer);
  DisplayText.textContent = "";
  clearInterval(timerInterval);  
}
document.getElementById('reset').addEventListener('click',resetTime);
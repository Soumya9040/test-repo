let watch=document.getElementById('watch');
let hour=0;
let minute=0;
let second=0;
let stoptime=true;

function startTime(){
  if(stoptime==true){
    stoptime=false;
    timerCycle();
  }
}

function stopTimer(){
  if(stoptime == false){
    stoptime = true;
  }
}
function resetTime(){
  watch.innerHTML = "00:00:00";
  stoptime = true;
  hour=0;
  second=0;
  minute=0;
}

function timerCycle(){
  if(stoptime==false){
    second=parseInt(second);
    minute=parseInt(minute);
    hour=parseInt(hour);

    second=second+1;

    if(second==60){
      minute=minute+1;
      second=0
    }
    if(minute==60){
      hour=hour+1;
      minute=0;
      second=0;
    }
    if(second<10){
      second="0" + second;
    }
    if(minute<10){
      minute= "0" + minute;
    }
    if(hour<10){
      hour= "0" + hour;
    }
    watch.innerHTML= hour + ":" + minute + ":" + second;
    setTimeout('timerCycle()',1000)
  }

}


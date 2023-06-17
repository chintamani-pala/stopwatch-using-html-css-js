let startbtn=document.getElementById("startbtn")
let stopbtn=document.getElementById("stopbtn")
let resetbtn=document.getElementById("resetbtn")
let timer=document.getElementById("timer")
var hour=0
var min=0
var sec=0
var timerid=0;
startbtn.addEventListener('click',()=>{
    startbtn.disabled = true;
    timerid=setInterval(()=>{
        sec= sec+1
        if(sec==100){
            sec=0
            min= min+1
        }
        if(min>59){
            sec=0
            min=0
            hour=hour+1
            
        }
        timer.innerHTML=`${hour<10?'0'+hour:hour}:${(min<10?'0'+min:min)}:${sec}`;
    },10)
})
stopbtn.addEventListener("click",()=>{
    clearInterval(timerid)
    startbtn.disabled = false;
})
resetbtn.addEventListener("click",()=>{
    clearInterval(timerid)
    hour=0;
    min=0
    sec=0
    timer.innerHTML=`${hour<10?'0'+hour:hour}:${(min<10?'0'+min:min)}:${sec<10?'0'+sec:sec}`;
    startbtn.disabled = false;
})
let [hours,minutes,seconds]=[0,0,0];

let displaytime=document.getElementById("displaytime");
let timer=null;


let sWatch=(()=>{
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=60;
            hours++;
        }
    }

   let s=seconds<10?"0"+seconds:seconds;
   let m=minutes<10?"0"+minutes:minutes;
   let h=hours<10?"0"+hours:hours;

    displaytime.innerHTML=h+":"+m+":"+s;


})


let startwatch=(()=>{
    if(timer!==null){
      clearInterval(timer)
    }
    
  timer=  setInterval(sWatch,1000)
})

let start=document.getElementById("start");

start.addEventListener("click",(()=>{
    startwatch()
}))

let watchreset=(()=>{
    clearInterval(timer);
    [hours,minutes,seconds]=[0,0,0];
    displaytime.innerHTML="00:00:00";
})


let watchstop=(()=>{
    clearInterval(timer)
 })
 
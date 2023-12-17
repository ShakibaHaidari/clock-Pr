
let hour=2;
let minute=55;
let second=10;
function updateClock(){
   let now= new Date();
   let remaining=now.getMinutes()+1;
   let second=now.getSeconds()+1;
   
   if(now.getHours()<hour){
    document.getElementById("clock").innerHTML="time remaining:"+ remaining+":"+second;
   }
   else{
    hour=now.getHours();
    minute=now.getMinutes();
    let second=now.getSeconds()+1;
    document.getElementById("clock").innerHTML="current time:" + hour+":"+ minute+":"+second;
   } if(minute==60){
    minute=0;
   } 
 
}
updateClock();
setInterval(updateClock,1000);
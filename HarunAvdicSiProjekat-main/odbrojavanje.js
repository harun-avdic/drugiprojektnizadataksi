const dayEl=document.getElementById("day")
const hourEl= document.getElementById("hours")
const minuteEl= document.getElementById("minute")
const secondEl= document.getElementById("second")

const novaUtamkicaTime= new Date("Feb 15, 2025 20:00:00").getTime()
updateCountdown()
function updateCountdown(){
     const now = new Date().getTime();
     const gap = novaUtamkicaTime - now
     
     const second = 1000;
     const minute= second * 60;
     const hour = minute * 60;
     const day = hour * 24;

     const d = Math.floor(gap/day);
     const h =Math.floor((gap % day)/ hour);
     const m= Math.floor((gap% hour)/minute);
     const s= Math.floor ((gap%minute)/second);
     dayEl.innerText=d;
     hourEl.innerText=h;
     minuteEl.innerText=m;
     secondEl.innerText=s;
     setTimeout(updateCountdown, 1000)
}
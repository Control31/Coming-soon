const countdown = document.querySelector('.countdown');

//Set launch date
const launchDate = new Date('January 1, 2022 13:00:00').getTime();

//Update every second
const intvl = setInterval(() => {
//Get todays date and time (ms)
const now = new Date().getTime();

//Distance from now to launch
const distance = launchDate-now;

//Time calculations
const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

//display result
countdown.innerHTML = `
<div>${days}<span>Days</span></div>  
<div>${hours}<span>Hours</span></div>  
<div>${mins}<span>Minutes</span></div> 
<div>${seconds}<span>Seconds</span></div>  

`;

//If launch date passed
if(distance<0) {
//stop countdown
clearInterval(intvl);
//Style and output text
countdown.style.color = '#14a2b8';
countdown.innerHTML = 'Launched!';
}
}, 1000);
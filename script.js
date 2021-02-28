var countdown;
const day = document.querySelector('.days');
const hour = document.querySelector('.hours');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');

function timer(seconds){
    
    const now = Date.now();
    const then = now + seconds*1000;
    displayTimeLeft(seconds)
    countdown = setInterval(()=>{
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        localStorage.setItem('time', JSON.stringify(secondsLeft));
        if(secondsLeft<0){
            clearInterval(countdown);
            return;
        }
        displayTimeLeft(secondsLeft)
    },1000)
}

function displayTimeLeft(seconds){
    let secondsLeft = seconds;
    const days = Math.floor(seconds/86400);
    secondsLeft = secondsLeft % 86400;

    const hours = Math.floor(secondsLeft/3600);
    secondsLeft = secondsLeft % 3600;

    const minutes = Math.floor(secondsLeft/60);
    secondsLeft = secondsLeft % 60;

    day.innerHTML = `${days<10 ? '0': ''}${days}`;
    hour.innerHTML = `${hours<10 ? '0': ''}${hours}`;
    minute.innerHTML = `${minutes<10 ? '0': ''}${minutes}`;
    second.innerHTML = `${secondsLeft<10 ? '0': ''}${secondsLeft}`;    
}
const time = JSON.parse(localStorage.getItem('time')) || 14*86400

timer(time);
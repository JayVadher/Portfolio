const deg = 6;
const hr = document.querySelector('.analog_clock .clock_hour_hand');
const mn = document.querySelector('.analog_clock .clock_minute_hand');
const sc = document.querySelector('.analog_clock .clock_second_hand');

const hourDigital = document.querySelector(".digital_clock .hour");
const minuteDigital = document.querySelector(".digital_clock .minute");
const secondDigital = document.querySelector(".digital_clock .second");

checkTime = (i) => {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}



setInterval(() => {
    // analog clock 
    let day = new Date();
    let hh = day.getHours();
    let mm = day.getMinutes();
    let ss = day.getSeconds();
    
    // Get correct angle(rotate) for hour hand
    let angle;
    angle = (mm/60) * 30;

    hr.style.transform = `rotateZ(${(hh * 30) + angle}deg)`;
    mn.style.transform = `rotateZ(${mm * 6}deg)`;
    sc.style.transform = `rotateZ(${ss * 6}deg)`;


    // digital clock 

    let m = checkTime(mm);
    let s = checkTime(ss);

    hourDigital.innerHTML = `${hh}`;
    minuteDigital.innerHTML = `${m}`;
    secondDigital.innerHTML = `${s}`;

   
})
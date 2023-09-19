const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");

function setDate() {
  const now = new Date();


    const getSecond = now.getSeconds();
    const getMinute = now.getMinutes();
    const getHour = now.getHours();

    const SecondDegree = (getSecond /60) * 360;
    const MinuteDegree = (getMinute /60) * 360;
    const HourDegree = (getHour /12) * 360;

    second.style.transform = `rotate(${SecondDegree}deg)`;
    minute.style.transform = `rotate(${MinuteDegree}deg)`;
    hour.style.transform = `rotate(${HourDegree}deg)`;
}
setInterval(setDate, 1000)

// const hour = document.querySelector(".hour");
// const minute = document.querySelector(".minute");
// const second = document.querySelector(".second");

// function setDate() {
//   const now = new Date();

//   const getSecond = now.getSeconds();
//   const getMinute = now.getMinutes();
//   const getHour = now.getHours();

//   const secondDegree = (getSecond / 60) * 360;
//   const minuteDegree = (getMinute / 60) * 360;
//   const hourDegree = (getHour / 12) * 360;

//   second.style.transform = `rotate(${secondDegree}deg)`;
//   minute.style.transform = `rotate(${minuteDegree}deg)`;
//   hour.style.transform = `rotate(${hourDegree}deg)`;
// }

// setInterval(setDate, 1000);

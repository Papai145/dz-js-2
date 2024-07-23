"use strict";
const page = {
  menth: document.getElementById("menth"),
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
};

//-----------------------------------------------------------------------------------------------------------------------------------------------
const cerrentYaer = new Date().getFullYear();
const nextYear = new Date(`January 01 ${cerrentYaer + 1} 00:00:00`);

function updateTime() {
  setInterval(() => {
    const currentTime = new Date();

    // const diff = nextYear - currentTime;
    const diff =
      new Date(currentTime.getFullYear(), currentTime.getMonth() + 1, 1) -
      currentTime;

    const menthLeft = 11 - currentTime.getMonth();
    const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutesLeft = Math.floor(diff / 1000 / 60) % 60;
    const secondLeft = Math.floor(diff / 1000) % 60;

    page.menth.innerText = menthLeft;
    page.days.innerText = daysLeft;
    page.hours.innerHTML = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
    page.minutes.innerHTML = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
    page.seconds.innerHTML = secondLeft < 10 ? "0" + secondLeft : secondLeft;
  }, 1000);
}
updateTime();

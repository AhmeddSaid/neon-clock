setInterval(() => {
  let hh = document.getElementById("hh");
  let mm = document.getElementById("mm");
  let ss = document.getElementById("ss");
  let date = new Date();
  let hrs = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let secDot = document.querySelector(".sec-dot");
  let minDot = document.querySelector(".min-dot");
  let hrDot = document.querySelector(".hr-dot");
  let hrHand = document.getElementById("hr-hand");
  let minHand = document.getElementById("min-hand");
  let secHand = document.getElementById("sec-hand");

  hh.style.strokeDashoffset = 510 - (510 * hrs) / 12; // 12-Hrs
  mm.style.strokeDashoffset = 630 - (630 * mins) / 60; // 60-min
  ss.style.strokeDashoffset = 760 - (760 * secs) / 60; // 60-sec

  secDot.style.transform = `rotateZ(${secs * 6}deg)`; // 360 / 60 secs = 6
  minDot.style.transform = `rotateZ(${mins * 6}deg)`; // 360 / 60 mins = 6
  hrDot.style.transform = `rotateZ(${hrs * 30}deg)`; // 360 / 12hrs = 30

  secHand.style.transform = `rotateZ(${secs * 6}deg)`;
  minHand.style.transform = `rotateZ(${mins * 6}deg)`;
  hrHand.style.transform = `rotateZ(${hrs * 30}deg)`;
});

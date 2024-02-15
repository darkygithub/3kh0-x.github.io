// New Time Subsystem for 3kh0-X and Sophos V2. This will replace the old one residing in main.js to enable 12/24 Hour switching. Not implemented on release but will be added later with more code.

/*
const formatSwitchBtn = document.querySelector(".format-switch-btn");

formatSwitchBtn.addEventListener("click", () => {
  formatSwitchBtn.classList.toggle("active");

  var formatValue = formatSwitchBtn.getAttribute("data-format");

  if (formatValue === "12") {
    formatSwitchBtn.setAttribute("data-format", "24");
  }
  else {
    formatSwitchBtn.setAttribute("data-format", "12");
  }
})

function clock(){
  var today = new Date();
  
  var hours = today.getHours();
  var minutes = today.getMinutes();
  let period = "AM";

  if (hours >= 12) {
    period = "PM";
  }

  var formatValue = formatSwitchBtn.getAttribute("data-format");

  if(formatValue === "12") {
    hours = hours > 12 ? hours % 12 : hours;
  }

  if(hours < 10) {
    hours = "0" + hours;
  }

  if(minutes < 10) {
    minutes = "0" + minutes;
  }
  
  document.querySelector(".hours").innerHTML = hours;
  document.querySelector(".minutes").innerHTML = minutes;
  document.querySelector(".period").innerHTML = period;
}

var updateClock = setInterval(clock, 1000);

localStorage.setItem("settings", "nig")
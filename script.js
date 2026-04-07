// THEME AUTO SWITCH
function setTheme() {
  let hour = new Date().getHours();
  if (hour >= 6 && hour < 18) {
    document.body.classList.remove("dark");
  } else {
    document.body.classList.add("dark");
  }
}

setTheme();
setInterval(setTheme, 60000);

function setThemeByTime() {
  const hour = new Date().getHours();

  if (hour >= 6 && hour < 18) {
    document.body.style.background = "#ffffff";
    document.body.style.color = "#000000";
  } else {
    document.body.style.background = "#000000";
    document.body.style.color = "#ffffff";
  }
}
function updateClocks() {
  const now = new Date();

  // Local time
  document.getElementById("localTime").textContent =
    now.toLocaleTimeString();

  // Nepal time
  const nepalTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Kathmandu" })
  );

  document.getElementById("nepalTime").textContent =
    nepalTime.toLocaleTimeString();
}

setInterval(updateClocks, 1000);
updateClocks();

setThemeByTime();
setInterval(setThemeByTime, 60000);
// CLOCKS
function updateClocks() {
  let now = new Date();

  let hh = String(now.getHours()).padStart(2, "0");
  let mm = String(now.getMinutes()).padStart(2, "0");
  let ss = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("localTime").textContent = `${hh}:${mm}:${ss}`;

  let utc = now.getTime() + now.getTimezoneOffset() * 60000;
  let nepal = new Date(utc + (5.75 * 3600000));

  let nh = String(nepal.getHours()).padStart(2, "0");
  let nm = String(nepal.getMinutes()).padStart(2, "0");
  let ns = String(nepal.getSeconds()).padStart(2, "0");

  document.getElementById("nepalTime").textContent = `${nh}:${nm}:${ns}`;
}

updateClocks();
setInterval(updateClocks, 1000);


// CONTACT FORM (mailto fallback)
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  // clear form
  document.getElementById("contactForm").reset();

  // show message
  document.getElementById("formMsg").textContent = 
    "Thank you, Angel will respond shortly <3";
});
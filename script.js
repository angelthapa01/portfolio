
function setTheme() {
  var hour = new Date().getHours();

  if (hour >= 6 && hour < 18) {
    document.body.style.background = "#f5f5f5";
    document.body.style.color = "#111";
  } else {
    document.body.style.background = "#0f1115";
    document.body.style.color = "#e6e6e6";
  }
}

setTheme();
setInterval(setTheme, 60000);



function updateClocks() {
  var now = new Date();

  // Local time
  var hh = String(now.getHours()).padStart(2, "0");
  var mm = String(now.getMinutes()).padStart(2, "0");
  var ss = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("localTime").textContent = `${hh}:${mm}:${ss}`;

  // Nepal time (UTC + 5:45)
  var utc = now.getTime() + now.getTimezoneOffset() * 60000;
  var nepal = new Date(utc + 20700000);

  document.getElementById("nepalTime").textContent =
    nepal.toTimeString().split(" ")[0];
}

updateClocks();
setInterval(updateClocks, 1000);



document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll(".gallery-scroll img");

  images.forEach(img => {
    img.addEventListener("click", () => {

      // Create overlay
      const overlay = document.createElement("div");
      overlay.className = "overlay";

      // Large image
      const bigImg = document.createElement("img");
      bigImg.src = img.src;

      // Description
      const desc = document.createElement("p");
      desc.textContent = img.getAttribute("data-desc") || "";

      // Append elements
      overlay.appendChild(bigImg);
      overlay.appendChild(desc);
      document.body.appendChild(overlay);

      // Close on click
      overlay.addEventListener("click", () => {
        overlay.remove();
      });

    });
  });
});



document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  var name = document.getElementById("cName").value;
  var email = document.getElementById("cEmail").value;
  var msg = document.getElementById("cMsg").value;

  window.location.href =
    `mailto:angelthapa4141@gmail.com?subject=Message from ${name}&body=${msg}`;

  document.getElementById("formMsg").textContent = "Opening email...";
});

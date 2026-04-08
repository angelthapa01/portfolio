// =======================
// CLOCKS (LOCAL + NEPAL)
// =======================
function updateClocks() {
  var now = new Date();

  var hh = String(now.getHours()).padStart(2, "0");
  var mm = String(now.getMinutes()).padStart(2, "0");
  var ss = String(now.getSeconds()).padStart(2, "0");
  document.getElementById("localTime").textContent = hh + ":" + mm + ":" + ss;

  // Nepal time (UTC + 5:45)
  var utc = now.getTime() + now.getTimezoneOffset() * 60000;
  var nepal = new Date(utc + 20700000);
  var nh = String(nepal.getHours()).padStart(2, "0");
  var nm = String(nepal.getMinutes()).padStart(2, "0");
  var ns = String(nepal.getSeconds()).padStart(2, "0");
  document.getElementById("nepalTime").textContent = nh + ":" + nm + ":" + ns;
}
updateClocks();
setInterval(updateClocks, 1000);

// =======================
// COPYRIGHT YEAR
// =======================
document.getElementById("copyright").textContent =
  "© " + new Date().getFullYear() + " Angel Thapa";

// =======================
// GALLERY (CLICK TO EXPAND)
// =======================
document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll(".gallery-scroll img");

  images.forEach(function (img) {
    img.addEventListener("click", function () {
      var overlay = document.createElement("div");
      overlay.className = "overlay";

      var bigImg = document.createElement("img");
      bigImg.src = img.src;
      bigImg.alt = img.alt;

      var desc = document.createElement("p");
      desc.textContent = img.getAttribute("data-desc") || "";

      overlay.appendChild(bigImg);
      overlay.appendChild(desc);
      document.body.appendChild(overlay);

      overlay.addEventListener("click", function () {
        overlay.remove();
      });
    });
  });

  // Esc to close lightbox
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      var open = document.querySelector(".overlay");
      if (open) open.remove();
    }
  });
});

// =======================
// CONTACT FORM (MAILTO)
// =======================
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  var name = document.getElementById("cName").value;
  var msg = document.getElementById("cMsg").value;

  window.location.href =
    "mailto:angelthapa4141@gmail.com?subject=" +
    encodeURIComponent("Message from " + name) +
    "&body=" +
    encodeURIComponent(msg);

  document.getElementById("formMsg").textContent = "Opening email…";
});
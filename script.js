// Find the HTML elements we want to control
const welcomeButton = document.getElementById("welcomeButton");
const themeButton = document.getElementById("themeButton");
const message = document.getElementById("message");

const clock = document.getElementById("clock");
const date = document.getElementById("date");

// Welcome button
welcomeButton.addEventListener("click", function () {
message.textContent = "Welcome to Applethinks! Keep building awesome things. 🚀";
});

// Switch between dark and light themes
themeButton.addEventListener("click", function () {
document.body.classList.toggle("light-mode");

const isLightMode = document.body.classList.contains("light-mode");

themeButton.textContent = isLightMode
    ? "🌙 Dark Theme"
    : "☀️ Change Theme";

});

// Update the clock and date
function updateClock() {
const now = new Date();

clock.textContent = now.toLocaleTimeString();

date.textContent = now.toLocaleDateString(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
});

}

// Run immediately, then refresh every second
updateClock();
setInterval(updateClock, 1000);

// Confirm the script loaded in the browser console
console.log("Applethinks website loaded successfully!");
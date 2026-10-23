// Find website elements
const welcomeButton = document.getElementById("welcomeButton");
const themeButton = document.getElementById("themeButton");
const message = document.getElementById("message");
const clock = document.getElementById("clock");
const date = document.getElementById("date");

// Say Hello button
welcomeButton.addEventListener("click", function () {
message.textContent =
"Welcome to Applethinks! Keep building awesome things! 🚀";
});

// Dark and light theme button
themeButton.addEventListener("click", function () {
document.body.classList.toggle("light-mode");

if (document.body.classList.contains("light-mode")) {
    themeButton.textContent = "🌙 Dark Theme";
} else {
    themeButton.textContent = "☀️ Change Theme";
}

});

// Update clock and date
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

// Start the clock immediately
updateClock();

// Update the clock every second
setInterval(updateClock, 1000);

console.log("Applethinks JavaScript loaded successfully!");
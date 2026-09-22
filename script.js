//your JS code here. If required.
const form = document.getElementById("fontForm");
const fontsize = document.getElementById("fontsize");
const fontcolor = document.getElementById("fontcolor");

// Apply saved preferences when page loads
const savedFontSize = document.cookie
    .split("; ")
    .find(row => row.startsWith("fontsize="))
    ?.split("=")[1];

const savedFontColor = document.cookie
    .split("; ")
    .find(row => row.startsWith("fontcolor="))
    ?.split("=")[1];

if (savedFontSize) {
    fontsize.value = savedFontSize;
    document.documentElement.style.setProperty(
        "--fontsize",
        savedFontSize + "px"
    );
}

if (savedFontColor) {
    fontcolor.value = savedFontColor;
    document.documentElement.style.setProperty(
        "--fontcolor",
        savedFontColor
    );
}

// Save preferences when form is submitted
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const size = fontsize.value;
    const color = fontcolor.value;

    // Store in cookies
    document.cookie = `fontsize=${size}; max-age=31536000; path=/`;
    document.cookie = `fontcolor=${color}; max-age=31536000; path=/`;

    // Apply immediately
    document.documentElement.style.setProperty(
        "--fontsize",
        size + "px"
    );

    document.documentElement.style.setProperty(
        "--fontcolor",
        color
    );
});
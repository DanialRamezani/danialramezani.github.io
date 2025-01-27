document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("light-toggle");
    const body = document.body;

    // Check saved theme preference
    const savedTheme = localStorage.getItem("theme") || "dark";
    body.classList.add(`${savedTheme}-theme`);

    // Set initial icon state
    const moonIcon = themeToggle.querySelector(".fa-moon");
    const sunIcon = themeToggle.querySelector(".fa-sun");
    if (savedTheme === "dark") {
        moonIcon.classList.add("active");
    } else {
        sunIcon.classList.add("active");
    }

    // Toggle theme on button click
    themeToggle.addEventListener("click", () => {
        if (body.classList.contains("dark-theme")) {
            body.classList.replace("dark-theme", "light-theme");
            localStorage.setItem("theme", "light");
            moonIcon.classList.remove("active");
            sunIcon.classList.add("active");
        } else {
            body.classList.replace("light-theme", "dark-theme");
            localStorage.setItem("theme", "dark");
            sunIcon.classList.remove("active");
            moonIcon.classList.add("active");
        }
    });
});

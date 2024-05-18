// main.js
document.addEventListener("DOMContentLoaded", () => {
    const welcomeScreen = document.getElementById("welcomeScreen");
    const mainInterface = document.getElementById("mainInterface");

    // Delay before starting the fade-out effect
    setTimeout(() => {
        welcomeScreen.classList.add("hidden");
        
        // Wait for the transition to complete before hiding the element
        welcomeScreen.addEventListener("transitionend", () => {
            welcomeScreen.classList.add("fade-out");
            mainInterface.style.display = "block";
        });
    }, 2000); // 2-second delay
});

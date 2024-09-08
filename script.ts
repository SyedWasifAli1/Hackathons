document.addEventListener("DOMContentLoaded", () => {
    // Function to toggle the visibility of the Skills section
    function toggleSkillsSection(): void {
        const skillsSection = document.getElementById("skills");
        if (skillsSection) {
            // Toggle visibility by changing the display property
            if (skillsSection.style.display === "none") {
                skillsSection.style.display = "block"; // Make it visible
            } else {
                skillsSection.style.display = "none"; // Hide the section
            }
        }
    }

    // Attach the toggle function to the button click event
    const toggleButton = document.getElementById("toggle-skills");
    if (toggleButton) {
        toggleButton.addEventListener("click", toggleSkillsSection);
    }
});

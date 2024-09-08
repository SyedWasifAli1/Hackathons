var _a;
// Function to toggle the visibility of the Skills section
function toggleSkillsSection() {
    var skillsSection = document.getElementById("skills");
    if (skillsSection) {
        // Toggle visibility by changing the display property
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block"; // Make it visible
        }
        else {
            skillsSection.style.display = "none"; // Hide the section
        }
    }
}
// Attach the toggle function to the button click event
(_a = document.getElementById("toggle-skills")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", toggleSkillsSection);

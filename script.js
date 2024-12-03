document.querySelectorAll('.menu-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = "scale(1.1)";
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = "scale(1)";
    });
});

// Profile form: Save profile with an alert
document.addEventListener('DOMContentLoaded', () => {
    const profileForm = document.querySelector("form");

    if (profileForm) {
        profileForm.addEventListener("submit", function (e) {
            e.preventDefault(); // Prevent page refresh
            alert("Profile saved successfully!");
        });
    }
});
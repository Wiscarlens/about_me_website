// Function to show a pop-up
function showPopup() {
    alert("This is a pop-up!");
}

// Add an event listener to the "Next" button
document.addEventListener("DOMContentLoaded", function() {
    const nextButton = document.getElementById("nextButton");
    if (nextButton) {
        nextButton.addEventListener("click", showPopup);
    }
});

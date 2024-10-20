const dates2023 = ["2nd June", "3rd June", "4th June"];
const dates2024 = ["10th June", "11th June", "12th June"];

// Array of video files instead of images
const videos2023 = ["2.mp4", "3.mp4", "4.mp4"];
const videos2024 = ["10.mp4", "11.mp4", "12.mp4", "memory2024_4.mp4", "memory2024_5.mp4", "memory2024_6.mp4"];

const messages = {
    "2023": {
        "2nd June": "Our first memory together!",
        "3rd June": "The day we went on our first adventure!",
        "4th June": "Just a lovely day spent together."
    },
    "2024": {
        "10th June": "Can't wait for more memories!",
        "11th June": "Remember this special moment!",
        "12th June": "You make every day better!"
    }
};

let currentYear = "2023"; // Default year
let currentIndex = 0;

const dateDisplay = document.getElementById("date-display");
const slideshowVideo = document.getElementById("slideshow-video");
const nextButton = document.getElementById("next-btn");
const messageIcon = document.getElementById("message-icon");
const messagePopup = document.getElementById("message-popup");
const closePopup = document.getElementById("close-popup");
const popupMessage = document.getElementById("popup-message");

// Smooth fade-out and fade-in for content transitions
function fadeOutIn(element, newContent, callback) {
    element.style.opacity = 0;
    setTimeout(() => {
        newContent();  // Update the content
        element.style.opacity = 1;
        if (callback) callback();
    }, 500); // Match the CSS transition duration
}

function updateDisplay() {
    const yearData = currentYear === "2023" ? dates2023 : dates2024;
    const videosData = currentYear === "2023" ? videos2023 : videos2024;

    fadeOutIn(dateDisplay, () => {
        dateDisplay.textContent = yearData[currentIndex];
    });
    fadeOutIn(slideshowVideo, () => {
        slideshowVideo.src = videosData[currentIndex]; // Update video source
        slideshowVideo.play();  // Autoplay the video
    });

    if (currentIndex < yearData.length - 1) {
        fadeOutIn(nextButton, () => {
            nextButton.textContent = yearData[currentIndex + 1];
        });
    } else {
        fadeOutIn(nextButton, () => {
            nextButton.innerHTML = "🏠︎";
            nextButton.onclick = function() {
                window.location.href = '../index.html';
            };
        });
    }
}

function updatePopupMessage() {
    const currentDate = currentYear === "2023" ? dates2023[currentIndex] : dates2024[currentIndex];
    fadeOutIn(popupMessage, () => {
        popupMessage.textContent = messages[currentYear][currentDate];
    });
}

// Show popup when the message icon is clicked
messageIcon.onclick = function() {
    updatePopupMessage();
    messagePopup.style.display = "flex";
};

// Close popup manually
closePopup.onclick = function() {
    messagePopup.style.display = "none";
};

// Event listener for changing dates and videos
nextButton.onclick = function() {
    currentIndex++;
    updateDisplay();
};

// Year button event listeners
document.getElementById("btn-2023").onclick = function() {
    currentYear = "2023";
    currentIndex = 0;
    updateDisplay();
};

document.getElementById("btn-2024").onclick = function() {
    currentYear = "2024";
    currentIndex = 0;
    updateDisplay();
};

// Initial setup
updateDisplay();

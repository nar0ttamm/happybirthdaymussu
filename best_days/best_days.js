const dates2023 = ["2nd June", "3rd June", "4th June"];
const dates2024 = ["10th June", "11th June", "12th June"];

// Array of video files instead of images
const videos2023 = ["2.mp4", "3.mp4", "4.mp4"];
const videos2024 = ["10.mp4", "11.mp4", "12.mp4", "memory2024_4.mp4", "memory2024_5.mp4", "memory2024_6.mp4"];

const messages = {
    "2023": {
        "2nd June": "The day of our dreams, privilege of finally seeing each other, holding, the prayers and thankfullness in the temple, the first kiss in the theatre, the love we shared and explored, making those dreams get real!",
        "3rd June": "Recovering from the overhwelmed happiness of previous day, rejoying each other, clicking memories, eating pizzas, and what not!",
        "4th June": "Met on this sday with the feeling of meeting the next day too, we didn't knew it was the last day as god planned and saved too! Anyways that day, we sahred our deep pain and feelings through tears while being crazy too, mwaaah <3"
    },
    "2024": {
        "10th June": "Wreathed in red and white, we met after all the wait of a year, we prayed, we crazily loved each other, the kisses, the delicious pasta, the hugs, all of it made our energy go high for our love. I luved your georegous body alot baby!",
        "11th June": "You looked so sexy this day, the uttapam and instant sabji were on top my chefgirl, waiting to be fed again with your hands, finally we clicked a lot, we shot reels, I just Love You A Lot!",
        "12th June": "A very important day, the yummy spicy noodles, aaah mouthwatered, we hugged each other more hardly with the sense of being it the last day, we slept in each other's arms, we weeped, we kissed, we motivated each other for another period of sturggle, We did a goodbye and just...!"
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

function playNext() {
    const video1 = document.getElementById('video1');
    video1.src = "2024.mp4"; // Replace with your second video file
    video1.play();
}

let isVideo1Playing = true;

function playNext() {
    const video = document.getElementById('video1');
    const nextBtn = document.querySelector('.next-btn');

    if (isVideo1Playing) {
        // Play the second video
        video.src = "2024.mp4";
        video.play();
        nextBtn.textContent = "Back";  // Change button text to "Back"
        setPopupMessage("I tried to make a short film out of us, our storyline, our love and our struggles. Living in cities, 1400 km apart, yet tied by a thread which ties our hearts, the distance is so big baby, so it gets disturbed by the things inbetween, there should nothing in between us, only us.");  // Update popup message for video 2
    } else {
        // Play the first video again
        video.src = "2023.mp4";
        video.play();
        nextBtn.textContent = "Next";  // Change button text back to "Next"
        setPopupMessage("Our first meet, first time getting to see, touch, feel the love we manifested despite the distance in all odds and dreamed together with one vision, a future when we are finally happy to have each other.");  // Update popup message for video 1
    }
    
    isVideo1Playing = !isVideo1Playing;  // Toggle the flag
}

function togglePopup() {
    const popup = document.getElementById('popup');
    popup.classList.toggle('show');
}

function setPopupMessage(message) {
    const popupContent = document.querySelector('.popup-content p');
    popupContent.textContent = message;
}

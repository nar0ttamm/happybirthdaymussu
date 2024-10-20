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
        setPopupMessage("This is a special message for video 2!");  // Update popup message for video 2
    } else {
        // Play the first video again
        video.src = "2023.mp4";
        video.play();
        nextBtn.textContent = "Next";  // Change button text back to "Next"
        setPopupMessage("This is a special message for video 1!");  // Update popup message for video 1
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

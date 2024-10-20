// Video and Message Arrays
const videos = ['gustas.mp4', 'mockingbird.mp4'];  // Only two videos now
const messages = [
    "Me gustas tu - (I love you). Our fun side is always we find it crazy and enchanting, this is what we lived in span of just 6 days, the fun we'll have living together, the companions of life, its just we wish as soon as possible our dream of living together becomes real.", 
    "We are fun, but sometimes we deal with the opposite of it, pain and sadness, the way we deak it, the way god helps us resolve and do fun together and foresee our future."
];

let currentVideoIndex = 0;
const videoPlayer = document.getElementById('videoPlayer');
const messageIcon = document.getElementById('messageIcon');
const popupMessage = document.getElementById('popupMessage');
const popupText = document.getElementById('popupText');
const nextButton = document.getElementById('nextButton');

// Load Initial Video
function loadVideo(index) {
    videoPlayer.src = videos[index];
}

// Sync Message Popup
function showPopup(index) {
    popupText.innerText = messages[index];
    popupMessage.style.display = 'block';
    document.body.classList.add('blur');
}

function closePopup() {
    popupMessage.style.display = 'none';
    document.body.classList.remove('blur');
}

// Load first video
loadVideo(currentVideoIndex);

// Event Listeners
nextButton.addEventListener('click', () => {
    if (nextButton.innerText === 'Next') {
        currentVideoIndex = 1;
        nextButton.innerText = 'Back';
    } else {
        currentVideoIndex = 0;
        nextButton.innerText = 'Next';
    }
    loadVideo(currentVideoIndex);
});

messageIcon.addEventListener('click', () => {
    showPopup(currentVideoIndex);
});

document.getElementById('closePopup').addEventListener('click', closePopup);

// Home Button Redirect
document.getElementById('homeButton').addEventListener('click', () => {
    window.location.href = '../index.html';
});

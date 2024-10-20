const videos = [
    { src: 'chand2022.mp4', note: 'First video note for year 2022' },
    { src: 'chand2023.mp4', note: 'Second video note for year 2023' },
    { src: 'chand2024.mp4', note: 'This is your video note for year 2024' }
];

let currentVideoIndex = 0;
const videoElement = document.getElementById('chandVideo');
const videoNote = document.getElementById('video-note');
const backBtn = document.getElementById('backBtn');
const nextBtn = document.getElementById('nextBtn');

function updateVideo() {
    videoElement.src = videos[currentVideoIndex].src;
    videoNote.textContent = videos[currentVideoIndex].note;
    videoNote.classList.remove('hidden');
    videoNote.classList.add('visible');
    videoElement.play(); // Autoplay the next video
}

nextBtn.addEventListener('click', () => {
    if (currentVideoIndex < videos.length - 1) {
        currentVideoIndex++;
        videoElement.classList.add('fade-out');
        setTimeout(() => {
            videoElement.classList.remove('fade-out');
            updateVideo();
        }, 2000); // 500ms delay for the transition
    }
});

backBtn.addEventListener('click', () => {
    if (currentVideoIndex > 0) {
        currentVideoIndex--;
        videoElement.classList.add('fade-out');
        setTimeout(() => {
            videoElement.classList.remove('fade-out');
            updateVideo();
        }, 500); // 500ms delay for the transition
    }
});

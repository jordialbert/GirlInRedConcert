document.addEventListener('click', () => {
    init();
});

function init () {
    let song = new Audio('audio/dot.mp3');
    song.play();
    song.muted = false;
}
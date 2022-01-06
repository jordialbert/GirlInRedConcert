window.onload = () => {
    const song = new Audio('audio/dot.mp3');
    const buttons = document.querySelectorAll('[data-destination]');

    document.getElementById('1').scrollIntoView({
        behavior: 'smooth'
    });

    song.volume = 0.0;
    song.currentTime = 3;

    buttons.forEach((element) => {
        element.addEventListener('click', (event) => {
            event.preventDefault();

            let destination = Number(element.getAttribute('data-destination'));
            song.play();

            switch (destination) {
                case 1:
                    song.volume = 0.0;
                    song.pause();
                    song.currentTime = 0;
                    break;

                case 2:
                    song.volume = 0.2;
                    break;

                case 3:
                    song.volume = 0.4;
                    break;

                case 4:
                    song.volume = 0.6;
                    break;

                case 5:
                    song.volume = 0.8;
                    break;
                case 6:
                    song.volume = 1.0;
                    break;
                default:
                    break;
            }

            document.getElementById(`${destination}`).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
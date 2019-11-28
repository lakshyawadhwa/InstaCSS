// $('.video').parent().click(function () {
//     if ($(this).children(".video").get(0).paused) {
//         $(this).children(".video").get(0).play(); $(this).children(".playpause").fadeOut();
//     } else {
//         $(this).children(".video").get(0).pause();
//         $(this).children(".playpause").fadeIn();
//     }
// });

window.onload = function () {
    const player = document.querySelector('.video-div');
    const video = document.querySelector('.video');
    const button = document.querySelector('.playpause');

    video.controls = "false";

    player.addEventListener('click', togglePlay);
    video.addEventListener('play', buttonUpdate);
    video.addEventListener('pause', buttonUpdate);
    window.addEventListener('keydown', spacecheck)

    video.controls = false;
    video.autoplay = false;

    function togglePlay() {
        if (video.paused || video.ended) {
            video.play();
            buttonUpdate();
        }
        else {
            video.pause();
            buttonUpdate();

        }
    }

    function buttonUpdate() {
        if (video.play) {
            button.style.display = "none";
        }
        else {
            button.style.display = "block";
        }
    }

    function spacecheck() {

        var key = event.which || event.keyCode;

        if (key === 32) {
            event.preventDefault();
            togglePlay();
        }
    }
}
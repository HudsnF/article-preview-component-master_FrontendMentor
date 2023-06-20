const shareButton = document.getElementById('btn-share');
const shareContant = document.querySelector('.share');
const shareButtonActive = document.getElementById('btn-shareActive');

function buttonActive() {
    shareButton.addEventListener('click', function () {
        shareContant.classList.toggle('active');
    })

    shareButtonActive.addEventListener('click', function () {
        shareContant.classList.toggle('active');
    })
}
buttonActive();
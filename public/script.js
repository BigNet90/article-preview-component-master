const share = document.querySelector("#share");
const avatar = document.querySelector("#avatar");
const shareMenu = document.querySelector("#shareMenu")
const content = document.querySelector("#content");

// Displays social icons on user click on Medium-larger screens

share.addEventListener('click', () => {

    if (shareMenu.classList.contains('hidden')) {
        shareMenu.classList.remove('hidden');


    } else {
        shareMenu.classList.add('hidden')
    }
})

// Hide the profile on user click on small screens


share.addEventListener('click', () => {
    if (avatar.classList.contains('#avatar')) {
        avatar.classList.remove('#avatar');

    } else {
        avatar.classList.add('hidden')
    }


})

share.addEventListener('click', () => {
    if (content.style.backgroundColor = 'white') {
        content.style.backgroundColor = 'hsl(217, 19%, 35%)';
    } else {
        content.style.backgroundColor = '';
    }

})
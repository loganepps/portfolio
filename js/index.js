const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
// const toggleStory = document.querySelector('#more-toggle');
// const story = document.querySelector('#more-about');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

// toggleStory.addEventListener('click', () => {
//     if (story.style.display !== 'none') {
//         story.style.display = 'none';
//     } else {
//         story.style.display = 'block';
//     }
// })
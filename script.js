// // change navbar styles on scroll

// window.addEventListener('scroll', () => {
//     document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
//     document.querySelector('nav ul').classList.add('nav-color');
// })


// close the nabvar on clicking link //

const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})
// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
    // document.querySelector('nav ul').classList.add('nav-color');
})


// close the nabvar on clicking link //

const navItem = document.querySelectorAll('.nav-item');
const menuToggle = document.getElementById('navbarSupportedContent');
const bsCollapse = new bootstrap.Collapse(menuToggle);
navItem.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() });
});

// const navLinks = document.querySelectorAll('.nav-link');
// navLinks.forEach((a) => {
//     // console.log(a);
//     a.addEventListener('click', () => {
//         this.className += "active";
//         console.log(this);
//     });
// });

// for(var i=0; i < navLinks.length; i++) {
//     navLinks[i].addEventListener('click', function() {
//         var current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace("active");
//         this.className += "active";
//     })
// }
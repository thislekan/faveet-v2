const navBtn = document.getElementById('nav-btn');
const mobileNav = document.querySelector('.nav__inside');
const serviceNavLinks = document.querySelectorAll('._container_tab');
const clientDetails = document.querySelectorAll('.clients__story');

if (window.innerWidth <= 499) {
    mobileNav.style.left = '100%';
}
navBtn.addEventListener('click', () => {
    if (mobileNav.style.left === '100%') {
        mobileNav.style.left = '70%';
    } else {
        mobileNav.style.left = '100%';
    }
});

// clientDetails.forEach(details => {
//     details.style.display = 'none';
//     details.classList.add('inactive');
// });
for (let i = 0; i < clientDetails.length; i++) {
    const element = clientDetails[i];
    element.classList.add('inactive');
    clientDetails[0].classList.remove('inactive');
}

for (let i = 0; i < serviceNavLinks.length; i++) {
    const element = serviceNavLinks[i];
    element.addEventListener('click', () => {
        clientDetails[i].classList.remove('inactive');
        clientDetails[i].classList.add('active');
        // if (clientDetails[i].classList.contains('active')) {
        //     setTimeout(() => {
        //         clientDetails[i].style.display = 'block'
        //     }, 800);
        // } else {
        //     clientDetails[i].style.display = 'none';
        // }
    });
}

function debounce(cb, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) {
                cb.apply(context, args)
            }
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            cb.apply(context, args);
        }
    }
}
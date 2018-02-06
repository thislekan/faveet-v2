const navBtn = document.getElementById('nav-btn');
const mobileNav = document.querySelector('.nav__inside');
const serviceNavLinks = document.querySelectorAll('._container_tab');
const clientDetails = document.querySelectorAll('.clients__story');
const navBar = document.querySelector('.nav-cont');
const foo = document.getElementById('foo');
const clientStory = document.querySelectorAll('.clients__story');


if (window.innerWidth <= 499) {
    mobileNav.style.left = '100%';
    window.addEventListener('scroll', () => {
        if (window.scrollY > window.innerHeight) {
            navBtn.style.color = 'initial';
        } else {
            navBtn.style.color = 'inherit';
        }
    })
}
navBtn.addEventListener('click', () => {
    if (mobileNav.style.left === '100%') {
        mobileNav.style.left = '70%';
        navBtn.style.color = 'inherit';
    } else {
        mobileNav.style.left = '100%';
        navBtn.style.color = 'initial';
    }
});

if (window.innerWidth >= 500) {
    window.addEventListener('scroll', e => {
        if (scrollY >= navBar.offsetTop) {
            navBar.classList.add('fixed-nav');
            if (scrollY <= window.innerHeight) {
                navBar.classList.remove('fixed-nav');
            }
        }
        window.addEventListener('keydown', e => {
            if (navBar.classList.contains('fixed-nav')) {
                if (e.keyCode === 38) {
                    navBar.classList.remove('navbar-animate');
                }
                if (e.keyCode === 40) {
                    navBar.classList.add('navbar-animate');
                }
            }
        });
    });
}
// for (let i = 0; i < serviceNavLinks.length; i++) {
//     const element = serviceNavLinks[i];
//     element.addEventListener('click', e => {
//         if (e) {
//             console.log(e.target);
//         }
//     })
// }

foo.addEventListener('click', () => {
    console.log(clientStory[1]);
    let yuu = clientStory[1];
    for (let i = 0; i < clientStory.length; i++) {
        const element = clientStory[i];
        if (!element.classList.contains('inactive')) {
            element.classList.add('inactive');
        }
    }
    yuu.classList.remove('inactive');
    yuu.classList.add('active');
    setTimeout(() => {
        // alert('yuuup');
        yuu.classList.add('story-animate');
    }, 500);
});

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
//crazy stuff
const navBtn = document.getElementById('nav-btn');
const mobileNav = document.querySelector('.nav__inside');
const navBar = document.querySelector('.nav-cont');
const clientStory = document.querySelectorAll('.clients div.client-details');

//For Service Icons. To be clicked in order to display client's details and project
const digitalIcon = document.getElementById('digital-icon');
const seoIcon = document.getElementById('seo-icon');
const contentIcon = document.getElementById('content-icon');
const webDevIcon = document.getElementById('webDev-icon');
const socialMediaIcon = document.getElementById('socialMedia-icon');

//For Clients Section. To display the details and project
const seo = document.getElementById('seo');
const digital = document.getElementById('digital');
const content = document.getElementById('content');
const sMedia = document.getElementById('social-media');
const webDev = document.getElementById('web-dev');


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

seoIcon.addEventListener('click', () => {
    displayClient(seo);
});
digitalIcon.addEventListener('click', () => {
    displayClient(digital);
});
contentIcon.addEventListener('click', () => {
    displayClient(content);
});
socialMediaIcon.addEventListener('click', () => {
    displayClient(sMedia);
});
webDevIcon.addEventListener('click', () => {
    displayClient(webDev);
});

function displayClient(id) {
    for (let i = 0; i < clientStory.length; i++) {
        const element = clientStory[i];
        if (!element.classList.contains('inactive')) {
            element.classList.add('inactive');
        }
        element.classList.remove('story-animate');
        element.classList.remove('active');
    }
    id.classList.remove('inactive');
    id.classList.add('active');
    setTimeout(() => {
        id.classList.add('story-animate');
    }, 500);
}
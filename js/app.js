`use strict`;

const hamburger = document.querySelector(`.header .nav-bar .nav-list .hamburger`),
      mobile_menu = document.querySelector(`.header .nav-bar .nav-list ul`),
      menu_item = document.querySelectorAll(`.header .nav-bar .nav-list ul li a`),
      header = document.querySelector(`.header.container`),
contactForm = document.querySelector(`.contact-form`);

let ul = document.getElementsByTagName(`ul`)[0],
    name = document.getElementById(`name`),
    email = document.getElementById(`email`),
    subject = document.getElementById(`subject`),
    message = document.getElementById(`message`),
    loadingIcon = document.getElementById(`loading-spinner-gear`),
    success = document.getElementById(`success`),
    error = document.getElementById(`error`),
    EN = document.getElementById(`en`),
DE = document.getElementById(`de`);


if (window.location.href === `https://wedooso.com` && navigator.language === `de` || window.location.href === `https://wedooso.com` && navigator.language == `de-de` || window.location.href === `https://wedooso.com` && navigator.language === `de-ch` || window.location.href === `https://wedooso.com` && navigator.language === `de-at` || window.location.href === `https://wedooso.com` && navigator.language === `de-de` || window.location.href === `https://wedooso.com` && navigator.language === `de-lu` || window.location.href === `https://wedooso.com` && navigator.language === `de-li`) {
    window.location.href = `https://wedooso.com/lang/de/`
}

if (window.location.href === `https://wedooso.com` && navigator.browserLanguage === `de` || window.location.href === `https://wedooso.com/` && navigator.browserLanguage === `de-AT` || window.location.href === `https://wedooso.com` && navigator.browserLanguage === `de-BE` || window.location.href === `https://wedooso.com` && navigator.browserLanguage === `de-CH` || window.location.href === `https://wedooso.com` && navigator.browserLanguage === `de-DE` || window.location.href === `https://wedooso.com` && navigator.browserLanguage === `de-IT` || window.location.href === `https://wedooso.com` && navigator.browserLanguage === `de-LI` || window.location.href === `https://wedooso.com` && navigator.browserLanguage === `de-LU`) {
    window.location.href = `https://wedooso.com/lang/de/`
}
      
hamburger.addEventListener(`click`, () => {
    hamburger.classList.toggle(`active`);
    mobile_menu.classList.toggle(`active`);

    /*stop scrolling*/
    if (document.body.classList.value === `stop-scrolling`) {
        document.body.classList.remove(`stop-scrolling`);
    } else {
        document.body.classList.add(`stop-scrolling`);
    }

    /* scrolling bug */
    document.onclick = (e) => {
        if (e.target.className === `a-nav` && window.outerWidth < 1200) {
            document.body.classList.remove(`stop-scrolling`);
        }
    };
});

if (window.location.href === `https://wedooso.com` || window.location.href === `https://wedooso.com/lang/de/`) {
    header.style.backgroundColor = `transparent`;
} else {
    header.style.backgroundColor = `var(--light)`;
}

document.addEventListener(`scroll`, () => {
    let scroll_position = window.scrollY;
    if (scroll_position > 250 && window.location.href === `https://wedooso.com` || window.location.href === `https://wedooso.com/lang/de/`) {
        header.style.backgroundColor = `var(--light)`;
    } else if (scroll_position < 250 && window.location.href === `https://wedooso.com` || window.location.href === `https://wedooso.com/lang/de/`) {
        header.style.backgroundColor = `transparent`;
    } else {
        header.style.backgroundColor = `var(--light)`;
    }
});

menu_item.forEach((item) => {
    item.addEventListener(`click`, () => {
        hamburger.classList.toggle(`active`);
        mobile_menu.classList.toggle(`active`);
    });
});

if (window.location.href === `https://wedooso.com/lang/de/`) {
    EN.style.color = `white`;
    DE.style.color = `var(--blue)`;
} else if (window.location.href === `https://wedooso.com`) {
    DE.style.color = `white`;
    EN.style.color = `var(--blue)`;
}
EN.addEventListener(`click`, (e) => {
    if (window.location.href === `https://wedooso.com` || window.location.href === `https://wedooso.com/blog/social_media_marketing/`) {
        e.preventDefault();
    } else {
        location.replace(`https://wedooso.com`)
    }
});

DE.addEventListener(`click`, (e) => {
    if (window.location.href === `https://wedooso.com/lang/de/` || window.location.href === `https://wedooso.com/lang/de/blog/social_media_marketing/`) {
        e.preventDefault();
    } else {
        location.replace(`https://wedooso.com/lang/de/`)
    }
});
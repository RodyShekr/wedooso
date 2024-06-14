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
    DE = document.getElementById(`de`),
    hero_words = [`Facebook`, `Instagram`, `Meta`, `Google`, `TikTok`, `Pinterest`],
    contactUsButtonDE = [`Kontaktiere uns jetzt!`, `Fülle das Formular!`, `Angebot sichern!`],
contactUsButtonEN = [`Contact us now!`, `Get in touch now!`, `Reach out to us!`, `Fill out the form!`];

if (window.location.href === `https://wedooso.com/` && navigator.language === `de` || window.location.href === `https://wedooso.com/` && navigator.language == `de-de` || window.location.href === `https://wedooso.com/` && navigator.language === `de-ch` || window.location.href === `https://wedooso.com/` && navigator.language === `de-at` || window.location.href === `https://wedooso.com/` && navigator.language === `de-de` || window.location.href === `https://wedooso.com/` && navigator.language === `de-lu` || window.location.href === `https://wedooso.com/` && navigator.language === `de-li`) {
    window.location.href = `https://wedooso.com/de/`
}

if (window.location.href === `https://wedooso.com/` && navigator.browserLanguage === `de` || window.location.href === `https://wedooso.com/` && navigator.browserLanguage === `de-AT` || window.location.href === `https://wedooso.com/` && navigator.browserLanguage === `de-BE` || window.location.href === `https://wedooso.com/` && navigator.browserLanguage === `de-CH` || window.location.href === `https://wedooso.com/` && navigator.browserLanguage === `de-DE` || window.location.href === `https://wedooso.com/` && navigator.browserLanguage === `de-IT` || window.location.href === `https://wedooso.com/` && navigator.browserLanguage === `de-LI` || window.location.href === `https://wedooso.com/` && navigator.browserLanguage === `de-LU`) {
    window.location.href = `https://wedooso.com/de/`
}

/*change hero words*/
textSequence(0);

function textSequence(i) {

    if (hero_words.length > i) {
        setTimeout(function() {
            document.getElementById("hero-sequence").innerHTML = hero_words[i];
            textSequence(++i);
        }, 1500); // 1 second (in milliseconds)

    } else if (hero_words.length == i) { // Loop
        textSequence(0);
    }

}

/*change contact us button DE*/
textSequenceButtonDE(0);

function textSequenceButtonDE(i) {

    if (contactUsButtonDE.length > i) {
        setTimeout(function() {
            document.getElementById(`button-sequence-de`).innerHTML = contactUsButtonDE[i];
            textSequenceButtonDE(++i);
        }, 2000); // 1 second (in milliseconds)

    } else if (contactUsButtonDE.length == i) { // Loop
        textSequenceButtonDE(0);
    }

}

/*change contact us button EN*/
textSequenceButtonEN(0);

function textSequenceButtonEN(i) {

    if (contactUsButtonEN.length > i) {
        setTimeout(function() {
            document.getElementById(`button-sequence-en`).innerHTML = contactUsButtonEN[i];
            textSequenceButtonEN(++i);
        }, 2000); // 1 second (in milliseconds)

    } else if (contactUsButtonEN.length == i) { // Loop
        textSequenceButtonEN(0);
    }

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

if (window.location.href === `https://wedooso.com/` || window.location.href === `https://wedooso.com/de/`) {
    header.style.backgroundColor = `transparent`;
} else {
    header.style.backgroundColor = `var(--blue)`;
}

document.addEventListener(`scroll`, () => {
    let scroll_position = window.scrollY;
    if (scroll_position > 250 && window.location.href === `https://wedooso.com/` || scroll_position > 250 && window.location.href === `https://wedooso.com/#hero` || scroll_position > 250 && window.location.href === `https://wedooso.com/#content` || scroll_position > 250 && window.location.href === `https://wedooso.com/#ads` || scroll_position > 250 && window.location.href === `https://wedooso.com/#seo` || scroll_position > 250 && window.location.href === `https://wedooso.com/#services` || scroll_position > 250 && window.location.href === `https://wedooso.com/#case-study` || scroll_position > 250 && window.location.href === `https://wedooso.com/#about`|| scroll_position > 250 && window.location.href === `https://wedooso.com/#contact` || scroll_position > 250 && window.location.href === `https://wedooso.com/#wedooso-contact-form-en`) {
        header.style.backgroundColor = `var(--blue)`;
        document.getElementById(`fixed-button-en`).style.bottom = `150px`;
    } else if (scroll_position < 250 && window.location.href === `https://wedooso.com/` || scroll_position < 250 && window.location.href === `https://wedooso.com/#hero` || scroll_position < 250 && window.location.href === `https://wedooso.com/#content` || scroll_position < 250 && window.location.href === `https://wedooso.com/#ads` || scroll_position < 250 && window.location.href === `https://wedooso.com/#seo` || scroll_position < 250 && window.location.href === `https://wedooso.com/#services` || scroll_position < 250 && window.location.href === `https://wedooso.com/#case-study` || scroll_position < 250 && window.location.href === `https://wedooso.com/#about`|| scroll_position < 250 && window.location.href === `https://wedooso.com/#contact` || scroll_position < 250 && window.location.href === `https://wedooso.com/#wedooso-contact-form-en`) {
        header.style.backgroundColor = `transparent`;
        document.getElementById(`fixed-button-en`).style.bottom = `450px`;
    } else if (scroll_position > 250 && window.location.href === `https://wedooso.com/de/` || scroll_position > 250 && window.location.href === `https://wedooso.com/de/#hero` || scroll_position > 250 && window.location.href === `https://wedooso.com/de/#content` || scroll_position > 250 && window.location.href === `https://wedooso.com/de/#ads` || scroll_position > 250 && window.location.href === `https://wedooso.com/de/#seo` || scroll_position > 250 && window.location.href === `https://wedooso.com/de/#services` || scroll_position > 250 && window.location.href === `https://wedooso.com/de/#case-study` || scroll_position > 250 && window.location.href === `https://wedooso.com/de/#about`|| scroll_position > 250 && window.location.href === `https://wedooso.com/de/#contact` || scroll_position > 250 && window.location.href === `https://wedooso.com/de/#wedooso-contact-form-de`) {
        header.style.backgroundColor = `var(--blue)`;
        document.getElementById(`fixed-button-de`).style.bottom = `150px`;
    } else if (scroll_position < 250 && window.location.href === `https://wedooso.com/de/` || scroll_position < 250 && window.location.href === `https://wedooso.com/de/#hero` || scroll_position < 250 && window.location.href === `https://wedooso.com/de/#content` || scroll_position < 250 && window.location.href === `https://wedooso.com/de/#ads` || scroll_position < 250 && window.location.href === `https://wedooso.com/de/#seo` || scroll_position < 250 && window.location.href === `https://wedooso.com/de/#services` || scroll_position < 250 && window.location.href === `https://wedooso.com/de/#case-study` || scroll_position < 250 && window.location.href === `https://wedooso.com/de/#about`|| scroll_position < 250 && window.location.href === `https://wedooso.com/de/#contact` || scroll_position < 250 && window.location.href === `https://wedooso.com/de/#wedooso-contact-form-de`) {
        header.style.backgroundColor = `transparent`;
        document.getElementById(`fixed-button-de`).style.bottom = `450px`;
    } else {
        header.style.backgroundColor = `var(--blue)`;
    }
});

menu_item.forEach((item) => {
    item.addEventListener(`click`, () => {
        hamburger.classList.toggle(`active`);
        mobile_menu.classList.toggle(`active`);
    });
});

if (window.location.href === `https://wedooso.com/de/`) {
    EN.style.color = `white`;
    DE.style.color = `var(--light)`;
} else if (window.location.href === `https://wedooso.com/`) {
    DE.style.color = `white`;
    EN.style.color = `var(--light)`;
}
EN.addEventListener(`click`, (e) => {
    if (window.location.href === `https://wedooso.com/` || window.location.href === `https://wedooso.com/blog/social_media_marketing/`) {
        e.preventDefault();
    } else {
        location.replace(`https://wedooso.com/`)
    }
});

DE.addEventListener(`click`, (e) => {
    if (window.location.href === `https://wedooso.com/de/` || window.location.href === `https://wedooso.com/de/blog/social_media_marketing/`) {
        e.preventDefault();
    } else {
        location.replace(`https://wedooso.com/de/`)
    }
});

const form = document.getElementById("form");
const result = document.getElementById("result");

form.addEventListener("submit", function(e) {
    const formData = new FormData(form);
    e.preventDefault();
    var object = {};
    formData.forEach((value, key) => {
        object[key] = value;
    });
    var json = JSON.stringify(object);
    result.innerHTML = "Please wait...";

    fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        })
        .then(async(response) => {
            let json = await response.json();
            if (response.status == 200) {
                result.innerHTML = json.message;
                result.classList.remove("text-gray-500");
                result.classList.add("text-green-500");
                gtag_report_conversion();
            } else {
                console.log(response);
                result.innerHTML = json.message;
                result.classList.remove("text-gray-500");
                result.classList.add("text-red-500");
            }
        })
        .catch((error) => {
            console.log(error);
            result.innerHTML = "Something went wrong!";
        })
        .then(function() {
            form.reset();
            setTimeout(() => {
                result.style.display = "none";
            }, 5000);
        });
});
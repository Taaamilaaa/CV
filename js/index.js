import { data } from './data.js';

const content = document.querySelectorAll('.lang');
const button = document.querySelector('.lang-btn');

document.addEventListener('DOMContentLoaded', getLocalLang);

button.addEventListener('click', onLangBtnClick);

function getLocalLang() {
    if (localStorage.getItem('lang') === null) {
        localStorage.setItem('lang', 'en');
        button.innerText = 'en';

        return;
    } else if (localStorage.getItem('lang') === 'uk') {
        button.innerText = 'uk';
        content.forEach(el => {
            data.forEach(dataEl => {
                if (el.innerText.trim() === dataEl.en.trim()) {
                    el.innerText = dataEl.uk;
                }
            });
        });

        return;
    } else if (localStorage.getItem('lang') === 'ru') {
        button.innerText = 'ru';
        content.forEach(el => {
            data.forEach(dataEl => {
                if (
                    el.textContent.trim() === dataEl.uk.trim() ||
                    el.textContent.trim() === dataEl.en.trim() ||
                    el.textContent.trim() === dataEl.en.trim()
                ) {
                    el.innerHTML = dataEl.ru;
                }
            });
        });
        return;
    } else if (localStorage.getItem('lang') === 'en') {
        button.innerText = 'en';
        content.forEach(el => {
            data.forEach(dataEl => {
                if (el.textContent.trim() === dataEl.ru.trim()) {
                    el.innerHTML = dataEl.en;
                }
            });
        });
        return;
    }
}

function onLangBtnClick() {
    let lang = localStorage.getItem('lang');

    langChange(lang);
}

const langChange = lang => {
    if (lang == 'en') {
        localStorage.setItem('lang', 'uk');
        button.textContent = 'uk';
        content.forEach(el => {
            data.forEach(dataEl => {
                if (el.innerText.trim() === dataEl.en.trim()) {
                    el.innerText = dataEl.uk;
                }
            });
        });
    } else if (lang == 'uk') {
        localStorage.setItem('lang', 'ru');
        button.textContent = 'ru';
        content.forEach(el => {
            data.forEach(dataEl => {
                if (el.textContent.trim() === dataEl.uk.trim()) {
                    el.innerHTML = dataEl.ru;
                }
            });
        });
    } else if (lang == 'ru') {
        localStorage.setItem('lang', 'en');
        button.textContent = 'en';
        content.forEach(el => {
            data.forEach(dataEl => {
                if (el.textContent.trim() === dataEl.ru.trim()) {
                    el.innerHTML = dataEl.en;
                }
            });
        });
    }
};

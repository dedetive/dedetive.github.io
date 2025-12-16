const urlParams = new URLSearchParams(window.location.search);
const language = urlParams.get('language');
const tag = urlParams.get('tag');

normalizeLanguageAndFilter(language);
filterByTag(tag);

function normalizeLanguageAndFilter(param) {
    if (param == null) return;

    switch (param.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")) {
        case 'english':
        case 'en':
            filterByLanguage('English');
            break;
        case 'portugues':
        case 'pt':
        case 'br':
            filterByLanguage('Português');
            break;
        default:
            filterByLanguage(param.charAt(0).toUpperCase() + param.substring(1));
            break;
    }
}

function filterByLanguage(language) {
    const element = document.getElementById('post-list');
    for (const child of element.children) {
        if (child.lang !== language) child.style.display = 'none';
    }
}

function filterByTag(tag) {
    if (tag == null) return;

    const element = document.getElementById('post-list');
    for (const child of element.children) {
        if (!child.getAttribute('tags').includes(tag)) child.style.display = 'none';
    }
}
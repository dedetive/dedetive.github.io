const urlParams = new URLSearchParams(window.location.search);
const language = urlParams.get('language');
const lang = urlParams.get('lang');
const tag = urlParams.get('tag');

normalizeLanguageAndFilter(language, lang);
filterByTag(tag);

function normalizeLanguageAndFilter(param, alternativeParam) {
    if (param == null && alternativeParam != null) param = alternativeParam;
    else if (param == null) return;

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
        if (!child.getAttribute('tags').toLowerCase().includes(tag.toLowerCase())) child.style.display = 'none';
    }
}
---
---
const codeBlocks = document.querySelectorAll('code');
codeBlocks.forEach(codeBlock => {
    let copyCodeButton = document.createElement("div");
    copyCodeButton.innerHTML =`{% include code-header.html %}`
    copyCodeButton.classList.add('code-header');
    let auxElement = codeBlock;
    // find higher code thingy if its nested
    while (!(auxElement.classList.contains('highlighter-rouge'))) auxElement = auxElement.parentElement;
    // before any possible pure text
    while (auxElement.previousSibling && auxElement.previousSibling.nodeType === 3) auxElement = auxElement.previousSibling;
    auxElement.before(copyCodeButton);
})
const copyCodeButtons = document.querySelectorAll('.copy-code-button');

copyCodeButtons.forEach((copyCodeButton, index) => {
    const code = codeBlocks[index].innerText;

    copyCodeButton.addEventListener('click', () => {
        window.navigator.clipboard.writeText(code);
        const { innerText: originalText } = copyCodeButton;
        copyCodeButton.innerText = 'COPIED!';
        copyCodeButton.classList.add('copied');
        setTimeout(() => {
            copyCodeButton.innerText = originalText;
            copyCodeButton.classList.remove('copied');
        }, 2000);
    });
});
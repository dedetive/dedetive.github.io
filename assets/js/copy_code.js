---
---
const codeBlocks = document.querySelectorAll('code');
codeBlocks.forEach(codeBlock => {
    let copyCodeButton = document.createElement("div");
    copyCodeButton.innerHTML =`{% include code-header.html %}`
    copyCodeButton.classList.add('code-header');
    codeBlock.after(copyCodeButton);
})
const copyCodeButtons = document.querySelectorAll('.copy-code-button');

copyCodeButtons.forEach((copyCodeButton, index) => {
    const code = codeBlocks[index].innerText;

    copyCodeButton.addEventListener('click', () => {
        window.navigator.clipboard.writeText(code);
        const { innerText: originalText } = copyCodeButton;
        copyCodeButton.innerText = 'Copied!';
        copyCodeButton.classList.add('copied');
        setTimeout(() => {
            copyCodeButton.innerText = originalText;
            copyCodeButton.classList.remove('copied');
        }, 2000);
    });
});
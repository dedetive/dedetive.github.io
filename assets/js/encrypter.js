const postContent = document.getElementById('post-content').innerHTML;

function encryptPost() {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    const secretKey = params.get('key');

    if (secretKey) {
        const encryptedContent = CryptoJS.AES.encrypt(postContent, secretKey).toString();
        document.getElementById('post-content').innerHTML = encryptedContent;
        console.log(encryptedContent);
    }
}

window.addEventListener('hashchange', encryptPost);

encryptPost();
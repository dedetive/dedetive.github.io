const postContent = document.getElementById('post-content').innerHTML;
document.getElementById('post-content').innerHTML = "";
let sanitizedPostContent = postContent.trim();
sanitizedPostContent = sanitizedPostContent.replace("<p>", "")
sanitizedPostContent = sanitizedPostContent.replace("</p>", "")

const urlParams = new URLSearchParams(window.location.search);
const secretKey = urlParams.get('key');

if (!secretKey) {
    document.getElementById('post-content').innerHTML = "This post is encrypted!<br><br>Try asking dedetive if you think this is for you. She might give you the key.";
} else {
    try {
        const decrypted = CryptoJS.AES.decrypt(sanitizedPostContent, secretKey).toString(CryptoJS.enc.Utf8);
        if (decrypted) {
            document.getElementById('post-content').innerHTML = decrypted;
        } else {
            document.getElementById('post-content').innerHTML = "Wrong key, sorry!";
        }
    } catch (e) {
        document.getElementById('post-content').innerHTML = "Wrong key, sorry!";
    }
}
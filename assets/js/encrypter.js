if (secretKey) {
    console.log(CryptoJS.AES.encrypt(postContent, secretKey).toString())
}
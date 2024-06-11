document.getElementById('generate').addEventListener('click', generatePassword);

password = document.getElementById('password')

function generatePassword() {
    const length = document.getElementById('length').value;

    const includeLowerCase = document.getElementById('include-lowercase').checked;
    const includeUpperCase = document.getElementById('include-uppercase').checked;
    const includeNumber = document.getElementById('include-numbers').checked;
    const includeSymbol = document.getElementById('include-symbols').checked;

    const charsetLib = [
        "abcdefghijklmnopqrstuvwxyz", // lowercase
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ", // uppercase
        "0123456789", // numbers
        "!@#$%^&*()_+~`|}{[]:;?><,./-=", // specials
    ]
    let charset = "";
    if (includeLowerCase) charset += charsetLib[0];
    if (includeUpperCase) charset += charsetLib[1];
    if (includeNumber) charset += charsetLib[2];
    if (includeSymbol) charset += charsetLib[3];

    if (charset === "") {
    password.innerText = "Choose at least one type of char.";
    return
    }

    let generatedPassword = "";

    for (let i = 0; i < length; i++) {
        const getRandomCharIndex = Math.floor(Math.random() * charset.length);
        generatedPassword += charset[getRandomCharIndex];
    }

    password.textContent = generatedPassword;
}

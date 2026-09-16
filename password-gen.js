const passwordLength = document.getElementById("pass-length");
const includeLowercase = document.getElementById("lowercase");
const includeUppercase = document.getElementById("uppercase");
const includeSymbols = document.getElementById("symbols");
const includeNumbers = document.getElementById("numbers");
const generateBtn = document.getElementById("password-gen-btn");
const resultSpan = document.getElementById("pass-result-span");

function generatePassword(passLength, includeLowercase, includeUppercase, includeNumbers, includeSymbols) {
   
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "123456789";
    const symbols = "!@#$%^&*~\/_+";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeNumbers ? numbers : "";
    allowedChars += includeSymbols ? symbols : "";
    allowedChars += includeUppercase ? uppercaseChars : "";

    if(passLength <= 0) {
        return "(Password Length Must Be Atleast 1!)";
    }
    if(allowedChars.length === 0) {
        return "Select at least 1 option!";
    }
    for(let i = 0; i < passLength; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length)
        password += allowedChars[randomIndex]
    }

    return password;
}

generateBtn.addEventListener("click", function() {
    
    const length = parseInt(passwordLength.value) || 0;
    const hasLowercase = includeLowercase.checked;
    const hasUppercase = includeUppercase.checked;
    const hasNumbers = includeNumbers.checked;
    const hasSymbols = includeSymbols.checked;

    const generatedPassword = generatePassword(length, hasLowercase, hasUppercase, hasNumbers, hasSymbols);

    resultSpan.textContent = generatedPassword;
});
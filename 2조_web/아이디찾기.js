document.getElementById("findIdForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var name = document.getElementById("name").value;
    var countryCode = document.getElementById("sendCode").value;
    var phoneNumber = document.getElementById("phoneNumber").value;

    // Implement sending verification code here
    var verificationCode = generateVerificationCode(); // For demonstration, generating a random code
    console.log("Verification Code:", verificationCode);

    // Display verification code input section
    document.getElementById("verificationCodeSection").style.display = "flex";
    document.getElementById("message").textContent = ""; // Clear previous message
});

document
    .getElementById("confirmCodeBtn")
    .addEventListener("click", function () {
        var verificationCode =
            document.getElementById("verificationCode").value;

        // Implement code confirmation here
        if (verificationCodeIsValid(verificationCode)) {
            var username = "admin"; // 사용자의 아이디
            document.getElementById("confirmCodeBtn").innerText = "인증 완료";
            document.getElementById("message").textContent =
                "사용자의 아이디를 표시합니다.";
            document.getElementById("userId").textContent = username;
            // Here you would display the user's ID
        } else {
            document.getElementById("message").textContent =
                "인증 실패! 올바른 인증번호를 입력해주세요.";
        }
    });

// Function to generate a random 6-digit verification code
function generateVerificationCode() {
    return Math.floor(100000 + Math.random() * 900000);
}

// Function to validate the verification code
function verificationCodeIsValid(code) {
    // For demonstration, the validation logic can be simplified
    return code === "123456"; // Replace "123456" with the actual verification code sent
}

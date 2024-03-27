function sendVerificationCode() {
    console.log("인증번호를 발송합니다.");
}

document.querySelector(".login-form").addEventListener("submit", function (e) {
    e.preventDefault();
    var username = document.getElementById("login-username").value;
    var password = document.getElementById("login-password").value;
    var loginSuccess = false;
    // 임시적으로 아이디와 비밀번호가 'admin'일 때만 로그인 성공으로 처리
    if (username === "admin" && password === "admin") {
        document.getElementById("login-error-message").innerText = "";
        loginSuccess = true;

        if (loginSuccess === true) {
            // 로그인 성공 시 여기에 처리할 내용 추가
            alert("로그인 성공!");
        }
    } else {
        // 로그인 실패 시 에러 메시지 표시
        document.getElementById("login-error-message").innerText =
            "아이디 또는 비밀번호가 올바르지 않습니다.";
        loginSuccess = false;
    }
});

// 아이디 찾기 버튼 클릭 시
document
    .getElementById("forgot-username")
    .addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "아이디찾기.html"; // 아이디 찾기 페이지로 이동
    });

// 비밀번호 찾기 버튼 클릭 시
document
    .getElementById("forgot-password")
    .addEventListener("click", function (e) {
        e.preventDefault();
        window.location.href = "비밀번호찾기.html"; // 비밀번호 찾기 페이지로 이동
    });

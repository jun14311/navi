let verificationCode;

// 인증번호 생성
function sendVerificationCode() {
  let phoneValue = document.querySelector("#signup-phone").value;
  console.log(phoneValue);
  if (/^\d{10,11}$/.test(phoneValue)) {
    // 6자리 난수 코드 생성
    verificationCode = Math.floor(100000 + Math.random() * 900000);
    alert("인증번호를 발송합니다: " + verificationCode);
    // 이후에 생성된 난수 코드를 사용하여 인증번호를 발송하는 로직을 추가할 수 있습니다.
    console.log(verificationCode);
  } else {
    alert("전화번호를 올바르게 입력하세요.");
    console.log(verificationCode);
  }
}

// 라디오 버튼 확인 함수
function isAnyRadioChecked(radios) {
  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      return true;
    }
  }
  return false;
}

const onCancel = () => {
  // 입력된 값 초기화

  document.querySelector("#password").value = "";
  document.querySelector("#passwordCheck").value = "";

  // 에러 메시지 숨기기
  document.querySelectorAll(".error-message").forEach((errMsg) => {
    errMsg.style.display = "none";
  });
};

const onRegister = () => {
  let username = document.querySelector("#signup-username");
  let passwordInput = document.querySelector("#password");
  let passwordCheckInput = document.querySelector("#passwordCheck");
  let birthdate = document.querySelector("#signup-birthdate");
  let genderRadios = document.querySelectorAll('input[name = "gender"]');
  let nationRadios = document.querySelectorAll('input[name = "nationality"]');
  let phone = document.querySelector("#signup-phone");
  let code = document.querySelector("#verification-code");
  let telcompany = document.querySelector("select");
  // check에는 true가 들어있다
  let check = true;

  var passwordPattern =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  // 정말로 value번째 방에있는 값들이 잘 들어왔는지 콘솔창으로 확인하가
  // console.log(passwordInput.value);
  // console.log(passwordCheckInput.value);

  // 아이디 입력 여부
  let usernameErrMsg = document.querySelector("#signup-username-err-msg");
  if (username.value === "") {
    usernameErrMsg.textContent = "아이디를 입력해주세요.";
    usernameErrMsg.style.display = "block";
    check = false;
  } else {
    usernameErrMsg.style.display = "none";
  }

  // 비밀번호 입력 여부
  let passwordErrMsg = document.querySelector("#password-err-msg");
  // 비밀번호 확인 입력 여부
  let passwordCheckErrMsg = document.querySelector("#passwordCheck-err-msg");
  // 비밀번호 입력 여부 및 패턴 확인
  if (passwordInput.value === "") {
    passwordErrMsg.textContent =
      "비밀번호 (특수문자, 대소문자 포함 8글자)를 입력해주세요.";
    passwordErrMsg.style.display = "block";
    check = false;
  } else if (!passwordPattern.test(passwordInput.value)) {
    passwordErrMsg.textContent =
      "비밀번호는 8글자 이상이어야 하고, 특수문자와 대소문자를 포함해야 합니다.";
    passwordErrMsg.style.display = "block";
    check = false;
  } else {
    passwordErrMsg.style.display = "none";
  }

  // 비밀번호 확인 입력 여부 및 일치 확인
  if (passwordCheckInput.value === "") {
    passwordCheckErrMsg.textContent = "비밀번호 확인을 입력해주세요.";
    passwordCheckErrMsg.style.display = "block";
    check = false;
  } else if (passwordInput.value !== passwordCheckInput.value) {
    passwordCheckErrMsg.textContent =
      "비밀번호와 비밀번호 확인 값이 일치하지 않습니다.";
    passwordCheckErrMsg.style.display = "block";
    check = false;
  } else {
    passwordCheckErrMsg.style.display = "none";
  }

  // 생년월일 입력 여부
  let birthdateErrMsg = document.querySelector("#signup-birthdate-err-msg");
  if (birthdate.value === "" || !/^\d{8}$/.test(birthdate.value)) {
    birthdateErrMsg.textContent = "생년월일 8자리를 입력해주세요.";
    birthdateErrMsg.style.display = "block";
    check = false;
  } else {
    birthdateErrMsg.style.display = "none";
  }

  // 성별 선택 여부
  let genderErrMsg = document.querySelector("#gender-err-msg");
  if (!isAnyRadioChecked(genderRadios)) {
    genderErrMsg.style.display = "block";
    check = false;
  } else {
    genderErrMsg.style.display = "none";
  }

  // 국가 선택 여부
  let nationErrMsg = document.querySelector("#nation-err-msg");
  if (!isAnyRadioChecked(nationRadios)) {
    nationErrMsg.style.display = "block";
    check = false;
  } else {
    nationErrMsg.style.display = "none";
  }

  // 전화번호 입력 여부
  let phoneErrMsg = document.querySelector("#signup-phone-err-msg");
  if (phone.value === "" || !/^\d{10,11}$/.test(phone.value)) {
    phoneErrMsg.textContent =
      "전화번호를 10자리 또는 11자리의 숫자로 입력해주세요.";
    phoneErrMsg.style.display = "block";
    check = false;
  } else {
    phoneErrMsg.style.display = "none";
  }

  // 인증번호 입력 여부
  let codeErrMsg = document.querySelector("#verification-code-err-msg");
  if (code.value === "" || Number(code.value) !== verificationCode) {
    codeErrMsg.textContent = "인증번호를 확인해주세요.";
    codeErrMsg.style.display = "block";
    check = false;
  } else {
    codeErrMsg.style.display = "none";
  }

  // 통신사 선택 여부
  let telcompanyErrMsg = document.querySelector("#select-err-msg");
  if (telcompany.value === "") {
    telcompanyErrMsg.textContent = "통신사를 선택해주세요.";
    telcompanyErrMsg.style.display = "block";
    check = false;
  } else {
    telcompanyErrMsg.style.display = "none";
  }
  //  if 영역으로 한번도 들어간적이 없다면(모든 값으로 정상적으로 입력되었다는 소리) 회원가입 성공!!
  if (check) {
    //  모달창을 보여줘
    alert("회원가입이 성공했습니다!");
  }
};

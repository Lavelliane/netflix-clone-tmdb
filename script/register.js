const emailReg = document.getElementById("emailReg");
const passwordReg = document.getElementById("passwordReg");
const password2Reg = document.getElementById("passwordReg2");
const registerBtn = document.getElementById("registerBtn");

const localStorageAccounts = JSON.parse(localStorage.getItem("accounts"));

let accounts =
  localStorage.getItem("accounts") !== null ? localStorageAccounts : [];

function validateEmail(input) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.trim())) {
    return true;
  } else {
    return false;
  }
}
function emailExists(email) {
  if (accounts.length === 0) {
    return false;
  }
  for (let account of accounts) {
    if (account.email === email) {
      return true;
    }
  }
  return false;
}
function updateLocalStorage() {
  localStorage.setItem("accounts", JSON.stringify(accounts));
}
function resetFields() {
  emailReg.value = "";
  passwordReg.value = "";
  password2Reg.value = "";
}
function checkPasswordsMatch(input1, input2) {
  if (input1 === "" || input2 === "") {
    return false;
  }
  if (input1 === input2) {
    return true;
  } else {
    return false;
  }
}

function addNewUser(e) {
  e.preventDefault();
  let newAccount = {
    email: emailReg.value.trim(),
    password: passwordReg.value,
  };
  if (
    !emailExists(newAccount.email) &&
    checkPasswordsMatch(newAccount.password, password2Reg.value) &&
    validateEmail(newAccount.email)
  ) {
    accounts.push(newAccount);
    updateLocalStorage();
    alert("Registration Successful");
    emailReg.classList.add("success");
    passwordReg.classList.add("success");
    password2Reg.classList.add("success");
    resetFields();
  } else {
    if (emailExists(newAccount.email) || !validateEmail(newAccount.email)) {
      emailReg.className = "loginGroup__input error";
      alert("Incorrect Email format or Email Already exists");
    } else {
      emailReg.className = "loginGroup__input success";
    }
    if (!checkPasswordsMatch(newAccount.password, password2Reg.value)) {
      passwordReg.className = "loginGroup__input error";
      password2Reg.className = "loginGroup__input error";
      alert("Passwords do not match");
    } else {
      passwordReg.className = "loginGroup__input success";
      password2Reg.className = "loginGroup__input success";
    }
    resetFields();
  }
}
registerBtn.addEventListener("click", addNewUser);

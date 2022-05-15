const emailLogin = document.getElementById("emailLogin");
const passwordLogin = document.getElementById("passwordLogin");
const loginBtn = document.getElementById("loginBtn");

const localStorageAccounts = JSON.parse(localStorage.getItem("accounts"));

let accounts =
  localStorage.getItem("accounts") !== null ? localStorageAccounts : [];

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
function securityCheck(email, password) {
  for (let account of accounts) {
    if (account.email === email && account.password === password) {
      return "PASSED";
    }
  }
  return "FAILED";
}

function loginAccount(e) {
  e.preventDefault();
  const emailFieldLogin = emailLogin.value;
  const passwordFieldLogin = passwordLogin.value;
  if (
    emailExists(emailFieldLogin) &&
    securityCheck(emailFieldLogin, passwordFieldLogin) === "PASSED"
  ) {
    window.location.href = "../pages/dashboard.html";
  } else {
    alert("Incorrect Email or Password");
  }
}
loginBtn.addEventListener("click", loginAccount);

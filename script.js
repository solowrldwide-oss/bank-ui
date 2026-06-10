// =========================
// AUTH GUARD
// =========================
function checkAuth() {
  if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}

// =========================
// NAVIGATION
// =========================
function go(page) {
  window.location.href = page;
}

// =========================
// LOGOUT (optional future use)
// =========================
function logout() {
  sessionStorage.removeItem("loggedIn");
  window.location.href = "index.html";
}

// =========================
// BALANCE TOGGLE (DASHBOARD)
// =========================
let hidden = false;

function toggleBalance() {
  const bal = document.getElementById("balance");

  if (!bal) return;

  hidden = !hidden;

  bal.innerText = hidden ? "******" : "$250,000,000.00";
}

// =========================
// COPY ACCOUNT NUMBER
// =========================
function copyAcc() {
  const accText = "7963064085";

  navigator.clipboard.writeText(accText);

  alert("Account number copied ✔");
}

// =========================
// TRANSFER SIMULATION (optional hook if reused later)
// =========================
function simulateTransfer(acc, amount, statusEl, callback) {
  if (!acc || !amount) {
    statusEl.innerText = "Fill all fields first";
    return;
  }

  statusEl.innerText = "Verifying account...";

  setTimeout(() => {
    statusEl.innerText = "Account verified ✔ Processing...";

    setTimeout(() => {
      callback();
    }, 1500);

  }, 1500);
}
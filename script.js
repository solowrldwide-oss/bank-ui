function check() {
  if (sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}

function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (email === "theethanerivers@gmail.com" && pass === "Incredibleman") {
    sessionStorage.setItem("loggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("err").innerText = "Wrong login";
  }
}

function toggle() {
  const bal = document.getElementById("bal");
  bal.innerText = bal.innerText === "******"
    ? "$250,000,000.00"
    : "******";
}

function copyAcc() {
  navigator.clipboard.writeText("7963064085");
}

const users = {
  "1234567890": "John Doe",
  "7963064085": "Thane Rivers"
};

function lookup() {
  const acc = document.getElementById("acc").value;
  const name = users[acc];

  document.getElementById("name").innerText =
    name ? "Recipient: " + name : "Not found";
}

function send() {
  const acc = document.getElementById("acc").value;
  const amount = document.getElementById("amount").value;

  if (!users[acc]) return;

  setTimeout(() => {
    document.getElementById("receipt").style.display = "block";
    document.getElementById("receipt").innerText =
      "Sent $" + amount + " to " + users[acc];
  }, 1000);
}
function check() {
  if(sessionStorage.getItem("loggedIn") !== "true") {
    window.location.href = "index.html";
  }
}

function toggle() {
  const bal = document.getElementById("bal");
  bal.innerText = bal.innerText === "******" ? "$250,000,000.00" : "******";
}

function copyAcc() {
  const acc = document.getElementById("acc").innerText;
  navigator.clipboard.writeText(acc);
}

function send() {
  const acc = document.getElementById("acc").value;
  const amount = document.getElementById("amount").value;

  document.getElementById("status").innerText = "Processing...";

  setTimeout(() => {
    document.getElementById("receipt").style.display = "block";
    document.getElementById("receipt").innerText =
      "Sent $" + amount + " to " + acc;
  }, 1500);
}
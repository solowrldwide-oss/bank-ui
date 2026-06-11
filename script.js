function check(){
  if(sessionStorage.getItem("loggedIn")!=="true"){
    window.location.href="index.html";
  }
}

function login(){
  const e=document.getElementById("email").value;
  const p=document.getElementById("password").value;

  if(e==="theethanerivers@gmail.com" && p==="Incredibleman"){
    sessionStorage.setItem("loggedIn","true");
    localStorage.setItem("balance","250000000");
    localStorage.setItem("history",JSON.stringify([]));
    window.location.href="dashboard.html";
  }else{
    document.getElementById("err").innerText="Invalid login";
  }
}

function getBalance(){
  return parseFloat(localStorage.getItem("balance"));
}

function updateBalance(v){
  localStorage.setItem("balance",v);
}

function toggle(){
  const el=document.getElementById("balance");
  el.innerText= el.innerText==="******" ? "$"+getBalance() : "******";
}

function copyAcc(){
  navigator.clipboard.writeText("7963064085");
}

const users={
  "1234567890":"John Doe",
  "7963064085":"Neo Wallet User"
};

function lookup(){
  const acc=document.getElementById("acc").value;
  document.getElementById("name").innerText=
    users[acc]?"Recipient: "+users[acc]:"No match found";
}

function send(){
  const acc=document.getElementById("acc").value;
  const amount=parseFloat(document.getElementById("amount").value);

  if(!users[acc]) return;

  let bal=getBalance();
  bal-=amount;
  updateBalance(bal);

  const history=JSON.parse(localStorage.getItem("history"));

  history.push({
    type:"sent",
    amount,
    to:users[acc],
    date:new Date().toLocaleDateString()
  });

  localStorage.setItem("history",JSON.stringify(history));

  document.getElementById("status").innerText="Transfer successful";
}

function renderHistory(){
  const h=JSON.parse(localStorage.getItem("history"));
  const box=document.getElementById("history");

  box.innerHTML=h.map(t=>`
    <div style="margin-bottom:10px;">
      <b>- $${t.amount}</b><br>
      <small class="muted">${t.to}</small><br>
      <small class="muted">${t.date}</small>
    </div>
  `).join("");
}
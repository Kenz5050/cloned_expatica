document.getElementById("proceedBtn").addEventListener("click", function () {
  const crypto = document.getElementById("crypto").value;
  const amount = document.getElementById("amount").value;

  if (amount === "" || amount <= 0) {
    alert("Please enter a valid amount");
    return;
  }

  alert(`You selected ${crypto.toUpperCase()} with amount ${amount}`);
});
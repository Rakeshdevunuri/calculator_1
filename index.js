let billAmount = document.getElementById("billAmount");
let percentageTip = document.getElementById("percentageTip");
let tipAmount = document.getElementById("tipAmount");
let totalAmount = document.getElementById("totalAmount");
let displayError = document.getElementById("errorMessage");

function calculateTotalAmount() {
    let calculatedTip = (percentageTip.value / 100) * parseInt(billAmount.value);
    let calculateTotalAmount = parseInt(billAmount.value) + calculatedTip;
    if (billAmount.value === "") {
        displayError.textContent = "Please Enter a Valid Input.";
        displayError.style.color = "red";
    } else if (percentageTip.value === "") {
        displayError.textContent = "Please Enter a Valid Input.";
        displayError.style.color = "red";
    } else {
        displayError.textContent = "";
        tipAmount.value = calculatedTip;
        totalAmount.value = calculateTotalAmount;
    }
}
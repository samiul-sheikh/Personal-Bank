// add event listener to enter button
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function () {
    // when click enter button hide login page
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    // when click enter button show transaction page
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

// deposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function () {
    const depositNumber = getInputNumber("depositAmount");

    if (depositNumber < 0) {
        alert("Deposit number cannot be negative");
    }
    else {
        updateSpanText("currentDeposit", depositNumber);
        updateSpanText("currentBalance", depositNumber);

        document.getElementById("depositAmount").value = "";
    }
})

// withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw")
withdrawBtn.addEventListener("click", function () {
    const withdrawNumber = getInputNumber("withdrawAmount");

    if (withdrawNumber < 0) {
        alert("Withdraw number cannot be negative");
    }
    else {
        updateSpanText("currentWithdraw", withdrawNumber);
        updateSpanText("currentBalance", -1 * withdrawNumber);

        document.getElementById("withdrawAmount").value = "";
    }
})

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, addedNumber) {
    // convert current deposit/balance amount string to number + new amount
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = addedNumber + currentNumber;
    // show the total amount in deposit/balance area
    document.getElementById(id).innerText = totalAmount;
}
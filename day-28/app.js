const loanAmountInput = document.getElementById("loan-amount");
const interestRateInput = document.getElementById("interest-rate");
const loanTermInput = document.getElementById("loan-term");

const loanAmountValue = document.getElementById("loan-amount-value");
const interestRateValue = document.getElementById("interest-rate-value");
const loanTermValue = document.getElementById("loan-term-value");
const monthlyPaymentOutput = document.getElementById("monthly-payment");

function calculateMonthlyPayment() {
  const principal = parseFloat(loanAmountInput.value);
  const annualInterestRate = parseFloat(interestRateInput.value) / 100;
  const years = parseInt(loanTermInput.value);

  const monthlyInterestRate = annualInterestRate / 12;
  const numberOfPayments = years * 12;

  let monthlyPayment = 0;

  if (monthlyInterestRate === 0) {
    monthlyPayment = principal / numberOfPayments;
  } else {
    const x = Math.pow(1 + monthlyInterestRate, numberOfPayments);
    monthlyPayment = (principal * monthlyInterestRate * x) / (x - 1);
  }

  monthlyPaymentOutput.textContent = `Monthly Payment: $${monthlyPayment.toFixed(
    2
  )}`;
}

loanAmountInput.addEventListener("input", () => {
  loanAmountValue.textContent = `$${loanAmountInput.value}`;
  calculateMonthlyPayment();
});

interestRateInput.addEventListener("input", () => {
  interestRateValue.textContent = `${interestRateInput.value}%`;
  calculateMonthlyPayment();
});

loanTermInput.addEventListener("input", () => {
  loanTermValue.textContent = `${loanTermInput.value} years`;
  calculateMonthlyPayment();
});

document.addEventListener("DOMContentLoaded", () => {
  loanAmountValue.textContent = `$${loanAmountInput.value}`;
  interestRateValue.textContent = `${interestRateInput.value}%`;
  loanTermValue.textContent = `${loanTermInput.value} years`;
  calculateMonthlyPayment();
});

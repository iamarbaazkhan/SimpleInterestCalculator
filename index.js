// Calculating the simple interest with creating function for onlclick button

function calculate() {
  let PrincipalAmount = 0;
  let YearsAmount = 0;
  let RateofInterest = 0;
  let SimpleInterest = 0;

  // Convert the strings into numbers to performing mathematical calc

  PrincipalAmount = parseInt(document.getElementById("principal").value);
  YearsAmount = parseInt(document.getElementById("years").value);
  RateofInterest = parseInt(document.getElementById("roi").value);

  // Simple interest formula

  SimpleInterest = (PrincipalAmount * YearsAmount * RateofInterest) / 100;

  // to get the result of simple intesrest formula

  document.getElementById("res").innerHTML = SimpleInterest;
}

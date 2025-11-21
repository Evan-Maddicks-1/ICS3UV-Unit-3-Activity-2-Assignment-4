/**
* @author Evan Maddicks
* @version 1.0.0
* @date 2025-11-18
* @fileoverview this program calculates the interest of a bank every year for ten years
*/
//number of years
const year = 10;

// ask for the starting amount and interest rate
const startInput = prompt("Enter the initial amount of money:");
const rateInput = prompt("Enter the yearly interest rate (example: 7 for 7%):");

//user input to numbers
const baseAmount = Number(startInput);
const rate = Number(rateInput) / 100;

//function calculates total value per year
function valueAfterYears(year: number): number {
  return baseAmount * Math.pow(1 + rate, year);
}

//function calculates interest per year
function interestForYear(year: number): number {
  return valueAfterYears(year) - valueAfterYears(year - 1);
}

// format numbers to two decimal places
function formatMoney(value: number): string {
  return value.toFixed(2);
}

// print table headings
console.log("Year    Initial Value    Interest Gained    Current Value");

//year 1
console.log(
  "1       $" +
  formatMoney(baseAmount) +
  "            $" +
  formatMoney(interestForYear(1)) +
  "            $" +
  formatMoney(valueAfterYears(1))
);

// year 2
console.log(
  "2       $" +
  formatMoney(baseAmount) +
  "            $" +
  formatMoney(interestForYear(2)) +
  "            $" +
  formatMoney(valueAfterYears(2))
);

// year 3
console.log(
  "3       $" +
  formatMoney(baseAmount) +
  "            $" +
  formatMoney(interestForYear(3)) +
  "            $" +
  formatMoney(valueAfterYears(3))
);

// year 4
console.log(
  "4       $" +
  formatMoney(baseAmount) +
  "            $" +
  formatMoney(interestForYear(4)) +
  "            $" +
  formatMoney(valueAfterYears(4))
);

//year 5
console.log(
  "5       $" +
  formatMoney(baseAmount) +
  "            $" +
  formatMoney(interestForYear(5)) +
  "            $" +
  formatMoney(valueAfterYears(5))
);

//year 6
console.log(
  "6       $" +
  formatMoney(baseAmount) +
  "            $" +
  formatMoney(interestForYear(6)) +
  "            $" +
  formatMoney(valueAfterYears(6))
);

//year 7
console.log(
  "7       $" +
  formatMoney(baseAmount) +
  "            $" +
  formatMoney(interestForYear(7)) +
  "            $" +
  formatMoney(valueAfterYears(7))
);

//year 8
console.log(
  "8       $" +
  formatMoney(baseAmount) +
  "            $" +
  formatMoney(interestForYear(8)) +
  "            $" +
  formatMoney(valueAfterYears(8))
);

//year 9
console.log(
  "9       $" +
  formatMoney(baseAmount) +
  "            $" +
  formatMoney(interestForYear(9)) +
  "            $" +
  formatMoney(valueAfterYears(9))
);

//year 10
console.log(
  "10      $" +
  formatMoney(baseAmount) +
  "            $" +
  formatMoney(interestForYear(10)) +
  "            $" +
  formatMoney(valueAfterYears(10))
);

"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let num;
  let num2;
  let D = b**-4*a*c;
  if (!D) {
    num = -b/(2*a);
    arr.push(num);
  } else if (D > 0) {
    num = (-b + Math.sqrt(d))/(2*a);
    num2 = (-b - Math.sqrt(d))/(2*a);
    arr.push(num, num2)
  } else {
    return arr
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = percent/100/12;
  let bodyCredit = amount - contribution;
  let payment = bodyCredit * (monthPercent + (monthPercent / (((1 + monthPercent)**countMonths)-1)));
  let countAll = Math.round(payment * countMonths * 100) / 100;
  return countAll
}
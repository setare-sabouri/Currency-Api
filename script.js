"use strict";
const screens = document.querySelectorAll('.screen');
const symbolsBtn = document.querySelector("#symbols-btn");
const convertBtn = document.querySelector(".convert-btn");
const allCurrencies = document.querySelector(".all-currencies");
const cForm = document.querySelector("#convert-Form");
const watchList = document.querySelector("#watch-list");
const host = 'api.frankfurter.app';
//how to handle below func?
//seperate each if as a seperated function? ooor what ?
async function getCurrency(flag, from, to, amount) { //what was the name of these functions? :/
  if (flag === 1) { //to get all currencies
    fetch(`https://${host}/currencies`)
      .then(resp => resp.json())
      .then((data) => {
        displaySymbols(data);
      })
  }
  if (flag === 2) { //to convert
    fetch(`https://${host}/latest?amount=${amount}&from=${from}&to=${to}`)
      .then(resp => resp.json())
      .then((data) => {
        displayConvert(data);
      })
  }

}
function displayConvert(data) {
  console.log(`${data.amount} ${data.base} = ${Object.values(data.rates)[0]} ${Object.keys(data.rates)[0]}`);

}
function displaySymbols(symbols) {
  let enteries = Object.entries(symbols);
  console.log(enteries.length);
  for (let i = 0; i < enteries.length; i++) {
    const btn = document.createElement('button');
    btn.innerHTML = enteries[i][0];
    allCurrencies.appendChild(btn);
  }
}

symbolsBtn.addEventListener('click', function () {
  screens[0].classList.add('up');
  getCurrency(1);
});
convertBtn.addEventListener('click', function () {
  event.preventDefault();
  const from = cForm.elements.from.value;
  const to = cForm.elements.to.value;
  console.log(from + to);
  getCurrency(2, from, to, 1);
})

console.log(screens.length);
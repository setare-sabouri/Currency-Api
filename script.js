"use strict";
const symbolsBtn = document.querySelector("#symbols-btn");
const convertBtn = document.querySelector("#convert-btn");
const allCurrencies = document.querySelector(".all-currencies");
const CnvrtForm = document.querySelector("#convert-Form");
const watchList = document.querySelector("#watch-list");
const host = 'api.frankfurter.app';
async function getCurrency(flag, from, to) {
  if (flag === 1) { //to get all currencies
    fetch(`https://${host}/currencies`)
      .then(resp => resp.json())
      .then((data) => {
        displaySymbols(data);
      })
  }
  if (flag === 2) {
    fetch(`https://${host}/latest?amount=10&from=GBP&to=USD`)
      .then(resp => resp.json())
      .then((data) => {
        console.log(`10 GBP = ${data.rates.USD} USD`);
      })
  }

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
  getCurrency(1);
});
convertBtn.addEventListener('click', function () {
  event.preventDefault();
  const from = C
  getCurrency(2);
})
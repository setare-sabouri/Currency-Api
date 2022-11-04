"use strict";
// .......................................................................................................................
// /symbols Returns all available currencies.
// /latest Returns real-time exchange rate data for all available or a specific set of currencies.
// /convert Allows for conversion of any amount from one currency to another.
// /{date} Returns historical exchange rate data for all available or a specific set of currencies.
// /timeseries Returns daily historical exchange rate data between two specified dates for all available or a specific set of currencies.
// /fluctuation Returns fluctuation data between two specified dates for all available or a specific set of currencies.
// .............................................................................................................................
const symbolsBtn = document.querySelector("#symbols-btn");
const convertBtn = document.querySelector("#convert-btn");
const allCurrencies = document.querySelector(".all-currencies");

const host = 'api.frankfurter.app';
async function getCurrency(flag) {
  if (flag === 1) { //to get all currencies
    const res = await fetch(`https://${host}/currencies`);
    const data = await res.json();
    displaySymbols(data);
  }
  if (flag === 2) {
    fetch(`https://${host}/latest?amount=10&from=GBP&to=USD`)
      .then(resp => resp.json())
      .then((data) => {
        console.log(`10 GBP = ${data.rates.USD} USD`);
      });
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
  getCurrency(2);
})
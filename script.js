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
const allCurrencies = document.querySelector(".all-currencies");

const host = 'api.frankfurter.app';
async function getSymbols() {
  const res = await fetch("https://api.frankfurter.app/currencies")
    .then(resp => resp.json())
    .then((data) => {
      displaySymbols(data);
    });

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
getSymbols();

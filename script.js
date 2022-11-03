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
var myHeaders = new Headers();
myHeaders.append("apikey", "rQl0x7RRuSlPPwTSMLuRdkIwA1miRAWf");

var requestOptions = {
  method: "GET",
  redirect: "follow",
  headers: myHeaders,
};
async function getSymbols() {
  const res = await fetch("https://openexchangerates.org/api/currencies.json?app_id=3e2d226508c34e5baffca2d13064fe91")

  const data = await res.json();
  displaySymbols(data);
}

function displaySymbols(symbols) {
  let enteries = Object.entries(symbols);
  for (let i = 0; i < enteries.length; i++) {
    const btn = document.createElement('button');
    btn.innerHTML = enteries[i][1];
    allCurrencies.appendChild(btn);

  }
}
// symbolsBtn.addEventListener('click', );
getSymbols();
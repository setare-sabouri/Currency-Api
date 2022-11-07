"use strict";
// import { app, db } from "./firebase.js";
const symbolsBtn = document.querySelector("#symbols-btn");
const convertBtn = document.querySelector(".convert-btn");
const allCurrencies = document.querySelector(".all-currencies");
const cForm = document.querySelector("#convert-Form");
const card = document.querySelector(".c-card");
const SearchDbtn = document.querySelector('#date-search-btn');
const dateForm = document.querySelector("#date-form");
const host = 'api.frankfurter.app';
//how to handle below func? to make it more readable
//seperate each if as a seperated function? ooor what ?
async function getCurrency(flag, from, to, amount) { //what was the name of these functions? :/
  if (flag === 1) {
    fetch(`https://${host}/currencies`)
      .then(resp => resp.json())
      .then((data) => {
        displaySymbols(data);
      })
  }
  if (flag === 2) {
    fetch(`https://${host}/latest?amount=${amount}&from=${from}&to=${to}`)
      .then(resp => resp.json())
      .then((data) => {
        displayConvert(data);
      })
  }
}
function displayConvert(data) {
  card.innerHTML = `${data.amount} ${data.base} = ${Object.values(data.rates)[0]} ${Object.keys(data.rates)[0]}`;
}
function displaySymbols(symbols) {
  allCurrencies.innerHTML = "";
  let enteries = Object.entries(symbols);
  console.log("Updated");
  for (let i = 0; i < enteries.length; i++) { //add label later for value of each
    const span = document.createElement('span'); //and rates and date
    span.innerHTML = enteries[i][0];
    allCurrencies.appendChild(span);
  }
}
function displayByDate(data) {
  console.log(data);

}
symbolsBtn.addEventListener('click', function () {
  getCurrency(1);
});

convertBtn.addEventListener('click', function () {
  event.preventDefault();
  const from = cForm.elements.from.value;
  const to = cForm.elements.to.value;
  getCurrency(2, from, to, 1);
  card.classList.add("active");
})
SearchDbtn.addEventListener('click', function () {
  event.preventDefault();
  const fromDate = dateForm.elements.fromDate.value;
  const toDate = dateForm.elements.toDate.value;
  fetch(`https://${host}/${fromDate}..${toDate}`)
    .then(resp => resp.json())
    .then((data) => {
      displayByDate(data);
    })
})
// dateinput.addEventListener('input', function () {  this is for one date only if needed
//   const dateFrom = dateinput.value;
//   console.log(dateFrom);

// })
getCurrency(1);
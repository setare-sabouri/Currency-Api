import { getAllCurs, convert } from "./Api.js";
// import { app, db } from "./firebase.js";
const symbolsBtn = document.querySelector("#symbols-btn");
const convertBtn = document.querySelector(".convert-btn");
const cForm = document.querySelector("#convert-Form");
const SearchDbtn = document.querySelector('#date-search-btn');
const dateForm = document.querySelector("#date-form");
const watchContainer = document.querySelector('.watch-section');
const watchList = document.querySelector("#watchList");
let watchings = [];



function displayByDate(data) {
  console.log(data);
}
symbolsBtn.addEventListener('click', function () {
  getAllCurs();
});

convertBtn.addEventListener('click', function () {
  event.preventDefault();
  const from = cForm.elements.from.value;
  const to = cForm.elements.to.value;
  convert(from, to, 1);
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
function addToList(data) {

  const watchItem = document.createElement('li');
  watchItem.innerHTML = `${data.amount} ${data.base} = 
  ${Object.values(data.rates)[0]} ${Object.keys(data.rates)[0]}`;
  console.log(watchItem);
  // watchings.push(watchItem);
  // console.log(watchings);
  // watchList.innerText = " ";

  // displayWatchList(watchings);
}
function displayWatchList(watchings) {

  for (let i = 0; i < watchings.length; i++) {
    // watchList.appendChild(watchings[i]);
    // console.log(watchings[i]);
  }
}
// dateinput.addEventListener('input', function () {  this is for one date only if needed
//   const dateFrom = dateinput.value;
//   console.log(dateFrom);

// })


getAllCurs();
import { getAllCurs, convert, convertByDate } from "./Api.js";
const UpdatesymbolsBtn = document.querySelector("#symbols-btn");
const convertBtn = document.querySelector(".convert-btn");
const cForm = document.querySelector("#convert-Form");
const SearchDatebtn = document.querySelector("#date-search-btn");
const dateForm = document.querySelector("#date-form");

getAllCurs();

UpdatesymbolsBtn.addEventListener("click", function () {
  getAllCurs();
});

convertBtn.addEventListener("click", function () {
  event.preventDefault();
  const from = cForm.elements.from.value;
  const to = cForm.elements.to.value;
  convert(from, to, 1);
});

SearchDatebtn.addEventListener("click", function () {
  event.preventDefault();
  const from = dateForm.elements.from.value;
  const to = dateForm.elements.to.value;
  const fromDate = dateForm.elements.fromDate.value;
  const toDate = dateForm.elements.toDate.value;
  convertByDate(fromDate, toDate, from, to);
});



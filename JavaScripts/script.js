import { getAllCurs, convert, convertByDate } from "./Api.js";
const convertBtn = document.querySelector(".convert-btn");
const cForm = document.querySelector("#convert-Form");
const SearchDatebtn = document.querySelector("#date-search-btn");
const dateForm = document.querySelector("#date-form");

getAllCurs();

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


document.addEventListener('scroll', toggleHeader);
function toggleHeader() {
  const header = document.querySelector('.header-container');
  var scrollPosition = window.scrollY,
    showHeaderPosition = 570;
  if (scrollPosition >= showHeaderPosition) {
    header.style.position = 'fixed';
    header.style.display = 'unset';


  } else {
    header.style.display = 'none';
  }
}

// for
// let removeBtns = document.querySelectorAll(".removeBtn");
// console.log(removeBtns);
import { addToList } from "./firebase.js";

const allCurrenciesEl = document.querySelector(".all-currencies");
const currentDate = document.querySelector(".current-date");
export const displaySymbols = (symbols) => {
    allCurrenciesEl.innerHTML = "";
    let enteries = Object.entries(symbols);
    for (let i = 0; i < enteries.length; i++) {
        const span = document.createElement("span");
        span.innerHTML = enteries[i][0]; //sek
        span.ariaLabel = enteries[i][1]; //SWDEN 
        allCurrenciesEl.appendChild(span);
    }

    let date = new Date();
    let dateEl = currentDate.appendChild(document.createElement('p'));
    dateEl.innerHTML = date.toLocaleString();

}
const cardBtnWatch = document.querySelector(".card-watch-Btn");
const card = document.querySelectorAll(".c-card"); //2 diff places
const cardBtnCancel = document.querySelectorAll(".card-cancel-Btn");

export const displayConvert = (data) => {
    card[0].classList.add("active");
    card[0].children[0].innerHTML = `${data.amount} ${data.base} = 
    ${Object.values(data.rates)[0]} ${Object.keys(data.rates)[0]}`;
    cardBtnCancel[0].addEventListener("click", function (e) {
        e.stopPropagation();
        card[0].classList.remove("active");
    });
    cardBtnWatch.addEventListener("click", function (e) {
        e.stopPropagation();
        addToList(data);
        card[0].classList.remove("active");
    });
}


export let displayByDate = (data) => {
    card[1].children[0].innerHTML = '';
    const ratesArr = data.rates;
    console.log(typeof (ratesArr));
    const dates = Object.keys(ratesArr);
    const nestedrates = Object.values(ratesArr);
    const ratesSymbol = Object.keys(nestedrates[0]);
    card[1].classList.add("active");
    for (let i = 0; i < dates.length; i++) {
        card[1].children[0].innerHTML += `In ${dates[i]}--> ${data.amount} ${data.base} = 
         ${Object.values(nestedrates[i])[0]} ${ratesSymbol} <br><br>`;
    }
    cardBtnCancel[1].addEventListener("click", function (e) {
        e.stopPropagation();
        card[1].classList.remove("active");
    });
}


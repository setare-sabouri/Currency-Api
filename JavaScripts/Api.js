const host = "api.frankfurter.app";
const allCurrencies = document.querySelector(".all-currencies");
const card = document.querySelectorAll(".c-card");
const cardBtnCancel = document.querySelectorAll(".card-cancel-Btn");
const cardBtnWatch = document.querySelector(".card-watch-Btn");

export async function getAllCurs() {
    const res = await fetch(`https://${host}/currencies`);
    const data = await res.json();
    displaySymbols(data);
}
export async function convert(from, to, amount) {
    const res = await fetch(
        `https://${host}/latest?amount=${amount}&from=${from}&to=${to}`
    );
    const data = await res.json();
    displayConvert(data);
}
export async function convertByDate(fromD, toD, fromCur, toCur) {
    const res = await fetch(`https://${host}/${fromD}..${toD}?from=${fromCur}&to=${toCur}`);
    const data = await res.json();
    displayByDate(data);
}
function displaySymbols(symbols) {
    allCurrencies.innerHTML = "";
    let enteries = Object.entries(symbols);
    console.log("Updated");
    for (let i = 0; i < enteries.length; i++) {
        // add label later for value of each
        const span = document.createElement("span"); // and rates and date
        span.innerHTML = enteries[i][0];
        allCurrencies.appendChild(span);
    }
}

function displayConvert(data) {
    card[0].classList.add("active");
    card[0].children[0].innerHTML = `${data.amount} ${data.base} = 
    ${Object.values(data.rates)[0]} ${Object.keys(data.rates)[0]}`;
    cardBtnCancel[0].addEventListener("click", function (e) {
        e.stopPropagation();
        card[0].classList.remove("active");
    });
    cardBtnWatch.addEventListener("click", function (e) {
        e.stopPropagation();
        console.log(card[0].children[0]);
        // addToList(data);
        card[0].classList.remove("active");
    });
}

function displayByDate(data) {
    card[1].children[0].innerHTML = '';
    const ratesArr = data.rates;
    const dates = Object.keys(ratesArr);
    const nestedrates = Object.values(ratesArr);
    const ratesSymbol = Object.keys(nestedrates[0]);
    card[1].classList.add("active");
    for (let i = 0; i < dates.length; i++) {
        card[1].children[0].innerHTML += `in date ${dates[i]}
        : each ${data.amount} ${data.base} = 
        ${Object.values(nestedrates[i])[0]
            } ${ratesSymbol} <br><br>`;
    }
    cardBtnCancel[1].addEventListener("click", function (e) {
        e.stopPropagation();
        card[1].classList.remove("active");
    });
}

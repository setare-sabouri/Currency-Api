const host = "api.frankfurter.app";
const allCurrencies = document.querySelector(".all-currencies");
const card = document.querySelector(".c-card");
const cardBtnCancel = document.querySelector("#card-cancel-Btn");
const cardBtnWatch = document.querySelector("#card-watch-Btn");

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

function displaySymbols(symbols) {
    allCurrencies.innerHTML = "";
    let enteries = Object.entries(symbols);
    console.log("Updated");
    for (let i = 0; i < enteries.length; i++) {
        //add label later for value of each
        const span = document.createElement("span"); //and rates and date
        span.innerHTML = enteries[i][0];
        allCurrencies.appendChild(span);
    }
}

function displayConvert(data) {
    card.classList.add("active");
    card.children[0].innerHTML = `${data.amount} ${data.base} = 
    ${Object.values(data.rates)[0]} ${Object.keys(data.rates)[0]}`;
    cardBtnCancel.addEventListener("click", function (e) {
        e.stopPropagation();
        card.classList.remove("active");
    });
    cardBtnWatch.addEventListener("click", function (e) {
        e.stopPropagation();
        console.log(card.children[0]);
        // addToList(data);
        card.classList.remove("active");
    });
}

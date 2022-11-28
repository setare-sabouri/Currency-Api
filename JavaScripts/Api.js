'use strict'
import { displaySymbols, displayConvert, displayByDate } from "./display.js";
const host = "api.frankfurter.app";

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
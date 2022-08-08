"use strict";
let inputField = document.getElementById('value');
let balanceField = document.getElementById('balance-field');
let updateButton = document.getElementById('update');
let resetButton = document.getElementById('clear');
let balance = 0;
let inputValue;
clearInputField();
showBalance(balance);
function updateBalance(value) {
    balance += value;
    showBalance(balance);
}
function showBalance(value) {
    balanceField.innerHTML = value.toFixed(2).toString();
}
function clearInputValue() {
    inputValue = '';
}
function clearInputField() {
    inputField.value = '';
}
resetButton.addEventListener('click', () => {
    balance = 0;
    showBalance(balance);
    clearInputField();
});
updateButton.addEventListener('click', () => {
    inputValue = Number(inputField.value);
    if (!isNaN(inputValue)) {
        updateBalance(inputValue);
        clearInputValue();
        clearInputField();
    }
    else {
        alert('Only numbers in input field!');
        clearInputField();
    }
});
/**
 * a partir da ideia apresentada desenvolvi o meu código ts do zero, desenvolvento minhas próprias
 * funções e eventListeners. além disso adicionei a verificação da entrada de valores, para evitar
 * valores não numéricos na aplicação
 */ 

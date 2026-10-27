"use strict";

const scoreButton = document.querySelector("#score-button");
const score = document.querySelector("#score");
const doubleCard = document.querySelector("#double-card");
const hoverZone = document.querySelector("#hover-zone");
const status = document.querySelector("#status");
let points = 0;

scoreButton.addEventListener("click", () => {
    points += 1;
    score.textContent = points;
    status.textContent = ("ваши поинты:", points);
});

doubleCard.addEventListener("dblclick", () =>{
    doubleCard.classList.toggle("is-selected"); 
    status.textContent = "дабл клик сработан";
});

// Задание 2. Подключите dblclick к doubleCard.
// Переключите класс is-selected и измените текст status.
hoverZone.addEventListener("mouseenter", () => {
    hoverZone.classList.add("is-hovered");
    status.textContent = "курсор попал в область";
}); 
hoverZone.addEventListener("mouseleave", () => {
    hoverZone.classList.remove("is-hovered");
    status.textContent = "Ожиданиe действия";

});
// Задание 3. Подключите mouseenter к hoverZone.
// Добавьте класс is-hovered и покажите сообщение.

// Задание 4. Подключите mouseleave к hoverZone.
// Уберите класс is-hovered и верните исходный текст статуса.

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const counter = document.querySelector("#value");
let counterValue = 0;

decrementBtn.addEventListener("click", onClickDecr);
incrementBtn.addEventListener("click", onClickIncr);

function onClickDecr (evt) {
        counterValue -= 1;
        counter.textContent = counterValue;
    }
function onClickIncr (evt) {
       counterValue += 1;
       counter.textContent = counterValue;
}

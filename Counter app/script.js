let count = 0;

function increase() {
    count++;
    updateCounter();
}

function reset() {
    count = 0;
    updateCounter();
}

function decrease() {
    count--;
    updateCounter();
}

function updateCounter() {
    document.getElementById("counter").innerText = count;
}
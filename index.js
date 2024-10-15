// Add listener to "click here" button
let button = document.getElementById('main-button');

// When user clicks "click here", count gets updated
let addOne = document.querySelector('button');
addOne.addEventListener("click", incrementCounter);
// Start counter at 0
let count = 0;

let timeOrTimes = "times";

function incrementCounter() {
    count++;
    let counter = document.getElementById('counter-display');
    if (count == 1) {
        timeOrTimes = "time";
    } else {
        timeOrTimes = "times";
    }
    counter.innerText = `Clicked ${count} ${timeOrTimes}`;
}

// our array
const colors = ["green", "red", "rgba(133, 122, 200)",
    "#F15025"];

// targeting the button from id btn
const btn = document.getElementById('btn');

// targeting the color span class color
const color = document.querySelector(".color");

// event listener for click events
btn.addEventListener('click', function () {
    // get random number between 0 - 3
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    /* we want to get the style property not styles
    more specifically the bg color*/
    document.body.style.backgroundColor = colors[randomNumber];
    // bc we also want the color text to show up
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    // math.floor rounds down the decimals to integers
    return Math.floor(Math.random() * colors.length);
}
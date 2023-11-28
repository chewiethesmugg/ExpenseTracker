// app.js
function generateRandomNumber() {

    const randomNumber = Math.floor(Math.random() * 100) + 1;

    const randomNumberDisplay = document.getElementById("randomNumberDisplay");
    randomNumberDisplay.innerHTML += `Random Number: ${randomNumber}<br>`;
}

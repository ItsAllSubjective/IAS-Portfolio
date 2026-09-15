function rollDice() {
    const numOfDice = document.getElementById("dice-number-input").value;
    const diceResult = document.getElementById("diceresults");
    const diceImages = document.getElementById("diceimages");
    const values = [];
    const images = [];

    for(let i = 0; i < numOfDice; i++){
        const value = Math.floor(Math.random() * 6) + 1;
        values.push(value);
        images.push(`<img src="Dice-faces/${value}.png" style="width: 25vw;">`);
    }

    diceResult.textContent = `Dice Roll: ${values.join(', ')}`;
    diceImages.innerHTML = images.join('');
}
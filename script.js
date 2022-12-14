//dice roll function
let roll = () => {
    return Math.floor(Math.random() * 6);
}

//selecting players by paragraph and corresponding images
let player1Img = document.getElementsByClassName(`img1`)[0];
let player2Img = document.getElementsByClassName(`img2`)[0];
let players = document.getElementsByTagName(`p`);

//roll for each player once
let player1roll = roll();
let player2roll = roll();

//condition for who has won
if (player1roll > player2roll) {
    players[0].innerText = `Player 1 won!`;
} else if (player1roll < player2roll) {
    players[1].innerText = `Player 2 won!`;
}

//player 1 image switch case
switch (player1roll) {
    case 1:
        player1Img.src = `images/dice1.png`;
        break;
    case 2:
        player1Img.src = `images/dice2.png`;
        break;
    case 3:
        player1Img.src = `images/dice3.png`;
        break;
    case 4:
        player1Img.src = `images/dice4.png`;
        break;
    case 5:
        player1Img.src = `images/dice5.png`;
        break;
    case 6:
        player1Img.src = `images/dice6.png`;
        break;

    default:
        player1Img.src = `images/dice1.png`;
}

//player 2 image switch case
switch (player2roll) {
    case 1:
        player2Img.src = `images/dice1.png`;
        break;
    case 2:
        player2Img.src = `images/dice2.png`;
        break;
    case 3:
        player2Img.src = `images/dice3.png`;
        break;
    case 4:
        player2Img.src = `images/dice4.png`;
        break;
    case 5:
        player2Img.src = `images/dice5.png`;
        break;
    case 6:
        player2Img.src = `images/dice6.png`;
        break;

    default:
        player2Img.src = `images/dice1.png`;
}

//refresh button by first selecting h1 and then adding a click event with window reload
let refreshButton = document.getElementsByTagName(`h1`)[0];
refreshButton.addEventListener('click', () => {
    window.location.reload();
})
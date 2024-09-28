const moves = document.getElementById("moves-count");
const timeValue = document.getElementById("time");
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const gameContainer = document.querySelector(".game-container");
const result = document.getElementById("result");
const controls = document.querySelector(".control-container");

let cards;
let interval;
let firstCard = false;
let secondCard = false;

// Items array
const items = [
    {name: "bee", image: "image/bee.png"},
    {name: "crocodile", image: "image/crocodile.png"},
    {name: "anaconda", image: "image/anaconda.png"},
    {name: "berries", image: "image/berries.png"},
    {name: "bird", image: "image/bird.png"},
    {name: "butterfly", image: "image/butterfly.png"},
    {name: "chameleon", image: "image/chameleon.png"},
    {name: "flamingo", image: "image/flamingo.png"},
    {name: "gorilla", image: "image/gorilla.png"},
    {name: "panther", image: "image/panther.png"},
    {name: "tarantula", image: "image/tarantula.png"},
    {name: "toucan", image: "image/toucan.png"}
];

// Initial Time
let seconds = 0,
    minutes = 0;

// Initial moves and win count
let movesCount = 0,
    winCount = 0;

// For timer
const timeGenerator = () => {
    seconds += 1;
    // minutes logic
    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }

// format time before displaying
let secondsValue = seconds < 10 ? `0${seconds}` :
        seconds;
let minutesValue = minutes < 10 ? `0${minutes}` :
        minutes;
timeValue.innerHTML = `<span>Time:</span> ${minutesValue}:${secondsValue}`;
};

// For calculating moves
const movesCounter = () => {
    movesCount += 1;
    moves.innerHTML = `<span>Moves:</span> ${movesCount}`;
};

// Pick random objects from the  items array
const generateRandom = (size = 4) => {
    // temporary array
    let tempArray = [...items];
    // initializes cardValues Array
    let cardValues = [];
    // size should be double (4*4 matrix)/2 since pairs of objects would exist
    size = (size * size) / 2;
    // Random object selection
    for(let i =0; i< size;i++){
        const randomIndex = Math.floor(Math.random() * tempArray.length);
        cardValues.push(tempArray[randomIndex]);
        // once selected remove the object from temp array
        tempArray.splice(randomIndex, 1);
    }  
    return cardValues;  
}

const matrixGenerator = (cardValues, size = 4) => {
    gameContainer.innerHTML = "";
    cardValues =  [...cardValues, ...cardValues];
    // simple shuffle
    cardValues.sort(() => Math.random() - 0.5);
    for (let i=0; i<size*size;i++){

    }
};

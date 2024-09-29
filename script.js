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
    {name: "bee", image: "bee.png"},
    {name: "crocodile", image: "crocodile.png"},
    {name: "anaconda", image: "anaconda.png"},
    {name: "berries", image: "berries.png"},
    {name: "bird", image: "bird.png"},
    {name: "butterfly", image: "butterfly.png"},
    {name: "chameleon", image: "chameleon.png"},
    {name: "flamingo", image: "flamingo.png"},
    {name: "gorilla", image: "gorilla.png"},
    {name: "panther", image: "panther.png"},
    {name: "tarantula", image: "tarantula.png"},
    {name: "toucan", image: "toucan.png"},
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
let secondsValue = seconds < 10 ? `0${seconds}` :seconds;
let minutesValue = minutes < 10 ? `0${minutes}` :minutes;
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
};

const matrixGenerator = (cardValues, size = 4) => {
    gameContainer.innerHTML = "";
    cardValues =  [...cardValues, ...cardValues];
    // simple shuffle
    cardValues.sort(() => Math.random() - 0.5);
    for (let i=0; i<size*size;i++){
        /*
        Create cards
        before => front side (contains question mark)
        after => back side (contains image)
        data-cards-values is a custom attribute which stores the names of th cards to match later
        */
       gameContainer.innerHTML +=`
       <div class="cards-container" data-cards-values="${cardValues[i].name}">
       <div class="card-before">?</div>
       <div class="cards-after">
       <img src="images/${cardValues[i].image}" class="image"/>
       </div>
       </div>
       `
       ;
    }
// Grid
gameContainer.style.gridTemplateColumns = `repeat(${size},auto)`;

// Cards
cards = document.querySelectorAll('.cards-container');
cards.forEach((cards) => {
    card.addEventListener("click", () => {
        // If selectd card is not matched yet then only run(i.e already matched card when clicked will be ignored)
        if(!card.classList.contains("matched")) {
            // flip the clicked card
            card.classList.add("flipped");
            // if it is the firstcard (!first since firstcard is initially false)
            if(!firstCard){
                // so current card will become firstcard
                firstCard = card;
                // current cards value becomes firstCardValue
                firstCardValue = card.getAttribute("data-card-value");
            }
        }
        // increment moves since user selected second card
        movesCounter();
        // secondCard and value
        let secondCardValue = card.getAttribute("data-card-value");
        if(firstCardValue == secondCardValue){
            // if both cards match add matched class so these cards would be ignored next time
            firstCard.classList.add("matched");
            secondCard.classList.add("matched");
            // set firstcard to false since next card would be first now
            firstCard = false;
            // winCount increment as user found a correct match
            winCount+
        }
    })
}
)
};

// Initialize values and function calls
const initializer = () => {
    result.innerText = "";
    winCount = 0;
    let cardValues = generateRandom();
    console.log(cardValues);
    matrixGenerator(cardValues);
};

initializer();
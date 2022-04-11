// 6 Second Timer
const timeH = document.getElementById("seconds");
let timeSecond = 6;

const countDown = setInterval(() => {
    timeSecond--;
    timeH.innerHTML = timeSecond;

    if (timeSecond <= 0 || timeSecond < 1) {
        timeH.innerHTML = `Out of time!`;
    }
}, 1000);

// Question
const questionBox = document.getElementById('question-box');

let question = [
    "sodas",
    "national parks",
    "social media apps",
    "airports",
    "famous Toms",
    "planets",
    "presidents",
    "toothpaste brands",
    "animals that start with A",
    "countries in South America",
    "Canadian provinces",
    "shades of blue",
    "famous Sarahs",
    "school subjects",
    "phone companies",
    "national pizza chains",
    "christmas movies",
    "farm animals",
    "dog breeds",
    "cat breeds",
    "vacation destinations",
    "types of flowers",
    "beer brands",
    "disney movies",
    "reptiles",
    "brunch orders",
    "jewelry stores",
    "grammy award winners",
    "famous doctors",
    "methods of air transportation",
    "car brands",
    "famous glasses-wearers",
];

let myQuestion = question[Math.floor(Math.random() * question.length)];
questionBox.innerHTML = myQuestion;

// Done Button
const doneButton = document.getElementById("done-button");
doneButton.addEventListener("click", reload, false);




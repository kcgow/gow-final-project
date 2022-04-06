const question = [
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
]


let randomQuestion = question[Math.floor(Math.random() * question.length)];

const questionBox = document.getElementById('question-box');

questionBox.setAttribute("value", "randomQuestion");

const doneButton = document.getElementById("done-button");


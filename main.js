let array = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
const tileColor = [
    "6F98A8",
    "2B8EAD",
    "2F454E",
    "2B8EAD",
    "2F454E",
    "BFBFBF",
    "BFBFBF",
    "6F98A8",
    "2F454E"
];

const shuffle = () => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    renderCards();
};

const sort = () => {
    array.sort(function(a, b) {
        return a - b
    });
    renderCards();
};

function renderCards() {
    document.getElementById("cards").innerHTML = "";

    for (let i = 0; i < array.length; i++) {
        let card = document.createElement("li");
        let value = document.createElement("div");
        card.className = "card numbers-tile";
        value.className = "value color-" + tileColor[array[i] - 1];

        value.innerHTML = array[i];
        card.appendChild(value);

        document.getElementById("cards").appendChild(card);
    }
}

renderCards();
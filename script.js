// Game container
let game = document.querySelector(".game");
// 4 buttons
let buttonShow = document.querySelector(".show");
let buttonDouble = document.querySelector(".double");
let buttonShuffle = document.querySelector(".shuffle");
let buttonFlip = document.querySelector(".flip");
let clickedIds = [];
// Array containing image URLs
let cards = ["data:image/jpeg;base64,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", "https://i.ytimg.com/vi/YapwwI1kiWU/maxresdefault.jpg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdJ9eIrWyXcuYC_NSMMRRyYzQaaFdThHoK_vvBAv-sTNFR6W8EzUzyZFEMYOFXdvc4cF0&usqp=CAU", "https://storage.googleapis.com/www-courttv-uploads/2024/03/bdd170e8-dui-300x169.jpg", "https://qph.cf2.quoracdn.net/main-qimg-6661c6c7fceec53fd2282e4ee76f4ebf-lq", "https://piximus.net/media2/42973/outrageous-crimes-that-couldnt-have-happened-anywhere-else-but-florida-5.jpg", "https://didyouknowfacts.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-06-at-10.17.36-AM.png", "https://img.ifunny.co/images/a444a49f9ea890b11df1d5bd439b20ae46c4f6a9b932e7fca9f5a7cb1623c0d0_1.jpg"];

// Button to Show Deck
buttonShow.onclick = function() {
    // Log message
    
    console.log("Showing the deck...");
    // For loop
    for (let card = 0; card < cards.length; card++) {
        game.insertAdjacentHTML("beforeend",
            "<div style='background-image: url(" +
            cards[card] +
            ")' class='card'>");
    }
};

// Button to Double Deck
buttonDouble.onclick = function() {
    console.log("Deck has " + cards.length + " cards.");
    for (let card of cards) {
        if (cards.length !== 16) {
            cards.push(card);
            game.insertAdjacentHTML("beforeend", "<div style= 'background-image: url(" + card + ")' class= 'card'>");
        }
    }
    buttonDouble.style.color = "silver";
    console.log("Now the deck has " + cards.length + " cards.");
};

// Button to Shuffle Cards
buttonShuffle.onclick = function() {
    shuffle(cards);
    game.innerHTML = "";
    let i = 0;
    for (let card of cards) {
        game.insertAdjacentHTML("beforeend", "<div style= 'background-image: url(" + card + ")' id=" + i + " class= 'card'>");
        i = i + 1;
    }
    buttonShuffle.style.color = "black";
};

/* ---------------------------------------------------
DON'T CHANGE THE Fisher-Yates SHUFFLE FUNCTION BELOW!
--------------------------------------------------- */
function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;
    // While there are elements to shuffle...
    while (currentIndex > 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex = currentIndex - 1;
        // Swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }
    return array;

}
// Button to Flip All Cards
buttonFlip.onclick = function() {
    let i = 0;
    for (card of cards) {
        document.getElementById(i).style.backgroundImage = "";
        i = i + 1;
    }

};

// Here we need a function for clicking on individual cards.
// (It won't work until we finish writing it.)
$(document).click(function(event) {
    // Get the id property of the clicked thing.
    let clickedId = event.target.id;
    console.log(clickedId);
    if (clickedId !== "") {
        document.getElementById(clickedId).style.backgroundImage = "url('" + cards[clickedId] + "')";
        clickedIds.push(clickedId);
        console.log(clickedIds);
        if (clickedIds.length === 2) {
            let card1picture = document.getElementById(clickedIds[0]).style.backgroundImage;
            let card2picture = document.getElementById(clickedIds[1]).style.backgroundImage;
            console.log(card1picture);
            console.log(card2picture);
            if (card1picture === card2picture) {
                console.log("match");
                document.getElementById(clickedIds[0]).id = "";
                document.getElementById(clickedIds[1]).id = "";
                clickedIds = [];
                console.log(clickedIds);
            }
        } else if (clickedIds.length > 2) {
            document.getElementById(clickedIds[0]).style.backgroundImage = "";
            document.getElementById(clickedIds[1]).style.backgroundImage = "";
            clickedIds = [];
            clickedIds.push(clickedId);
            console.log(clickedIds);
        }
    }

});
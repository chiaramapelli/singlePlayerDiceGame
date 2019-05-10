let array = [];
let array2 = [];
let prevNumber = 0;
array[1] = document.getElementById("firstDice");
array[2] = document.getElementById("secondDice");
array[3] = document.getElementById("thirdDice");
array[4] = document.getElementById("fourthDice");
array[5] = document.getElementById("fifthDice");
array[6] = document.getElementById("sixthDice");

const getRandom = (number) => {
    return Math.floor(Math.random() * 6) + 1;
};

let button = document.getElementById('button');
button.onclick = function () {
    number = getRandom();
    printNumber(number);
    displayDice(number);
};

const printNumber = (number) => {
    let space = document.getElementById('space');
    space.innerHTML = number;
};

const displayDice = (number) => {
    console.log(prevNumber)
    if (prevNumber) {
        array[prevNumber].style.display = "none";
    }
    array[number].style.display = "block";
    prevNumber = number;
};


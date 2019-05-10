let array = [];
let array2 = [];
let totalScore = 0;
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
    for (var i = 0; i < array2.length; i++) {
        totalScore += array2[i];
        console.log(totalScore);
      }
    if (totalScore >= 20) {
        alert('You lose!')
    }
};

const displayDice = (number) => {
    console.log(array2)
    if (array2[0] == undefined) {
        array[number].style.display = "block";
        array2.push(number);
    } else {
        array[array2[0]].style.display = "none";
        array2.shift();
        array[number].style.display = "block";
        array2.push(number);
    }
};


let homeDisplay = document.getElementById("homeDisplay");
let awayDisplay = document.getElementById("awayDisplay");

let homeScroe = 0;
let awayScroe = 0;
let temp1, temp2;

homeDisplay.textContent = homeScroe;
awayDisplay.textContent = awayScroe;

function homeOne() {
    homeScroe += 1;
    homeDisplay.textContent = homeScroe;
}

function homeTwo() {
    homeScroe += 2;
    homeDisplay.textContent = homeScroe;
}

function homeThree() {
    homeScroe += 3;
    homeDisplay.textContent = homeScroe;
}


function awayOne() {
    awayScroe += 1;
    awayDisplay.textContent = awayScroe;
}

function awayTwo() {
    awayScroe += 2;
    awayDisplay.textContent = awayScroe;
}

function awayThree() {
    awayScroe += 3;
    awayDisplay.textContent = awayScroe;
}

function previous() {
    homeDisplay.textContent = temp1;
    awayDisplay.textContent = temp2;
}

function reset() {
    temp1 = homeDisplay.textContent;
    temp2 = awayDisplay.textContent;
    homeScroe = 0;
    awayScroe = 0;
    homeDisplay.textContent = homeScroe;
    awayDisplay.textContent = awayScroe;
}



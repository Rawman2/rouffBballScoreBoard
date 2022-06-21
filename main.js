let counter = 0;
function addScore() {
    counter++;
    document.getElementById("scoreHome").innerText = counter;
}

function add2Score() {
    counter += 2;
    document.getElementById("scoreHome").innerText = counter;
}

function add3Score() {
    counter += 3;
    document.getElementById("scoreHome").innerText = counter;
}

function addScoreO() {
    counter++;
    document.getElementById("scoreGuest").innerText = counter;
}

function add2ScoreO() {
    counter += 2;
    document.getElementById("scoreGuest").innerText = counter;
}

function add3ScoreO() {
    counter += 3;
    document.getElementById("scoreGuest").innerText = counter;
}
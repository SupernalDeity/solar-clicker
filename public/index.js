const clickerBtn = document.querySelector('.clicker');

let currentScore = 0;
let scoreOverall = 0;

// Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune, Pluto
let mercury = 0;
let venus = 0;
let earth = 0;
let mars = 0;
let jupiter = 0;
let saturn = 0;
let uranus = 0;
let neptune = 0;
let pluto = 0;

increaseScore = (event) => {
  event.preventDefault();
  currentScore = currentScore + 1;
  scoreOverall = scoreOverall +1;
  console.log(currentScore);
};

scoreOverTime = () => {
currentScore = currentScore + ((mercury * 5) + (venus * 10) + (earth * 15) + (mars * 20) + (jupiter * 25) + (saturn * 30) + (uranus * 35) + (neptune * 40) + (pluto * 45));
scoreOverall = scoreOverall + ((mercury * 5) + (venus * 10) + (earth * 15) + (mars * 20) + (jupiter * 25) + (saturn * 30) + (uranus * 35) + (neptune * 40) + (pluto * 45));
console.log(currentScore);
};

//increases the score ever second, 1000ms = 1s
setInterval(scoreOverTime, 1000);

clickerBtn.addEventListener('click', increaseScore);


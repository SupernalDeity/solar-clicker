const clickerBtn = document.querySelector('.clicker');
// const pointsEL = document.querySelector('')

const mercuryBtn = document.querySelector('.mercury');
const venusBtn = document.querySelector('.venus');
const earthBtn = document.querySelector('.earth');
const marsBtn = document.querySelector('.mars');
const jupiterBtn = document.querySelector('.jupiter');
const saturnBtn = document.querySelector('.saturn');
const uranusBtn = document.querySelector('.uranus');
const neptuneBtn = document.querySelector('.neptune');
const plutoBtn = document.querySelector('.pluto');

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

let mercuryCost = 50;
let venusCost = 400;
let earthCost = 900;
let marsCost = 2000;
let jupiterCost = 5000;
let saturnCost = 15000;
let uranusCost = 40000;
let neptuneCost = 90000;
let plutoCost = 250000;

increaseScore = (event) => {
  event.preventDefault();
  currentScore = currentScore + 1;
  scoreOverall = scoreOverall + 1;
  console.log(currentScore);
};

purchaseMercury = () => {
  if (currentScore >= mercuryCost) {
    currentScore = (currentScore - mercuryCost);
    mercury = (mercury + 1);
    mercuryCost = (mercuryCost * 1.15);
  };
};

purchaseVenus = () => {
  if (currentScore >= venusCost) {
    currentScore = (currentScore - venusCost);
    venus = (venus + 1);
    venusCost = (venusCost * 1.15);
  };
};

purchaseEarth = () => {
  if (currentScore > earthCost) {
    currentScore = (currentScore - earthCost);
    earth = (earth + 1);
    earthCost = (earthCost * 1.15);
  };
};

purchaseMars = () => {
  if (currentScore > marsCost) {
    currentScore = (currentScore - marsCost);
    mars = (mars + 1);
    marsCost = (marsCost * 1.15);
  };
};

purchaseJupiter = () => {
  if (currentScore >= jupiterCost) {
    currentScore = (currentScore - jupiterCost);
    jupiter = (jupiter + 1);
    jupiterCost = (jupiterCost * 1.15);
  };
};

purchaseSaturn = () => {
  if (currentScore >= saturnCost) {
    currentScore = (currentScore - saturnCost);
    saturn = (saturn + 1);
    saturnCost = (saturnCost * 1.15);
  };
};

purchaseUranus = () => {
  if (currentScore >= uranusCost) {
    currentScore = (currentScore - uranusCost);
    uranus = (uranus + 1);
    uranusCost = (uranusCost * 1.15);
  };
};

purchaseNeptune = () => {
  if (currentScore >= neptuneCost) {
    currentScore = (currentScore - neptuneCost);
    neptune = (neptune + 1);
    neptuneCost = (neptuneCost * 1.15);
  };
};

purchasePluto = () => {
  if (currentScore >= plutoCost) {
    currentScore = (currentScore - plutoCost);
    pluto = (pluto + 1);
    plutoCost = (plutoCost * 1.15);
  };
};

scoreOverTime = () => {
  currentScore = currentScore + ((mercury * 3) + (venus * 30) + (earth * 90) + (mars * 240) + (jupiter * 500) + (saturn * 1200) + (uranus * 3000) + (neptune * 7000) + (pluto * 18000));
  scoreOverall = scoreOverall + ((mercury * 3) + (venus * 30) + (earth * 90) + (mars * 240) + (jupiter * 500) + (saturn * 1200) + (uranus * 3000) + (neptune * 7000) + (pluto * 18000));
  console.log(currentScore);
};

//increases the score ever second, 1000ms = 1s
setInterval(scoreOverTime, 1000);

clickerBtn.addEventListener('click', increaseScore);
mercuryBtn.addEventListener('click', purchaseMercury);
venusBtn.addEventListener('click', purchaseVenus);
earthBtn.addEventListener('click', purchaseEarth);
marsBtn.addEventListener('click', purchaseMars);
jupiterBtn.addEventListener('click', purchaseJupiter);
saturnBtn.addEventListener('click', purchaseSaturn);
uranusBtn.addEventListener('click', purchaseUranus);
neptuneBtn.addEventListener('click', purchaseNeptune);
plutoBtn.addEventListener('click', purchasePluto);

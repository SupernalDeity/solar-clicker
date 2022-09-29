const clickerBtn = document.querySelector('.clicker');
const starsEL = document.querySelector('.stars');

const mercuryBtn = document.querySelector('.mercury');
const venusBtn = document.querySelector('.venus');
const earthBtn = document.querySelector('.earth');
const marsBtn = document.querySelector('.mars');
const jupiterBtn = document.querySelector('.jupiter');
const saturnBtn = document.querySelector('.saturn');
const uranusBtn = document.querySelector('.uranus');
const neptuneBtn = document.querySelector('.neptune');
const plutoBtn = document.querySelector('.pluto');

const mercuryStars = document.querySelector('.mercury-stars');
const venusStars = document.querySelector('.venus-stars');
const earthStars = document.querySelector('.earth-stars');
const marsStars = document.querySelector('.mars-stars');
const jupiterStars= document.querySelector('.jupiter-stars');
const saturnStars = document.querySelector('.saturn-stars');
const uranusStars = document.querySelector('.uranus-stars');
const neptuneStars = document.querySelector('.neptune-stars');
const plutoStars = document.querySelector('.pluto-stars');

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

let mercuryCost = 15;
let venusCost = 200;
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
  starsEL.innerHTML = `Stars: ${currentScore}`;
};

purchaseMercury = () => {
  if (currentScore >= mercuryCost) {
    currentScore = (currentScore - mercuryCost);
    mercury = (mercury + 1);
    mercuryCost = Math.round(mercuryCost * 1.25);
    mercuryStars.innerHTML = `${mercuryCost} Stars`;
    starsEL.innerHTML = `Stars: ${currentScore}`
  };
};

purchaseVenus = () => {
  if (currentScore >= venusCost) {
    currentScore = (currentScore - venusCost);
    venus = (venus + 1);
    venusCost = Math.round(venusCost * 1.25);
    venusStars.innerHTML = `${venusCost} Stars`;
    starsEL.innerHTML = `Stars: ${currentScore}`
  };
};

purchaseEarth = () => {
  if (currentScore > earthCost) {
    currentScore = (currentScore - earthCost);
    earth = (earth + 1);
    earthCost = Math.round(earthCost * 1.25);
    earthStars.innerHTML = `${earthCost} Stars`;
    starsEL.innerHTML = `Stars: ${currentScore}`
  };
};

purchaseMars = () => {
  if (currentScore > marsCost) {
    currentScore = (currentScore - marsCost);
    mars = (mars + 1);
    marsCost = Math.round(marsCost * 1.25);
    marsStars.innerHTML = `${marsCost} Stars`;
    starsEL.innerHTML = `Stars: ${currentScore}`
  };
};

purchaseJupiter = () => {
  if (currentScore >= jupiterCost) {
    currentScore = (currentScore - jupiterCost);
    jupiter = (jupiter + 1);
    jupiterCost = Math.round(jupiterCost * 1.25);
    jupiterStars.innerHTML = `${jupiterCost} Stars`;
    starsEL.innerHTML = `Stars: ${currentScore}`
  };
};

purchaseSaturn = () => {
  if (currentScore >= saturnCost) {
    currentScore = (currentScore - saturnCost);
    saturn = (saturn + 1);
    saturnCost = Math.round(saturnCost * 1.25);
    saturnStars.innerHTML = `${saturnCost} Stars`;
    starsEL.innerHTML = `Stars: ${currentScore}`
  };
};

purchaseUranus = () => {
  if (currentScore >= uranusCost) {
    currentScore = (currentScore - uranusCost);
    uranus = (uranus + 1);
    uranusCost = Math.round(uranusCost * 1.25);
    uranusStars.innerHTML = `${uranusCost} Stars`;
    starsEL.innerHTML = `Stars: ${currentScore}`
  };
};

purchaseNeptune = () => {
  if (currentScore >= neptuneCost) {
    currentScore = (currentScore - neptuneCost);
    neptune = (neptune + 1);
    neptuneCost = Math.round(neptuneCost * 1.25);
    neptuneStars.innerHTML = `${neptuneCost} Stars`;
    starsEL.innerHTML = `Stars: ${currentScore}`
  };
};

purchasePluto = () => {
  if (currentScore >= plutoCost) {
    currentScore = (currentScore - plutoCost);
    pluto = (pluto + 1);
    plutoCost = Math.round(plutoCost * 1.25);
    plutoStars.innerHTML = `${plutoCost} Stars`;
    starsEL.innerHTML = `Stars: ${currentScore}`
  };
};

scoreOverTime = () => {
  currentScore = currentScore + ((mercury * 2) + (venus * 30) + (earth * 90) + (mars * 240) + (jupiter * 500) + (saturn * 1200) + (uranus * 3000) + (neptune * 7000) + (pluto * 18000));
  scoreOverall = scoreOverall + ((mercury * 3) + (venus * 30) + (earth * 90) + (mars * 240) + (jupiter * 500) + (saturn * 1200) + (uranus * 3000) + (neptune * 7000) + (pluto * 18000));
  starsEL.innerHTML = `Stars: ${currentScore}`;
};

//increases the score every second, 1000ms = 1s
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
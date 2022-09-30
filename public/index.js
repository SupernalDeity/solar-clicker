const clickerBtn = document.querySelector('.clicker');
const starsEL = document.querySelector('.stars');

const universeEl = document.querySelector('#universe');

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

let mercuryCost = 15;
let venusCost = 200;
let earthCost = 900;
let marsCost = 2000;
let jupiterCost = 5000;
let saturnCost = 15000;
let uranusCost = 40000;
let neptuneCost = 90000;
let plutoCost = 250000;

const increaseScore = async (event) => {
  currentScore = currentScore + 1;
  scoreOverall = scoreOverall + 1;
  starsEL.innerHTML = `Stars: ${currentScore}`;
};

const purchasePlanet = async (event) => {
  if (event.target.matches('button')) {
    const name = event.target.dataset.name;
    const amount = event.target.dataset.amount;
    
    const response = await fetch(`http://localhost:3001/api/users/1/universe/${name}/add/${amount}`, {
      method: 'PUT',
    });
    const data = await response.json();
    console.log(data);
  }
  // if (currentScore >= mercuryCost) {
  //   // currentScore = (currentScore - mercuryCost);
  //   mercury = (mercury + 1);
  //   mercuryCost = Math.round(mercuryCost * 1.25);
  //   mercuryStars.innerHTML = `${mercuryCost} Stars`;
  //   starsEL.innerHTML = `Stars: ${currentScore}`
  // };
};


// scoreOverTime = () => {
  //   currentScore = currentScore + ((mercury * 2) + (venus * 30) + (earth * 90) + (mars * 240) + (jupiter * 500) + (saturn * 1200) + (uranus * 3000) + (neptune * 7000) + (pluto * 18000));
  //   scoreOverall = scoreOverall + ((mercury * 3) + (venus * 30) + (earth * 90) + (mars * 240) + (jupiter * 500) + (saturn * 1200) + (uranus * 3000) + (neptune * 7000) + (pluto * 18000));
  //   starsEL.innerHTML = `Stars: ${currentScore}`;
  // };
  
  // // increases the score every second, 1000ms = 1s
  // setInterval(scoreOverTime, 1000);
  
universeEl.addEventListener('click', purchasePlanet);
clickerBtn.addEventListener('click', increaseScore);

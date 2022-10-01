const clickerBtn = document.querySelector('.clicker');
const starsEL = document.querySelector('.stars');

const universeEl = document.querySelector('#universe');

const increaseScore = async () => {
  const response = await fetch(`http://localhost:3001/api/game/1/score`, {
    method: 'PUT',
  });
  const data = await response.json();

  starsEL.innerHTML = `Stars: ${data.stars}`;
};

const purchasePlanet = async (event) => {
  if (event.target.matches('button')) {
    const name = event.target.dataset.name;
    const amount = event.target.dataset.amount;
    const planetCost =  name + '_cost';
    const storeStars = document.querySelector(`.${name}-stars`);

    const response = await fetch(`http://localhost:3001/api/game/1/universe/${name}/add/${amount}`, {
      method: 'PUT',
    });
    const data = await response.json();

    storeStars.innerHTML = `${data[planetCost]} Stars`;
    starsEL.innerHTML =  `Stars: ${data.stars}`;
  }
};

scoreOverTime = async () => {
  const response = await fetch(`http://localhost:3001/api/game/1/universe`, {
    method: 'GET',
  });
  const data = await response.json();
  console.log(data);

  // currentScore = data.score.stars + ((data.universe.mercury * 2) + (data.universe.venus * 30) + (data.universe.earth * 90) + (data.universe.mars * 240) + (data.universe.jupiter * 500) + (data.universe.saturn * 1200) + (data.universe.uranus * 3000) + (data.universe.neptune * 7000) + (data.universe.pluto * 18000));

  // scoreOverall = data.score.accumulation + ((data.universe.mercury * 2) + (data.universe.venus * 30) + (data.universe.earth * 90) + (data.universe.mars * 240) + (data.universe.jupiter * 500) + (data.universe.saturn * 1200) + (data.universe.uranus * 3000) + (data.universe.neptune * 7000) + (data.universe.pluto * 18000));

  //   starsEL.innerHTML = `Stars: ${currentScore}`;
  };
  
  // // increases the score every second, 1000ms = 1s
  // setInterval(scoreOverTime, 1000);
  
universeEl.addEventListener('click', purchasePlanet);
clickerBtn.addEventListener('click', increaseScore);

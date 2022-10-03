const clickerBtn = document.querySelector(".clicker");
const starsEL = document.querySelector(".stars");
const highScorePage = document.querySelector(".highScorePage")

const universeEl = document.querySelector("#universe");

const initialLoad = async () => {
  const response = await fetch(`http://localhost:3001/api/game/universe`, {
    method: "GET",
  });
  const data = await response.json();

  let newArray = Object.keys(data.score)
  for (let i = 3; i < 21 ;  i += 2) {
    let name = newArray[i];

    const storeStars = await document.querySelector(`.${name}-stars`);
    const storeCount = await document.querySelector(`.has${name}`);
    const planetCost = name + "_cost";

    console.log(`${data.score[name]}`);

    storeStars.innerHTML = `${data.score[planetCost]}`;
    storeCount.innerHTML = `${data.score[name]}`;
  }
};

const increaseScore = async () => {
  const response = await fetch(`http://localhost:3001/api/game/score`, {
    method: "PUT",
  });
  const data = await response.json();

  starsEL.innerHTML = `Stars: ${data.stars}`;
};

const purchasePlanet = async (event) => {
  if (event.target.matches("button")) {
    const name = event.target.dataset.name;
    const amount = event.target.dataset.amount;
    const planetCost = name + "_cost";
    const storeStars = document.querySelector(`.${name}-stars`);
    const storeCount = document.querySelector(`.has${name}`);

    const response = await fetch(
      `http://localhost:3001/api/game/universe/${name}/add/${amount}`,
      {
        method: "PUT",
      }
    );
    const data = await response.json();

    storeStars.innerHTML = `${data[planetCost]}`;
    starsEL.innerHTML = `Stars: ${data.stars}`;
    storeCount.innerHTML = `${data[name]}`;
  }
};

scoreOverTime = async () => {
  const response = await fetch(`http://localhost:3001/api/game/universe`, {
    method: "PUT",
  });
  const data = await response.json();

  if (starsEL) starsEL.innerHTML = `Stars: ${data.stars}`;
};

// // increases the score every second, 1000ms = 1s
setInterval(scoreOverTime, 1000);

const highScore = () => {
  window.location = 'http://localhost:3001/api/scores'
}

initialLoad();
highScorePage.addEventListener('click', highScore)
universeEl.addEventListener("click", purchasePlanet);
clickerBtn.addEventListener("click", increaseScore);

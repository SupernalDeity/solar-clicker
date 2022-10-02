const clickerBtn = document.querySelector(".clicker");
const starsEL = document.querySelector(".stars");

const universeEl = document.querySelector("#universe");

const initialLoad = async () => {
  const response = await fetch(`http://localhost:3001/api/game/1/universe`, {
    method: "GET",
  });
  const data = await response.json();
  console.log(data);

  let newArray = Object.keys(data.score)
  for (let i = 3; i < 21 ;  i += 2) {
    let name = newArray[i];

    const storeStars = await document.querySelector(`.${name}-stars`);
    const planetCost = name + "_cost";

    storeStars.innerHTML = `${data.score[planetCost]} Stars`;
  }
};

const increaseScore = async () => {
  const response = await fetch(`http://localhost:3001/api/game/1/score`, {
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

    const response = await fetch(
      `http://localhost:3001/api/game/1/universe/${name}/add/${amount}`,
      {
        method: "PUT",
      }
    );
    const data = await response.json();

    storeStars.innerHTML = `${data[planetCost]} Stars`;
    starsEL.innerHTML = `Stars: ${data.stars}`;
  }
};

scoreOverTime = async () => {
  const response = await fetch(`http://localhost:3001/api/game/1/universe`, {
    method: "PUT",
  });
  const data = await response.json();

  starsEL.innerHTML = `Stars: ${data.stars}`;
};

// // increases the score every second, 1000ms = 1s
setInterval(scoreOverTime, 1000);

initialLoad();

universeEl.addEventListener("click", purchasePlanet);
clickerBtn.addEventListener("click", increaseScore);

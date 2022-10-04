const clickerBtn = document.querySelector(".clicker");
const starsEL = document.querySelector(".stars");
const highScorePage = document.querySelector(".highScorePage")
const universeEl = document.querySelector("#universe");

// updates the prices of the planets on inital load based on database values
const initialLoad = async () => {
  const response = await fetch(`/api/game/universe`, {
    method: "GET",
  });
  const data = await response.json();

  let newArray = Object.keys(data.score)
  for (let i = 3; i < 21 ;  i += 2) {
    let name = newArray[i];

    const storeStars = await document.querySelector(`.${name}-stars`);
    const storeCount = await document.querySelector(`.has${name}`);
    const planetCost = name + "_cost";

    storeStars.innerHTML = `${data.score[planetCost]}`;
    storeCount.innerHTML = `${data.score[name]}`;
  }
};

//increases the score in the database each time a person clicks and updates the value on the screen
const increaseScore = async () => {
  const response = await fetch(`/api/game/score`, {
    method: "PUT",
  });
  const data = await response.json();

  starsEL.innerHTML = `Stars: ${data.stars}`;
};

// updates the planets a user owns in the database and updates the count on the screen
const purchasePlanet = async (event) => {
  if (event.target.matches("button")) {
    const name = event.target.dataset.name;
    const amount = event.target.dataset.amount;
    const planetCost = name + "_cost";
    const storeStars = document.querySelector(`.${name}-stars`);
    const storeCount = document.querySelector(`.has${name}`);

    const response = await fetch(
      `/api/game/universe/${name}/add/${amount}`,
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

//increases the score in the database every time its called based on planets owned
scoreOverTime = async () => {
  const response = await fetch(`/api/game/universe`, {
    method: "PUT",
  });
  const data = await response.json();

  if (starsEL) starsEL.innerHTML = `Stars: ${data.stars}`;
};

// // increases the score every second, 1000ms = 1s
setInterval(scoreOverTime, 1000);

let lastHovered;
const highScore = () => {
  window.location = '/api/scores'
}

function displayTxt(evt) {
  // evt.currentTarget.querySelector( '.innerText' ).classList.remove( 'hide' );
  if(evt.target.type === "submit"){
    lastHovered = evt.target.parentElement.children[3]
    lastHovered.classList.remove('hide')
  }
}

// if leave -> hide txt
function removeTxt(evt) {
  if(lastHovered){
    lastHovered.classList.add('hide');
    lastHovered = undefined
  }
  }

/* mouseover and mouseout events to `.wrapper` element */
var wrappers = document.querySelector( '#universe' );
wrappers.addEventListener( 'mouseover', displayTxt );
wrappers.addEventListener( 'mouseout', removeTxt );

highScorePage.addEventListener('click', highScore)
universeEl.addEventListener("click", purchasePlanet);
clickerBtn.addEventListener("click", increaseScore);

initialLoad();
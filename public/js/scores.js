const scoredv = document.getElementById("scoredv");
const scoredv1 = document.getElementById("scoredv1");

const initialLoad = async () => {
  const response = await fetch(`http://localhost:3001/api/game/allusers`, {
    method: "GET",
  });
  const data = await response.json();

  for (let i = 0; i < data.length; i++) {
    let list = document.createElement("li");
    let scoreEl = document.createElement("li");
    list.className = "li1";
    list.innerHTML = data[i].name;
    scoreEl.innerHTML = data[i].score.accumulation;
    scoreEl.className = "scoreE"
    scoredv.appendChild(list);
    scoredv1.appendChild(scoreEl);
  }
};
initialLoad();

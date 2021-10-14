const player1 = {
    name:'Scorpion',
    hp: 95,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon:["kunai"],
    attack: function () {
        console.log(this.name + " Fight");
      },
}

player1.attack();

const player2 = {
    name: "LiuKang",
    hp: 90,
    img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
    weapon: ["sword"],
    attack: function () {
        console.log(this.name + " Fight");
      },
}

player2.attack();


function createPlayer(player, namePlayer, obj) {
    const div1 = document.createElement("div");
    div1.classList.add(player);
    
    div2 = document.createElement("div");
    div2.classList.add("progressbar");

    const life = document.createElement("div");
    life.classList.add("life");
    life.style.width = player.hp + "%";

    const name = document.createElement("div");
    name.classList.add("name");
    name.innerText = namePlayer.name;

    div3 = document.createElement("div");
    div3.classList.add("character");

    const img = document.createElement("img");
    img.src = namePlayer.img;

    div2.appendChild(life);
    div2.appendChild(name);
    div3.appendChild(img);
    div1.appendChild(div2);
    div1.appendChild(div3);
    
    const arenas = document.querySelector(".arenas");
    arenas.appendChild(div1);
}

createPlayer("player1", player1);
createPlayer("player2", player2);
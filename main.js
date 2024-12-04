const $arenas = document.querySelector(".arenas");
const $randomButton = document.querySelector(".button");

const player1 = {
    player: 1,
    name:'Scorpion',
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon:["kunai"],
    attack: function () {
        console.log(this.name + " Fight");
      },
}

player1.attack();

const player2 = {
    player: 2,
    name: "LiuKang",
    hp: 100,
    img: "http://reactmarathon-api.herokuapp.com/assets/liukang.gif",
    weapon: ["sword"],
    attack: function () {
        console.log(this.name + " Fight");
      },
}

player2.attack();

function createElement(tag, className){
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    
    return $tag;
}

function createPlayer(playerObj) {
    const $player = createElement("div", 'player'+ playerObj.player);
    const $life = createElement("div", 'life');
    const $name = createElement("div", 'name');
    const $img = createElement("img");
    const $progressbar = createElement('div', 'progressbar');
    const $character = createElement('div', 'character');

    /*$player.classList.add(playerObj);
    
    $progressbar = createElement("div", 'progressbar');
    $progressbar.classList.add("progressbar");

    $life.classList.add("life");*/
    $life.style.width = playerObj.hp + "%";

    //$name.classList.add("name");
    $name.innerText = playerObj.name;

    //$character = createElement("div");
    //$character.classList.add("character");

    
    $img.src = playerObj.img;

    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);
    
    return $player;
}

function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function changeHP (player) {
    const $playerLife = document.querySelector('.player'+ player.player +' .life');
    
    if (player.hp >= 0) {
        player.hp -= getRandomInRange(5, 25);
        $playerLife.style.width = player.hp + '%';
        if (player.hp < 0) {
            player.hp = 0;
        }
    }

    $playerLife.style.width = player.hp + '%';
    console.log(player.hp + " " + player.name);
    if (player.hp <= 0) {
        

        if (player1.hp > player2.hp) {
            $arenas.appendChild(playerWin(player1.name));
        } else {
            $arenas.appendChild(playerWin(player2.name));
        }
    }
}

function playerWin(name) {
    const $winTitle = createElement('div', 'loseTitle');
    $winTitle.innerText = name + ' Wins';
    $randomButton.disabled = true;
    return $winTitle;
}

// function playerLoose(name) {
//     const $loseTitle = createElement('div', 'looseTitle');
//     $loseTitle.innerText = this.name + ' loose';
//     return $loseTitle;
// }



$randomButton.addEventListener('click', function() {
    console.log('na n***i');
    changeHP(player1);
    changeHP(player2);  
})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));


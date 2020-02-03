const player = { //player stats
   name: "Hero",
   HP: 100,
   maxHP: 100,
   STR: 1,
   meso: 0,
};

function updateValues(){
   document.getElementById("playerHP").innerText = player.HP;
   document.getElementById("enemyHP").innerText = monster.HP;
}
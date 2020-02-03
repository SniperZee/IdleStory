const player = { //player stats
   name: "Hero",
   lvl: 1,
   xp: 0,
   xpToNextLevel: 100,
   hp: 100,
   hpMax: 100,
   str: 1,
   meso: 0,
};
function levelUp(){
   player.xp -= player.xpToNextLevel; //TODO: Have XP to next level scale.
   player.lvl += 1 //TODO: Benefits for leveling.
}

function updateValues(){
   document.getElementById("playerHP").innerText = player.hp + "/" + player.hpMax;
   document.getElementById("enemyHP").innerText = monster.hp + "/" + monster.hpMax;
   document.getElementById("level").innerText = player.lvl;
   document.getElementById("xp").innerText = player.xp + "/" + player.xpToNextLevel;
}
//----------------DEBUG FUNCTIONS-----------------//
function heal(){
   player.hp = player.hpMax;
   console.log("Healed the player");
   updateValues();
}
function hurt(){
   player.hp = 1;
   console.log("Hurt the player");
   updateValues()
}

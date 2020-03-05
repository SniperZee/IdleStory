const monster = { //monster stats
   name: "Snail",
   hp: 10,
   hpMax: 10,
   att: 1,
   mesoReward: 10,
   xpReward: 10,
};
let animationPlaying = false;
function attack() { //attacks the monster
   if (animationPlaying === false){animate();} //if there's no animation playing, animate the player
   monster.hp -= player.att;
   if(monster.hp <= 0){ // if the monster has no health, give meso, and bring back the monster
      monsterDie();
   }else{ // if the monster is alive, it'll attack the player
      player.hp -= monster.att;
      if(player.hp <= 0){//if the player dies, take 10% of their exp
         playerDie();
      }
   }
   updateValues();
}
function monsterDie(){
   console.log("Monster has died.");
   monster.hp = monster.hpMax;
   player.meso += monster.mesoReward;
   player.xp += monster.xpReward;
   if (player.xp >= player.xpToNextLevel){
      levelUp();
   }
}
function playerDie(){
   console.log("Player has died.");
   player.xp -= Math.round(player.xp *= 0.1);
   player.hp = player.hpMax;
}
function animate() {
   animationPlaying = true;
   document.getElementById("playerSprite").src = "assets/sprites/player/attack.gif";
   document.getElementById("enemySprite").src = "assets/sprites/enemy/hurt.png";
   setTimeout(function(){
      document.getElementById("playerSprite").src = "assets/sprites/player/idle.png";
      document.getElementById("enemySprite").src = "assets/sprites/enemy/idle.png";
      animationPlaying = false;
      }, 650);
}
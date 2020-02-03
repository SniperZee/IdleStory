const monster = { //monster stats
   name: "Snail",
   hp: 10,
   hpMax: 10,
   str: 1,
   mesoReward: 10,
   xpReward: 10,
};
function attack() { //attacks the monster
   monster.hp -= player.str;
   if(monster.hp <= 0){ // if the monster has no health, give meso, and bring back the monster
      monsterDie();
   }else{ // if the monster is alive, it'll attack the player
      player.hp -= monster.str;
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
   player.xp -= Math.round(player.xp *= 0.9);
   player.hp = player.hpMax;
}
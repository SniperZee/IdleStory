const monster = { //monster stats
   HP: 10,
   maxHP: 10,
   STR: 1,
   mesoReward: 10,
};

function attack() { //attacks the monster
   monster.HP -= player.STR;
   if(monster.HP <= 0){ // if the monster has no health, give gold, and bring back the monster
      monsterDie();
   }else{ // if the monster is alive, it'll attack the player
      player.HP -= monster.STR;
      if(player.HP <= 0){//if the player dies, take half of their gold
         playerDie();
      }
   }
   updateValues();
}
function monsterDie(){
   console.log("Monster has died.");
   monster.HP = monster.maxHP;
   player.meso += monster.mesoReward;
}
function playerDie(){
   console.log("Player has died.");
   player.meso -= Math.round(player.meso /= 2);
   player.HP = player.maxHP;
}
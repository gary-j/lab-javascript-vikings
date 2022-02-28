// Soldier
class Soldier {
  constructor(health, strength){
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength
  }
  receiveDamage(damage){
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength){
    super(name, health, strength)
    this.name=name
    this.health=health
    this.strength=strength
  }
  receiveDamage(damage){
    this.health -= damage;
    return this.health>0 ? `${this.name} has received ${damage} points of damage`:`${this.name} has died in act of combat`; 
  }

  battleCry(){
    return `Odin Owns You All!`
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage){
    this.health -= damage;
    return this.health>0 ? `A Saxon has received ${damage} points of damage`:`A Saxon has died in combat`; 
  
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = []
    // this.vikingArmy = [{
    //   name: 'Gary',
    //   strength: 100,
    //   health: 100
    // }];
    this.saxonArmy = [];
  }


  addViking(vikingObj){
    this.vikingArmy.push(vikingObj)
  }

  addSaxon(saxonObj){
    this.saxonArmy.push(saxonObj)
  }

  vikingAttack(){
    if(this.vikingArmy.length && this.saxonArmy.length){

      //receiveDamage
      // 1. je vais chercher un viking au hasard dans le tableau
      const randomIndex = Math.floor(Math.random()*this.vikingArmy.length)
      console.log('index ------', randomIndex)
      let viking = this.vikingArmy[randomIndex];
      console.log(viking.strength + ' :viking');
      // 2. Je prend un Saxon au hasard dans le tabelau
      const randomIndex2 = Math.floor(Math.random()*this.saxonArmy.length)
      let saxon = this.saxonArmy[randomIndex2];
      console.log(saxon.strength + ' :saxon');
      // 3. je prend la force du viking 
      // et je la passe en argument de receiveDamage
      // je décrémente le health du saxon
      console.log(saxon.health + ': OLD HEALTH');
      saxon.receiveDamage(viking.strength);
      console.log(saxon.health + ': NEW HEALTH');
      if(saxon.health <=0){
        this.saxonArmy.splice(saxon, 1)
      }
    }
      
      
    }
}
//test de vikingAttack
const war = new War();
war.addViking(new Viking('tomVick', 80, 100));
war.addSaxon(new Saxon('bobSaxon', 80, 100));
war.vikingAttack();
// console.log(war.vikingAttack(40));

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

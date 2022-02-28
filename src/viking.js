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

  battleCry(){}
}

// Saxon
class Saxon {}

// War
class War {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}

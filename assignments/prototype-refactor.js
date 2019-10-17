/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
// function GameObject(obj) {
//   this.createdAt = obj.createdAt;
//   this.name = obj.name;
//   this.dimensions = obj.dimensions;
// }
// GameObject.prototype.destroy = function() {
//   return `${this.name} was removed from the game.`;
// }

class GameObject {
  constructor(obj) {
    this.createdAt = obj.createdAt;
    this.name = obj.name;
    this.dimensions = obj.dimensions;
  }

  destroy() {
    return `${this.name} was removed from the game.`;
  }
}

// function CharacterStats(obj) {
//   GameObject.call(this, obj);
//   this.healthPoints = obj.healthPoints;
// }
// CharacterStats.prototype = Object.create(GameObject.prototype);
// CharacterStats.prototype.takeDamage = function(amt) {
//   this.healthPoints -= amt;
//   return `${this.name} took ${amt} damage. ${this.healthPoints} HP left.`;
// }

class CharacterStats extends GameObject {
  constructor(obj) {
    super(obj);
    this.healthPoints = obj.healthPoints;
  }

  takeDamage(amt) {
    this.healthPoints -= amt;
    return `${this.name} took ${amt} damage. ${this.healthPoints} HP left.`;
  }
}

// function Humanoid(obj){
//   CharacterStats.call(this, obj);
//   this.team = obj.team;
//   this.weapons = obj.weapons;
//   this.language = obj.language;
// }
// Humanoid.prototype = Object.create(CharacterStats.prototype);
// Humanoid.prototype.greet = function() {
//   return `${this.name} offers a greeting in ${this.language}`;
// }

class Humanoid extends CharacterStats {
  constructor(obj) {
    super(obj);
    this.team = obj.team;
    this.weapons = obj.weapons;
    this.language = obj.language;
  }
  greet() {
    return `${this.name} offers a greetign in ${this.language}`;
  }
}

// function Villain(obj) {
//   Humanoid.call(this, obj);
// }
// Villain.prototype = Object.create(Humanoid.prototype);
// Villain.prototype.slap = function(targetObj) {
//   if (targetObj.healthPoints < 2) {
//     targetObj.takeDamage(1);
//     targetObj.destroy();
//     return `${targetObj.name} was destroyed by ${this.name}`;
//   } else {
//     targetObj.healthPoints--;
//     return `${targetObj.name} was hit by ${this.name}, HP reduced to ${targetObj.healthPoints}`;
//   }
// }

class Villain extends Humanoid {
  constructor(obj) {
    super(obj);
  }
  slap(targetObj) {
    if (targetObj.healthPoints < 2) {
      targetObj.takeDamage(1);
      targetObj.destroy();
      return `${targetObj.name} was destroyed by ${this.name}`;
    } else {
      targetObj.healthPoints--;
      return `${targetObj.name} was hit by ${this.name}, HP reduced to ${targetObj.healthPoints}`;
    }
  }
}

// function Hero(obj) {
//   Humanoid.call(this, obj);
// }
// Hero.prototype = Object.create(Humanoid.prototype);
// Hero.prototype.pray = function(targetObj) {
//   if (targetObj.healthPoints > 0) {
//     this.destroy.call(targetObj);
//     return `${targetObj.name} was destroyed by ${this.name} through the power of Faith!`;
//   }
// }

class Hero extends Humanoid {
  constructor(obj) {
    super(obj);
  }
  pray(targetObj) {
    if (targetObj.healthPoints > 0) {
      this.destroy.call(targetObj);
      return `${targetObj.name} was destroyed by ${this.name} through the power of Faith!`;
    }
  }
}

const mage = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'Bruce',
  team: 'Mage Guild',
  weapons: [
    'Staff of Shamalama',
  ],
  language: 'Common Tongue',
});

const swordsman = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: 'Sir Mustachio',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const archer = new Humanoid({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Lilith',
  team: 'Forest Kingdom',
  weapons: [
    'Bow',
    'Dagger',
  ],
  language: 'Elvish',
});

// console.log(mage.createdAt); // Today's date
// console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
// console.log(swordsman.healthPoints); // 15
// console.log(mage.name); // Bruce
// console.log(swordsman.team); // The Round Table
// console.log(mage.weapons); // Staff of Shamalama
// console.log(archer.language); // Elvish
// console.log(archer.greet()); // Lilith offers a greeting in Elvish.
// console.log(mage.takeDamage(5)); // Bruce took damage.
// console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.

const archNemesis = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 2,
    height: 2,
  },
  healthPoints: 15,
  name: '???Sir Mustachio???',
  team: 'The Round Table',
  weapons: [
    'Giant Sword',
    'Shield',
  ],
  language: 'Common Tongue',
});

const boyo = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 2,
    width: 1,
    height: 1,
  },
  healthPoints: 5,
  name: 'BicBoi',
  team: 'Best Buddies',
  weapons: [
    'Mallet',
  ],
  language: 'All the Words',
});
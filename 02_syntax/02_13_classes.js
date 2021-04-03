class Animal {
    constructor(name, voice) {
        this.name = name;
        this.voice = voice;
    }

    say() {
        console.log(`${this.name} goes ${this.voice}`);
    }
}

class Bird extends Animal {
    constructor(name, voice, canFly) {
        super(name, voice);
        super.say();
        this.canFly = canFly;
    }

    say() {
        console.log('Birds do not like to talk');
    }
}

//duck -> Bird.prototype -> Animal.prototype -> Object.prototype -> null
const duck = new Bird('Duck', 'quack', true);

duck.say();
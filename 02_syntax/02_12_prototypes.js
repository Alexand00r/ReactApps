/*
const dog = {
    name: 'dog',
    voice: 'woof',
    say() {
        console.log(`${this.name} goes ${this.voice}`);
    }
};

const cat = {
    name: 'cat',
    voice: 'meow',
    say() {
        console.log(`${this.name} goes ${this.voice}`);
    }
};

dog.say();
cat.say();
*/

/*
const animal = {
    say() {
        console.log(`${this.name} goes ${this.voice}`);
    }
};

const dog = {
    name: 'dog',
    voice: 'woof'
};
Object.setPrototypeOf(dog, animal); //такой вариант плохо сказывается на производительности

const cat = {
    name: 'cat',
    voice: 'meow'
};
Object.setPrototypeOf(cat, animal);

dog.say();
cat.say();
*/

/*
const animal = {
    say() {
        console.log(`${this.name} goes ${this.voice}`);
    }
};

function createAnimal(name, voice){
    const res = Object.create(animal);
    res.name = name;
    res.voice = voice;
    return res;
}

const dog = createAnimal('dog', 'woof');
const cat = createAnimal('cat', 'meow');

dog.say();
cat.say();
 */


function Animal(name, voice){
    this.name = name;
    this.voice = voice;
}

Animal.prototype.say = function () {
    console.log(`${this.name} goes ${this.voice}`);
}

const dog = new Animal('dog', 'woof');
const cat = new Animal('cat', 'meow');

dog.say();
cat.say();

//объявить объект без прототипа
const obj = Object.create(null);
const fib = [1,1,2,3,5,8,13];
const [a,,b,c] = fib;

console.log(a,b,c);

const line = [[12,3],[213,543]];
const [[p1x, p1y],[p2x, p2y]] = line;
console.log(p1x, p1y,p2x, p2y);

const people = ['pet','lucky','lion'];
const [x,y,,z='duck'] = people;
console.log(x,y,z);

const [first, ... others] = people;
console.log(first, others);

const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'pee',
    hamster: 'pee'
};

const animalSounds = Object.entries(dict);
console.log(animalSounds);
/*
const res = animalSounds.forEach((animal) => {
    console.log(animal.values() === 'pee');
})
*/

animalSounds.forEach((val) => {
   const [animal, sound] = val;
   if (sound === 'pee'){
       console.log(animal);
   }
});


const res = Object.entries(dict)
    //.filter((arr) => arr[1] === 'pee')
    .filter(([, sound]) => sound === 'pee')
    .map(([animal]) => animal);

console.log(res);


const shape = {
    type: 'segment',
    coordinates: {
        start: [10,12],
        end: [43,9]
    }
};

const {coordinates:
    { start: [startX, startY],
        end: [endX, endY]}} = shape;

console.log(startX, startY, endX, endY);
const person = {
    name: {
        first: 'Bob',
        last: 'Lil',
    },
    age: 9
};

//старый код
const firstN = person.name.first;
const lastN = person.name.last;

const { name: {first: firstName, last: lastName}, age } = person;
console.log('Age:', age, 'Name:', firstName, lastName);

const {permissons: {role = 'user'} = {} } = person;
console.log(role);

function connect({
    host = 'localHost',
    port = 12879,
    user = 'Vasyok'} = {}){
    console.log('host:', host, 'port:', port, 'user:', user);
}

connect();
connect({port:182192});
connect({user:'Me', port:182192});

const dict = {
    duck: 'quack',
    dog: 'wuff',
    mouse: 'pee'
};

const {duck, ... otherAnimals} = dict;

console.log(duck);
console.log(otherAnimals);
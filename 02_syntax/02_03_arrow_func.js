
const sq = (x) => x*x;

console.log(sq(45));

const arr = ['1','5','8','7'];

const res = arr
    .map((el) => parseInt(el))
    .filter((num) => num%2)
    .reduce((max, value) => Math.max(max, value), 0);

console.log(res);

const multiply = (x, y) => {
    return x*y;
};
const a = 19;
const b = 23;
console.log(multiply(a,b));


const greeter = {

    greet: function (name) {
        console.log('Hello', name);
    },

    greetAll: function (names) {
        names.forEach((name) => {
            this.greet(name);
        });
    }
};
greeter.greetAll(['Lol', 'Peter', 'Nikita']);
const x = 17;
const y = 12;

//старый код
const point = {
    x: x,
    y: y,

    draw: function (){
        //...
    }
};

//новый код
const p = {
    x,  //если названия параметра нет,
    y,  //то оно задается таким же, как присваиваемое значение
    draw(ctx) {
        //...
    }
};


const prefix = 'someText';

const data = {
    [prefix + 'name']: 'Bob',
    [prefix + 'age']: 32
};
console.log(data);


const defaults = {
    host: 'localHost',
    dbName: 'blob',
    user: 'admin'
};

const opts = {
    user: 'John',
    password: 'pass123'
};

const res = Object.assign({}, defaults, opts);
console.log(res);


const authData = {
    user: 'John',
    password: 'pass123',
    domens: ['test', 'prod']
};

const shallowCopy = Object.assign({}, authData);
console.log(shallowCopy);
authData.domens.push('uat');

console.log(shallowCopy);
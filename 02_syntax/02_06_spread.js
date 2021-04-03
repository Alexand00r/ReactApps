const arr = [1,3,56,9];

//старый код
const res = Math.max.apply(Math, arr);
console.log(res);

//новый код
const arr2 = [16,9898];
const res2 = Math.max(... arr, 45, ... arr2, 9999);
console.log(res2);

const shallowCopy = [...arr, ...arr2];
console.log(shallowCopy);
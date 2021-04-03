//max(1,7);
//max(1,3,4,56,0);

//старый синтаксис
function max() {
    //псевдомассив
    var numbers = Array.prototype.slice.call(arguments);
}

function maxNum (... numbers) {
    console.log(numbers);
}
maxNum();
maxNum(1);
maxNum(1,5,4,6);

//... - rest параметр. он обязательно в конце, всегда один
function maxNumWithArgs (a, b, ... numbers) {
    console.log(numbers);
}
maxNumWithArgs(2, 76, 7689, 89);
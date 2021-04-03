class Counter {
    count = 1;

    inc = () => {
        this.count += Counter.incrementStep;
        console.log(this.count);
    }

    static incrementStep = 2;

    static incrementAll = function (arr) {
        arr.forEach((c) => c.inc());
    }
}

const cnt = new Counter();
const cnt2 = new Counter();
console.log(cnt.count);
cnt.inc();
setTimeout(cnt.inc, 1000);

Counter.incrementAll([cnt,cnt2]);
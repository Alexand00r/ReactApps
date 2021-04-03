const defaults = {
    host: 'localHost',
    dbName: 'blob',
    user: 'admin'
};

const opts = {
    user: 'John',
    password: 'pass123'
};

const port = 8008;

const res = {
    ... defaults,
    ... opts,
    port,
    connect() {
        //...
    }
};
console.log(res);


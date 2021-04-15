
const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok){
        throw new Error(`Could not fetch ${url}` + res.status)
    }

    const body = await res.json();
    return body;
};

getResource('http://swapi.dev/api/people/1324234/')
    .then((body) => {
        console.log(body);
    })
    .catch((err) => {
        console.error('Could not catch', err);
    });
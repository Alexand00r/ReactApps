fetch('http://swapi.dev/api/people/1/')
.then((res) => {
    console.log('Got response', res.status, res.json());
})
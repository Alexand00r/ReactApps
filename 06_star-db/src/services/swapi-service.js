export default class SwapiService {

    _apiBase = 'https://swapi.dev/api';

    async getResource (url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok){
            throw new Error(`Could not fetch ${url}. Response status: ${res.status}`);
        }

        return await res.json();
    };

    async getAllPeople() {
        const res = await this.getResource(`/people/`);
        return res.results.map(this._transformPerson);
    };

    async getAllPlanets() {
        const res = await this.getResource(`/planets/`);
        return res.results.map(this._transformPlanet);
    };

    async getAllStarships() {
        const res = await this.getResource(`/starships/`);
        return res.results.map(this._transformStarship);
    };

    async getPerson(personId) {
        const person = await this.getResource(`/people/${personId}/`);
        return this._transformPerson(person);
    };

    async getPlanet(planetId) {
        const planet = await this.getResource(`/planets/${planetId}/`);
        return this._transformPlanet(planet);
    };

    async getStarship(starshipId) {
        const starship = await this.getResource(`/starships/${starshipId}/`);
        return this._transformStarship(starship);
    };

    _getIdFromUrl(item){
        const idRegExp = /\/([0-9]*)\/$/;
        const id = item.url.match(idRegExp)[1];
        return id;
    }

    _transformPerson(person) {
        return {
            id: this._getIdFromUrl(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        };
    };

    _transformPlanet(planet) {
        return {
            id: this._getIdFromUrl(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        };
    };

    _transformStarship(starship) {
        return {
            id: this._getIdFromUrl(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity
        };
    };
};
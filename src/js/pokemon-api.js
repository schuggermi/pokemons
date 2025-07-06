import {Pokedex} from 'pokeapi-js-wrapper';

const customOptions = {
    protocol: "https",
    hostName: "pokeapi.co",
    versionPath: "/api/v2/",
    cache: false,
    timeout: 5 * 1000,
    cacheImages: false
};

const P = new Pokedex(customOptions);

export default P;

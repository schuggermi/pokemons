import P from './pokemon-api.js';

// Test the connection
P.getPokemonByName("eevee")
    .then(function(response) {
        console.log('Pokemon data:', response);
    })
    .catch(error => console.error('API Error:', error));

// Example of using async/await
async function getPokemon() {
    try {
        const golduck = await P.getPokemonByName("golduck");
        console.log(golduck);
    } catch (error) {
        console.error('Error fetching Pokemon:', error);
    }
}

getPokemon();
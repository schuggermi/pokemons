import P from './pokemon-api.js';

// Test the connection
P.getPokemonByName("eevee")
    .then(function (response) {
        console.log('Pokemon data:', response);
    })
    .catch(error => console.error('API Error:', error));

// Example of using async/await
async function getPokemon() {
    try {
        const golduck = await P.getPokemonByName("golduck");
        console.log(golduck);
        return golduck
    } catch (error) {
        console.error('Error fetching Pokemon:', error);
    }
}

// Wait for DOM to load and then update the content
document.addEventListener('DOMContentLoaded', async () => {
    const pokemon = await getPokemon();
    console.log('Pokemon: ');
    console.log(pokemon);
    const pokemonsContainer = document.getElementById('pokemons');
    pokemonsContainer.textContent = JSON.stringify(pokemon, null, 2);
});

// Keep the test connection if you want
P.getPokemonByName("eevee")
    .then(function (response) {
        console.log('Pokemon data:', response);
    })
    .catch(error => console.error('API Error:', error));

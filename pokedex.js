const pokedex = document.getElementById('pokedex');

// Gets the infomation from the api to this page and will constently do so for all the pokemon.

const fetchPokemon = () => {
    const promises = [];
    for (let i = 1; i <= 251; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        promises.push(fetch(url).then((res) => res.json()));
    }
    Promise.all(promises).then((results) => {
        const pokemon = results.map((result) => ({
            name: result.name,
            image: result.sprites['front_default'],
            type: result.types.map((type) => type.type.name).join(', '),
            id: result.id
        }));
        displayPokemon(pokemon);
    });
};

// Now display the received data from the pokeapi
const displayPokemon = (pokemon) => {
    console.log(pokemon);
    // Gets information and puts it onto the html page
    const pokemonHTMLString = pokemon
        .map(
            (pokeman) => `
        <li class="pokecard">
            <img class="pokecard-image" src="${pokeman.image}"/>
            <h2 class="pokecard-title">${pokeman.id}. ${pokeman.name}</h2>
            <p class="pokecard-subtitle">Type: ${pokeman.type}</p>
        </li>
    `
        )
        .join('');
    pokedex.innerHTML = pokemonHTMLString;
};

fetchPokemon();

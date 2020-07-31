import { films } from './films.js';
import { people } from './people.js';

var cards = document. querySelectorAll('.card');


function createNode(element) {
    return document.createElement(element);
}

function append(parent, el){
    return parent.appendChild(el);
}

const url = 'https://swapi.dev/api/';
const ul = document.getElementById('starWars');

fetch(url)
    .then(resp => resp.json())
    .then(data => {
        film = data.results;
        console.log(films)

        films.map(films => {
            console.log(films.cell)
            let li = createNode('li'),
                span = createNode('span');

            span.innerHTML = `${films.episode_id}`;
            
            append(li, span)
        })
       
    })
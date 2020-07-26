import { films } from './films.js';
import { people } from './people.js';

console.log(films)

films.map(films => {
    console.log(film.title)
})

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el){
    return parent.appendChild(el);
}

const swurl = films;

fetch(swurl)
    .then(resp => resp.jason())
    .then(data => {
        console.log(data)
    })
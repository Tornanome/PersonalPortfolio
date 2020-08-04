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

const getPeople = () => {
    fetch('http://swapi.dev/api/people/')
        .then(resp => resp.json())
        .then(data => {

            const people = data.results;

            const redefinePerson = (person, idx) => {
                return {
                    name: person.name,
                    dob: person.birth_year,
                    gender: person.gender,
                    height: person.height,
                    id: idx
                }
            }
        
            const mySWpeopleArray = people.map(redefinePerson)

            console.log(mySWpeopleArray)

            const peopleHTML = mySWpeopleArray.map(person => {
                return
                <div class="scene">
                    <div class="card">
                        <div class="card_face card_face--front">${person.name}</div>
                        <div class="card_face card_face--back"><div><img src='/swImg/${person.id}.jpg'/></div></div>
                    </div>
                </div>
            })
        })
}

getPeople();

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
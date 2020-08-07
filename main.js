import { films } from './films.js';
import { people } from './people.js';

var cards = document. querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener( 'click', function() {
        card.classList.toggle('is-flipped');
    });
})

const container = document.querySelector('#container')

const getPeople = () => {
    fetch('http://swapi.dev/api/people/')
        .then(resp => resp.json())
        .then(data => {

            const people = data.results;

            const redfinePerson = (person, idx) => {
                return {
                    name: person.name,
                    dob: person.birth_year,
                    gender: person.gender,
                    height: person.height,
                    id: idx + 1
                }
            }
        
            const mySWpeopleArray = people.map(redefinePerson)

            console.log(mySWpeopleArray)

            const peopleHTML = mySWpeopleArray.map(person => {
                return `
                <div class="scene">
                    <div class="card">
                    <div class="card_face card_face--front">${person.name}</div>
                    <div class="card_face card_face--back"><div><img src='/swImg/${person.id}.jpg'/></div></div>
                    </div>
                </div>
                `
            }).join('');
           
            container.innerHTML = peopleHTML;
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
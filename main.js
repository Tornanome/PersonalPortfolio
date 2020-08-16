const container = document.querySelector('#container');
// gets
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
        
            const mySWpeopleArray = people.map(redfinePerson)

            const peopleHTML = mySWpeopleArray.map(person => {
                    return `
                    <div class="scene">
                        <div class="card">
                            <div class="card__face card__face--front">${person.name}</div>
                            <div class="card__face card__face--back"><div><img src='img/swImg/characters/${person.id}.jpg'/></div></div>
                        </div>
                    </div>
                    `
            }).join('');
           
            container.innerHTML = peopleHTML;
            
            const cards = document.querySelectorAll('.card');

            cards.forEach(card => {
                card.addEventListener( 'click', function() {
                    card.classList.toggle('is-flipped');
                });
            })

        })
}

getPeople();

const personForm = document.querySelector('#personForm');

personForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(personForm);

    let personObj = new Object();

    for(let pair of formData.entries()) {
        console.log(pair)

        personObj[pair[0]] = pair[1]
    }

    newPersonHTML = `
    <div class="scene">
        <div class="card">
            <div class="card__face card__face--front">${person.name}</div>
            <div class="card__face card__face--back"><div><img src='img/swImg/characters/${person.id}.jpg'/></div></div>
        </div>
    </div>
    `

    const parentDiv = document.createElement('div');
    parentDiv.className('scene')

    container.inenerHTML = newPersonHTML;

})
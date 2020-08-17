const container = document.querySelector('#container');
// gets the people information from the Star Wars api
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

            // export to html page
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
            
            // Card Flip Code
            const cards = document.querySelectorAll('.card');

            cards.forEach(card => {
                card.addEventListener( 'click', function() {
                    card.classList.toggle('is-flipped');
                });
            })

        })
}

getPeople();

// const container = document.querySelector('#container');

// const getPeople = () => {
//     constp promises = [];
//     for (let i = 1; i <= 25; i++) {
//         const url = `http://swapi.dev/api/people/${i}`;
//         promises.push(fetch(url).then((res) => res.json()));
//     }
//     Promise.all(promises).then((results) => {
//         const people = results.map((results) => ({
//             name: person.name,
//             dob: person.birth_year,
//             gender: person.gender,
//             height: person.height,
//             id: idx + 1
//         }));
//         displayPeople(people);
//     });
// };

// const displayPeople = (people) => {
//     console.log(people);
//     const peopleHTMLString = people.map(
//         (person) => `
//         <div class="scene">
//             <div class="card">
//                 <div class="card__face card__face--front">${person.name}</div>
//                 <div class="card__face card__face--back"><div><img src='img/swImg/characters/${person.id}.jpg'/></div></div>
//             </div>
//         </div>
//         `
//     )
//     .join('');
//     container.innerHTML = peopleHTMLString;
//     const cards = document.querySelectorAll('.card');

//     cards.forEach(card => {
//         card.addEventListener( 'click', function() {
//             card.classList.toggle('is-flipped');
//         });
//     })
// };
// getPeople();

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
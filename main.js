const container = document.querySelector('#container');

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

            console.log(mySWpeopleArray)

            const peopleHTML = mySWpeopleArray.map(person => {
                    return `
                    <div class="scene">
                        <div class="card">
                        <div class="card_face card_face--front">${person.name}</div>
                        <div class="card_face card_face--back"><div><p><img src='img/swImg/characters/${person.id}.jpg'/></p></div></div>
                        </div>
                    </div>
                    `
            }).join('');

            console.log(peopleHTML)
           
            container.innerHTML = peopleHTML;
            
            var cards = document.querySelectorAll('.card');

            cards.forEach(card => {
                card.addEventListener( 'click', function() {
                    card.classList.toggle('is-flipped');
                });
            })

        })
}

getPeople();

const charForm = document.querySelector('')

function get30SWPeople(params) {
  let people = [];
  const SWPromises = [
      fetch('https://swapi.dev/api/people/?page=1'),
      fetch('https://swapi.dev/api/people/?page=2'),
      fetch('https://swapi.dev/api/people/?page=3')
  ]
 return Promise.all(SWPromises)
  .then(ResponsesArr => {
      return Promise.all(
          ResponsesArr.map(data => data.json())
          ) 
  })
  .then(jsonDataArr => {
      people = jsonDataArr.reduce(
          (acc, data) => [...acc, ...data.results]
          , people)
      return people;
  })
}
get30SWPeople().then(people => {
  console.log(people)
  
});

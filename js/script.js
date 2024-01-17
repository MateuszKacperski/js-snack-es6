console.log('JS ok');

const tableName = 'Tavolo Vip';

const guests = [
  'Brad Pitt',
  'Johnny Depp',
  'Lady Gaga',
  'Cristiano Ronaldo',
  'Georgina Rodriguez',
  'Chiara Ferragni',
  'Fedez',
  'George Clooney',
  'Amal Clooney',
  'Maneskin'
];






const guestList = guests.map((guest, i) => ({table : tableName, name: guest , place: i + 1}));


console.log(guestList);






//snack 2 

const list = document.getElementById('list');

//creo la lista degli studenti 
const totalStudents = [
    {
        id : 213,
        name : 'Marco della Rovere',
        grades : 78
    },
    {
        id : 110,
        name : 'Paola Cortellessa',
        grades : 96
    },
    {
        id : 250,
        name : 'Andrea Mantegna',
        grades : 48
    },
    {
        id : 145,
        name : 'Gaia Borromini',
        grades : 74
    },
    {
        id : 196,
        name : 'Luigi Grimaldello',
        grades : 68
    },
    {
        id : 102,
        name : 'Piero della Francesca',
        grades : 50
    },
    {
        id : 120,
        name : 'Francesca da Polenta',
        grades : 84
    }
]

//studenti totale voti superiore a 70
const students70 = totalStudents.filter(({grades}) => grades >= 70);

console.log(students70);

// lista studenti totale voti superiore a 70 e id supeirore a 120

const students120 = totalStudents.filter(({grades , id}) => grades > 70 && id > 120);

console.log(students120);



// nomi con la letterra maiuscola
const plates = totalStudents.map(({name}) => name.toUpperCase());

console.log(plates);

// TODO: stampo in pagina 
/*
let items = '';



for(let plate of plates){
    items += `<li>${plate}</li>`;
}


plates.forEach(plate => {
    items += `<li>${plate}</li>`;
})

list.innerHTML = items;*/


// !! METODO REDUCE 
/*
const numbers = [1, 3, 5, 6, 7];


const somma = numbers.reduce((result, number) => {
    return result + number;
}, 0);

console.log(somma);*/



const items = plates.reduce((result, plate) => {
    return result + `<li>${plate}</li>`
}, '');


list.innerHTML = items;





// snack 3 

const bikes = [
    {
        name : 'Bianchi',
        weight : 700
    },
    {
        name : 'Colnago',
        weight : 150
    },
    {
        name : 'Pinarello',
        weight : 400
    },
    {
        name : 'Wilier',
        weight : 800
    },
    {
        name : 'Daccordi',
        weight : 250
    },
    {
        name : 'Cinelli',
        weight : 340
    },

];

//assegno primo peso alla variabile lessWeight
let lessWeight = bikes[0].weight;

// scorro il vettore trovo il peso minore
bikes.forEach((bike) => {
    if (bike.weight < lessWeight) {
        lessWeight = bike.weight;
    }
});

//prendo l'ogetto con il peso minore e lo restituisco 
const results = bikes.filter(({weight}) => weight === lessWeight);

console.log(results);






// snack 4


const teams = [
    {
        name: 'Roma',
        points: 0,
        fauls: 0
    },
    {
        name: 'Juve',
        points: 0,
        fauls: 0
    },
    {
        name: 'Torino',
        points: 0,
        fauls: 0
    },
    {
        name: 'Milan',
        points: 0,
        fauls: 0
    },
    {
        name: 'Inter',
        points: 0,
        fauls: 0
    },
    {
        name: 'Lazio',
        points: 0,
        fauls: 0
    },
    {
        name: 'Napoli',
        points: 0,
        fauls: 0
    },
    {
        name: 'Atalanta',
        points: 0,
        fauls: 0
    },
    {
        name: 'Fiorentina',
        points: 0,
        fauls: 0
    },
    {
        name: 'Sassuolo',
        points: 0,
        fauls: 0
    },

];

//funzione numeri casuali 
const getRandomNumber = ((min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  });
// Genero numeri casuali per points e fauls
  teams.forEach(team => {
    team.points = getRandomNumber(0,100);
    team.fauls = getRandomNumber(0, 1000);
  });
//creo array con il numero dei falli 
const teamsFouls = teams.map(({ fauls }) => ({ fauls }));

//stampo in console i falli 
console.log(teamsFouls);
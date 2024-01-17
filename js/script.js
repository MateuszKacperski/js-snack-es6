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
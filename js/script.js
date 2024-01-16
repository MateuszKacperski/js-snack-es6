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


const guestList = [];
let guestobject = {};


const list = guests.forEach((guest , i) => {
    

   
    guestobject += 
  `
        tableName : ${tableName},
        name : ${guest},
        place : ${i}
  `;

  guestList.push(guestobject);

});

console.log(guestList);
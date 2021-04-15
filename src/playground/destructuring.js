//========================================================
//=================Object destructuring===================
//========================================================

// const person = {
//     name: 'Jasiek',
//     age: 23,
//     location: {
//         city: 'Poland',
//         temp: 123
//     }
// };

// const { name = 'Anonymo us', age } = person;
// console.log(`${name} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature){
//     console.log(`It's ${temperature} in ${city}.`)
// }


// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holidey',
//     publisher: {
//         name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);



//========================================================
//=================Array destructuring====================
//========================================================

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [street, city, state, zip] = address;
console.log(`You are in ${city} ${state}`);

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75'];
const [coffe, , mediumCost] = item;
console.log(`A medium ${coffe} costs ${mediumCost}`);

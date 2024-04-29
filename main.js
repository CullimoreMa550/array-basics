// Maddox C
// 29 April 2024
// Array Evidence

const firstName = 'Maddox';
const school = 'Elk Rapids High School';

const foods = [
    'Pizza',
    'Steak',
    'Strawberries',
    'Cookies'
];


const foodsLength = foods.length;

console.log(`**Script produced by ${firstName} at ${school}.**`);
console.log('\n');
console.log(`My array of foods: ${foods}`);
console.log(`Length of my array: ${foodsLength}`)
console.log('\n\n');



const poppedFoods = foods.pop();
console.log('Using the pop method to remove an element');
console.log(`${poppedFoods} from ${foods}`);
console.log('\n\n');



foods.push('Chicken');
console.log('Using the push method to add an element to the back of the list.');
console.log(foods);




















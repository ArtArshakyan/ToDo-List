import * as props from './script1.js';
// import smth, { message, age as newAge, user } from './script1.js';
// import { message, age, user } from './script1.js';

let age = 45;

// console.log('smth', smth);

// console.log('message', message);
console.log('age', age);
// console.log('newAge', newAge);
// console.log('user', user);

console.log('props', props);

console.log('props.default(15, 20)', props.default(15, 20));

console.log('message', props.message);
console.log('newAge', props.age);

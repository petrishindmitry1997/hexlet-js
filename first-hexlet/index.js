import _ from 'lodash';
import getBirthYear from './src/index.js';

console.log('Сколько вам лет?');
const age = 18; // ...
const birthYear = getBirthYear(age);
console.log(`Ваш год рождения: ${birthYear}`);

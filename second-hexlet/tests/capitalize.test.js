// нажмите кнопку run чтобы запустить тесты
// попробуйте изменять код функции / тестов, запуская проверки заново
import { strict as assert } from 'node:assert';
import { capitalize } from '../src/capitalize.js';

assert.equal(capitalize(''), '');

assert.equal(capitalize('hello'), 'Hello');

console.log('Все тесты пройдены!');

const EventEmitter = require('events');

const myEmitter = new EventEmitter();

const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';

const say = hero => sentence => console.log(`${hero} says : ${sentence}`);

const johnSay = say(john);
const aryaSay = say(arya);
const sensaSay = say(sensa);
const interval = setInterval(() => myEmitter.emit('north'), 1000, 'For the north');

setTimeout(() => {
    clearInterval(interval)
}, 5000);

myEmitter.on('north', () => {
    sensaSay('For the North');
    myEmitter.emit('john');
    myEmitter.emit('arya');
});

myEmitter.once('john', () => {
    johnSay('Winter is coming');
});

myEmitter.on('arya', () => {
    aryaSay('The king in the North');
});
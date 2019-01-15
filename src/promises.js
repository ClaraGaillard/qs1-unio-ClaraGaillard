const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
let cpt = 0;

const say = hero => sentence => Promise.resolve(`${hero} says : ${sentence}`);

const johnSay = say(john);
const aryaSay = say(arya);
const sensaSay = say(sensa);

const interval = setInterval(() => sensaSay('For the North').then(value => {
    console.log(value);
    aryaSay('The king in the North').then(value => {
        console.log(value);
        if (cpt === 0) {
            johnSay('Winter is coming').then(value => {
                console.log(value);
            });
            cpt++;
        }
    });
}), 1000);

setTimeout(() => {
    clearInterval(interval)
}, 10000);

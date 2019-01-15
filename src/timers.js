const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
const say = hero => sentence => console.log(`${hero} says : ${sentence}`);
const johnSay = say(john); // may be used this way setTimeout(johnSay, 1000, 'hello');
const aryaSay = say(arya);
const sensaSay = say(sensa);

const createInterval = () => setInterval(sensaSay, 1000, 'For the north');
let interval = createInterval();
const timeoutJohn = setTimeout(() => {
    clearInterval(interval);
    console.log('John says : Hello Ladies Stark');
    const immediate = setImmediate(() => { aryaSay('Thank you for needle'); interval = createInterval() });
}, 2000);


setTimeout(() => { clearInterval(interval); }, 10000);
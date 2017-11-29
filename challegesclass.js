
const a = [1, 3, 4, 6, 12, 15, 23, 20];

const b = ['a', 'once a time', 'machine learning', 'beer', 'bear', 'beat'];

//const c = [ { key: 'abc' }, { key: 1.2 }, { key: false }, { key: null }, { key: undefined }, { key: '' } ];

//1. Return a list with only odd numbers (for a)
const odd = a.filter(num => num%2 != 0);

console.log(odd);
//2. Return a list with all values multiplied by 2 (for a)
const multiplied2 = a.map(num => num*2)

console.log(multiplied2);
//Return a list with all the values that includes 'be' (for b).
const onlyBe = b.filter(str =>str.includes ('be') );
console.log(onlyBe);

//4. Return a list with all the false values (for c).
const c = [ { key: 'abc' }, { key: 1.2 }, { key: false }, { key: null }, { key: undefined }, { key: '' } ];
const allFalse = c.filter(things => things.key === false)
console.log(allFalse);

// closures

function saludarFamilia(apellido) {
  return function (nombre) {
    console.log(`Hola ${nombre} ${apellido}`);
  }
}
const saludaRobles = saludarFamilia("Robles");

saludaRobles('Roberto')

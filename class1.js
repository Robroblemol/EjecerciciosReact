const func = (a,b)=> a * b;
console.log(func(12,33));

const toUpperCase = (str) => str.toUpperCase();
console.log(toUpperCase("roberto"));
const funcC = a => {
  return Math.sqrt(a);
};

// //Primer paramentro tendra como el segundo;
// const funcAResult = funcA();
// console.log(funcAResult);
// const funcBResult =funcB(funcAResult,funcAResult*2);
// console.log(funcBResult);


// string template
// console.log(`el resultado de la primera funcion es ${funcAResult}`);


//destructurin
const obj = {
  key1 : 'abc',
  key2 : 2,
  key3 : 'xyz'
};
 const key1 = obj.key1;
 const key2 = obj.key2;
 //const {key1} = obj;
 console.log(key1,key2);


//spread operator
const obj2 = {
  ...obj,//le estoy agregabo las porpiedades del obj
  key1: 1,
  key4: false,
  key5: undefined,
};

const obj3 = Object.assign({},obj2,{key6 : 5});

console.log(obj);
console.log(obj2);
console.log(obj3);

// import para trar modulos de una libreria

const array = [1];
const array2 = array.concat(2);
console.log(array);


// clases
//
// const classA = {
//   color: '#FFF'
//   printColor:() =>
// }


//map

const arr1 = [1,2,3,4,5,6];
const map1 = arr1.map(i => i % 2 === 0)
const map2 = arr1.filter(i => i % 2 === 0);
//console.log(`el nuevo array es ${map1}`);
console.log(`el nuevo array es ${map2}`);

const people =[
  {name: 'David', lastname: 'Robles', age: 23},
  {name: 'Roberto', lastname: 'Molina',age: 32},
  {name: 'Juan', lastname: 'Gutierrez', age: 43},
  {name: 'Pepe', lastname: 'Castrillo', age: 30},
  {name: 'Lila', lastname: 'lopez', age: 23},
  {name: 'Sebas',lastname: 'hola', age: 15},
];

const moreThan30 = people.filter(person => person.age >= 30);

console.log(moreThan30);
//console.log(`${moreThan30.name}`)
// const peopleWithlastname = map(p =>({
//   fullname:
// }))

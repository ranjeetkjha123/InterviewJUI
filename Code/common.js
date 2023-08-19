////////////////////////////////////////
https://www.toptal.com/javascript/interview-questions
//////////////////////////////////////////////////////////////////////////////////////////////


const sum  = function (a) {
  return function (b) {
    if (b) {
      return sum(a+b); // it takes an argument and return a function which again can take an argument.
    }
    return a; // it will keep on adding 1+2+3+4..
  }
};

 
console.log(sum(1)(2)()); //3
console.log(sum(1)(2)(3)(4)()); //10
//////////////////////////////////////////////

let cal2={ 
   "val":0,
    add: function(a){
      this.val+=a;
      return this
    },
  mul: function(b){
      this.val*=b;
      return this
    },
   sub: function(c){
      this.val-=c;
      return this.val;
    }
  
}
console.log(cal2.add(10).mul(5).sub(5)); //  45

// calculator.add(10).subtract(2).divide(2).multiply(5);
const CALC = function(){
  this.total = 0;

  this.add = (val) => {
    this. total += val;
    return this;
  }

  this.subtract = (val) => {
    this.total -= val;
    return this;
  }

  this.multiply = (val) => {
    this.total *= val;
    return this;
  }

  this.divide = (val) => {
    this.total /= val;
    return this;
  }

  return this.total;
}

const calculator = new CALC();
calculator.add(10).subtract(2).divide(2).multiply(5);
console.log(calculator.total);

const calculator = {
  total: 0,
  add: function(val){
    this.total += val;
    return this;
  },
  subtract: function(val){
    this.total -= val;
    return this;
  },
  divide: function(val){
    this.total /= val;
    return this;
  },
  multiply: function(val){
    this.total *= val;
    return this;
  }
}; 
//
calculator.add(10).subtract(2).divide(2).multiply(5);
console.log(calculator.total);

class Calc {
  constructor(num = 0) {
      this.num = num;
  }

  add(a) {
      return new Calc(this.num+a);
  }

  sub(a) {
      return new Calc(this.num-a);
  }

  result() {
      return this.num;
  }
}

const calculator = new CALC();
calculator.add(10).subtract(2).divide(2).multiply(5);
console.log(calculator.total);

const input = ["Peter", "patrick", "John", "david", "Dennis"];
const resultObject = {};


for (const name of input) {
  const firstLetter = name.charAt(0).toUpperCase();
  if (resultObject[firstLetter]) {
    resultObject[firstLetter] = [...resultObject[firstLetter], name];
  }
  else{
	  resultObject[firstLetter]= [name]
  }
  
}

console.log(resultObject);

// Call is a function that helps you change the context of the invoking function. 
//In layperson's terms, it helps you replace the value of this inside a function with whatever value you want.

//Apply is very similar to the call function. The only difference is that in apply 
//you can pass an array as an argument list.

//Bind is a function that helps you create another function that you 
//can execute later with the new context of this that is provided.

function Car(type, fuelType){
	this.type = type;
	this.fuelType = fuelType;
}

function setBrand(brand){
	Car.call(this, "convertible", "petrol");
	this.brand = brand;
	console.log(`Car details = `, this);
}

function definePrice(price){
	Car.call(this, "convertible", "diesel");
	this.price = price;
	console.log(`Car details = `, this);
}

const newBrand = new setBrand('Brand1');
const newCarPrice = new definePrice(100000);
///////////////////////////////////////////////////////////
var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function() {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function() {
    console.log(  + 'I choose you!');
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon(); // 'Pika Chu I choose you!'
////////////////////////////////////////////////////////////////////////////////////////////////////
f`	`	QRQ


var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + ' loves ' + snack + ' and ' + hobby);
};

pokemonName.call(pokemon,'sushi', 'algorithms'); // Pika Chu  loves sushi and algorithms
pokemonName.apply(pokemon,['sushi', 'algorithms']); // Pika Chu  loves sushi and algorithms


//Prototype function custom 

arr.map(func)
arr.filter(func)
arr.reduce(func, initial)

Array.prototype.myMap = function(fun){
let arr = []
let context = this;
for(let i=0; i<this.length; i++){
	arr.push(fun.call(this, this[i]));
}
return arr;
	
}
Array.prototype.myMap = function(fun){
let arr = []
let context = this;
for(let i=0; i<this.length; i++){
	arr.push(fun.call(this, this[i]));
}
return arr;
	
}
Array.prototype.myFilter = function(fun){
let arr = []
let context = this;
for(let i=0; i<this.length; i++){
	if(fun.call(this, this[i])){
		arr.push(fun.call(this, this[i]))
	}
}
return arr;
	
}
function filter(arr, predicateFn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (predicateFn(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}

const numbers = [1, 2, 3, 4];
const isEven = x => x % 2 === 0;
const evenNumbers = filter(numbers, isEven);

console.log(evenNumbers); // -> [2, 4]
/////////////////////////////////////////////////////////////
function reduce(arr, reducerFn, initialValue) {
  let accumulator = initialValue;
  for (let i = 0; i < arr.length; i++) {
    accumulator = reducerFn(accumulator, arr[i], i, arr);
  }
  return accumulator;
}

const numbers = [1, 2, 3, 4];

const sum = (a, b) => a + b;
const total = reduce(numbers, sum, 0);

console.log(total); // -> 10

/////////////////////
Function.prototype.bind = function(ctx) {
    var fn = this;
    return function() {
        fn.apply(ctx, arguments);
    };
};
Function.prototype.mycall = function(ctx) {
    var fn = this;
    fn.apply(ctx, arguments);
    
};
Function.prototype.customCall = function(obj, ...args) {
    obj.fnRef = this;
    obj.fnRef(...args);
}
Function.prototype.customApply = function(obj, args) {
    obj.fnRef = this;
    obj.fnRef(...args);
}

Function.prototype.customBind = function(obj) {
    obj.fnRef = this;
    return function (...args) {
        obj.fnRef(...args);
    }
}
///////////////////////////////////////
function sum(x, y) {
  if (y !== undefined) {
    return x + y;
  } else {
    return function(y) { return x + y; };
  }
}

function sum(x) {
  if (arguments.length == 2) {
    return arguments[0] + arguments[1];
  } else {
    return function(y) { return x + y; };
  }
}
// remove dublicate value or unique
var arr1 = [1,2,2,3,3].filter((val, index,arr)=>arr.indexOf(val)===index);

// duplicate amount
var arr1 = [1,2,2,3,3].filter((val, index,arr)=>arr.indexOf(val)!==index);


//////////////////////////caching //////////////
function mymemo(fn, context){
  const res = {};
    return function(...args){
        var argss= JSON.stringify(args);
   if(!res[argss]){

       res[argss] = fn.call(context||this, ...args)
   }
    return res[argss];    
    }
}


///////////////////////////debounce/////////////////////////
function debounce(func, delay) {
  let timeout; 

  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      func.call(this, ...args);
    }, delay);
  };
}

function throttling(callback, delay) {
  let timeout;

  return function (...args) {
    if (!timeout) {
      callback.apply(this, args);
  =-    timeout = setTimeout(() => {-
        timeout = null;
		}, delay);
    }
  };
}
function logMessage(message) {
  console.log(message);
}

const throttledLog = throttling(logMessage, 1000);

throttledLog("Message 1"); // Logs "Message 1"
throttledLog("Message 2"); // The callback is throttled, so this won't log immediately.
throttledLog("Message 3"); // The ca


//////////////////////////////////////////////////////////////////////
async function testPromise1() {
  return Promise.resolve(1);
}
async function testPromise2() {
  return Promise.resolve(2);
}
async function testPromise3() {
  return Promise.resolve(3);
}

async function test() {
  console.log('Before async await'); // 2
  
  const num1 = await testPromise1();
  const num2 = await testPromise2();
  const num3 = await testPromise3();
  console.log(num1 + num2 + num3); 
  console.log('After async await');//4
}
console.log('Before calling test'); // 1
test()
console.log('After calling test'); // 3

Before calling test
Before async await
After calling test
6
After async await


1) routing 
2) Promise
3) 
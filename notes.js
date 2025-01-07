//main.bundle.js bundles all scripts together in exact same order
//variables(declaration -> initialization)
var a; //undefined
console.log(a);
a = {}; //initialization 
console.log(a);
//variables(declaration + initialization)
var b = [1,2];   
console.log(b);
// we use let over var due to hoisting & block space issues




//const and immutability
const c = {
    name: 'aryav',
    age: '21',
    sports: 'basketball'
}
console.log(c.sports);
//we cant redeclare or reassign c as it is a const but we can talk to the object
c.sports = 'cricket';
console.log(c.sports);
//thus const is not actually immutable




//data types = primitive & reference
var arr = [1,2.3,4];
var b = arr;
b.pop()
//this will pop 4 from both b & arr, as () is a reference data type
//but if we copy a reference data type with spread, it copies it as a
//primitive data type, storing it seperately
var c = [...arr];
c.pop();
//this pops only from c not arr


//conditional logic
//boolean
// ! = not !! = not not / reverse
//a string with no length is actually false
console.log(!!'');
console.log(!!'hi');
console.log(!!0);
//any number other than 0 is true, thus we can use it for checking


//equals
console.log(1 == '1'); //true
console.log(1 === '1'); //false

//if, else, elseif
 //syntax 1
let condition = true;
let result;
if (condition) {
    result = 5;
}
else if (condition === !!'') {
    result = hi;
}
else {
    result = bye;
}
console.log(result);
 //syntax 2
 let abc = 5;
 let pqr = 2;
 let ans = abc + pqr
 let answer = 'The answer is ' + (
    ans === 5 ? 'five' 
    : ans === 12 ? 'twelve' 
    : 'nothing');
 console.log(answer);

 //switch
 let result2;
  switch (ans) {
    case 5:
        result2 = 'five';
    break;
    case 12:
        result2 = 'twelve';
    break;
    default:
        result2 = 'idk'
  }
  console.log(result2);


//numbers
  //Number function
  console.log(Boolean(Number('24.86') === 24.860000))
  console.log(Boolean(+('24.86') === 24.860000))
  console.log(25 + +(25e5))

  //we are actually doing a type-conversion from string to number using Number function in a non constructor syntax
  
  //literal numbers
  const numberis = 10;

  //parse function
  console.log(parseInt('20px', 10));// radix defines base
  console.log(parseInt('0101', 2));
  console.log(parseFloat('25.99px')); //no radix parameter
   
  //Nan -> not a number
  console.log(Number.NaN);
  //NaN is globally available as Number.Nan
  console.log(isNaN('hi'));
  console.log(Number.isNaN('hi'));
  //Number.isNan checks for NaN exactly whereas isNaN checks only if it is not a number.

//basic typechecking
  console.log(typeof 425.55);
  console.log(typeof Number(55.55));
  console.log(Number(99.582) instanceof Number)
  console.log(new Number(44.83e10) instanceof Number);
  //dont use new mostly


//strings
//using backticks is the best way instead of quotes
console.log(`The number is : ${numberis}`);
//backticks allow for multi line strings
console.log(`Hi
    my
    name
    is
    Aryav`);
//strings > numbers
console.log(55 + "11");
//or
console.log(String(55 + "11"));
console.log(String({ age: 21 }));
console.log(String([1, 2, 3, 4, 5]));
//index in a string
const z = "aryav";
console.log(z.length, z[2], z[z.length - 1]);
//they are immutable in the sense that they work with values, not reference. They get copied by value.

//typechecking strings
console.log(typeof "aryav");
console.log(String("aryav") instanceof String);
console.log(new String("aryav") instanceof String);

//methods on strings
console.log("aryav".charAt(0));
console.log("aryav".endsWith("a"));
console.log("aryav".includes("p"));
console.log("aryav".replace("yav", "jun"));
//slice -> cut from x to y
console.log("aryav".slice(2, 4));
//split -> splits into items of an array
console.log("aryav".split("y"));
console.log("aryav".split("y")[0]);



//loops, for & while
for(start; end; change){

};
//example prints 1-5
var a = 1;
for(a,a<6, a++){
    console.log(a);
};
//while
start;
while(end;){
    change;
};
//example prints 1-10
var a = 0;
while(a<10){
    a++;
    console.log(a);
};



//functions
//snippets of code which can be reused or used later.
//are called first class in js, which means they can be treated as
//values/variables
//es5 : fn statements, fn expressions, fn
//es6 : 
function xyz(~param){

};
//example which gives the output of the code in the function hi()
function hi(){
    var a = 5;
    var b = 4;
    console.log(a);
    console.log(b);
    console.log(a+b);
};

hi();
//parameter in functions
function abc(variable){
    console.log(5+variable)
}
abc(2);






//types of functions in detail
//fn statements
function abcd(){

}
//fn expression
var abcd = function(){

}
//anonymous function
function(){

}
//fat arrow function
var a = ()=>{

}
a();
//fat arrow with one parameter
var a = (c)=>{
    console.log(5+c)
}
a(4);
//OR, with one parameter we can remove brackets and directly write like this.
var a = c =>{
    console.log(5+c)
}
a(4);







//return function
//return, returns us to the line from where the fucntion was called with the value written
//next to return.
function abcd(){
    return 12;
}
abcd();
//above, control calls abcd & control returns 12 at line 90. 
//we can also write it as 
var abcd = () =>12;
abcd();
//all functions return something, they must. if there is nothing to return they return 
//undefined(read more)

//functions & hoisting
aryav(); //only declarations can be accessed before declaration
//aryav1(); //cant
//aryav3(); //cant
//fn declaration
function aryav() {
  return 123;
}
//fn expression
const aryav1 = function () {
  return 456;
};
//arrow function
const aryav3 = () => 789;


//parameters & arguments
function arjun(marks) {
    return (`Total marks are: ${marks}`)
};
console.log((arjun(5)));
//when parameter exists but no argument is supplied



//multiple parameters
const marks1 = (...params) => {
  return params.reduce((prev,next) => prev + next )
}
console.log(marks1(22,33,44,55,66,77));

//this, context, call, apply and bind
const person1 = {
   name : 'aryav',
   age : 21,
   gender : 'male'
}
const person2 = {
  name : 'arjun',
  age : 17,
  gender : 'male'
}

function info() {
  return(`Your name is ${this.name} and age is ${this.age}. Is this correct?`);
}
console.log(info.call(person1))
//in the above example the context for `this` is person1 
function info2(...params) {
  return(`Your name is ${this.name} & age is ${this.age}. Your marks are ${params.reduce((prev,next) => prev + next)}`);
}
//call
console.log(info2.call(person2, 22,44,35,97,23))
//apply
console.log(info2.apply(person2,[22,67,32,78]))
//bind
const info3 = info2.bind(person1);
console.log(info3(22,44,55,66))




//undefinded, not defined & null
//only not defined is a error, rest both are values.
//undefined=when var has no value/sort of garbage value/or default value, it can be
//specifically given to a variable when needed.
//not defined=error value when some element is used/called but has not been declared/defined.
//null=when something is not found.





//arrays
var a = [a,"b",5.5,abcd()];
//loop with array
a.foreach(function(value){
    console.log(value)

});
//.forEach functions performs operations on each element one by one.





//objects
//store lots of information about something at the same place
var obj = {
    type=xyz,
    number=12,
}
obj.number




//DOM
//accessing elements
var x = document.querySelector(.class);
var y = document.querySelector(h1);//only first h1 is selected
var z = document.querySelectorAll(h1);// all are selected
//changing text
x.textContent = "Hi";
//adding text
x.textContent += "Hi"; 
//manipulating text
x.innerHTML = "<div>uwu</div>";
//add + manipulate
x.innerHTML += "<h1>Hi</h1>"; 
//manipulating styles & classes
x.style.color = "red";
x.classList.add('box1');
x.classList.remove('box1');
//adding html&css in js
var a = document.createElement("video");
a.src = "something.com";
document.querySelector("body").appendChild(a);
//video tag stored in a gets added to body
document.querySelector("body").removeChild(a);
//


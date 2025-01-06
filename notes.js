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


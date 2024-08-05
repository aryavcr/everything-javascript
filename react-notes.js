//push & pop - the immutable way
//take a new variable, a spread copy of older variable. Update it the mutable way & then assign the new variable to older one.
//for arrays 
var a = [1,2,3,4,"whois",[5,"z",]];
var b = [...a];
b.pop();
a = b;

//updating objects, the immutable way.
var id = {
    name: "Aryav",
    age: "21",
    likes: {
        sports: "football",
        game: "csgo",
    }
}
var copy = {...id};
copy.likes.sports = "cricket";
id = copy;



//destructuring
//instead of id.likes.sports, simply sports can be substituted to get its value.
var {sports} = id.likes;
//instead of a[2], simply number can be substituted to get its value.
var [,,number,,text,arr] = a;

//fat arrow representation
var x = (something)=>{
    console.log(6 + something );
};
x(5);
//fat arrow with implicit return
var y = () => 12;
//above line is same as
var y1 = ()=>{
    return 12;
}
//for objects
var y2 = ()=>({name:"Aryav", state:"happy"});


//map()
//map() simply applies operation on each element of a array, similar to forEach
array = [4,5,0,11];
const array2 = array.map(val=>val+2);
array =  array2
//map() with conditionals
array.map(value => value<6 ? value+2 : value);

//filter()
people = [{
    name:"Aryav",
    age:21,
},
{
    name:"Arjun",
    age:17,
}]
var people2 = people.filter(value => value.age>20)
console.log(people2)
//this only keeps people[0] from the array


//useState & others

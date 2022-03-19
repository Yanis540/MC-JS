// Write a JavaScript program that compare two objects 
// to determine if the first one contains equivalent 
// property values to the second one.

const object1={
    age:30,
    name:'MCBOUNADEM',
    email:'mc-bounadem@gmail.com',
   
}

const object2={
    age:30,
    name:'DAKOURNID',
    email:'waliwali@gmail.com',
    password:'hashed',
    degree:'CS'
}
let equivalent=(o1,o2)=>{
    
    return Object
     .keys(o2)
     .every(prop=> o1.hasOwnProperty(prop) && o1[prop]===o2[prop] )
}

console.log(equivalent(object1,object2))
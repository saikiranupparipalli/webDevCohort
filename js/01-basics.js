/*                                                                         Topic: essentials in js:                                                                                               */

/*  Keypoints:

> typeof null is an object.
> parseInt converts the strings into number and ignores zeros.
> usecase of spread operator in objects and arrays are slightly different.


*/


// changing the complete keys and values:
let obj = {
  name: "saikiran",
  age: 22
}
obj = { im: "lucky" }
console.log(obj)

// structuredClone() method: 
const obj2 = { greet: "hey", location: "hyderabad" }
const clone = structuredClone(obj2)
// structuredClone() method is used to make the copy of an existing object.
console.log(clone)
console.log(clone.location = "karimnagar")
console.log(obj)
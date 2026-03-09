
/*                                                                         Topic: essentials in js:                                                                                               */
 
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


let letters = "Hey, how is it going Going?"
console.log(letters.at(2))
console.log(letters.at(99))
console.log(letters.charAt(99))
console.log(letters[99])
// since, charAt() is very early method of js, that is why it shows "empty" instead of undefined.
console.log(letters.indexOf("going"))
console.log(letters.indexOf("Going"))


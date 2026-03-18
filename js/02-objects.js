const object = {
  name: "sai"
}

Object.defineProperty(object, "details", {
  value: 22,
  writable: true,
  enumerable: true,
  configurable:false,
})

console.log(object.details)
object.details.age = 55
// writable: allow us to change the value.
// configurable: allow us to delete/change settings.
for (const [key, value] of Object.entries(object)){
  console.log(`${key}:${value}`)
  // enumerable: allow us to see through loops
}
const getDetails = Object.getOwnPropertyDescriptor(object, "details")
console.log(getDetails)

// -----------------------------------------------------
const newObj = { employId: 544 }

Object.defineProperty(newObj, "info", {
  value: {
    isLogged: true,
    shift: "day",
    workingHours: 8,
  },
  writable: false,
  enumerable: true,
  configurable: false,
  
})

const getinfo = Object.getOwnPropertyDescriptor(newObj, "info")
console.log(getinfo)


function message() {
  console.log(arguments)
}
message("hey how are you?");

(() => console.log(arguments) ('im IIFE'));


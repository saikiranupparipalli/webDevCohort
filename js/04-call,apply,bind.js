 
function receipe(items) {
  return `${this.name} is the chef of the ${items}`
}
const chef = { name: "sangamesh" }
const chefName = {name: "torjen"}

const getIems = receipe.call(chef, ["biryani", "mandi", "fastfood"])
console.log(getIems)

const menu = ["stators, maincourse"]
console.log(receipe.apply(chefName, menu))
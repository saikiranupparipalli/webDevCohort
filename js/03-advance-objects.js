const userInfo = {
  name: "sathish",

  wish() {
    console.log("hey, how are you?"); //it is short shorthand syntax of ES6,
    // which are mainly used inside of an obj.
  },
};
userInfo.wish();

const newObj = {
  name: "sangamesh",
  funOne() {
    console.log(this.name);
    console.log(this.funOne);
  },
};
newObj.funOne();

const film = {
  dir: "harishShankar",

  getdir() {
    console.log(this.dir);

    const fun = function normalFun() {
      // A regular nested function does not inheritate this keyword.
      console.log(this.dir);
    };
    // normalFun()
    fun();

    const arrFun = () => {
      console.log(this.dir);
    };
    arrFun();
  },
};

film.getdir();
// global state of this is empty object.{}

const arr = [23, 43, 53, 55];
const arrOne = [12, 34, 53, 53];

// console.log(Math.max(...arr));
console.log(...arr, ...arrOne);
console.log(Math.max(...arr, ...arrOne));

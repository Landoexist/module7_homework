const objSample = {
  prop1: "Hello",
  prop2: "Bye",
};

let checkKeyTrue = "prop1";
let checkKeyFalse = "prop3";

function checkIncludeKey(str, obj) {
  return Object.keys(obj).includes(str);
}

console.log(
  checkIncludeKey(checkKeyTrue, objSample),
  checkIncludeKey(checkKeyFalse, objSample)
);
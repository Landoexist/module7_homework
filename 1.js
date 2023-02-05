const objSamplePrototype = {
  str: "Hello",
};

const objSampleSon = Object.create(objSamplePrototype);
objSampleSon.bool = true;
objSampleSon.number = 302;

function printOwnKeysAndValues(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) console.log(key, obj[key]);
  }
}

printOwnKeysAndValues(objSampleSon);
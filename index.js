///  MAP for array

Array.prototype.mymap = function (callback) {
  const resultArray = [];
  for (let index = 0; index < this.length; index++) {
    resultArray.push(callback(this[index], index, this));
  }
  return resultArray;
};

let arr = [1, 2, 3, 4];

let resultArr = arr.mymap((num) => 2 * num);
console.log("Map in Array:", resultArr);

/// MAP for Object

Object.prototype.mymapObj = function (callOj) {
  const resultObject = {};
  for (let [key, value] of Object.entries(this)) {
    resultObject[key] = callOj(value, key, this);
  }
  return resultObject;
};

let obj = { a: 2, b: 3, c: 4 };

let resultObj = obj.mymapObj((num) => num * 2);
console.log("Map in Object:", resultObj);

/// Map in constructor

class MyConstruct {
  constructor(value) {
    this.value = value;
  }
  classOfMap(callback) {
    let resultOfCon = new MyConstruct([]);
    for (let i = 0; i < this.length; i++) {
      resultOfCon.value.push(callback(this.value[i], i, this));
    }
    return resultOfCon;
  }
}

let val = new MyConstruct([2, 3, 4, 5]);
console.log(resulting);

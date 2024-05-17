/*==================== Values====================*/

let arr = [2, 6, 3, 8, 7];

let obj = { a: 2, b: 3, c: 4, d: 7, e: 8 };
/*==================== MAP ====================*/

///  MAP for array

Array.prototype.mymap = function (callback) {
  const resultArray = [];
  for (let index = 0; index < this.length; index++) {
    resultArray.push(callback(this[index], index, this));
  }
  return resultArray;
};

let resultArr = arr.mymap((num) => 2 * num);
console.log("Map in Array:", resultArr);

/// MAP for Object

Object.prototype.mymapObj = function (callObj) {
  const resultObject = {};
  for (let [key, value] of Object.entries(this)) {
    resultObject[key] = callObj(value, key, this);
  }
  return resultObject;
};

let resultObj = obj.mymapObj((num) => num * 2);
console.log("Map in Object:", resultObj);

/// Map in constructor

class MyConstruct {
  constructor(value) {
    this.value = value;
  }
  classOfMap(callback) {
    let resultOfCon = new MyConstruct([]);
    for (let i = 0; i < this.value.length; i++) {
      resultOfCon.value.push(callback(this.value[i], i, this.value));
    }
    return resultOfCon;
  }
}
let arr1 = new MyConstruct(arr);
let resulting = arr1.classOfMap((num) => num * num);
console.log("Map in Constructor:", resulting);

/*==================== Filter ====================*/

Array.prototype.myfil = function (callback) {
  resultFil = [];
  for (let i = 0; i < this.length; i++) {
    if (callback(this[i], i, this)) {
      resultFil.push(this[i]);
    }
  }
  return resultFil;
};

let resultMyFil = arr.myfil((num) => num % 2 == 0);
console.log("Filter in Array:", resultMyFil);

/// Filter in obj

Object.prototype.myObjFill = function (callback) {
  const resultObjFill = {};
  for (let [key, value] of Object.entries(this)) {
    if (callback(key, value, this)) {
      resultObjFill[key] = value;
    }
  }
  return resultObjFill;
};

let resultObjFil = obj.myObjFill((value, num) => num % 2 == 0);
console.log("Filter in Obj:", resultObjFil);

/// Filter in Constructor

class FilterConst {
  constructor(value) {
    this.value = value;
  }
  classOfFilter(callback) {
    let resultOfCon = new FilterConst([]);
    for (let i = 0; i < this.value.length; i++) {
      if (callback(this.value[i], i, this.value)) {
        resultOfCon.value.push(this.value[i]);
      }
    }
    return resultOfCon;
  }
}

let arr2 = new FilterConst(arr);
let resultConFill = arr2.classOfFilter((num) => num % 2 == 0);
console.log("Filter in Constructor:", resultConFill);
